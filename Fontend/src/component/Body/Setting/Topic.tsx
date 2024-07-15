import React from "react";
import "../../../css/main.css";
import "../../../css/Classify.css";
import NewsMain from "./NewsMain";
import SmallNews from "./SmallNews";
import NewsList from "./NewsList";
import RightNews from "./RightNews";
import RightSmallNews from "./RightSmallNews";

interface RightSection {
    title: string;
    url: string;
    quantity: number;
    smallQuantity: number;
}

interface NewsProps {
    mainTitle: string;
    mainUrl: string;
    mainQuantity: number;
    smallTitle: string;
    smallUrl: string;
    smallQuantity: number;
    listTitle: string;
    listUrl: string;
    rightSections: RightSection[];
}

const Topic: React.FC<NewsProps> = ({mainUrl, mainQuantity, smallUrl, smallQuantity, listUrl, rightSections }) => {
    return (
        <div id="Body">
            <div className="container">
                <div className={"top__flex-container"}>
                    <div className={"top__center-container"}>
                        <div className={"news-container"}>
                            <NewsMain title={""} url={mainUrl} quantity={mainQuantity} />

                            <div className={"line-element"}></div>

                            <SmallNews title={""} url={smallUrl} quantity={smallQuantity} />
                        </div>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"bottom__flex-container"}>
                    <div className={"bottom__center-container"}>
                        <NewsList title={""} url={listUrl} />
                    </div>
                    <div className={"bottom__right-container"}>
                        {rightSections.map((section, index) => (
                            <div key={index} className={"bottom__right-news-container"}>
                                <span className={"bottom__right-news-container-title"}>{section.title}</span>
                                <RightNews title={section.title} url={section.url} quantity={section.quantity} />
                                <div className={"line-bottom-right"}></div>
                                <RightSmallNews title={section.title} url={section.url} quantity={section.smallQuantity} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topic;
