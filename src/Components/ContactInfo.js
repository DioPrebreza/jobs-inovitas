import React from "react";

import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div>
      <div className={classes.contactImg}></div>
      <div className={classes.contactInfoCard}>
        <h1 className={classes.cardTitle}>
          Keine passende Stelle gefunden? Bitte kontaktiere mich für eine
          Initiativbewerbung
        </h1>
        <div className={classes.cardInfo}>
          <div className={classes.contactPerson}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/Rectangle-516.png"
              alt="contact person"
            />
            <h2>Sonja</h2>
            <p>+41 56 552 05 91 </p>
            <p>Ich freue mich auf Deine Bewerbung!</p>
          </div>
          <div className={classes.contactEmail}>
            <img
              src="https://jobs.inovitas.ch/wp-content/themes/inovitasjobs/assets/images/mailvector.svg"
              alt="contact person"
            />
            <h2>sonja.weber@inovitas.ch</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
