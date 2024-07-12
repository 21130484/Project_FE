import React from "react";
import NewsMain from "./NewsMain";
import SmallNews from "./SmallNews";
import NewsList from "./NewsList";
import "../../css/main.css";
import "../../css/Classify.css";
import {all} from "axios";
import PoliticsNews from "./PoliticsNews";
import PoliticsNewsSub from "./PoliticsNewsSub";

function NewsPage() {
    return (
        <div id="Body">
            <div className="container">
                <div className={"title"}>
                    <h1 className={"main-title"}>Thời sự</h1>
                    <h3 className={"small-title"}>Chính trị</h3>
                    <h3 className={"small-title"}>Xã hội</h3>
                    <h3 className={"small-title"}>Đô thị</h3>
                    <h3 className={"small-title"}>Biển đảo</h3>
                </div>

                <div className={"line"}></div>

                <div className={"top__flex-container"}>
                    <div className={"top__center-container"}>
                        <div className={"news-container"}>
                            <NewsMain title="Thời sự" url="https://nld.com.vn/rss/thoi-su.rss" quantity={1}/>

                            <div className={"line-element"}></div>

                            <SmallNews title="" url="https://nld.com.vn/rss/thoi-su.rss" quantity={3}/>
                        </div>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"bottom__flex-container"}>
                    <div className={"bottom__center-container"}>
                        <NewsList title="" url="https://nld.com.vn/rss/thoi-su.rss" quantity={30}/>
                    </div>
                    <div className={"bottom__right-container"}>
                        <div className={"bottom__right-news-container"}>
                            <span className={"bottom__right-news-container-title"}>Chính trị</span>
                            <PoliticsNews title={""} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={1}/>
                            <div className={"line-bottom-right"}></div>
                            <PoliticsNewsSub title={""} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={2}/>
                        </div>

                        <div className={"bottom__right-news-container"}>
                            <span className={"bottom__right-news-container-title"}>Xã hội</span>
                            <PoliticsNews title={""} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={1}/>
                            <div className={"line-bottom-right"}></div>
                            <PoliticsNewsSub title={""} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={2}/>
                        </div>

                        <div className={"bottom__right-news-container"}>
                            <span className={"bottom__right-news-container-title"}>Đô thị</span>
                            <PoliticsNews title={""} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={1}/>
                            <div className={"line-bottom-right"}></div>
                            <PoliticsNewsSub title={""} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;