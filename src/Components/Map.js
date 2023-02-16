import React, { useState } from "react";

import "./Map.css";

const Map = () => {
  const [isShown, setIsShown] = useState(false);
  const slide = () => {};
  return (
    <div
      className="mapContainer"
      onMouseEnter={() => {
        setIsShown(true);
        console.log("entered");
      }}
      onMouseLeave={() => {
        setIsShown(false);
        console.log("left");
      }}
    >
      <div id="overlay" className={isShown ? "slide-out" : "slide-in"} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7628.0069497772465!2d8.306150132581246!3d47.472227662613534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12d189dce86a1820!2siNovitas%20AG!5e0!3m2!1sen!2s!4v1676466856179!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
      <div className="contact">
        <div className="contact-card">
          <div className="contact-info">
            <h1>Kontakt</h1>
            <h6>
              iNovitas AG <br /> Schlossbergweg 3
            </h6>
            <h6>CH-5400 Baden</h6>
            <a href="tel:+41 56 552 05 70">
              T +41 56 552 05 70
              <br />
            </a>
            <a href="mailto:info@inovitas">
              info@inovitas.ch
              <br />
            </a>
            <a target="_blank" href="https://www.inovitas.ch">
              www.inovitas.ch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
