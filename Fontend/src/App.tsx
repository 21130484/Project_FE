import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Classify from "./component/Classify";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header></Header>
            <Classify></Classify>
            <Footer></Footer>
        </div>
    );
}

export default App;
