import React from "react";
import "../css/Header.css"
import "../css/main.css"
import {Outlet, Link} from "react-router-dom";

function Header() {
    const clickDisplayMenu = (element: HTMLElement) => {
        const menu = document.getElementById('header-menu');
        if (menu) {
            const p = element.querySelector('p');
            if (menu.style.display === "none") {
                menu.style.display = "block";
                if (p) {
                    p.textContent = "x";
                }
            } else {
                menu.style.display = "none";
                if (p) {
                    p.textContent = "...";
                }
            }
        }
    }
    return (
        <>
            <header id="header">
            <div className="container">
                <div className="header_main">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={"/"}><p>Trang chủ</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/thoisu"}><p>Thời sự</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/quocte"}><p>Quốc tế</p></Link>
                        </li>
                        <li className="nav-item">
                            <div className="header-search">
                                <input type="text" className="search" placeholder={"Tìm kiếm..."}/>
                                <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-search1.svg?v1"
                                     alt="Tìm kiếm" width="22" height="23"/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={"/laodong"}><p>Lao động</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/suckhoe"}><p>Sức khỏe</p></Link>
                        </li>
                        <li onClick={(e) => clickDisplayMenu(e.currentTarget)} className="nav-item"><p>...</p></li>

                    </ul>
                </div>
            </div>
        </header>
            <div id="header-menu">
                <div className="header-scroll">
                    <div className="container">
                        <div className="header-flex">
                            <div className="header__mm-cate" data-marked-zoneid="nld_menu_b1">
                                <div className="box">
                                    <a href="/thoi-su.htm" className="title" title="Thời sự">Thời sự</a>
                                    <div className="list">
                                        <a href="/thoi-su/chinh-tri.htm" className="item" title="Chính trị">Chính
                                            trị</a>
                                        <a href="/thoi-su/xa-hoi.htm" className="item" title="Xã hội">Xã hội</a>
                                        <a href="/thoi-su/do-thi.htm" className="item" title="Đô thị">Đô thị</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/quoc-te.htm" className="title" title="Quốc tế">Quốc tế</a>
                                    <div className="list">
                                        <a href="/quoc-te/nguoi-viet-do-day.htm" className="item"
                                           title="Người viết đó đây">Người viết đó đây</a>
                                        <a href="/quoc-te/hay-la.htm" className="item" title="Hay - lạ">Hay - lạ</a>
                                        <a href="/quoc-te/van-de-nong.htm" className="item" title="Vấn đề nóng">Vấn đề
                                            nóng</a>
                                        <a href="/quoc-te/ho-so.htm" className="item" title="Hồ sơ">Hồ sơ</a>
                                        <a href="/quoc-te/quan-su-quoc-phong.htm" className="item"
                                           title="Quân sự - Quốc phòng">Quân sự - Quốc phòng</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/lao-dong.htm" className="title" title="Lao động">Lao động</a>
                                    <div className="list">
                                        <a href="/lao-dong/cong-doan-cong-nhan.htm" className="item"
                                           title="Công đoàn - Công nhân">Công đoàn - Công nhân</a>
                                        <a href="/lao-dong/viec-lam.htm" className="item" title="Việc làm">Việc làm</a>
                                        <a href="/lao-dong/an-sinh-xa-hoi.htm" className="item" title="An sinh xã hội">An
                                            sinh xã hội</a>
                                        <a href="/lao-dong/chinh-sach.htm" className="item" title="Chính sách">Chính
                                            sách</a>
                                        <a href="/lao-dong/xuat-khau-lao-dong.htm" className="item"
                                           title="Xuất khẩu lao động">Xuất khẩu lao động</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/ban-doc.htm" className="title" title="Bạn đọc">Bạn đọc</a>
                                    <div className="list">
                                        <a href="/ban-doc/cuoc-song-nhan-ai.htm" className="item"
                                           title="Cuộc sống nhân ái">Cuộc sống nhân ái</a>
                                        <a href="/ban-doc/toi-len-tieng.htm" className="item" title="Tôi lên tiếng">Tôi
                                            lên tiếng</a>
                                        <a href="/ban-doc/goc-anh-ban-doc.htm" className="item" title="Góc ảnh bạn đọc">Góc
                                            ảnh bạn đọc</a>
                                        <a href="/ban-doc/thu-ban-doc.htm" className="item" title="Thư bạn đọc">Thư bạn
                                            đọc</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/kinh-te.htm" className="title" title="Kinh tế">Kinh tế</a>
                                    <div className="list">
                                        <a href="/kinh-te/kinh-doanh.htm" className="item" title="Kinh doanh">Kinh
                                            doanh</a>
                                        <a href="/kinh-te/tieu-dung.htm" className="item" title="Tiêu dùng">Tiêu
                                            dùng</a>
                                        <a href="/kinh-te/oto-xe-dien-may.htm" className="item"
                                           title="Ôtô - Xe - Điện máy">Ôtô - Xe - Điện máy</a>
                                        <a href="/kinh-te/bat-dong-san.htm" className="item" title="Bất động sản">Bất
                                            động sản</a>
                                        <a href="/kinh-te/tai-chinh-chung-khoan.htm" className="item"
                                           title="Tài chính – Chứng khoán">Tài chính – Chứng khoán</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/suc-khoe.htm" className="title" title="Sức khỏe">Sức khỏe</a>
                                    <div className="list">
                                        <a href="/suc-khoe/chuyen-dong-y-hoc.htm" className="item"
                                           title="Chuyển động y học">Chuyển động y học</a>
                                        <a href="/suc-khoe/gioi-tinh.htm" className="item" title="Giới tính">Giới
                                            tính</a>
                                        <a href="/suc-khoe/bac-si-cua-ban.htm" className="item" title="Bác sĩ của bạn">Bác
                                            sĩ của bạn</a>
                                        <a href="/suc-khoe/khoe-va-dep.htm" className="item"
                                           title="Khỏe &amp; đẹp">Khỏe &amp; đẹp</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/giao-duc-khoa-hoc.htm" className="title" title="Giáo dục">Giáo dục</a>
                                    <div className="list">
                                        <a href="/giao-duc-khoa-hoc/du-hoc.htm" className="item" title="Du học">Du
                                            học</a>
                                        <a href="/giao-duc-khoa-hoc/tuyen-sinh.htm" className="item" title="Tuyển sinh">Tuyển
                                            sinh</a>
                                        <a href="/giao-duc-khoa-hoc/sau-buc-giang.htm" className="item"
                                           title="Sau bục giảng">Sau bục giảng</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/phap-luat.htm" className="title" title="Pháp luật">Pháp luật</a>
                                    <div className="list">
                                        <a href="/phap-luat/luat-su-cua-ban.htm" className="item"
                                           title="Luật sư của bạn">Luật sư của bạn</a>
                                        <a href="/phap-luat/truy-na.htm" className="item" title="Truy nã">Truy nã</a>
                                        <a href="/phap-luat/chuyen-phap-dinh.htm" className="item"
                                           title="Chuyện pháp đình">Chuyện pháp đình</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/van-hoa-van-nghe.htm" className="title" title="Văn hóa - Văn nghệ">Văn hóa
                                        - Văn nghệ</a>
                                    <div className="list" style={{maxHeight: "unset"}}>
                                        <a href="/van-hoa-van-nghe/am-nhac.htm" className="item" title="Âm nhạc">Âm
                                            nhạc</a>
                                        <a href="/van-hoa-van-nghe/van-hoc.htm" className="item" title="Văn học">Văn
                                            học</a>
                                        <a href="/van-hoa-van-nghe/san-khau.htm" className="item" title="Sân khấu">Sân
                                            khấu</a>
                                        <a href="/van-hoa-van-nghe/dien-anh.htm" className="item" title="Điện ảnh">Điện
                                            ảnh</a>
                                        <a href="/van-hoa-van-nghe/nghe-xem-doc-gi.htm" className="item"
                                           title="Nghe -  Xem – Đọc gì?">Nghe - Xem – Đọc gì?</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/giai-tri.htm" className="title" title="Giải trí">Giải trí</a>
                                    <div className="list">
                                        <a href="/giai-tri/hau-truong-showbiz.htm" className="item"
                                           title="Hậu trường showbiz">Hậu trường showbiz</a>
                                        <a href="/giai-tri/chuyen-cua-sao.htm" className="item" title="Chuyện của sao">Chuyện
                                            của sao</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/the-thao.htm" className="title" title="Thể thao">Thể thao</a>
                                    <div className="list" style={{maxHeight: "unset"}}>
                                        <a href="/the-thao/bong-da.htm" className="item" title="Bóng đá">Bóng đá</a>
                                        <a href="/the-thao/golf.htm" className="item" title="Golf">Golf</a>
                                        <a href="/the-thao/hau-truong.htm" className="item" title="Hậu trường">Hậu
                                            trường</a>
                                        <a href="/the-thao/cac-mon-khac.htm" className="item" title="Các môn khác">Các
                                            môn khác</a>
                                        <a href="/the-thao/tennis.htm" className="item" title="Tennis">Tennis</a>
                                        <a href="/the-thao/marathon.htm" className="item" title="Marathon">Marathon</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/cong-nghe.htm" className="title" title="Công nghệ">Công nghệ</a>
                                    <div className="list">
                                        <a href="/cong-nghe/thiet-bi-so.htm" className="item" title="Thiết bị số">Thiết
                                            bị số</a>
                                        <a href="/cong-nghe/bao-mat.htm" className="item" title="Bảo mật">Bảo mật</a>
                                        <a href="/cong-nghe/chuyen-doi-so.htm" className="item" title="Chuyển đổi số">Chuyển
                                            đổi số</a>
                                        <a href="/cong-nghe/cu-dan-mang.htm" className="item" title="Cư dân mạng">Cư dân
                                            mạng</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/du-lich-xanh.htm" className="title" title="Du lịch xanh">Du lịch xanh</a>
                                    <div className="list">
                                        <a href="/du-lich-xanh/tieu-diem.htm" className="item" title="Tiêu điểm">Tiêu
                                            điểm</a>
                                        <a href="/du-lich-xanh/diem-den.htm" className="item" title="Điểm đến">Điểm
                                            đến</a>
                                        <a href="/du-lich-xanh/am-thuc.htm" className="item" title="Ẩm thực">Ẩm thực</a>
                                        <a href="/du-lich-xanh/dung-bo-lo.htm" className="item" title="Đừng bỏ lỡ">Đừng
                                            bỏ lỡ</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="https://phunu.nld.com.vn/" className="title" title="Chuyên trang Phụ nữ"
                                       target="_blank" rel="nofollow">Phụ nữ</a>
                                    <div className="list" style={{maxHeight: "unset"}}>
                                        <a href="https://phunu.nld.com.vn/lam-dep.htm" className="item"
                                           title="Khoẻ - Đẹp" target="_blank" rel="nofollow">Khoẻ - Đẹp</a>
                                        <a href="https://phunu.nld.com.vn/tam-su.htm" className="item" title="Tâm sự"
                                           target="_blank" rel="nofollow">Tâm sự</a>
                                        <a href="https://phunu.nld.com.vn/chuyen-cua-sao.htm" className="item"
                                           title="Chuyện của Sao" target="_blank" rel="nofollow">Chuyện của Sao</a>
                                        <a href="https://phunu.nld.com.vn/mon-ngon.htm" className="item"
                                           title="Món ngon" target="_blank" rel="nofollow">Món ngon</a>
                                        <a href="https://phunu.nld.com.vn/diem-den.htm" className="item"
                                           title="Điểm đến" target="_blank" rel="nofollow">Điểm đến</a>
                                        <a href="https://phunu.nld.com.vn/tieu-dung-thong-minh.htm" className="item"
                                           title="Tiêu dùng thông minh" target="_blank" rel="nofollow">Tiêu dùng thông
                                            minh</a>
                                        <a href="https://phunu.nld.com.vn/video-clip.htm" className="item" title="Video"
                                           target="_blank" rel="nofollow">Video</a>
                                        <a href="https://phunu.nld.com.vn/chuyen-trang-phu-nu/ban-linh-song.htm"
                                           className="item" title="Bản lĩnh sống" target="_blank" rel="nofollow">Bản
                                            lĩnh sống</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/gia-dinh.htm" className="title" title="Gia đình">Gia đình</a>
                                    <div className="list">
                                        <a href="/gia-dinh/bi-quyet-lam-dep.htm" className="item"
                                           title="Bí quyết làm đẹp">Bí quyết làm đẹp</a>
                                        <a href="/gia-dinh/cha-me-va-con-cai.htm" className="item"
                                           title="Cha mẹ và con cái">Cha mẹ và con cái</a>
                                        <a href="/gia-dinh/khong-gian-song.htm" className="item"
                                           title="Không gian sống">Không gian sống</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="https://diaoc.nld.com.vn" className="title" title="Địa ốc" target="_blank"
                                       rel="nofollow">Địa ốc</a>
                                    <div className="list">
                                        <a href="https://diaoc.nld.com.vn/du-an.htm" className="item" title="Dự án"
                                           target="_blank" rel="nofollow">Dự án</a>
                                        <a href="https://diaoc.nld.com.vn/thi-truong-nha-dat.htm" className="item"
                                           title="Thị trường" target="_blank" rel="nofollow">Thị trường</a>
                                        <a href="https://diaoc.nld.com.vn/nha-dep.htm" className="item" title="Nhà đẹp"
                                           target="_blank" rel="nofollow">Nhà đẹp</a>
                                        <a href="https://diaoc.nld.com.vn/doanh-nghiep-doanh-nhan.htm" className="item"
                                           title="Doanh nhân" target="_blank" rel="nofollow">Doanh nhân</a>
                                        <a href="https://diaoc.nld.com.vn/so-hoa.htm" className="item" title="Số hóa"
                                           target="_blank" rel="nofollow">Số hóa</a>
                                        <a href="https://diaoc.nld.com.vn/vat-tu.htm" className="item" title="Vật tư"
                                           target="_blank" rel="nofollow">Vật tư</a>
                                        <a href="https://diaoc.nld.com.vn/tai-chinh-bds.htm" className="item"
                                           title="Tài chính" target="_blank" rel="nofollow">Tài chính</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href="/doi-song.htm" className="title" title="Đời sống">Đời sống</a>
                                </div>
                                <div className="box">
                                    <a href="/khoa-hoc.htm" className="title" title="Khoa học">Khoa học</a>
                                </div>
                                <div className="box">
                                    <a href="https://maivang.nld.com.vn/guong-mat-ung-vien.htm" target="_blank"
                                       className="title" title="Giải mai vàng" rel="nofollow">Giải mai vàng</a>
                                </div>
                                <div className="box">
                                    <a href="/vung-mien.htm" className="title" title="Vùng miền">Vùng miền</a>
                                </div>
                                <div className="box">
                                    <a href="/nguoi-viet-yeu-su-viet.htm" className="title"
                                       title="Người Việt yêu sử Việt">Người Việt yêu sử Việt</a>
                                </div>
                                <div className="box">
                                    <a href="/euro-2024.htm" className="title" title="Euro 2024">Euro 2024</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
