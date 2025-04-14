import React from 'react';
import abimage from '../assets/aboutuspic1.jpg';
import "./aboutus.css"; // Ensure you import CSS for styling

const Abcont2 = () => {
  return (
    <div>
      <div className="container3">
        <div className="cont3">
          <p id="p1" style={{ fontFamily: "cursive", fontStyle: "italic" }}>
            about pragathee dance club~~~
          </p>
          <h2 id="h2">A Legacy of Excellence</h2>
          <p>
            The Pragathee Dance Club, founded on a rich heritage, has a history
            of nurturing dancers and promoting the art of dance. Home to some of
            the finest dancers and choreographers, our club showcases a diverse
            group of talented individuals excelling in various dance forms. We
            have earned numerous accolades at national and international dance
            competitions, demonstrating the exceptional skills and dedication of
            our members. Emphasizing creativity and innovation, our
            choreographers continually push boundaries to create captivating and
            groundbreaking performances. Committed to giving back, we conduct
            workshops, community outreach programs, and charity performances,
            sharing the joy of dance with everyone. Equipped with
            state-of-the-art training and rehearsal facilities, our club
            provides an ideal environment for dancers to hone their craft. Our
            passionate mentors and instructors are dedicated to guiding and
            inspiring dancers, ensuring they reach their full potential.
          </p>
        </div>
        <div id="image3">
          <img
            src={abimage}
            id="img3"
            alt="Pragathee Dance Club"
            style={{ paddingTop: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Abcont2;
