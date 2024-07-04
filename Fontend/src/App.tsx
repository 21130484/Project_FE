import React from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import RssComponent from "./component/crawlRss";

function App() {
  return (
    <div>
      <Header></Header>
      <RssComponent url={"https://nld.com.vn/rss/home.rss"}></RssComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
