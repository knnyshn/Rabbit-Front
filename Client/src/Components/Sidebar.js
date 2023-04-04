// import logo from './logo.svg';
import '../Styles/global.css';
import React from 'react';

export default function Sidebar() {
  const menus = [
    { to: '/burrow/popular', text:"Popular"},
    { to: '/burrow/all', text:"All"},
    { to: '/burrow/random', text: "Random"}
  ]
  const burrows =[
    "music",
    "gaming",
    "anime",
    "existentialcrisis"
  ]
  
  return (
    <div className="sidebar">
      <div className='sidebar-link'>
        <ul className='sidebar-menu'>
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
  );
}

