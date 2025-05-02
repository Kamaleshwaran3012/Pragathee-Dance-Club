import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

const App = () => {
  return (
    <div>
        <Navbar/>
        <Footer/>
      </div>
  );
};

export default App;
