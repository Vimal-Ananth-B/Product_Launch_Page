import "./App.css";
import React, { useState } from "react";
import HeroSection from "./Components/Hero";
import Navigation from "./Components/Navigation";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
    </div>
  );
};

export default App;
