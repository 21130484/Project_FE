import React from "react";
import { all } from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "../../../css/main.css";
import "../../../css/Classify.css";
import Topic from "../Setting/Topic";

function NewsPage() {
    const sections = [
        {
            path: "/thoi-su",
            props: {
                mainTitle: "Thời sự",
                mainUrl: "https://nld.com.vn/rss/thoi-su.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/thoi-su.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/thoi-su.rss",
                rightSections: [
                    { title: "Chính trị", url: "https://nld.com.vn/rss/thoi-su/chinh-tri.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Xã hội", url: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Đô thị", url: "https://nld.com.vn/rss/thoi-su/do-thi.rss", quantity: 1, smallQuantity: 3 }
                ]
            }
        },
        {
            path: "/thoi-su/chinh-tri",
            props: {
                mainTitle: "",
                mainUrl: "https://nld.com.vn/rss/thoi-su/chinh-tri.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/thoi-su/chinh-tri.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/thoi-su/chinh-tri.rss",
                rightSections: [
                    { title: "Xã hội", url: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Đô thị", url: "https://nld.com.vn/rss/thoi-su/do-thi.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/thoi-su/xa-hoi",
            props: {
                mainTitle: "",
                mainUrl: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss",
                rightSections: [
                    { title: "Chính trị", url: "https://nld.com.vn/rss/thoi-su/chinh-tri.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Đô thị", url: "https://nld.com.vn/rss/thoi-su/do-thi.rss", quantity: 1, smallQuantity: 3 }
                ]
            }
        },
        {
            path: "/thoi-su/do-thi",
            props: {
                mainTitle: "",
                mainUrl: "https://nld.com.vn/rss/thoi-su/do-thi.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/thoi-su/do-thi.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/thoi-su/do-thi.rss",
                rightSections: [
                    { title: "Chính trị", url: "https://nld.com.vn/rss/thoi-su/chinh-tri.rss", quantity: 1, smallQuantity: 3 },
                    { title: "Xã hội", url: "https://nld.com.vn/rss/thoi-su/xa-hoi.rss", quantity: 1, smallQuantity: 3 },
                ]
            }
        },
        {
            path: "/thoi-su/bien-dao",
            props: {
                mainTitle: "",
                mainUrl: "https://nld.com.vn/rss/bien-dao.rss",
                mainQuantity: 1,
                smallTitle: "",
                smallUrl: "https://nld.com.vn/rss/bien-dao.rss",
                smallQuantity: 4,
                listTitle: "",
                listUrl: "https://nld.com.vn/rss/bien-dao.rss",
                rightSections: []
            }
        }
    ];

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
                {sections.map(section => (
                    <Route key={section.path} path={section.path} element={<Topic {...section.props} />} />
                ))}
            </Routes>
        </div>
    );
}

export default NewsPage;
