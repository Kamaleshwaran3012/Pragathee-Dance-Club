import React from "react";
import logo from "./assets/logo3.jpg"; // Ensure correct path
import Home from './home/home'
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
  return (
    <>
      <nav className="nav">
        <span className="logo-container">
          <Link to='/'><img src={logo} id="logo" alt="Logo" /></Link>
                  </span>
        <div id="links">
          <Link to='/' className="lk">HOME</Link>
          <Link to="/about-us" className="lk">ABOUT US</Link>
          <Dropdown/>
          <Link to='/events' className="lk">EVENTS</Link>
          <Link to='/contact' className="lk">CONTACT US</Link>
        </div>
        <div className="loginbtn">
          <Link to='/login' id="loginBtn">
            Login
          </Link>
          <Link to='/Signup' id="signupBtn">
            Signup
          </Link>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<Aboutus/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes#Salsa" element={<Classes/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/openpage" element={<Openpage/>}/>
      </Routes>
      </>
  );
};
export default Navbar;
