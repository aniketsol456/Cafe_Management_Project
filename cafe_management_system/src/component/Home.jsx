import React from 'react';
import './Home.css';
import rice from "../assets/images/4.jpeg";
import Menu from './Menu';
import Footer from './Footer';

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
      <Footer />
      </>
    )
}

export default Home
