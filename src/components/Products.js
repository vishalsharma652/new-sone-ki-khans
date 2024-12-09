import React from "react";


function Products() {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          {["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "home-image-8.jpeg"].map((image, index) => (
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
