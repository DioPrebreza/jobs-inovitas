import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import classes from "./Achievements.module.css";
import "swiper/css";

const AchievementsSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className={classes.achievementsMobile}>
      <Swiper
        className={classes.swiper}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={classes.swiperSlide}>
          <div className={classes.achievementCardMobile}>
            <div className={classes.img} />
            <h5>
              Swiss Economic Award 2015 - <br /> Winner
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <div className={classes.achievementCardMobile}>
            <div className={classes.img} />
            <h5>
              EY Entrepreneur Of The Year 2016 - <br /> Finalist
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <div className={classes.achievementCardMobile}>
            <div className={classes.img} />
            <h5>
              Swiss Export Awards 2017 - <br /> Finalist
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <div className={classes.achievementCardMobile}>
            <div className={classes.img} />
            <h5>
              Green Business Award 2022 - <br /> Nominee
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={navigationPrevRef} />
      <div ref={navigationNextRef} />
    </div>
  );
};

export default AchievementsSlider;
