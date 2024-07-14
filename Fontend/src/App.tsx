import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import NewsPage from "./component/Body/News/NewsPage";



const App: React.FC = () => {
    return (
        <div className="App">
            <Header></Header>
            <NewsPage></NewsPage>
            <Footer></Footer>
        </div>
    );
}

export default App;
