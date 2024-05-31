import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
