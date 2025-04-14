import React from "react";
import kathakaliImg from "../assets/kathakali.jpg";
import "./classes.css"
import {Link} from 'react-router-dom'
const Kathakali = () => {
  return (
    <div className="container3" id="Kathakali">
      <div className="cont3">
        <h2>Kathakali</h2>
        <p>
          Kathakali is a traditional dance-drama from Kerala, India, known for its elaborate 
          costumes, dramatic facial makeup, and expressive storytelling. It originated in the 
          17th century and draws inspiration from Hindu epics like the Ramayana and Mahabharata. 
          Performers use intricate hand gestures (mudras), rhythmic footwork, and detailed facial 
          expressions to depict mythological narratives.
        </p>
        <Link to='/login'><button>Join</button></Link>
      </div>
      <div id="image3">
        <img src={kathakaliImg} id="img3" alt="Kathakali" />
      </div>
    </div>
  );
};

export default Kathakali;
