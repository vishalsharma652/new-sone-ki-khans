import React from "react";

function Productscategories() {
  return (
    <section className="Slider-padding-top Slider-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="heading_container heading_center pt-pb-conter">
            <h2 className="font-size">
              Explore Our <span>Exquisite Jewelry Range</span>
            </h2>
            <p>
              Discover our stunning range of jewelry, from timeless classics to
              contemporary designs. Explore our collections to{" "}
              <br className=" br" />
              adorn yourself with elegance, sophistication, and unmatched
              craftsmanship.
            </p>
          </div>

          {[
            "naw-compressed_home-image-1.jpg",
            "home-image-111.jpg",
            "compressed_home-image-new-4.jpg",
            "new-home-image-2.jpg",
            "new-home-image-3.jpg",
            "home-new-home-6.jpg",
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
            "categories-images-2.jpg",
            "woman-image-1.jpg",
            "woman-images-5.jpg",
            "categories-images-3.jpg",
            "categories-images-4.jpg",
            "categories-images-6.jpg",
            "categories-images-7.jpg",
            "categories-images-8.jpg",
            "categories-images-9.jpg",
            "categories-images-10.jpg",
            "categories-images-11.jpg",
            "categories-images-12.jpg",
            "categories-images-13.jpg",
            "categories-images-15.jpg",
            "categories-images-16.jpg",
            "categories-images-17.jpg",
            "categories-images-18.jpg",
            "categories-images-19.jpg",
            "categories-images-20.jpg",
            "categories-images-21.jpg",
            "categories-images-22.jpg",
            "categories-images-24.jpg",
            "categories-images-25.jpg",
            "categories-images-5.jpg",
            // "categories-images-27.jpg",
            // "images-41.jpg",
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
