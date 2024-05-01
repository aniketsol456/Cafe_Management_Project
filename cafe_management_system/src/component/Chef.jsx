import React, { useState, useEffect } from 'react';
import './Chef.css';
import Footer from './Footer';
import Chef1 from '../assets/images/chef1.jpg';
import Chef2 from '../assets/images/chef2.jpg';
import Chef3 from '../assets/images/chef3.jpg';
import Chef4 from '../assets/images/chef4.jpg';
import Chef5 from '../assets/images/chef5.jpg';

const chefs = [
  { id: 1, name: 'Chef John Doe', image: Chef1 },
  { id: 2, name: 'Chef Jane Smith', image: Chef2 },
  { id: 3, name: 'Chef Max Payne', image: Chef3 },
  { id: 4, name: 'Chef Alice Wonderland', image: Chef4 },
  { id: 5, name: 'Chef Luigi Bros', image: Chef5 }
];

const Chef = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % chefs.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <div className="header"><h1>---------Our Chefs---------</h1></div>
      <div className='Chef'>
        <div className="Photos">
          <div className="photo">
            <img src={chefs[index].image} alt={chefs[index].name} />
            <div className="chef-name">{chefs[index].name}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chef;
