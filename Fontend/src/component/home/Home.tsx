import React from "react";
import NewsHome from "./NewsHome";
import "../../css/main.css"
import "../../css/Home.css"
import NewsHeader from "./NewsHeader";
function Home() {
    return(
        <div id={"home"}>
            <div className="container">
                <div className="home-flex">
                    <div className="home_main">
                        <div className="home_top">
                            <div className="box-category" data-layout={1}>
                                <NewsHome title={""} url={"https://nld.com.vn/rss/home.rss"} quantity={3}/>
                            </div>
                        </div>
                    </div>

                    <div className="home_sub">
                        <div className="home_hot">
                            <div className="box-category" data-layout={3}>
                                <div className="box-category-top">
                                    <h2 className="title-category">
                                        <span className="box-category-title">Tin nóng</span>
                                    </h2>
                                </div>
                                <NewsHeader url={"https://nld.com.vn/rss/home.rss"} quantity={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"content-news"}>
                <div className="container">
                    <div className="box-category" data-layout={2}>
                        <NewsHome title={"Quốc tế"} url={"https://nld.com.vn/rss/quoc-te.rss"} quantity={7}/>
                    </div>

                </div>
            </div>
            <div className={"content-news"}>
                <div className="container">
                    <div className="box-category" data-layout={2}>
                        <NewsHome title={"Lao động"} url={"https://nld.com.vn/rss/lao-dong.rss"} quantity={7}/>
                    </div>
                </div>

            </div>
            <div className={"content-news"}>
                <div className="container">
                    <div className="box-category" data-layout={2}>
                        <NewsHome title={"Kinh tế"} url={"https://nld.com.vn/rss/kinh-te.rss"} quantity={7}/>
                    </div>
                </div>
            </div>

            <div className={"content-news"}>
                <div className="container">
                    <div className="box-category" data-layout={2}>
                        <NewsHome title={"Thời sự"} url={"https://nld.com.vn/rss/thoi-su.rss"} quantity={7}/>
                    </div>
                </div>
            </div>
            <div className={"content-news"}>
                <div className="container">
                    <div className="box-category" data-layout={2}>
                        <NewsHome title={"Sức khỏe"} url={"https://nld.com.vn/rss/suc-khoe.rss"} quantity={7}/>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Home;
