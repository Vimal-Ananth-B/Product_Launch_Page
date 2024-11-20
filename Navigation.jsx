const Navigation = ({ darkMode, toggleDarkMode }) => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="darkbtn" onClick={toggleDarkMode}>
        Lights {darkMode ? "On" : "Off"}
      </button>
        <button>login</button>
      </nav>
    );
  };
  
  export default Navigation;