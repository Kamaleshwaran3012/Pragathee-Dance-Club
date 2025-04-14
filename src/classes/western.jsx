import React from "react";
import westernImg from "../assets/western1.jpg";
import "./classes.css"
import {Link} from 'react-router-dom'
const Western = () => {
  return (
    <div className="container2" id="Western">
      <div id="image2">
        <img src={westernImg} id="img2" alt="Western Dance" />
      </div>
      <div className="cont2">
        <h2>Western Dance</h2>
        <p>
          Western dance includes a wide range of styles such as Ballet, 
          Contemporary, Hip-Hop, Jazz, and Social dances like Waltz and Tango. 
          It evolved through cultural movements and musical trends, emphasizing 
          technique, rhythm, and creativity.
        </p>
        <Link to='/login'><button>Join</button></Link>
      </div>
    </div>
  );
};

export default Western;
