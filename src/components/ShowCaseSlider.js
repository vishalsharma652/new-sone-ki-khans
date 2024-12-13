"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function ShowCaseSlider() {
  const sliderRef = useRef();
  // const sliderNext = () => {
  //     sliderRef.current.slickNext();
  // };
  // const sliderPrev = () => {
  //     sliderRef.current.slickPrev();
  // };
  const settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="Slider-padding-top Slider-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-65">
              <h1 className="sub-title main-slider-font-weight">
                Our Services
              </h1>
              <h2 className="title font-size main-slider-font-weight">
                Custom Jewelry Creations
              </h2>
              <p className="text-justify">
                At Shone Ki Khan Jaipur, we specialize in crafting bespoke
                jewelry pieces tailored to your personal style and preferences.
                Whether you're designing a custom engagement ring or a unique
                gift, our team is dedicated to bringing your vision to life. We
                offer personalized consultations, expert craftsmanship, and a
                seamless experience from concept to creation. Let us help you
                design a piece that is as unique as you are.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider ref={sliderRef} {...settings}>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-5.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="appie-showcase-item mt-30">
                  <div className="appie-image-popup">
                    <img src="image/silder-image-5.jpg" alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCaseSlider;
