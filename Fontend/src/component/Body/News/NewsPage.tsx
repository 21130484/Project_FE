import React from "react";
import {all} from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "../../../css/main.css";
import "../../../css/Classify.css";
import News from "./News";
import Politics from "./Politics";
import Social from "./Social";
import Urban from "./Urban";
import SeaIsland from "./SeaIsland";

function NewsPage() {
    return (
        <div id="Body">
            <div className="container">
                <div className={"title"}>
                    <Link to={"/thoi-su"} className={"main-title"}>Thời sự</Link>
                    <Link to={"/thoi-su/chinh-tri"} className={"small-title"}>Chính trị</Link>
                    <Link to={"/thoi-su/xa-hoi"} className={"small-title"}>Xã hội</Link>
                    <Link to={"/thoi-su/do-thi"} className={"small-title"}>Đô thị</Link>
                    <Link to={"/thoi-su/bien-dao"} className={"small-title"}>Biển đảo</Link>
                </div>
                <div className={"line"}></div>
            </div>
            <Routes>
                <Route path={"/thoi-su"} element={<News />}/>
                <Route path={"/thoi-su/chinh-tri"} element={<Politics/>}/>
                <Route path={"/thoi-su/xa-hoi"} element={<Social/>}/>
                <Route path={"/thoi-su/do-thi"} element={<Urban/>}/>
                <Route path={"/thoi-su/bien-dao"} element={<SeaIsland/>}/>
            </Routes>
        </div>
    );
}

export default NewsPage;