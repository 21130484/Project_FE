import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';
import { parseString } from 'xml2js';
import bodyParser from 'body-parser';

const nodemailer = require('nodemailer'); // Use require instead of import

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

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

interface RelatedItem {
    relatedTitle: string;
    relatedLink: string;
    relatedSapo: string;
    relatedImgSrc: string;
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

const extractRelatedItems = ($: cheerio.Root): RelatedItem[] => {
    const relatedItems: RelatedItem[] = [];

    $('div.box-category-item').each((_, element) => {
        const relatedTitle = $(element).find('a.box-category-link-title').text().trim();
        const relatedLink = $(element).find('a.box-category-link-title').attr('href') || '';
        const relatedSapo = $(element).find('div.box-category-content h3.box-category-title-text a').text().trim();
        const relatedImgSrc = $(element).find('img.box-category-avatar').attr('src') || '';

        relatedItems.push({ relatedTitle, relatedLink, relatedSapo, relatedImgSrc });
    });

    return relatedItems;
};

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
        console.error('Failed to fetch RSS data:', error);
        res.status(500).json({ error: 'Failed to fetch RSS data' });
    }
});

app.get('/scrape', async (req: Request, res: Response) => {
    try {
        const { url } = req.query;
        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'Missing or invalid URL parameter' });
        }

        const { data } = await axios.get(url as string);
        const $ = cheerio.load(data);

        const title = $('h1.detail-title[data-role="title"]').text().trim() ||
            $('h1.video-title').text().trim();
        let author = $('div.author-info p.name[data-role="author"]').text().trim();
        if (!author) {
            author = $('div.detail-author').text().trim();
        }
        if (!author) {
            author = $('div.author-name').text().trim();
        }

        const sapo = $('h2.detail-sapo[data-role="sapo"]').text().trim();
        const publishDate = $('div.detail-time [data-role="publishdate"]').text().trim();
        let detailCmainHtml = $('div.detail-cmain').html();
        if (!detailCmainHtml) {
            detailCmainHtml = $('div.detail-content.afcbc-body.vceditor-content').html() || '';
        }
        if (!detailCmainHtml) {
            detailCmainHtml = $('div.vPlayer').html() || '';
        }

        const detailHistoryElement = $('div.detail__history').html();
        const detailHistory = detailHistoryElement || ' ';
        let relatedItemsHtml = $('div.detail__related').html();
        if (!relatedItemsHtml) {
            relatedItemsHtml = $('div.detail__news-other').html() || '';
        }
        const detailCmainSub = $('div.detail__cmain-sub').html() || '';

        const detailTr = $('div.detail__tr[data-marked-zoneid="nld_detail_tindocnhieu"]').html() || '';

        const { videoUrl, videoData, videoCaption } = await extractVideoData($);
        const relatedItems = extractRelatedItems($);

        res.json({
            title,
            author,
            sapo,
            publishDate,
            detailCmainHtml,
            detailCmainSub,
            detailTr,
            videoUrl,
            videoData,
            videoCaption,
            detailHistory,
            relatedItemsHtml,
            relatedItems
        });
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Failed to scrape the data' });
    }
});

app.post('/feedback', async (req: Request, res: Response) => {
    const { name, content } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vietpha157@gmail.com',
            pass: 'mauy vbfp aqti ctre',
        },
    });

    const mailOptions = {
        from: 'vietpha157@gmail.com',
        to: '21130467@st.hcmuaf.edu.vn', // Fixed typo in email address
        subject: 'Phản hồi người dùng',
        text: `Tên: ${name}\nPhản hồi: ${content}`, // Changed to use backticks for template string
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Phản hồi thành công' });
    } catch (error) {
        console.error('Error sending feedback:', error);
        res.status(500).json({ error: 'Phản hồi thất bại' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
