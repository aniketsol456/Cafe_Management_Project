import React from "react";
import { Link } from 'react-router-dom';
import styles from '../css_pages/Nav_bar.css'; 

function NavBar(){
    return(
        <div>
            <header id="header" className="Item-center">
                <div className="Navbar1">
                    <Link to="#" className="Navbar2">
                        <h1>Cafe<span>.</span></h1>
                    </Link>
                    <nav id="navbar" className="NavBar3">
                        <ul>
                            <li><Link to="#home">Home</Link></li>
                            <li><Link to="#menu">Menu</Link></li>
                            <li><Link to="#gallery">Gallery</Link></li>
                            <li><Link to="#chefs">Chefs</Link></li>
                            <li><Link to="#aboutus">About us</Link></li>
                            <li><Link to="#login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
export default NavBar;
