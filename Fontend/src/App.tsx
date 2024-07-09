// src/App.tsx
import React from 'react';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/home/Home";

function App() {
  return (
    <div>
      <Header></Header>
        <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
