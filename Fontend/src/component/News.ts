import axios from "axios";
import cheerio from 'cheerio';
export interface RSSItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

export interface RssFeed {
    items: RSSItem[];
}
const fetchRss = async (url:string) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    const response = await axios.get(url, config);
    const $ = cheerio.load(response.data, {xmlMode:true});
    const feed: RssFeed = {
        items: $('channel > item').map((_, el) => {
            const item = $(el);
            return {
                title: item.find('title').text(),
                link: item.find('link').text(),
                description: item.find('description').text(),
                pubDate: item.find('pubDate').text(),
            } as RSSItem;
        }).get(),
    };

    return feed;
}

export default fetchRss;