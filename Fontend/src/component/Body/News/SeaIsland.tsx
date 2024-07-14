import React from "react";
import {all} from "axios";
import "../../../css/main.css";
import "../../../css/Classify.css";
import NewsMain from "./NewsMain";
import SmallNews from "./SmallNews";
import NewsList from "./NewsList";
import RightNews from "./RightNews";
import RightSmallNews from "./RightSmallNews";

function SeaIsland() {
    return (
        <div id="Body">
            <div className="container">
                <div className={"top__flex-container"}>
                    <div className={"top__center-container"}>
                        <div className={"news-container"}>
                            <NewsMain title="Thời sự" url=" https://nld.com.vn/rss/bien-dao.rss" quantity={1}/>

                            <div className={"line-element"}></div>

                            <SmallNews title="" url=" https://nld.com.vn/rss/bien-dao.rss" quantity={3}/>
                        </div>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"bottom__flex-container"}>
                    <div className={"bottom__center-container"}>
                        <NewsList title="" url=" https://nld.com.vn/rss/bien-dao.rss"/>
                    </div>
                    <div className={"bottom__right-container"}></div>
                </div>
            </div>
        </div>
    );
}

export default SeaIsland;