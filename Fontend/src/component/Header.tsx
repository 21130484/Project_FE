import React from "react";
import "../css/Header.css"
import "../css/main.css"
function Header() {
    return (
        <header id="header">
            <div className={"header-top"}>
                <div className={"container"}>
                    <div className={"header-top__flex"}>
                        <a href="/">
                            <img src="https://static.mediacdn.vn/nld.com.vn/image/logo-nld.png" alt=""/>
                        </a>
                        <div className={"header-top__other"}>
                            <div className={"time-now"}>
                                Thứ Ba, 25/6/2024
                            </div>
                        </div>
                        <div className={"header-top__right"}>
                            <a href="/" className={"nocation"}>
                                <span className={"icon"}>
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-24h.svg" alt=""/>
                                </span>
                                24h qua
                            </a>
                            <div className={"header__search"}>
                                <input type="text" className={"btn_search"} placeholder={"Tìm kiếm"}/>
                                <a href="/" className={"btn_submit"} aria-label={"btn_search"} rel={"nofollow"}>
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-search1.svg?v1" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"header-nav"}>
                <div className={"container"}>
                    <div className={"header-nav__flex"}>
                        <a href="/" className={"nav-link"}>Trang chủ</a>
                        <a href="/" className={"nav-link"}>Quốc tế</a>
                        <a href="/" className={"nav-link"}>Lao động</a>
                        <a href="/" className={"nav-link"}>Bạn đọc</a>
                        <a href="/" className={"nav-link"}>Kinh tế</a>
                        <a href="/" className={"nav-link"}>Sức khỏe</a>
                        <a href="/" className={"nav-link"}>Giáo dục</a>
                        <a href="/" className={"nav-link"}>Pháp luật</a>
                        <a href="/" className={"nav-link"}>Văn hóa - văn nghệ</a>
                        <a href="/" className={"nav-link"}>Giải trí</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;