import React from "react";
import useRssFeed from "../crawlRss";

const getUrl = (url: string) => {
    console.log(url);
    return ;
};
const NewsHome: React.FC<{title:string, url:string, quantity:number}> = ({title, url, quantity}) => {
    const rssItems = useRssFeed(url, quantity);
    

    return (
            <>
                {title.length !== 0 ? (<div className="box-category-top">
                    <h2 className="title-category">{title}</h2>
                    <div className="box-category-menu">
                        <a href="#">Xem thêm</a>
                    </div>
                </div>) : (<></>)}
                <div className="box-category-middle">
                    {rssItems.length === 0 ? (
                        <p>Đang tải dữ liệu...</p>
                    ) : (
                        rssItems.map((item, index) => (
                            <div key={index} className="box-category-item">
                                <div dangerouslySetInnerHTML={{ __html: item.anchorTag }} />
                                <div className="box-category-content">
                                    <h2 onClick={() => getUrl(item.link)}>{item.title}</h2>
                                </div>
                                {index === 0 && <p>{item.textContent}</p>}
                            </div>
                        ))
                    )}
                </div>
            </>
    );
};

export default NewsHome;