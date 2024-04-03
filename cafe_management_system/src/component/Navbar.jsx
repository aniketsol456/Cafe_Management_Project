import React, { useState } from 'react';
import './Navbar.css';
import search_logo from '../assets/images/search_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navClassname,setNavclassname] = useState('navitems');

  const togglemenu = ()=>{
    if (navClassname==='navitems'){
      setNavclassname('navitems responsive');
    }
    else{
      setNavclassname('navitems');
    }
  }



  return (
    <div className='navBar'>

        <h1>Cafe<span>.</span></h1>

        <div className="menutoggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={navClassname}>
          <ul>
            <a href='Home'><li>Home</li></a>
            <a><li>Menu</li></a>
            <li>Gallery</li>
            <li>Chef</li>
            <li>Blog</li>
            <li>About us</li>
            <a href='Signup'><li>Signup/Login</li></a>
        </ul>
        </div>

        <div className='searchBox'>
            <input type="text" placeholder='Search'/>
            <img src={search_logo} alt=""/>
        </div>
        
        <div className="barIcon" onClick={togglemenu}>
          <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>
  )
}

export default Navbar
