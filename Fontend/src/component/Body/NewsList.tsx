import React from "react";
import RssFeed from "../RssFeed";

const NewsList: React.FC<{ title: string, url: string, quantity: number }> = ({ title, url, quantity }) => {
    const rssItems = RssFeed(url, quantity);
    return (
        <div className="list-news">
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                rssItems.map((item, index) => (
                        index >= 3 && (
                            <div key={index} className="bottom__news">
                                <div dangerouslySetInnerHTML={{__html: item.anchorTag}}/>
                                <div className={"bottom__news-text"}>
                                    <a className="bottom__news-text-title">{item.title}</a>
                                    <span className="bottom__news-text-inf">{item.textContent}</span>
                                </div>
                            </div>
                        ))
                ))}
        </div>
    );
};
export default NewsList;