import React from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <h2>WE ARE</h2>
        <img
          className={classes.logoImg}
          src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/logo.png"
          alt="logo"
        />
      </div>
      <div className={classes.navLinks}>
        <h3>Kontakt</h3>
      </div>
    </div>
  );
};

export default Navbar;
