import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="cafe-name">Cafe.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
