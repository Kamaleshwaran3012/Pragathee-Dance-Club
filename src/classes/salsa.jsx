import React from "react";
import salsaImg from "../assets/salsa2.jpg";
import "./classes.css"
import {Link} from 'react-router-dom'
const Salsa = () => {
  return (
    <div className="container3" id="Salsa">
      <div className="cont3">
        <h2>Salsa</h2>
        <p>
          Salsa is a lively and social dance that originated in the Caribbean, particularly 
          Cuba and Puerto Rico. It fuses Afro-Cuban and Latin American influences, combining 
          fast footwork, rhythmic hip movements, and partner interactions. Salsa dancing is 
          often accompanied by vibrant music, featuring percussive beats and energetic melodies.
        </p>
        <Link to='/login'><button>Join</button></Link>
      </div>
      <div id="image3">
        <img src={salsaImg} id="img3" alt="Salsa" />
      </div>
    </div>
  );
};

export default Salsa;
