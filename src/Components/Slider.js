// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import classes from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        // modules={[Autoplay]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery3.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery4.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery5.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery6.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery7.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery8.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery0.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery1.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery2.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery3.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery4.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery5.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery6.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img
            src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/gallery7.jpeg"
            alt="slider-photo"
            style={{ width: "300px", height: "450px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
