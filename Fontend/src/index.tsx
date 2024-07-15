import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/web";

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
