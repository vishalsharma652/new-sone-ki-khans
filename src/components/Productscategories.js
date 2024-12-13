import React from "react";

function Productscategories() {
  return (
    <section className="Slider-padding-top Slider-padding-bottom">
      <div className="container">
        <div className="row">
        <div className="heading_container heading_center pt-pb-conter">
            <h2 className="font-size">Explore Our <span>Exquisite Jewelry Range</span></h2>
            <p>
              Discover our stunning range of jewelry, from timeless classics to
              contemporary designs. Explore our collections to adorn yourself
              with elegance, sophistication, and unmatched craftsmanship.
            </p>
          </div>
          
          {[
            "compressed_home-image-1.jpg",
           "home-image-111.jpg",
            
            "compressed_home-image-4.jpg",
            "home-image-2.jpg",
            "home-image-3.jpg",
            "home-image-6.jpg",
            "home-image-7.jpeg",
            "home-image-9.jpeg",
            "home-image-10.jpeg",
            "home-image-13.jpg",
            "home-image-14.jpg",
            "home-image-15.jpg",
            "home-image-16.jpg",
            "home-image-17.jpg",
            "home-image-18.jpg",
            "home-image-19.jpg",
            "home-image-25.jpg",
            "home-image-26.jpg",
            // "home-image-27.jpg",
            
          ].map((image, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="product-box">
                <div className="img-box">
                  <img
                    src={`image/${image}`}
                    alt={`product-${index}`}
                    className="img-fluid rounded-3 product-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Productscategories;
