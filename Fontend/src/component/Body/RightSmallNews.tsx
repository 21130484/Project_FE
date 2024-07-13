import React from "react";
import RssFeed from "../RssFeed";

const RightSmallNews: React.FC<{ title: string, url: string, quantity: number }> = ({ title, url, quantity }) => {
    const rssItems = RssFeed(url, quantity);

    return (
        <div className="politics-news-sub">
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                rssItems.map((item, index) => (
                    <div key={index} className="bottom__right-news-container-sup">
                        <div dangerouslySetInnerHTML={{__html: item.anchorTag}}/>
                        <span className={"bottom__right-news-container-sup-title"}>{item.title}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default RightSmallNews;