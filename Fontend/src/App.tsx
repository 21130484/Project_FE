// src/App.tsx
import React from 'react';
import './css/App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ArticleDetail from './ArticleDetail';
import './css/RelatedItem.css';

const App = () => (
    <div>
        <Header />
        <ArticleDetail />
        <Footer />
    </div>
);

export default App;
