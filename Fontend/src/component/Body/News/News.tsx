import React from "react";
import {all} from "axios";
import "../../../css/main.css";
import "../../../css/Classify.css";
import NewsMain from "./NewsMain";
import SmallNews from "./SmallNews";
import NewsList from "./NewsList";
import RightNews from "./RightNews";
import RightSmallNews from "./RightSmallNews";

function News() {
    return (
        <div id="Body">
            <div className="container">
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
                        <NewsList title="" url="https://nld.com.vn/rss/thoi-su.rss"/>
                    </div>
                    <div className={"bottom__right-container"}>
                        <div className={"bottom__right-news-container"}>
                            <span className={"bottom__right-news-container-title"}>Chính trị</span>
                            <RightNews title={""} url={"https://nld.com.vn/rss/thoi-su/chinh-tri.rss"} quantity={1}/>
                            <div className={"line-bottom-right"}></div>
                            <RightSmallNews title={""} url={"https://nld.com.vn/rss/thoi-su/chinh-tri.rss"} quantity={2}/>
                        </div>

                        <div className={"bottom__right-news-container"}>
                            <span className={"bottom__right-news-container-title"}>Xã hội</span>
                            <RightNews title={""} url={"https://nld.com.vn/rss/thoi-su/xa-hoi.rss"} quantity={1}/>
                            <div className={"line-bottom-right"}></div>
                            <RightSmallNews title={""} url={"https://nld.com.vn/rss/thoi-su/xa-hoi.rss"} quantity={2}/>
                        </div>

                        <div className={"bottom__right-news-container"}>
                            <span className={"bottom__right-news-container-title"}>Đô thị</span>
                            <RightNews title={""} url={"https://nld.com.vn/rss/thoi-su/do-thi.rss"} quantity={1}/>
                            <div className={"line-bottom-right"}></div>
                            <RightSmallNews title={""} url={"https://nld.com.vn/rss/thoi-su/do-thi.rss"} quantity={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;