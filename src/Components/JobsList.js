import React from "react";

import classes from "./JobsList.module.css";

const jobs = [
  {
    title: "Geoinformationsexperte / -expertin 80-100%",
    location: "CH-5400 Baden",
    date: "04/01/2023",
    link: "https://link.ostendis.com/publication/geoinformationsexperte/o8j3541c6ec5xytqbl3rytpgerp7ysnzzs00kxzyo3w58tyet9sonzx6zmzr618y",
    img: "https://jobs.inovitas.ch/wp-content/uploads/2022/06/data1.png",
  },
  {
    title: "Senior Web-Frontend Software Developer:in 80-100%",
    location: "CH-5400 Baden",
    date: "04/01/2023",
    link: "https://link.ostendis.com/publication/geoinformationsexperte/o8j3541c6ec5xytqbl3rytpgerp7ysnzzs00kxzyo3w58tyet9sonzx6zmzr618y",
    img: "https://jobs.inovitas.ch/wp-content/uploads/2022/06/researchndev.png",
  },
];

const JobsList = () => {
  return (
    <div className={classes.jobsList}>
      <h1 className={classes.listTitle}>
        Finde Deinen Job, den Du lieben wirst:
      </h1>
      {jobs.map((job) => {
        return (
          <div className={classes.jobContainer}>
            <div className={classes.jobPhoto}>
              <img src={job.img} alt="job img" className={classes.jobImg} />
            </div>
            <div className={classes.rightJob}>
              <h3 className={classes.jobTitle}>
                <a href={job.link}>{job.title}</a>
              </h3>
              <div className={classes.infoContainer}>
                <p className={classes.jobInfo}>{job.location}</p>
                <p className={classes.jobInfo}>{job.date}</p>
              </div>
              <button className={classes.jobButton}>
                <a href={job.link}>Jetzt bewerben</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobsList;
