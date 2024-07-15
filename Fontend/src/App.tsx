// src/App.tsx
import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import BackToTop from "./component/BackToTop";
import FeedbackPopup from "./component/FeedbackPopup";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Outlet />
            </main>
            <BackToTop />
            <Footer />
            <FeedbackPopup />
        </div>
    );
};

export default App;
