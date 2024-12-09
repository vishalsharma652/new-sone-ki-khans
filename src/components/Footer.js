import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-dark text-white py-5">
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
                  <Link
                    to="/"
                    className="text-white hover:text-red-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="text-white hover:text-red-500"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacts"
                    className="text-white hover:text-red-500"
                  >
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
                    className="text-white hover:text-red-500"
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/9920165523"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500"
                  >
                    <i className="fab fa-whatsapp" /> Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Address</h5>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-map-marker-alt" />
                <a
                  href="https://maps.app.goo.gl/q3dx7aekmUQuSpM9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ms-2 hover:text-red-500"
                  aria-label="Shop Location"
                >
                  Shop no.157, Patrakar Rd, Mahima Nagar, Khejdo Ka Vas,
                  Mansarovar, Jaipur, Rajasthan 302020
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-headphones" />
                <a
                  href="tel:9920165523"
                  className="text-white ms-2 hover:text-red-500"
                  aria-label="Call Now"
                >
                  +91 9920165523
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center py-3">
        <span className="text-white">
          Copyright © Sone Ki Khan Jaipur. All Rights Reserved.
        </span>
      </div>
    </>
  );
}

export default Footer;
