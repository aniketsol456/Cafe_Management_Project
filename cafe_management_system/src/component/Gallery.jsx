import React from 'react';
import './Gallery.css'; // Import the CSS file
import I1 from '../assets/images/17.jpg';
import I2 from '../assets/images/18.jpg';
import I3 from '../assets/images/19.jpg';
import I4 from '../assets/images/20.jpg';

const Gallery = () => {
  const imagePaths = [I1, I2, I3, I4];

  const getRandomWidth = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const renderImage = (imagePath) => {
    const width = getRandomWidth(200, 400);
    const height = getRandomWidth(400, 500);

    return (
      <img
        key={imagePath}
        src={imagePath}
        alt="Gallery Image"
        style={{ width: `${width}px`, height: `${height}px`, margin: '10px' }}
      />
    );
  };

  return (
    <div className='Gallery'>
      <h1>Memories</h1>
      <div className="image-container">
        {imagePaths.map((path) => renderImage(path))}
      </div>
    </div>
  );
};

export default Gallery;
