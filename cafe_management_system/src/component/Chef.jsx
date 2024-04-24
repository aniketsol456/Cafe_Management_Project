import React from 'react';
import './Chef.css';
import Footer from './Footer';
import Chef1 from '../assets/images/chef1.jpeg';
import Chef2 from '../assets/images/chef2.jpg';
import Chef3 from '../assets/images/chef3.jpg';
import Chef4 from '../assets/images/chef4.jpg';
import Chef5 from '../assets/images/chef5.jpg';



const Chef = () => {
  return (
    <>
    <div className="header"><h1>---------Our Chef---------</h1></div>
    <div className='Chef'>
      
      <div className="Photos">
        <div className="photo">
          <img src= {Chef1} alt = ''/>
        </div>
        <div className="photo">
          <img src= {Chef2} alt = ''/>
        </div>
        <div className="photo">
          <img src= {Chef3} alt = ''/>
        </div>
        <div className="photo">
          <img src= {Chef4} alt = ''/>
        </div>
        <div className="photo">
          <img src= {Chef5} alt = ''/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chef
