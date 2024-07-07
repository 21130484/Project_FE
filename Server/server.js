const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const xml2js = require('xml2js');
const app = express();
const PORT = process.env.PORT || 3002;

// Enable CORS for all origins
app.use(cors());

app.get('/scrape', async (req, res) => {
    try {
        const url = 'https://nld.com.vn/diem-nong-xung-dot-ngay-1-7-hang-loat-can-cu-my-o-chau-au-bao-dong-do-196240701064940817.htm';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $('h1.detail-title[data-role="title"]').text().trim();
        const author = $('div.author-info p.name[data-role="author"]').text().trim();
        const sapo = $('h2.detail-sapo[data-role="sapo"]').text().trim();
        const publishDate = $('div.detail-time [data-role="publishdate"]').text().trim();

        // Extract the content of the `detail-cmain` div
        const detailCmainHtml = $('div.detail-cmain').html();

        // Extract video information
        let videoUrl = $('div.VCSortableInPreviewMode').attr('data-vid');
        let videoData = {};
        let videoCaption = '';

        if (videoUrl) {
            const videoDataUrl = `https://${videoUrl}`;
            const { data: videoResponse } = await axios.get(videoDataUrl);
            videoData = videoResponse;
            videoCaption = $('.VideoCMS_Caption p').text().trim();
        } else {
            videoUrl = '';
        }

        res.json({ title, author, sapo, publishDate, detailCmainHtml, videoUrl, videoData, videoCaption });
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Failed to scrape the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// render rss
app.get('/rss', async (req, res)=> {
    try {
        const rssUrl = req.query.url;
        if (!rssUrl) {
            return res.status(400).json({ error: 'URL is required' });
        }
        const { data } = await axios.get(rssUrl);
        const parser = new xml2js.Parser();
        parser.parseString(data, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error parsing RSS data' });
            }
            const items = result.rss.channel[0].item.map(item => ({
                title: item.title[0],
                link: item.link[0],
                description: item.description[0],
                pubDate: item.pubDate[0],
            }));

            res.json(items);
        });
    } catch (error) {
        console.error(error);
    }
});