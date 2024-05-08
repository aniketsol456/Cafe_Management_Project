import React from 'react';
import './Gallery.css'; // Import the CSS file

import image1 from '../assets/images/17.jpg';
import image2 from '../assets/images/18.jpg';
import image3 from '../assets/images/19.jpg';
import image4 from '../assets/images/20.jpg';
import image5 from '../assets/images/21.jpg';
import image6 from '../assets/images/22.jpg';
import image7 from '../assets/images/23.jpg';
import image8 from '../assets/images/24.jpg';
import image9 from '../assets/images/25.jpg';
import image10 from '../assets/images/26.jpg';
import image11 from '../assets/images/27.jpg';
import image12 from '../assets/images/28.jpg';
import image13 from '../assets/images/29.jpg';
import image14 from '../assets/images/30.jpg';
import image15 from '../assets/images/31.jpg';
import image16 from '../assets/images/32.jpg';
import image17 from '../assets/images/33.jpg';
import image18 from '../assets/images/34.jpg';
import image19 from '../assets/images/35.jpg';
import image20 from '../assets/images/36.jpg';

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>----------Gallery----------</h1>
      <div className="card-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt={`Image ${index + 1}`} className="card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
