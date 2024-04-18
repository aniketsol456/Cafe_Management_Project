import React from 'react';
import './Footer.css'; // Importing CSS file for styling


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Your cafe's description goes here...</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> 123-456-7890</span>
            <span><i className="fas fa-envelope"></i> info@yourcafe.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
