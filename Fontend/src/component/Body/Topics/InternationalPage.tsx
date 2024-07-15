import React from "react";
import { all } from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "../../../css/main.css";
import "../../../css/Classify.css";
import Topic from "../Setting/Topic";

function InternationalPage() {
    const sections = [
        {
            path: "/quoc-te",
            props: {
                mainTitle: "Quốc tế",
                mainUrl: "https://nld.com.vn/rss/quoc-te.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/quoc-te.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/quoc-te.rss",
                rightSections: [
                    { title: "Người Việt đó đây", url: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hay-lạ", url: "https://nld.com.vn/rss/quoc-te/hay-la.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Vấn đề nóng", url: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hồ sơ", url: "https://nld.com.vn/rss/quoc-te/ho-so.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Quân sự-Quốc phòng", url: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/quoc-te/nguoi-viet-do-day",
            props: {
                mainTitle: "Người Việt đó đây",
                mainUrl: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss",
                rightSections: [
                    { title: "Hay-lạ", url: "https://nld.com.vn/rss/quoc-te/hay-la.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Vấn đề nóng", url: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hồ sơ", url: "https://nld.com.vn/rss/quoc-te/ho-so.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Quân sự-Quốc phòng", url: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/quoc-te/hay-la",
            props: {
                mainTitle: "Hay-lạ",
                mainUrl: "https://nld.com.vn/rss/quoc-te/hay-la.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/quoc-te/hay-la.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/quoc-te/hay-la.rss",
                rightSections: [
                    { title: "Người Việt đó đây", url: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Vấn đề nóng", url: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hồ sơ", url: "https://nld.com.vn/rss/quoc-te/ho-so.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Quân sự-Quốc phòng", url: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/quoc-te/van-de-nong",
            props: {
                mainTitle: "Vấn đề nóng",
                mainUrl: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss",
                rightSections: [
                    { title: "Người Việt đó đây", url: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hay-lạ", url: "https://nld.com.vn/rss/quoc-te/hay-la.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hồ sơ", url: "https://nld.com.vn/rss/quoc-te/ho-so.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Quân sự-Quốc phòng", url: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/quoc-te/ho-so",
            props: {
                mainTitle: "Hồ sơ",
                mainUrl: "https://nld.com.vn/rss/quoc-te/ho-so.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/quoc-te/ho-so.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/quoc-te/ho-so.rss",
                rightSections: [
                    { title: "Người Việt đó đây", url: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hay-lạ", url: "https://nld.com.vn/rss/quoc-te/hay-la.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Vấn đề nóng", url: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Quân sự-Quốc phòng", url: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/quoc-te/quan-su-quoc-phong",
            props: {
                mainTitle: "Quân sự-Quốc phòng",
                mainUrl: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/quoc-te/quan-su-quoc-phong.rss",
                rightSections: [
                    { title: "Người Việt đó đây", url: "https://nld.com.vn/rss/quoc-te/nguoi-viet-do-day.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hay-lạ", url: "https://nld.com.vn/rss/quoc-te/hay-la.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Vấn đề nóng", url: "https://nld.com.vn/rss/quoc-te/van-de-nong.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Hồ sơ", url: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/quoc-te/khoa-hoc",
            props: {
                mainTitle: "Khoa học",
                mainUrl: "https://nld.com.vn/rss/khoa-hoc.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/khoa-hoc.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/khoa-hoc.rss",
                rightSections: []
                }
            },
        ]

    return (
        <div id="Body">
            <div className="container">
                <div className={"title"}>
                    <Link to={"/quoc-te"} className={"main-title"}>Quốc tế</Link>
                    <Link to={"/quoc-te/nguoi-viet-do-day"} className={"small-title"}>Người Việt đó đây</Link>
                    <Link to={"/quoc-te/hay-la"} className={"small-title"}>Hay-lạ</Link>
                    <Link to={"/quoc-te/van-de-nong"} className={"small-title"}>Vấn đề nóng</Link>
                    <Link to={"/quoc-te/ho-so"} className={"small-title"}>Hồ sơ</Link>
                    <Link to={"/quoc-te/quan-su-quoc-phong"} className={"small-title"}>Quân sự - Quốc phòng</Link>
                    <Link to={"/quoc-te/khoa-hoc"} className={"small-title"}>Khoa học</Link>
                </div>
                <div className={"line"}></div>
            </div>
            <Routes>
                {sections.map(section => (
                    <Route key={section.path} path={section.path} element={<Topic {...section.props} />} />
                ))}
            </Routes>
        </div>
    );
}

export default InternationalPage;
