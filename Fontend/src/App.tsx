import React from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import News from "./component/crawlRss";

function App() {
  return (
    <div>
      <Header></Header>
        <News url="https://nld.com.vn/rss/home.rss"></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
