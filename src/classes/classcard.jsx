import React, { forwardRef } from "react";

const DanceClassCard = forwardRef(({ id, title, image, index, onJoinClick }, ref) => {
  return (
    <div className={`container${index % 2 === 0 ? "3" : "2"}`} id={id} ref={ref}>
      {index % 2 === 0 ? (
        <>
          <div className="cont3">
            <h2>{title}</h2>
            <button onClick={onJoinClick}>Join</button> {/* Scroll to section */}
          </div>
          <div id="image3">
            <img src={image} id="img3" alt={title} />
          </div>
        </>
      ) : (
        <>
          <div id="image2">
            <img src={image} id="img2" alt={title} />
          </div>
          <div className="cont2">
            <h2>{title}</h2>
            <button onClick={onJoinClick}>Join</button> {/* Scroll to section */}
          </div>
        </>
      )}
    </div>
  );
});

export default DanceClassCard;
