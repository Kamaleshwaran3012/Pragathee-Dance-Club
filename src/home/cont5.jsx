import React from "react";
import image5 from "../assets/image5.jpg"; // Ensure correct path
import "./home.css";

const Cont5 = () => {
  return (
    <div>
      <div className="container2" style={{ background: "none" }}>
        <div id="image2">
          <img src={image5} id="img2" alt="Join Our Family" />
        </div>
        <div className="cont2">
          <h2>Join Our Family Today! 👍</h2>
          <p id="sline">
            No experience is necessary—just bring your energy and passion for
            dance. Our friendly instructors and welcoming community are here to
            help you every step of the way. Dance is for everyone, and it’s time
            for YOU to step in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cont5;
