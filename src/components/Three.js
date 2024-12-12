import React from "react";
import { Link } from "react-router-dom";
import { FaAmazon, FaShoppingCart, FaFacebook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Three() {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Why Shop With Us</h2>
        </div>
        <div className="row">
          {/* Shop on Amazon */}
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <FaAmazon size={80} color="#FF9900" />
              </div>
              <div className="detail-box">
                <h5 className="text-color">Shop Our Jewelry on Amazon</h5>
                <p>
                  Explore a curated selection of our finest jewelry pieces now
                  available on Amazon, offering you the convenience and security
                  of shopping on a trusted platform.
                </p>
                <Link to="/" aria-label="Shop Now" className="read-more">
                  Shop Now <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>

          {/* Shop on Flipkart */}
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <FaShoppingCart size={80} color="#F28705" />
              </div>
              <div className="detail-box">
                <h5 className="text-color">Discover Our Complete Jewelry Collection on Flipkart</h5>
                <p>
                  Browse our entire jewelry collection on Flipkart, featuring a
                  diverse range of stunning designs and customizable options to
                  suit every style.
                </p>
                <Link to="/" aria-label="Shop Now" className="read-more">
                  Shop Now <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>

          {/* Shop on Facebook */}
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <FaFacebook size={80} color="#3b5998" />
              </div>
              <div className="detail-box">
                <h5 className="text-color">Engage with Our Jewelry Collection on Facebook Shop</h5>
                <p>
                  Join us on Facebook Shop to stay connected with our latest
                  arrivals and exclusive collections. Discover new designs,
                  learn about our brand story, and enjoy special offers.
                </p>
                <Link to="/" aria-label="Shop Now" className="read-more">
                  Shop Now <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Three;
