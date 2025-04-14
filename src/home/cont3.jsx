import React from 'react';
import image4 from '../assets/image4.jpg';
import './home.css';

const Cont3 = () => {
  return (
    <div>
      <div className="container3">
        <div className="cont3">
          <h2 id="h3">Pragathee Dance World</h2>
          <p>
            Our dance school offers a diverse range of styles, including Bharatanatyam, classical, western, and modern dance. Bharatanatyam provides a strong foundation in Indian classical dance, while our classical dance classes explore various traditional forms. For a more contemporary approach, we offer western and modern dance, allowing students to express themselves through dynamic and innovative movements. Our curriculum nurtures creativity and versatility across diverse dance styles.
          </p>
        </div>
        <div id="image3">
          <img src={image4} id="img3" alt="Dance Styles" />
        </div>
      </div>
    </div>
  );
};

export default Cont3;
