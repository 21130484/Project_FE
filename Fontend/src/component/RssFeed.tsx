import React, { useState, useEffect } from 'react';

interface RssItem {
    title: string;
    link: string;
    anchorTag: string;
    textContent: string;
    pubDate: string;
}
const RssFeed = (url: string, quantity: number): RssItem[] => {
    const [rssItems, setRssItems] = useState<RssItem[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/rss?url=${encodeURIComponent(url)}`);
                if (!response.ok) {
                    throw new Error('Không thể tải dữ liệu RSS');
                }

                const data = await response.json();
                if (quantity !== -1) {
                    setRssItems(data.slice(0, quantity));
                } else {
                    setRssItems(data);
                }

            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu RSS:', error);
            }
        };

        fetchData();
    }, [url, quantity]);

    return rssItems;
};

export default RssFeed;