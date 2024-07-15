import React from 'react';
import {Outlet, Router} from "react-router-dom";
import BackToTop from "./component/BackToTop";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ArticleDetail from "./ArticleDetail";
const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <BackToTop/>
            <Footer/>
        </div>
    );
};

export default App;
