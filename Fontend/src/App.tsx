import React from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Page from "./component/crawlRss";

function App() {
  return (
    <div>
      <Header></Header>
        <Page url="https://nld.com.vn/rss/home.rss"></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;
