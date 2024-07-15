import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import NewsPage from "./component/Body/Topics/NewsPage";
import InternationalPage from "./component/Body/Topics/InternationalPage";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <NewsPage></NewsPage>
            <Footer />
        </div>
    );
}

export default App;
