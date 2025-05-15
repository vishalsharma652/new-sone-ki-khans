import React from "react";

function Manproducts() {
  return (
    <section className="Slider-padding-top Slider-padding-bottom">
      <div className="container">
        <div className="heading_container heading_center pt-pb-conter">
          <h2 className="font-size">
            <span>Men's Jewellery</span> Collection
          </h2>
          <p>
            Explore our exclusive range of men’s jewellery that blends tradition
            with modernity.
            <br className=" br" />
            From minimalist pieces for everyday wear to bold statement designs
            for special events,
            <br className=" br" /> our collection is crafted to enhance your
            unique style and elevate your confidence.
          </p>
        </div>
        <div className="row">
          {[
            "naw-compressed_home-image-1.jpg",
            "new-home-image-2.jpg",
            "new-home-image-3.jpg",
            "home-new-home-6.jpg",
            "home-image-7.jpeg",
            "home-image-9.jpeg",
            "home-image-10.jpeg",
            "imageman1.jpg",
            "imageman2.jpg",
            "imageman3.jpg",
            "imageman4.jpg",
            "imageman5.jpg",
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

export default Manproducts;
