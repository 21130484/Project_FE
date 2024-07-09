import React from "react";
import "../css/Footer.css"
import "../css/main.css"
function Footer() {
    return(
        <footer id={"footer"}>
            <div className={"container"}>
                <a href="/" className="footer__logo">
                    <img src="https://static.mediacdn.vn/nld.com.vn/image/logo-footer.png" alt=""/>
                </a>

                <div className="footer__infor">
                    <div className="col">
                        <div className="box">
                            <p className="box-title">
                                Báo Người Lao Động Điện Tử
                            </p>
                            <p className="text">
                                Cơ quan chủ quản: Thành ủy Thành phố Hồ Chí Minh
                            </p>
                            <br/>
                            <p className="text">© Giấy phép số 115/GP- BTTTT cấp ngày 09/02/2021</p>
                            <p className="text">Tổng Biên tập: TÔ ĐÌNH TUÂN</p>
                            <p className="text">
                                Phó Tổng Biên tập: DƯƠNG QUANG, BÙI THANH LIÊM
                                <br/>
                                Phó Tổng Biên tập, Tổng TKTS: LÊ CƯỜNG
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <p className="box-title">Trụ sở chính</p>
                            <p className="text">
                                127 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3 - TPHCM.
                            </p>
                            <p className="text">
                                Điện thoại:<span className="blue">028-3930.6262 / 028-3930.5376</span>
                            </p>
                            <p className="text">
                                Fax: <span className="blue">028-3930.4707</span>
                            </p>
                        </div>
                        <div className="box">
                            <p className="box-title">Liên hệ quảng cáo</p>
                            <div className="vcc-ct">
                                <a className="img" href="https://vccorp.vn/" rel="nofollow" target="_blank"
                                   title="Công ty cổ phần truyền thông VCCORP">
                                    <img alt="Công ty cổ phần truyền thông VCCORP"
                                         src="https://static.mediacdn.vn/nld.com.vn/image/vcc-logo.png" width="74"
                                         height="38"/>
                                </a>
                                <div className="content">
                                    doanhnghiep@admicro.vn<br/>
                                    <span id="phonenumber_footer">02473007108</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <p className="box-title">Theo dõi chúng tôi</p>
                            <div className="social">
                                <a href="https://www.facebook.com/nguoilaodong" rel="nofollow" target="_blank"
                                   title="Facebook" className="item">
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-fb.svg" alt="Facebook"
                                         width="28" height="29" loading="lazy"/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCzkyOx_0O1pGOqHiUMOe2KQ?sub_confirmation=1"
                                   title="Youtube" target="_blank" rel="nofollow" className="item">
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-youtube.svg" alt="Youtube"
                                         width="28" height="29" loading="lazy"/>
                                </a>
                                <a href="https://zalo.me/4417973660626754335" target="_blank" rel="nofollow"
                                   className="item" title="Zalo">
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-zalo.svg" alt="Zalo"
                                         width="28" height="29" loading="lazy"/>
                                </a>
                                <a href="/rss.htm" className="item" title="Rss">
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-rss.svg" alt="Rss"
                                         width="24" height="24" loading="lazy"/>
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <p className="box-title">Tải ứng dụng đọc báo Người Lao Động</p>
                            <div className="download">
                                <a href="https://apps.apple.com/vn/app/ng%C6%B0%E1%BB%9Di-lao-%C4%91%E1%BB%99ng/id862310588?l=vi"
                                   target="_blank" rel="nofollow" title="Download" className="item">
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-app-store.svg"
                                         alt="Download" title="Download" width="125" height="39" loading="lazy"/>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=vcc.mobilenewsreader.nguoilaodong"
                                   target="_blank" rel="nofollow" className="item" title="Download">
                                    <img src="https://static.mediacdn.vn/nld.com.vn/image/icon-google-play.svg"
                                         alt="Download" title="Download" width="125" height="39" loading="lazy"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    Bản quyền thuộc về Báo Người Lao Động. Các website khác đã được chúng tôi đồng ý cho khai thác thông
                    tin, khi đăng lại phải ghi rõ nguồn: Theo Báo Người Lao Động (www.nld.com.vn).
                </div>
            </div>
        </footer>
    );
}

export default Footer;