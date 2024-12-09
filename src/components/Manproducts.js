import React from 'react'

function Manproducts() {
  return (
    <section className="product_section layout_padding">
    <div className="container">
      <div className="row">
        {[
          "compressed_home-image-1.jpg",
          "compressed_home-image-2.jpg",
          "compressed_home-image-3.jpg",
          "compressed_home-image-4.jpg",
          "home-image-2.jpg",
          "home-image-3.jpg",
          "home-image-6.jpg",
          "home-image-7.jpeg",
          "home-image-9.jpeg",
          "home-image-10.jpeg",
        //   "home-image-111.jpg",
          "imageman1.jpg",
          "imageman2.jpg",
          "imageman3.jpg",
          "imageman4.jpg",
          "imageman5.jpg",
        //   "imageman7.jpg",
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
  )
}

export default Manproducts