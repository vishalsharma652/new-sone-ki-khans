import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="pt-5 arrival-bg-color ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <div className="text-center mb-4">
                <Link to="/">
                  <img
                    src="image/logo-sone-ki-khans.webp"
                    alt="Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <p className="text-center">
                Elevate Your Style with Our Exquisite Jewelry Collection at
                Shone Ki Khan Jaipur
              </p>
            </div>
            <div className="col-md-3 col-6">
              <h5 className="fw-bold">Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="footer-text-color">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="footer-text-color">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="footer-text-color">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <h5 className="fw-bold">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.instagram.com/sone_ki_khan_jaipur/profilecard/?igsh=MXRsZjB1NGZnbmxxOA=="
                     target="_blank"
                    className="footer-text-color"
                  >
                    <FaInstagram className="social-mida-icons" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/9920165523"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-text-color"
                  >
                    <IoLogoWhatsapp className="social-mida-icons" /> Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Address</h5>
              <div className="d-flex mb-2 list-unstyled footer-contact">
                <div className="icon">
                  <FaLocationDot />
                </div>
                <a
                  href="https://maps.app.goo.gl/q3dx7aekmUQuSpM9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-text-color ms-2"
                  aria-label="Shop Location"
                >
                  Shop no.157, Patrakar Rd, Mahima Nagar, Khejdo Ka Vas,
                  Mansarovar, Jaipur, Rajasthan 302020
                </a>
              </div>
              <div className="d-flex  list-unstyled footer-contact">
                <div className="icon">
                  <FaPhone />
                </div>
                <h2>
                  <a
                    href="tel:9920165523"
                    className="footer-text-color footer-number-font-size"
                    aria-label="Call Now"
                  >
                    +91 9920165523
                  </a>
                  <spen className="span">Call Now</spen>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3 arrival-bg-color">
        <span className="footer-text-color">
          Copyright © Sone Ki Khan Jaipur. All Rights Reserved.
        </span>
      </div>
    </>
  );
}

export default Footer;
