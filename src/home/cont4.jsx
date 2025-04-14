import React from 'react';
import './home.css';
import bharat from '../assets/bharat.jpg'; // Ensure correct path
import modern from '../assets/moder.jpg';
import western from '../assets/western.jpg';
import flamenco from '../assets/image2.jpg';

const Cont4 = () => {
  return (
    <div>
      <h2 id="ourclass">Our Classes Description</h2>
      <div className="container4">
        <div className="card" style={{ width: '18rem', border: '5px solid rgb(2, 0, 137)' }}>
          <img className="card-img-top" src={bharat} alt="Bharatanatyam" />
          <div className="card-body">
            <h2 style={{ fontSize: 'larger',color:'White', fontWeight: 'bold' }}>
              Bharathanatyam
            </h2>
            <p className="card-text">
              Bharatanatyam is a classical Indian dance form from Tamil Nadu, known for its grace, rhythmic footwork, and expressive storytelling. It blends three elements: nritta (pure dance), nritya (expressive dance), and natya (dramatic storytelling).
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', border: '5px solid rgb(2, 0, 137)' }}>
          <img className="card-img-top" src={modern} alt="Western Dance" height="51%" />
          <div className="card-body">
            <h2 style={{ fontSize: 'larger',color:'White', fontWeight: 'bold'}}>
              Western Dance
            </h2>
            <p className="card-text">
              Western dance encompasses a variety of styles originating from Europe and the Americas, including ballet, contemporary, hip-hop, jazz, and more. Each style has its own unique techniques, expressions, and forms of movement.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', border: '5px solid rgb(2, 0, 137)' }}>
          <img className="card-img-top" src={western} alt="Salsa" height="65%" />
          <div className="card-body">
            <h2 style={{ fontSize: 'larger',color:'White', fontWeight: 'bold' }}>
              Salsa
            </h2>
            <p className="card-text">
              A popular social dance that originated in the Caribbean, particularly Cuba and Puerto Rico. Salsa is characterized by its fast-paced, energetic movements and intricate footwork, often performed to lively Latin music.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', border: '5px solid rgb(2, 0, 137)' }}>
          <img className="card-img-top" src={flamenco} alt="Flamenco" height="75%" />
          <div className="card-body">
            <h2 style={{ fontSize: 'larger',color:'White', fontWeight: 'bold'}}>
              Flamenco
            </h2>
            <p className="card-text">
              A passionate and expressive dance style from Spain, Flamenco combines singing (cante), guitar playing (toque), dance (baile), and handclaps (palmas). It is known for its intense emotion, foot-stomping, and intricate hand and arm movements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont4;
