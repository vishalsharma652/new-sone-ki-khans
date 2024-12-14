import React from "react";

function Womanproducts() {
  return (
    <section className="Slider-padding-top Slider-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="heading_container heading_center pt-pb-conter">
            <h2 className="font-size">
              <span>Women's Jewellery</span> Collection
            </h2>
            <p>
              Discover an enchanting collection of jewellery crafted to enhance
              every woman’s unique charm.
              <br className=" br" /> From traditional classics to modern
              designs, our pieces are perfect for every occasion, whether
              <br className=" br" /> it's a wedding, a party, or your everyday
              look.
            </p>
          </div>
          {[
            // "image-woham.jpeg",
            "image12.jpg",
            "imagewoman-4.jpg",
            //   "imagewoman-5.jpg",
            "imagewoman-6.jpg",
            //   "imagewoman-7.jpg",
            //   "imagewoman-8.jpg",
            //   "imagewoman-9.jpg",
            "imagewoman-10.jpg",
            //   "imagewoman-11.jpg",
            "imagewoman-14.jpg",
            "imagewoman-15.jpg",
            "image-11.jpg",
            "image-12.jpg",
            //   "image-13.jpg",
            //   "image-14.jpg",
            //   "image-1.jpg",
            "image-3.jpg",
            "home-image-25.jpg",
            "home-image-26.jpg",
            "home-image-27.jpg",
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

export default Womanproducts;
