import React, { useState, useEffect } from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState();
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className={navbar ? classes.navbarActive : classes.navbar}>
      <div className={classes.logo}>
        <h2>WE ARE</h2>
        <img
          className={classes.logoImg}
          src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/logo.png"
          alt="logo"
        />
      </div>
      <div className={classes.navLinks}>
        <h3>
          <a href="/">Kontakt</a>
        </h3>
        <h3>
          <a href="/">Jobs</a>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
