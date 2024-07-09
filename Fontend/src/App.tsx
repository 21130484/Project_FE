// src/App.tsx
import React from 'react';
import './css/App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ArticleDetail from './ArticleDetail';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <ArticleDetail />
            </main>
            <Footer />
        </div>
    );
};

export default App;
