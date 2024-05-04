import React ,{useState} from 'react';
import './Home.css';
import rice from "../assets/images/4.jpeg";
import Menu from './Menu';
import Footer from './Footer';
// import Cart from './Cart';
import Chef from './Chef';
import Gallery from './Gallery';

const Home = () => { 
  
  const [cart, setCart] = useState([]);
  
  
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
      <Menu cart={cart} setCart={setCart} />
      <Gallery/>
      <Chef/>
      <Footer />
      {/* <Cart cart={cart} setCart={setCart}/> */}
     
      </>
    )
}

export default Home
