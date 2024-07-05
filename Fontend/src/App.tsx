import React from 'react';
import RssFeed from './RssFeed';
import Header from "./component/Header";
import Footer from "./component/Footer";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header></Header>
            <RssFeed url="https://nld.com.vn/rss/thoi-su.rss" />
            <Footer></Footer>
        </div>
    );
}

export default App;
