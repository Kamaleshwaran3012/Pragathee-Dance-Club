import React from "react";
import flamencoImg from "../assets/flamenco.jpg";
import "./classes.css"
import {Link} from 'react-router-dom'
const Flamenco = () => {
  return (
    <div className="container2" id="Flamenco">
      <div id="image2">
        <img src={flamencoImg} id="img2" alt="Flamenco" />
      </div>
      <div className="cont2">
        <h2>Flamenco</h2>
        <p>
          Flamenco is a passionate and expressive Spanish dance form that originated in Andalusia. 
          It is deeply rooted in Romani (Gypsy) traditions and has been influenced by Arabic, 
          Jewish, and Spanish folk music. Flamenco performances typically feature singing (cante), 
          guitar playing, and dance, with dancers using percussive footwork (zapateado) and 
          hand movements to convey powerful emotions.
        </p>
        <Link to='/login'><button>Join</button></Link>
      </div>
    </div>
  );
};

export default Flamenco;
