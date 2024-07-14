
import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Outlet, Router} from "react-router-dom";
const App: React.FC = () => {
    return (
        <div className="App">
            <Outlet/>
        </div>
    );
};

export default App;
