import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./Themes";

function Darkmode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = theme === "light" ? lightTheme : darkTheme;
    Object.keys(currentTheme).forEach((key) => {
      document.body.style.setProperty(`--${key}`, currentTheme[key]);
    });
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This is some text that will be styled based on the current theme.</p>
    </div>
  );
}

export default Darkmode;
