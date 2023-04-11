import './Sidebar.css';
import '../../Styles/global.css';
import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [burrows, setBurrows] = useState([]);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    fetch('https://rabbit-app-back.herokuapp.com/burrows/?format=json')
      .then(response => response.json())
      .then(data => {
        setBurrows(Object.values(data))
      });
  }, []);

  const handleToggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  return (
    <div>
      <button onClick={handleToggleSidebar} className={sidebarActive ? 'sidebar-active-button' : ''}>Toggle Sidebar</button>
      <div id="sidebar" className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className='sidebar-menu'>
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
