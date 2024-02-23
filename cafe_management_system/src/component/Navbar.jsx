import React from 'react'
import './Navbar.css'
import search_logo from '../assets/images/search_2.png'

const Navbar = () => {
  return (
    <div className='navBar'>

        <h1>Cafe<span>.</span></h1>

        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Chef</li>
            <li>Blog</li>
            <li>Aboutus</li>
            <li>Signup</li>  
        </ul>

        <div className='searchBox'>
            <input type="text" placeholder='Search'/>
            <img src={search_logo} alt=""/>
        </div>

    </div>
  )
}

export default Navbar
