import React from "react";
import RssFeed from "../../RssFeed";

const RightNews: React.FC<{ title: string, url: string, quantity: number }> = ({ title, url, quantity }) => {
    let page;
    const rssItems = RssFeed(url, quantity);

    return (
        <div className="right-news">
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                rssItems.map((item, index) => (
                    <div key={index} className="right-new">
                        <div dangerouslySetInnerHTML={{__html: item.anchorTag}}/>
                        <div className={"bottom__right-news-container-main"}>
                            <span className={"bottom__right-news-container-main-title"}>{item.title}</span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default RightNews;