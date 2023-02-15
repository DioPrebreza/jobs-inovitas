import React from "react";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <div>
      <div className={classes.servicesContainer}>
        <h1>Bereiche mit offenen Stellen:</h1>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/icloud1.png"
              alt="placeholder"
            />
            <h5>IT & Cloud Computing</h5>
          </div>
          <div className={classes.card}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/researchndev.png"
              alt="placeholder"
            />
            <h5>Research & Development</h5>
          </div>
          <div className={classes.card}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/marketingg.png"
              alt="placeholder"
            />
            <h5>Marketing & Pre-Sales</h5>
          </div>
          <div className={classes.card}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/key1.png"
              alt="placeholder"
            />
            <h5>Key Account Managemenet</h5>
          </div>
          <div className={classes.card}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/product1.png"
              alt="placeholder"
            />
            <h5>Product Management</h5>
          </div>
          <div className={classes.card}>
            <img
              src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/data1.png"
              alt="placeholder"
            />
            <h5>Mobile Mapping</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
