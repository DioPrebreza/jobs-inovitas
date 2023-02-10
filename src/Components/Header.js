import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <video
        className={classes.bannerVideo}
        style={{ width: "100%", height: "auto" }}
        autoPlay
        loop
        muted
      >
        <source
          src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/lastbanner.mp4"
          type="video/mp4"
          className={classes.resizeImg}
        />
      </video>
      <div className={classes.textBanner}>
        <h1>Kreativitätsraum für digitale Macher und Innovatoren</h1>
        <h2>
          #WirBewegenVieles <span>#JoiniNovitas</span>
        </h2>
        <button className={classes.buttonJobs}>
          <a href="#jobs">Jobs</a>
        </button>
        <div className={classes.scrollDowns} id="scrollToBottom">
          <div className={classes.mouseIcon}>
            <div className={classes.wheel}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
