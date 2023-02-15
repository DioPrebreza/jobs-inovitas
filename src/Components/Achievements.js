import React from "react";

import classes from "./Achievements.module.css";
import AchievementsSlider from "./AchievementsSlider";

const Achievements = () => {
  return (
    <div>
      <div className={classes.achievementsDesktop}>
        <div className={classes.achievementCard}>
          <div className={classes.img} />
          <h5>
            Swiss Economic Award 2015 - <br /> Winner
          </h5>
        </div>
        <div className={classes.achievementCard}>
          <div className={classes.img} />
          <h5>
            EY Entrepreneur Of The Year 2016 - <br /> Finalist
          </h5>
        </div>
        <div className={classes.achievementCard}>
          <div className={classes.img} />
          <h5>
            Swiss Export Awards 2017 - <br /> Finalist
          </h5>
        </div>
        <div className={classes.achievementCard}>
          <div className={classes.img} />
          <h5>
            Green Business Award 2022 - <br /> Nominee
          </h5>
        </div>
      </div>
      <div className={classes.achievementsMobile}>
        <AchievementsSlider />
      </div>
    </div>
  );
};

export default Achievements;
