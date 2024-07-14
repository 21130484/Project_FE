import React from 'react';
import {Outlet, Router} from "react-router-dom";
const App: React.FC = () => {
    return (
        <div className="App">
            <Outlet/>
        </div>
    );
};

export default App;
