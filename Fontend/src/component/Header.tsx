import React from "react";
import "../css/Header.css";
import "../css/main.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="header_main">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/thoi-su">Thời sự</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quoc-te">Quốc tế</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lao-dong">Lao động</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/suc-khoe">Sức khỏe</Link>
                        </li>
                        <li className="nav-item">...</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
