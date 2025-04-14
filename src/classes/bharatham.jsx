import React from "react";
import bharathamImg from "../assets/calssical img.jpg";
import './classes.css'
import {Link} from 'react-router-dom'
const Bharatanatyam = () => {
  return (
    <div className="container3" id="bharatham">
      <div className="cont3">
        <h2>Bharatanatyam</h2>
        <p>
          Bharatanatyam is one of the oldest classical dance forms of India, 
          originating from Tamil Nadu. It was traditionally performed in temples 
          as a devotional art dedicated to Hindu deities. This dance form is 
          known for its intricate footwork, expressive hand gestures (mudras), 
          and facial expressions (abhinaya) that bring mythological stories to life.
        </p>
        <Link to='/login'><button>Join</button></Link>
      </div>
      <div id="image3">
        <img src={bharathamImg} id="img3" alt="Bharatanatyam" />
      </div>
    </div>
  );
};

export default Bharatanatyam;
