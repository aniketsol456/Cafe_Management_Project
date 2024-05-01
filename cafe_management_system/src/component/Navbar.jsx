import React, { useState } from 'react';
import './Navbar.css';
import search_logo from '../assets/images/search_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = ({ cart, setCart }) => {
  const navigate = useNavigate(); // Initialize navigate function
  const [navClassname, setNavclassname] = useState('navitems');

  const toggleMenu = () => {
    setNavclassname(navClassname === 'navitems' ? 'navitems responsive' : 'navitems');
  };

  const openCartPage = () => { // Function to handle navigation to the Cart page
    navigate('/cart'); // Use navigate to change route
  };

  return (
    <div className='navBar'>
        <h1>Cafe<span>.</span></h1>
        <div className="menutoggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={navClassname}>
          <ul>
            <a href="/"> Home </a>
            <a href="/menu"> Menu </a>
            <a href="/gallery"> Gallery </a>
            <a href="/chef"> Chef </a>
            <a href="/blog"> Blog </a>
            <a href="/about"> About US </a>
            <a href="/sign-up"> Signup/Login </a>
          </ul>
        </div>
        <FontAwesomeIcon icon={faShoppingCart} onClick={openCartPage} className='cartIcon'/>
        <div className='searchBox'>
            <input type="text" placeholder='Search'/>
            <img src={search_logo} alt="Search"/>
        </div>
        <div className="barIcon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>
  );
}

export default Navbar;
