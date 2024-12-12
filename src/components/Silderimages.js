import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
  // We'll add styles in this CSS file

const images = [
  { url: 'image/silder-image-1.jpg' },
  { url: 'image/silder-image-2.jpg' },
  { url: 'image/silder-image-3.jpg' },
  { url: 'image/silder-image-4.jpg' },
  { url: 'image/silder-image-5.jpg' },
];

const Silderimages = () => {
  return (
    <div className="slider">
      <SimpleImageSlider
        width="50%" // Use 100% width for responsiveness
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true} // Optional: auto-play feature
        autoPlayDelay={2.5} // Set delay for auto play
      />
    </div>
  );
}

export default Silderimages;
