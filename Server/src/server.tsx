import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';
import { parseString } from 'xml2js';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

interface RssItem {
    title: string;
    link: string;
    anchorTag: string;
    textContent: string;
    pubDate: string;
}

interface VideoData {
    videoUrl: string;
    videoData: any;
    videoCaption: string;
}

const extractVideoData = async ($: cheerio.Root): Promise<VideoData> => {
    let videoUrl = $('div.VCSortableInPreviewMode').attr('data-vid') || '';
    let videoData: any = {};
    let videoCaption = '';

    if (videoUrl) {
        const videoDataUrl = `https://${videoUrl}`;
        try {
            const { data: videoResponse } = await axios.get(videoDataUrl);
            videoData = videoResponse;
            videoCaption = $('.VideoCMS_Caption p').text().trim();
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    }

    return { videoUrl, videoData, videoCaption };
};

// Render RSS
app.get('/rss', async (req: Request, res: Response) => {
    try {
        const rssUrl = req.query.url as string;
        if (!rssUrl) {
            return res.status(400).json({ error: 'URL is required' });
        }

        const { data } = await axios.get(rssUrl);
        parseString(data, (err: Error | null, result: any) => {
            if (err) {
                return res.status(500).json({ error: 'Error parsing RSS data' });
            }

            const items: RssItem[] = result.rss.channel[0].item.map((item: any) => {
                const description = item.description[0];
                const $ = cheerio.load(description);
                const anchorTag = $('a').each(function (this: cheerio.Element) {
                    $(this).removeAttr('href');
                }).prop('outerHTML') || '';
                const textContent = $('body').text().trim();
                return {
                    title: item.title[0],
                    link: item.link[0],
                    anchorTag,
                    textContent,
                    pubDate: item.pubDate[0],
                };
            });

            res.json(items);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch RSS data' });
    }
});

app.get('/scrape', async (req: Request, res: Response) => {
    try {
        const { url } = req.query; // Lấy tham số url từ query string
        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'Missing or invalid URL parameter' });
        }

        const { data } = await axios.get(url as string); // Sử dụng URL được cung cấp từ tham số
        const $ = cheerio.load(data);

        const title = $('h1.detail-title[data-role="title"]').text().trim();
        const author = $('div.author-info p.name[data-role="author"]').text().trim();
        const sapo = $('h2.detail-sapo[data-role="sapo"]').text().trim();
        const publishDate = $('div.detail-time [data-role="publishdate"]').text().trim();
        const detailCmainHtml = $('div.detail-cmain').html();

        const { videoUrl, videoData, videoCaption } = await extractVideoData($);

        res.json({ title, author, sapo, publishDate, detailCmainHtml, videoUrl, videoData, videoCaption });
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Failed to scrape the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});