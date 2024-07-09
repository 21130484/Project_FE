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
                const anchorTag = $('a').each(function (this:cheerio.Element) {
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
