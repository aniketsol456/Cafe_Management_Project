import React from 'react';
import './Home.css';
import rice from "../assets/images/4.jpeg";
import Menu from './Menu';
import Footer from './Footer';
import Chef from './Chef';
import Gallery from './Gallery';

const Home = () => {  
  return (
    <><div className="home-container">
          <div className="greetings">
              <h1>Welcome to our Cafe!</h1>
              <p>Experience the taste of our delicious dishes.</p>
          </div>
          <div className="dish-photo">
              <img src={rice} alt="" />
          </div>
      </div>
      <Menu />
      <Gallery/>
      <Chef/>
      <Footer />
     
      </>
    )
}

export default Home
