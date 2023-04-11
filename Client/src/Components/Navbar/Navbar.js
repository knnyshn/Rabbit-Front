import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DarkMode from './Darkmode';

function NavBar() {
  return (
    <div id="navbar" className="nav-container">
      <div className="logo">
        <Link to={`/`}>
          <img src="/Rabbit.jpeg" alt="logo" />
        </Link>
        <h2 className="title">Rabbit</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <ul className="nav-links">
        <li><a href="Home">Home</a></li>
        <li><a href="About">About</a></li>
        <li>
          <Link to="/signup">Login</Link>
        </li>
      </ul>
      <DarkMode />
    </div>
  );
}

export default NavBar;
