import React from "react";
import useRssFeed from "../crawlRss";

const NewsHeader: React.FC<{url:string, quantity:number}> = ({url, quantity}) => {
    const rssItems = useRssFeed(url,quantity);
    return (
        <div className={"box-category-middle"}>
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                rssItems.map((item, index) => (
                    index > 2 && (
                        <div key={index} className="box-category-item">
                            <div className="box-category-content">
                                <h3 className="box-category-title-text">
                                    <a data-type="title"
                                       className="box-category-link-title">{item.title}</a>
                                </h3>
                            </div>
                        </div>
                    )
                ))
                )}
        </div>
    );
}

export default NewsHeader;