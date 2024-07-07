import React, { useState, useEffect } from 'react';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
type Props = {}
interface RssItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}
const News: React.FC<{ url: string }> = ({ url }) => {
    const [rssItems, setRssItems] = useState<RssItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/rss?url=${encodeURIComponent(url)}`);
                if (!response.ok) {
                    throw new Error('Không thể tải dữ liệu RSS');
                }

                const data = await response.json();
                setRssItems(data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu RSS:', error);
            }
        };

        fetchData();
    }, [url]);

    return (
        <div>
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                <div>
                    {rssItems.map((item, index) => (
                        <div key={index}>
                            <h2><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                            <p>Ngày đăng: {item.pubDate}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default News;