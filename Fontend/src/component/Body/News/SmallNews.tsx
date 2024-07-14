import React from "react";
import RssFeed from "../../RssFeed";
import NewsMain from "./NewsMain";

const SmallNews: React.FC<{ title: string, url: string, quantity: number }> = ({ title, url, quantity }) => {
    const rssItems = RssFeed(url, quantity);

    return (
        <div className="small-news-container">
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                rssItems.map((item, index) => (
                    <div key={index} className="small-news-item">
                        <div dangerouslySetInnerHTML={{ __html: item.anchorTag }} />
                        <span className="small-news-title">{item.title}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default SmallNews;