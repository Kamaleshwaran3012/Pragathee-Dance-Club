import React from 'react';
import image2 from '../assets/image3.jpg';
import './home.css';

const Cont2 = () => {
  return (
    <div>
      <div className="container2">
        <div id="image2">
          <img src={image2} id="img2" alt="Dance Performance" />
        </div>
        <div className="cont2">
          <h2>Our Pride</h2>
          <p id="sline">
            Pragathee Dance Club is deeply proud of its commitment to nurturing talent and celebrating the rich tradition of dance in all its forms. We take immense pride in offering a space where dancers from all backgrounds can come together, explore their passion for movement, and grow as artists. Our club stands as a beacon of creativity, discipline, and cultural expression, fostering a community that not only learns but also cherishes the art of dance. Through years of dedication, Pragathee Dance Club has become a respected name in the local dance community, known for its inclusivity, excellence, and spirit of collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cont2;
