import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo">
      <Link to={`/`}>
      <img src="/Rabbit.jpeg" alt="logo" />
      </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
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
