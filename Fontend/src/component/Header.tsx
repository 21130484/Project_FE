import React from "react";
import "../css/Header.css"
import "../css/main.css"
import {Outlet, Link} from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="header_main">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <p>Trang chủ</p>
                        </li>
                        <li className="nav-item">
                            <p>Thời sự</p>
                        </li>
                        <li className="nav-item">
                            <p>Quốc tế</p>
                        </li>
                        <li className="nav-item">
                            <div className="header-search">
                                <input type="text" className="search" placeholder={"Tìm kiếm..."}/>
                                <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-search1.svg?v1"
                                     alt="Tìm kiếm" width="22" height="23"/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <p>Lao động</p>
                        </li>
                        <li className="nav-item">
                            <p>Sức khỏe</p>
                        </li>
                        <li className="nav-item">...</li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </header>
    );
}

export default Header;