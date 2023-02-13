import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState();
  const [burger, setBurger] = useState(false);

  const showBurgerMenu = () => {
    if (!burger) {
      setBurger(true);
    }

    if (burger) {
      setBurger(false);
    }
  };

  const changeBackground = () => {
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
          <a href="#contact-info">Kontakt</a>
        </h3>
        <h3>
          <a href="#jobs">Jobs</a>
        </h3>
      </div>
      <div className={classes.burger}>
        <FontAwesomeIcon
          className={classes.bars}
          icon={burger ? faTimes : faBars}
          onClick={showBurgerMenu}
        />
        <div
          className={
            burger ? classes.burgerMenuShown : classes.burgerMenuHidden
          }
        >
          <ul>
            <li>
              <a href="#contact-info">Kontakt</a>
            </li>
            <div className={classes.divider}></div>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
