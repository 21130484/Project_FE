import React, { useState, useEffect } from 'react';
import axios from 'axios';
// @ts-ignore
import { parseStringPromise } from 'xml2js';

interface IRssItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

const RssFeed: React.FC<{ url: string }> = ({ url }) => {
    const [items, setItems] = useState<IRssItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRss = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/rss+xml',
                    },
                });
                const result = await parseStringPromise(response.data);
                const rssItems = result.rss.channel[0].item.map((item: any) => ({
                    title: item.title[0],
                    link: item.link[0],
                    description: item.description[0],
                    pubDate: item.pubDate[0],
                }));
                setItems(rssItems);
            } catch (err) {
                setError('Error fetching RSS feed');
            } finally {
                setLoading(false);
            }
        };

        fetchRss();
    }, [url]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>RSS Feed</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                        <p>{item.description}</p>
                        <small>{item.pubDate}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RssFeed;
