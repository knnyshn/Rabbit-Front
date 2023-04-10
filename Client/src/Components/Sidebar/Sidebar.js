import './Sidebar.css'
import '../Styles/global.css';
import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  // const [menus, setMenus] = useState([]);
  const [burrows, setBurrows] = useState([]);

  useEffect(() => {
    // // Fetch menus data from API endpoint
    // fetch('/api/menus')
    //   .then(response => response.json())
    //   .then(data => setMenus(data));

    // Fetch burrows data from API endpoint
    fetch('https://rabbit-app-back.herokuapp.com/burrows/?format=json')
      .then(response => response.json())
      .then(data => {
        // console.log(data.name)
        setBurrows(Object.values(data))
      });
  }, []);

  return (
    <div>
      <div className="sidebar">
        <div className='sidebar-menu'>
          {/* <ul className='sidebar-link'>
            {menus.map(menu => (
              <li key={menu.to}><a href={menu.to}>{menu.text}</a></li>
            ))}
          </ul>
          <hr /> */}
          <ul className='sidebar-burrows'>
            {burrows.map(burrow => (
              <li key={burrow.id}><a href={`/burrow/${burrow.name}`}>{burrow.name}</a></li>
            ))}
          </ul>
        </div>
      </div> 
    </div>  
  );
}

