import { Link } from "react-router-dom";
import "./navbar.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle" id="cl" data-bs-toggle="dropdown">
        CLASSES
      </button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/classes#bharatham">Bharatanatyam</Link></li>
        <li><Link className="dropdown-item" to="/classes#Western">Western Dance</Link></li>
        <li><Link className="dropdown-item" to="/classes#Salsa">Salsa</Link></li>
        <li><Link className="dropdown-item" to="/classes#Flamenco">Flamenco</Link></li>
        <li><Link className="dropdown-item" to="/classes#Kathakali">Kathakali</Link></li>
      </ul>
    </div>
  );
};

export default Dropdown;
