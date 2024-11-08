import React from "react";
import "./testimoianls.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testminolias = () => {
  return (
    <section id="testmioanls">
      <h5>Reivew from clients</h5>
      <h2>Testimionals</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avtr1} alt="" />
          </div>
          <h5 className="client_name">Ersent Achiever </h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            atque officiis, at nobis provident, cupiditate commodi suscipit
            error incidunt alias impedit quidem molestiae voluptate. Cum dolore
            tempore nisi ipsam nemo.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avtr2} alt="" />
          </div>
          <h5 className="client_name">Ersent Achiever </h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            atque officiis, at nobis provident, cupiditate commodi suscipit
            error incidunt alias impedit quidem molestiae voluptate. Cum dolore
            tempore nisi ipsam nemo.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avtr3} alt="" />
          </div>
          <h5 className="client_name">Ersent Achiever </h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            atque officiis, at nobis provident, cupiditate commodi suscipit
            error incidunt alias impedit quidem molestiae voluptate. Cum dolore
            tempore nisi ipsam nemo.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avtr4} alt="" />
          </div>
          <h5 className="client_name">Ersent Achiever </h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            atque officiis, at nobis provident, cupiditate commodi suscipit
            error incidunt alias impedit quidem molestiae voluptate. Cum dolore
            tempore nisi ipsam nemo.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testminolias;
