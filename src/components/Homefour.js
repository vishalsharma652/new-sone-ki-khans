import React from "react";
import { Link } from "react-router-dom";

function Adoption() {
  return (
    <section className="adoption-area adoption-area-padding Slider-padding-bottom Slider-padding-top ">
      <div className="container">
        <div className="row align-items-center align-items-xl-end justify-content-center">
          <div className="col-lg-6 col-md-10 order-0 order-lg-2">
            <div className="adoption-img">
              <img src="image/shop-img.jpg" alt=""  className="image-width"/>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="adoption-content">
              <h2 className="title adoption-font-weight">
                Who <span>we</span> are ?
              </h2>
              <p className="text-justify">
                Welcome to Shree Ram Imitation, where elegance meets
                craftsmanship. Discover our exquisite collection of fine
                jewelry, ranging from timeless gold and diamond pieces to
                contemporary designs that define sophistication. Our collection
                is carefully curated to bring you a unique selection of rings,
                necklaces, bracelets, and more, crafted to perfection. Whether
                you're looking for a statement piece or a meaningful gift, our
                jewelry embodies quality and artistry that will be cherished for
                generations. Step into a world of beauty and elegance with Shree
                Ram Imitation.
              </p>
              <Link
                to="tel:9920165523"
                aria-label=""
                className="btn main-slider-font-weight"
              >
                CALL NOW{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Adoption;
