import React from "react";
import "./event.css"; // Import CSS file for styling
import image1 from "../assets/cont1.jpg";
import image2 from "../assets/dn.jpg";
import image3 from "../assets/dws.jpg";
import image4 from "../assets/fm.jpg";
import image5 from "../assets/sul.jpg";
import image6 from "../assets/marathon.jpg";

const events = [
  {
    title: "Annual Dance Showcase",
    description:
      "A grand event where students and professional dancers perform different styles like Bharatanatyam, Salsa, Hip-Hop, Ballet, and Contemporary.",
    image: image1,
  },
  {
    title: "Dance Battle Night",
    description:
      "A thrilling face-off where dancers compete in freestyle battles in categories like Hip-Hop, Popping, and Breaking.",
    image: image2,
  },
  {
    title: "Dance Workshop Series",
    description:
      "Special sessions with professional choreographers on various dance styles like Bollywood, K-Pop, Flamenco, and Jazz.",
    image: image3,
  },
  {
    title: "Flash Mob Performances",
    description:
      "Surprise dance performances in public places like malls or college fests to promote dance and engage the audience.",
    image: image4,
  },
  {
    title: "Cultural Dance Festival",
    description:
      "A celebration of different dance cultures worldwide, featuring performances of traditional and folk dances.",
    image: image5,
  },
  {
    title: "Dance Marathon",
    description:
      "An endurance-based dance event where participants groove non-stop for hours, testing stamina and style.",
    image: image6,
  },
];

const Events = () => {
  return (
    <>
      <div className="eventclass1">
        <p>EVENTS→</p>
      </div>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
