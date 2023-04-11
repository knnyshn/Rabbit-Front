import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = '#333333';
      document.querySelector('button').style.backgroundColor = '#333333';
      document.querySelector('button').style.color = 'gray';
      document.getElementById('sidebar').style.backgroundColor = "#5A5A5A";
      document.getElementById('navbar').style.backgroundColor = "#5A5A5A";
      document.getElementById('footer').style.backgroundColor = "#5A5A5A";
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.querySelector('button').style.backgroundColor = '';
      document.querySelector('button').style.color = '';
      document.getElementById('sidebar').style.backgroundColor = '';
      document.getElementById('navbar').style.backgroundColor = '';
      document.getElementById('footer').style.backgroundColor = '';
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkMode;
