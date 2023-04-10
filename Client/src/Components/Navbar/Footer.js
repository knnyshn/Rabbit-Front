import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <h3>About Us</h3>
        <p>We spend 24/7 browsing Rabbit all day, Its the best!</p>
      </div>
      <div className="footer__section">
        <h3>Contact Us</h3>
        <p>Hotmale@hotmail.com</p>
      </div>
      <div className="footer__section">
        <h3>Location</h3>
        <p>1600 Pennsylvania Avenue NW, Washington, DC 20500</p>
      </div>
      <div className="footer__section">
        <h3>Links</h3>
        <ul>
          <li><a href="TOS">Terms of Service</a></li>
          <li><a href="Privacy Policy">Privacy Policy</a></li>
          <li><a href="FAQ">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
