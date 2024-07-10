// src/App.tsx
import React from 'react';
import './css/App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/home/Home";
import ArticleDetail from "./ArticleDetail";
import './css/RelatedItem.css';

function App() {
  return (
    <div>
      <Header></Header>
        <ArticleDetail></ArticleDetail>
      <Footer></Footer>
    </div>
  );
}

export default App;
