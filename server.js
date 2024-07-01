const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Enable CORS for all origins
app.use(cors());

app.get('/scrape', async (req, res) => {
    try {
        const url = 'https://nld.com.vn/150-may-bay-hon-40-tau-ram-ro-tap-tran-hai-quan-lon-nhat-the-gioi-196240628132537224.htm';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $('h1.detail-title[data-role="title"]').text();
        const author = $('div.author-info p.name[data-role="author"]').text();
        const sapo = $('h2.detail-sapo[data-role="sapo"]').text();
        const publishDate = $('div.detail-time [data-role="publishdate"]').text(); // Lấy ngày giờ từ HTML

        const content = [];
        $('div.detail-content[data-role="content"] p').each((index, element) => {
            content.push($(element).text());
        });

        const images = [];
        $('div.detail-content[data-role="content"] figure img').each((index, element) => {
            images.push({
                src: $(element).attr('src'),
                alt: $(element).attr('alt')
            });
        });

        res.json({ title, author, sapo, publishDate, content, images });
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Failed to scrape the data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
