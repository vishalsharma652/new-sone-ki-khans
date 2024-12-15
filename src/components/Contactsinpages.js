import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contactsinpages() {
  return (
    <>
      <div>
        <section className="banner-main-con about-page-main-banner-con Slider-padding-top Slider-padding-bottom">
          <div className="container">
            <div className="banner-con about-page-banner-con text-center">
              <div className="row wow slide-in-left slideInLeft">
                <div className="col-lg-12">
                  <div className="about-page-banner-title">
                    <h1>Contact Us</h1>
                    <p className="mb-0 color-black-p">
                      We would love to hear from you! Whether you’re interested
                      in our exquisite jewelery collections or have a question
                      <br />
                      about a custom design, feel free to give us a call or
                      visit us anytime. We strive to respond to all inquiries
                      <br />
                      within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
                <div
                  className="appie-single-service-2 item-4 mt-30 wow animated fadeInUp box-margin-right-contacts-pg box-icon-margin-top-0px appie-single-service-2-addres contes-margin-top"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <a
                    href="https://maps.app.goo.gl/q3dx7aekmUQuSpM9A"
                    target="_blank"
                    className="icon"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="icon-size-30"
                    />
                  </a>
                  <h1 className="title">OFFICE ADDRESS: </h1>
                  <p className="text-align-justify text-align-center">
                    Shop no.157, Patrakar Rd, Mahima Nagar, Khejdo Ka Vas,
                    Mansarovar, Jaipur, Rajasthan 302020
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 container overlay-content pt-70">
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div
                    className="appie-single-service-2 item-6 mt-30 wow animated fadeInUp tb-g box-icon-margin-top-0px contes-margin-top"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <a
                      href="tel:9920165523"
                      aria-label="number"
                      className="icon"
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="rotate-custom icon-size-30"
                      />
                    </a>
                    <h1 className="title">CALL US ON</h1>
                    <p className="text-align-justify text-align-center">
                      +91 9920165523
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-7">
                  <div
                    className="appie-single-service-2 appie-single-service-2-mail item-5 mt-30 wow animated fadeInUp box-padding-bottom-contacts-pg box-icon-margin-top-0px contes-margin-top"
                    data-wow-duration="2000ms"
                    data-wow-delay="400ms"
                  >
                    <a
                      href="mailto:R.k.choudhary5523@gmail.com"
                      aria-label="text"
                      className="icon"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-size-30"
                      />
                    </a>
                    <h1 className="title">MAIL US</h1>
                    <p className="text-align-justify text-align-center">
                      R.k.choudhary5523@gmail.com{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactsinpages;
