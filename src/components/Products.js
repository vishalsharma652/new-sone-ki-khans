import React from "react";


function Products() {
  return (
    <section className="product_section layout_padding Slider-padding-top Slider-padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 className="font-size">
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          {["home-image-9.jpeg", "home-image-6.jpg","home-image-7.jpeg","compressed_home-image-4.jpg", "home-image-2.jpg", "home-image-3.jpg"].map((image, index) => (
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

export default Products;
