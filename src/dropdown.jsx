import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Dropdown = ({ toggleMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); // close dropdown
    toggleMenu();           // close nav menu
  };

  return (
    <div className="dropdown" onMouseLeave={() => setDropdownOpen(false)}>
      <button className="btn dropdown-toggle" id="cl" onClick={handleDropdownToggle}>
        CLASSES
      </button>
      <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
        <li><Link className="dropdown-item" to="/classes#bharatham" onClick={handleLinkClick}>Bharatanatyam</Link></li>
        <li><Link className="dropdown-item" to="/classes#Western" onClick={handleLinkClick}>Western Dance</Link></li>
        <li><Link className="dropdown-item" to="/classes#Salsa" onClick={handleLinkClick}>Salsa</Link></li>
        <li><Link className="dropdown-item" to="/classes#Flamenco" onClick={handleLinkClick}>Flamenco</Link></li>
        <li><Link className="dropdown-item" to="/classes#Kathakali" onClick={handleLinkClick}>Kathakali</Link></li>
      </ul>
    </div>
  );
};

export default Dropdown;
