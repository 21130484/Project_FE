import path from "path";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArticleDetail from "../ArticleDetail";
import Home from "../component/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
              path: '/',
              element: <Home/>
            },
            {
                path: '/articleDetail',
                element: <ArticleDetail/>
            }
        ]
    }
])