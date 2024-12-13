import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function BigSilder () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <section className="breeder-gallery-area breeder-gallery-padding adoption-padding-right">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <Slider className="breeder-gallery-active" {...settings}>
              <div className="breeder-gallery-item">
                <img src="image/silder-image-1.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="image/silder-image-2.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="image/silder-image-3.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="image/silder-image-4.jpg" alt="" />
              </div>
              <div className="breeder-gallery-item">
                <img src="image/silder-image-5.jpg" alt="" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-6">
            <div className="adoption-content adoption-padding-right">
              <h2 className="sub-title main-slider-font-weight">
                Discover Our Exquisite Jewelry Collection!
              </h2>
              <h2 className="title font-size main-slider-font-weight">
                Explore Our Customizable <span>Jewelry </span>Collection
              </h2>
              <p className="text-justify">
                Step into a world of elegance and charm with our exclusive
                jewelry collection, designed to add a touch of sophistication to
                your style. Each piece in our collection is a testament to fine
                craftsmanship, blending tradition with modern artistry. Whether
                you're searching for the perfect piece for a special occasion or
                something unique to elevate your everyday look, our jewelry
                offers unmatched quality and style.
              </p>

              <Link
                to="/#"
                className="btn main-slider-font-weight"
                tabIndex="-1"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigSilder;
