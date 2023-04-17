import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <h3>About Us</h3>
        <p>Learn more about our company and mission.</p>
      </div>
      <div className="footer__section">
        <h3>Contact Us</h3>
        <p>Get in touch with us for any questions or inquiries.</p>
      </div>
      <div className="footer__section">
        <h3>Location</h3>
        <p>Find out where we are located and how to get in touch.</p>
      </div>
      <div className="footer__section">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
