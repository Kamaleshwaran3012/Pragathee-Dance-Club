import React from 'react';
import "./home.css"; // Import CSS file for better styling
import imageSrc from "../assets/image1.jpg"; // Import your image file

const Cont1 = () => {
  return (
    <div>
      <div className="container1">
        <div className="cont1">
          <p id="p1" style={{ fontFamily: "cursive", paddingTop: "50px", fontStyle: "italic" }}>
            Dance with Us
          </p>
          <h2 id="h2">PRAGATHEE Dance Club</h2>
          <p>Dance, Music, & Arts Prestige Crafted with Grace</p>
          <button id="bt1">Contact us</button>
        </div>
        <div id="image1">
          <img src={imageSrc} id="img1" alt="Dance Image" />
        </div>
      </div>
    </div>
  );
};

export default Cont1;
