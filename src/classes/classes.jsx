import React, { useEffect } from "react";
import Bharatanatyam from "./bharatham";
import Western from "./western";
import Salsa from "./salsa";
import Flamenco from "./flamenco";
import Kathakali from "./kathak";
import { useLocation } from "react-router-dom";

const Classes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="acont1">
        <p>Classes →</p>
      </div>
      <Bharatanatyam />
      <Western />
      <Salsa />
      <Flamenco />
      <Kathakali />
    </div>
  );
};

export default Classes;
