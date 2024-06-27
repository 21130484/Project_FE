// @ts-ignore
import React from "react";
import "../css/Classify.css"
import "../css/main.css"
function Classify() {
    return(<div className={"Body"}>
        <div className={"container"}>
            <div className={"title"}>
                <h1 className={"main-title"}>Thời sự</h1>
                <h3 className={"small-title"}>Chính trị</h3>
                <h3 className={"small-title"}>Xã hội</h3>
                <h3 className={"small-title"}>Đô thị</h3>
                <h3 className={"small-title"}>Biển đảo</h3>
            </div>

            <div className={"line"}></div>
            {/*body*/}
            <div className={"top__flex-container"}>
                <div className={"top__center-container"}>
                    <div className={"news-container"}>
                        <div className={"main__new"}>
                            <img data-type="avatar" fetchPriority="high"
                                 src="https://nld.mediacdn.vn/zoom/520_325/291774122806476800/2024/6/26/thutuong11-17193826443871107911583-0-0-1180-1888-crop-17193829071191836760270.jpg"
                                 alt="Thủ tướng Phạm Minh Chính chủ trì thảo luận với lãnh đạo các tập đoàn lớn của WEF"
                                 className="main_new-img"/>
                            <div className={"main__new-contain"}>
                                <h1 className={"main__new-title"}>Thủ tướng Phạm Minh Chính chủ trì thảo luận với lãnh
                                    đạo
                                    các
                                    tập đoàn lớn của WEF</h1>
                                <p className={"main__new-text"}>(NLĐO)- Sáng 26-6, tại TP Đại Liên (Trung Quốc), Thủ
                                    tướng
                                    Phạm
                                    Minh Chính chủ trì phiên thảo luận theo hình thức ăn sáng làm việc với GS Klaus
                                    Schwab,
                                    Nhà
                                    sáng lập kiêm Chủ tịch Diễn đàn Kinh tế Thế giới (WEF) và khoảng 20 lãnh đạo các tập
                                    đoàn
                                    lớn của WEF</p>
                            </div>
                        </div>

                        <div className={"line-element"}></div>

                        <div className={"small-news-container"}>
                            <div className={"small-news-item"}>
                                <img data-type="avatar" fetchPriority="high"
                                     src="https://nld.mediacdn.vn/zoom/273_171/291774122806476800/2024/6/26/anh-man-hinh-2024-06-26-luc-174202-17194002898821463771095-0-0-1050-1680-crop-1719400550664287896101-13-83-994-1652-crop-17194008784061048762500.png"
                                     alt="Thủ tướng Phạm Minh Chính hội kiến Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình"
                                     className="small-news-img"/>
                                <span className={"small-news-title"}>Thủ tướng Phạm Minh Chính hội kiến Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình</span>
                            </div>
                            <div className={"small-news-item"}>
                                <img data-type="avatar" fetchPriority="high"
                                     src="https://nld.mediacdn.vn/zoom/273_171/291774122806476800/2024/6/26/anh-man-hinh-2024-06-26-luc-174202-17194002898821463771095-0-0-1050-1680-crop-1719400550664287896101-13-83-994-1652-crop-17194008784061048762500.png"
                                     alt="Thủ tướng Phạm Minh Chính hội kiến Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình"
                                     className="small-news-img"/>
                                <span className={"small-news-title"}>Thủ tướng Phạm Minh Chính hội kiến Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình</span>
                            </div>
                            <div className={"small-news-item"}>
                                <img data-type="avatar" fetchPriority="high"
                                     src="https://nld.mediacdn.vn/zoom/273_171/291774122806476800/2024/6/26/anh-man-hinh-2024-06-26-luc-174202-17194002898821463771095-0-0-1050-1680-crop-1719400550664287896101-13-83-994-1652-crop-17194008784061048762500.png"
                                     alt="Thủ tướng Phạm Minh Chính hội kiến Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình"
                                     className="small-news-img"/>
                                <span className={"small-news-title"}>Thủ tướng Phạm Minh Chính hội kiến Tổng Bí thư, Chủ tịch Trung Quốc Tập Cận Bình</span>
                            </div>
                        </div>

                        <div className={"line-element"}></div>

                        <div className="trending-container">
                            <span className="icon">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1188_86501)">
                        <path
                            d="M16.188 2.63867H7.80736C4.17014 2.63867 2 4.80882 2 8.44603V16.8173C2 20.4685 4.17014 22.6387 7.80736 22.6387H16.1786C19.8205 22.6387 21.9859 20.4685 21.9859 16.8313V8.44603C22 4.80882 19.8299 2.63867 16.188 2.63867ZM16.877 12.1676C16.877 12.5566 16.5676 12.866 16.1786 12.866C15.7895 12.866 15.4802 12.5566 15.4802 12.1676V11.9895L12.7617 14.708C12.6117 14.858 12.4101 14.9283 12.2039 14.9096C11.993 14.8908 11.8055 14.7783 11.693 14.6002L10.6712 13.0769L8.29013 15.458C8.14952 15.5986 7.98078 15.6595 7.79798 15.6595C7.61519 15.6595 7.43708 15.5892 7.30584 15.458C7.03398 15.1861 7.03398 14.7502 7.30584 14.469L10.2869 11.488C10.4368 11.338 10.6384 11.2677 10.8446 11.2864C11.0555 11.3052 11.243 11.4177 11.3555 11.5958L12.3773 13.1144L14.4865 11.0052H14.3084C13.9194 11.0052 13.61 10.6959 13.61 10.3068C13.61 9.91779 13.9194 9.60844 14.3084 9.60844H16.1692C16.2583 9.60844 16.3473 9.62719 16.4411 9.66C16.6098 9.73031 16.7504 9.87092 16.8207 10.0397C16.8629 10.1287 16.8723 10.2178 16.8723 10.3115V12.1723L16.877 12.1676Z"
                            fill="#ED1C24"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1188_86501">
                            <rect width="19.9906" height="20" fill="white" transform="translate(2 2.63867)"></rect>
                        </clipPath>
                    </defs>
                </svg>

            </span>
                            <span className={"trending-label"}>trending</span>
                            <div className={"trending-item"}>Điều tra đặc biệt</div>
                            <div className={"trending-item"}>Kỳ họp thứ 6 Quốc hội khóa XV</div>
                            <div className={"trending-item"}>Kỷ niệm 94 năm thành lập</div>
                            <div className="navigation-buttons">
                                <div className={"navigation-button"}>❮</div>
                                <div className={"navigation-button"}>❯</div>
                            </div>
                        </div>

                        <div className={"line-element"}></div>

                    </div>
                </div>
                <div className={"top__right-container"}></div>
            </div>

            <div className={"line"}></div>

            <div className={"bottom__flex-container"}>
                <div className={"bottom__center-container"}>
                    <div className={"bottom__news"}>
                        <img data-type="avatar"
                             src="https://nld.mediacdn.vn/zoom/320_200/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                             alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                             className="box-category-avatar"/>
                        <div className={"bottom__news-text"}>
                            <a data-type="title" data-linktype="newsdetail" data-id="196240627100720056"
                               className="bottom__news-text-title" data-newstype="0"
                               href="/nha-nuoc-thu-phi-duong-cao-toc-trong-truong-hop-nao-196240627100720056.htm"
                               title="Nhà nước thu phí đường cao tốc trong trường hợp nào?">Nhà nước thu phí đường cao
                                tốc trong trường hợp nào?</a>
                            <span className={"bottom__news-text-inf"}>(NLĐO)- Sáng 27-6, với đa số đại biểu tán thành, Quốc hội thông qua dự án Luật Đường bộ; luật này có hiệu lực thi hành kể từ 1-1-2025</span>
                            <a data-type="title" className="bottom__news-text-inf-dots"
                               href="/chuyen-cong-an-dieu-tra-cac-chu-cong-trinh-khong-khac-phuc-phong-chay-chua-chay-196240627072504617.htm"
                               title="Chuyển công an điều tra các chủ công trình không khắc phục phòng cháy chữa cháy">Chuyển
                                công an điều tra các chủ công trình không khắc phục phòng cháy chữa cháy</a>
                        </div>
                    </div>
                    <div className={"bottom__news-line"}></div>

                    <div className={"bottom__news"}>
                        <img data-type="avatar"
                             src="https://nld.mediacdn.vn/zoom/320_200/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                             alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                             className="box-category-avatar"/>
                        <div className={"bottom__news-text"}>
                            <a data-type="title" data-linktype="newsdetail" data-id="196240627100720056"
                               className="bottom__news-text-title" data-newstype="0"
                               href="/nha-nuoc-thu-phi-duong-cao-toc-trong-truong-hop-nao-196240627100720056.htm"
                               title="Nhà nước thu phí đường cao tốc trong trường hợp nào?">Nhà nước thu phí đường cao
                                tốc trong trường hợp nào?</a>
                            <span className={"bottom__news-text-inf"}>(NLĐO)- Sáng 27-6, với đa số đại biểu tán thành, Quốc hội thông qua dự án Luật Đường bộ; luật này có hiệu lực thi hành kể từ 1-1-2025</span>
                            <a data-type="title" className="bottom__news-text-inf-dots"
                               href="/chuyen-cong-an-dieu-tra-cac-chu-cong-trinh-khong-khac-phuc-phong-chay-chua-chay-196240627072504617.htm"
                               title="Chuyển công an điều tra các chủ công trình không khắc phục phòng cháy chữa cháy">Chuyển
                                công an điều tra các chủ công trình không khắc phục phòng cháy chữa cháy</a>
                        </div>
                    </div>
                    <div className={"bottom__news-line"}></div>

                    <div className={"bottom__news"}>
                        <img data-type="avatar"
                             src="https://nld.mediacdn.vn/zoom/320_200/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                             alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                             className="box-category-avatar"/>
                        <div className={"bottom__news-text"}>
                            <a data-type="title" data-linktype="newsdetail" data-id="196240627100720056"
                               className="bottom__news-text-title" data-newstype="0"
                               href="/nha-nuoc-thu-phi-duong-cao-toc-trong-truong-hop-nao-196240627100720056.htm"
                               title="Nhà nước thu phí đường cao tốc trong trường hợp nào?">Nhà nước thu phí đường cao
                                tốc trong trường hợp nào?</a>
                            <span className={"bottom__news-text-inf"}>(NLĐO)- Sáng 27-6, với đa số đại biểu tán thành, Quốc hội thông qua dự án Luật Đường bộ; luật này có hiệu lực thi hành kể từ 1-1-2025</span>
                            <a data-type="title" className="bottom__news-text-inf-dots"
                               href="/chuyen-cong-an-dieu-tra-cac-chu-cong-trinh-khong-khac-phuc-phong-chay-chua-chay-196240627072504617.htm"
                               title="Chuyển công an điều tra các chủ công trình không khắc phục phòng cháy chữa cháy">Chuyển
                                công an điều tra các chủ công trình không khắc phục phòng cháy chữa cháy</a>
                        </div>
                    </div>
                </div>

                <div className={"bottom__right-container"}>
                    <div className={"bottom__right-news-container"}>
                        <span className={"bottom__right-news-container-title"}>Chính trị</span>
                        <div className={"bottom__right-news-container-main"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/305_191/291774122806476800/2024/6/27/btng-vn-tq-anh-1-1719452710810108471641-42-0-576-854-crop-1719452792477106314495.jpg"
                                 alt="Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị"
                                 loading="lazy" className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-main-title"}>Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/84_84/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                                 alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                                 className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-sup-title"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/84_84/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                                 alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                                 className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-sup-title"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                    </div>
                    <div className={"bottom__right-news-container"}>
                        <span className={"bottom__right-news-container-title"}>Xã hội</span>
                        <div className={"bottom__right-news-container-main"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/305_191/291774122806476800/2024/6/27/btng-vn-tq-anh-1-1719452710810108471641-42-0-576-854-crop-1719452792477106314495.jpg"
                                 alt="Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị"
                                 loading="lazy" className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-main-title"}>Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/84_84/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                                 alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                                 className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-sup-title"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/84_84/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                                 alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                                 className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-sup-title"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                    </div>
                    <div className={"bottom__right-news-container"}>
                        <span className={"bottom__right-news-container-title"}>Xã hội</span>
                        <div className={"bottom__right-news-container-main"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/305_191/291774122806476800/2024/6/27/btng-vn-tq-anh-1-1719452710810108471641-42-0-576-854-crop-1719452792477106314495.jpg"
                                 alt="Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị"
                                 loading="lazy" className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-main-title"}>Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/84_84/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                                 alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                                 className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-sup-title"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/84_84/291774122806476800/2024/6/27/img2169-1719457578268274139283-26-0-1276-2000-crop-17194575854231239857223.jpeg"
                                 alt="Nhà nước thu phí đường cao tốc trong trường hợp nào?" loading="lazy"
                                 className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-sup-title"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                    </div>
                    <div className={"bottom__right-news-container__read-more"}>
                        <span className={"bottom__right-news-container-title__read-more"}>Đọc nhiều</span>
                        <div className={"bottom__right-news-container-main__read-more"}>
                            <img data-type="avatar"
                                 src="https://nld.mediacdn.vn/zoom/305_191/291774122806476800/2024/6/27/btng-vn-tq-anh-1-1719452710810108471641-42-0-576-854-crop-1719452792477106314495.jpg"
                                 alt="Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị"
                                 loading="lazy" className="box-category-avatar"/>
                            <span className={"bottom__right-news-container-main-title"}>Bộ trưởng Bùi Thanh Sơn hội kiến Bộ trưởng Ngoại giao Trung Quốc Vương Nghị</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup__read-more"}>
                            <span className={"bottom__right-news-container-sup-title__read-more"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                        <div className={"line-bottom-right"}></div>

                        <div className={"bottom__right-news-container-sup__read-more"}>
                            <span className={"bottom__right-news-container-sup-title__read-more"}>Nhà nước thu phí đường cao tốc trong trường hợp nào?</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Classify;