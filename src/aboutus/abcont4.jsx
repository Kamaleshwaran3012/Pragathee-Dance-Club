import React from 'react';
import abimage3 from '../assets/aboutuspic3.jpg'; // Import the image properly
import "./aboutus.css"; // Import external CSS

const Abcont4 = () => {
  return (
    <div>
      <div className="container3">
        <div className="cont3">
          <h2 id="h2">Our Vision</h2>
          <p>
            Our vision at the Pragathee Dance Club is to be a leading center of dance excellence, where passion, creativity, and innovation converge.
            We aspire to create a vibrant and inclusive community that celebrates the transformative power of dance, nurturing the artistic and personal growth of each dancer.
            By embracing diverse dance forms and fostering a culture of continuous learning, we aim to inspire and empower individuals to reach their full potential.
            Our goal is to leave a lasting impact on society, using dance as a medium to connect, inspire, and bring joy to people's lives.
          </p>
        </div>
        <div id="image3">
          <img 
            src={abimage3} 
            id="img3" 
            alt="Our Vision - Pragathee Dance Club" 
          />
        </div>
      </div>
    </div>
  );
};

export default Abcont4;
