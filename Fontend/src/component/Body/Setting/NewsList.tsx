import React from "react";
import useInfiniteScroll from "../../InfiniteRssFeed";
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsList: React.FC<{ title: string, url: string }> = ({ title, url }) => {
    const { displayItems, hasMore, fetchMoreData, loading } = useInfiniteScroll(url);

    return (
        <div className="list-news">
            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                displayItems.map((item, index) => (
                    index >= 4 && (
                    <div key={index} className="bottom__news">
                        <div dangerouslySetInnerHTML={{ __html: item.anchorTag }} />
                        <div className="bottom__news-text">
                            <a href={item.link} className="bottom__news-text-title">{item.title}</a>
                            <span className="bottom__news-text-inf">{item.textContent}</span>
                        </div>
                    </div>
                ))
            ))}
            {hasMore && (
                <button  onClick={fetchMoreData} className="load-more-button">
                    Xem thêm
                </button>
            )}
        </div>
    );
};

export default NewsList;
