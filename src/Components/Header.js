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
      {/* <img
        src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/bannermobile.png"
        className={classes.resizeImg}
        alt=""
        style={{
          height: "auto",
          width: "1071px",
          marginLeft: "0px",
          marginTop: "-192px",
        }}
      ></img> */}
    </div>
  );
};

export default Header;
