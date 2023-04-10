import React from 'react';
import './Navbar.css';

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src="/Rabbit.jpeg" alt="logo" />
      </div>
      <div className='text-logo'>
        <img src="/Assets/RABBIT.jpg" alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="Home">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Login">Login</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
