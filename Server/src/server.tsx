import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

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
