import React from "react";
import "./footer.css"; // Make sure to style it properly
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer text-white py-5">
        <div className="container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-lg-4 col-md-6">
              <h4 style={{ color: "rgb(2, 0, 137)" }}>About Us</h4>
              <p style={{ color: "rgb(0, 0, 0)", fontSize:"17px" }}>
                Pragathee Dance Club is a vibrant community offering diverse dance classes for all levels.
                The club focuses on various styles, including classical, contemporary, and popular dances
                like Bharatanatyam, Ballet, and Western dance. With a strong emphasis on discipline,
                creativity, and self-expression, Pragathee Dance Club provides a supportive environment
                for dancers to grow, perform, and showcase their talent.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6" style={{ marginLeft: "20px" }}>
              <h4 style={{ color: "rgb(2, 0, 137)" }}>Quick Links</h4>
              <ul className="list-unstyled">
                <li className="linkers"><Link to='/' style={{ textDecoration: "none", color: "black",fontWeight:400 }}>Home</Link></li>
                <li className="linkers"><Link to='/about-us' style={{ textDecoration: "none", color: "black",fontWeight:400 }}>Aboutus</Link></li>
                <li className="linkers"><Link to='/classes' style={{ textDecoration: "none", color: "black",fontWeight:400 }}>Classes</Link></li>
                <li className="linkers"><Link to='/events' style={{ textDecoration: "none", color: "black",fontWeight:400 }}>Events</Link></li>
                <li className="linkers"><Link to='/contact' style={{ textDecoration: "none", color: "black",fontWeight:400 }}>Contact</Link></li>
                <li className="linkers"><Link to='/FAQ' style={{ textDecoration: "none", color: "black",fontWeight:400 }}>FAQ</Link></li>
              
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <h4 style={{ color: "rgb(2, 0, 137)" }}>Contact Us</h4>
              <ul className="list-unstyled" style={{ color: "rgb(0, 0, 0)" }}>
                <li>Kalanjiyam Nagar,</li>
                <li>Kallakurichi-606213</li>
                <li>Email: pragatheedanceclub@gmail.com</li>
                <li>Phone: +91 7904520611</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-lg-2 col-md-6">
              <h4 style={{ color: "rgb(2, 0, 137)" }}>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="fa fa-facebook" aria-label="Facebook"></a>
                <a href="#" className="fa fa-twitter" aria-label="Twitter"></a>
                <a href="#" className="fa fa-linkedin" aria-label="LinkedIn"></a>
                <a href="#" className="fa fa-youtube" aria-label="YouTube"></a>
                <a href="#" className="fa fa-instagram" aria-label="Instagram"></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
