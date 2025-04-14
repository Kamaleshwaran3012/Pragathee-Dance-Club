import React, { useState } from "react";
import logo from "./assets/logo3.jpg";
import Home from './home/home';
import Aboutus from "./aboutus/aboutus";
import Classes from "./classes/classes";
import "./navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dropdown from "./dropdown";
import FAQ from "./FAQ";
import ContactUs from "./contact/contactus";
import Events from "./event/event";
import Login from "./login";
import Signup from "./signup";
import Openpage from "./openpage";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="nav">
        <span className="logo-container">
          <Link to='/'><img src={logo} id="logo" alt="Logo" /></Link>
        </span>

        <div className={`burger ${menuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div id="links" className={menuOpen ? "nav-links nav-active" : "nav-links"}>
          <Link to='/' className="lk" onClick={toggleMenu}>HOME</Link>
          <Link to="/about-us" className="lk" onClick={toggleMenu}>ABOUT US</Link>
          <Dropdown onClick={toggleMenu} />
          <Link to='/events' className="lk" onClick={toggleMenu}>EVENTS</Link>
          <Link to='/contact' className="lk" onClick={toggleMenu}>CONTACT US</Link>
        </div>

        <div className="loginbtn desktop-only">
          <Link to='/login' id="loginBtn">Login</Link>
          <Link to='/signup' id="signupBtn">Signup</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes#Salsa" element={<Classes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/openpage" element={<Openpage />} />
      </Routes>
    </>
  );
};

export default Navbar;
