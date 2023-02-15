import React from "react";

import "./Map.css";

const Map = () => {
  const slide = () => {};
  return (
    <div className="mapContainer">
      <div id="overlay" className="slide-out" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7628.0069497772465!2d8.306150132581246!3d47.472227662613534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12d189dce86a1820!2siNovitas%20AG!5e0!3m2!1sen!2s!4v1676466856179!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
      <div className="contact">
        <div className="contact-card">
          <h1>Kontakt</h1>
          <h6>
            iNovitas AG <br /> Schlossbergweg 3
          </h6>
          <h6>CH-5400 Baden</h6>
          <a href="tel:+41 56 552 05 70">T +41 56 552 05 70</a>
        </div>
      </div>
    </div>
  );
};

export default Map;
