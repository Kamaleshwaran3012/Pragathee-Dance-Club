import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home/home";
import Aboutus from "./aboutus/aboutus";

const App = () => {
  return (
    <div>
        <Navbar/>
        <Footer/>
      </div>
  );
};

export default App;
