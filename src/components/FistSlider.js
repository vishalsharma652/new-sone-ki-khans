import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function FistSlider() {
  const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,

    responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
  };

  return (
    <section className="slider-area">
      <Slider className="slider-active" {...settings}>
        <div>
          <div
            className="single-slider slider-min-height d-flex align-items-center slider-height home-pg-background-position"
            style={{ backgroundImage: "url('/image/Home-Banner-5.jpg')" }}
          ></div>
        </div>
      </Slider>
    </section>
  );
}

export default FistSlider;
