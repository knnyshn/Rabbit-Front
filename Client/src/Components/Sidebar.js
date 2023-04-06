// import logo from './logo.svg';
import '../Styles/global.css';
import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

// This will be the sidebar with subreddits. Usually they are on top in classic Reddit.

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menus = [
    { to: '/burrow/popular', text:"Popular"},
    { to: '/burrow/all', text:"All"},
    { to: '/burrow/random', text: "Random"}
  ]
  const burrows =[
    "Music",
    "Gaming",
    "Anime",
    "ExistentialCrisis",
    "ZoomersVSBoomers",
    "RabbitJustice",
    "DogsBetterThanCats"
  ]
  
  return (
    <div>
      {/* Button to toggle the container */}
      <div className={`transition-height duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'h-auto' : 'h-0'}`}>
      </div>

      <div className="sidebar">
        <div className='sidebar-menu'>
          <ul className='sidebar-link'>
              { menus.map(menu => (
                    <li><a href={menu.to}>{menu.text}</a></li>
              ))}
          </ul>
          <hr />
          <ul className='sidebar-burrows'>
              { burrows.map(burrow => (
                    <li><a href={`/burrow/${burrow}`}>{burrow}</a></li>
              ))}
          </ul>

        </div>
      </div> 
      </div>  

  );
}

