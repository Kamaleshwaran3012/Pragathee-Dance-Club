import React from 'react';
import abimage2 from '../assets/aboutuspic2.jpg'; // Import the image properly
import "./aboutus.css"; // Import external CSS

const Abcont3 = () => {
  return (
    <div>
      <div className="container2">
        <div id="image2">
          <img
            src={abimage2} 
            id="img2"
            alt="Pragathee Dance Club"
            style={{ height: "600px", marginBottom: "50px" }}
          />
        </div>
        <div className="cont2">
          <h2>Our Mission</h2>
          <p id="sline">
            Our mission at the Pragathee Dance Club is to inspire and cultivate a passion for dance in our community.
            We are dedicated to providing a nurturing and inclusive environment where dancers of all ages and skill levels can thrive.
            By offering exceptional training, innovative choreography, and opportunities for artistic expression, we aim to foster a lifelong love for dance.
            We believe in the power of dance to bring people together, to express emotions, and to create lasting memories.
            <br /><br />
            We promote cultural diversity by embracing various dance forms from around the world, encouraging personal growth through disciplined training, fostering lifelong learning with workshops and masterclasses, creating a supportive community where dancers feel valued, and using dance as a medium to raise awareness about important social issues and bring joy to people's lives.
            Our club is committed to artistic excellence, providing state-of-the-art facilities and a welcoming environment that supports dancers in reaching their full potential.
            <br /><br />
            We believe in nurturing not just skilled dancers but also confident and resilient individuals who contribute positively to society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abcont3;
