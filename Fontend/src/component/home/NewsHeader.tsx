import React from "react";
import useRssFeed from "../crawlRss";
import {useNavigate} from "react-router-dom";

const NewsHeader: React.FC<{url:string, quantity:number}> = ({url, quantity}) => {
    const rssItems = useRssFeed(url,quantity);
    const navigate = useNavigate();
    const handleLinkClick = (link: string) => {
        const encodedLink = encodeURIComponent(link);
        navigate(`/articleDetail`, { state: { url: link } });
    };
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
                                    <a style={{ cursor: 'pointer' }}
                                       onClick={() =>handleLinkClick(item.link)}
                                        data-type="title"
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