import React from "react";
import "../css/Home.css"
import "../css/main.css"
import useRssFeed from "./crawlRss";

function Home() {
    const url = 'https://nld.com.vn/rss/home.rss'; // Thay đổi URL RSS thật của bạn
    const quantity = 7; // Số lượng mục muốn hiển thị, đặt -1 để hiển thị tất cả
    const rssItems = useRssFeed(url, quantity);
    return(
      <div className={"container"}>
          <div className={"box-category"} data-layout={1}>
              <div className={"box-category-top"}>
                  <h2 className="title-category">
                      Chính trị
                  </h2>
                  <div className="box-category-menu">
                      <a href="">Xem thêm</a>
                  </div>
              </div>

              <div className="box-category-middle">
                  {rssItems.length === 0 ? (
                      <p>Đang tải dữ liệu...</p>
                  ) : (
                      rssItems.map((item, index) => (
                          index ===0 ? (
                              <div key={index} className={"box-category-item"}>
                                  <div dangerouslySetInnerHTML={{__html: item.anchorTag}}/>
                                  <div className={"box-category-content"}>
                                      <h2>{item.title}</h2>
                                  </div>
                                  <p>{item.textContent}</p>
                              </div>
                          ) : (
                              <div key={index} className={"box-category-item"}>
                                  <div dangerouslySetInnerHTML={{__html: item.anchorTag}}/>
                                  <div className={"box-category-content"}>
                                      <h2>{item.title}</h2>
                                  </div>
                              </div>
                          )
                      ))
                  )}
                  );
              </div>
          </div>
      </div>
    );
}

export default Home;