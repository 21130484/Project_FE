import React from "react";
import RssFeed from "../RssFeed";

const NewsMain: React.FC<{ title: string, url: string, quantity: number }> = ({ title, url, quantity }) => {
    const rssItems = RssFeed(url, quantity);

    return (
        <div className="main__new">
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                rssItems.map((item, index) => (
                    <div key={index} className="main__new">
                            <div dangerouslySetInnerHTML={{__html: item.anchorTag}}/>
                        <div className={"main__new-contain"}>
                            <h1 className="main__new-title">{item.title}</h1>
                            <p className="main__new-text">{item.textContent}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default NewsMain;