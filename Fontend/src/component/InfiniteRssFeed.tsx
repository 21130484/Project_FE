import { useState, useEffect, useCallback } from 'react';

interface RssItem {
    title: string;
    link: string;
    anchorTag: string;
    textContent: string;
    pubDate: string;
}

const useInfiniteScroll = (url: string) => {
    const [rssItems, setRssItems] = useState<RssItem[]>([]);
    const [displayItems, setDisplayItems] = useState<RssItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerPage = 20;

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3002/rss?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error('Không thể tải dữ liệu RSS');
            }
            const data = await response.json();
            setRssItems(data);
            setDisplayItems(data.slice(0, itemsPerPage));
            setLoading(false);
            if (data.length <= itemsPerPage) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu RSS:', error);
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const fetchMoreData = () => {
        const currentLength = displayItems.length;
        const moreItems = rssItems.slice(currentLength, currentLength + itemsPerPage);
        setDisplayItems([...displayItems, ...moreItems]);
        if (displayItems.length + moreItems.length >= rssItems.length) {
            setHasMore(false);
        }
    };

    return { displayItems, hasMore, fetchMoreData, loading };
};

export default useInfiniteScroll;
