import { useState } from "react";
import "./CSS/Navbar.css";

const Navbar = ({ textColor, color, BGColor }) => {
  const initialStyle = {
    color: textColor,
  };
  const backgroundColor = {
    backgroundColor: BGColor,
  };
  const [checked, setChecked] = useState(true);
  return (
    <div style={initialStyle}>
      <nav className="navContainer" style={backgroundColor}>
        <div className="navLogo">ASIF</div>
        <input type="checkbox" id="check"></input>
        <div className="navButton" onClick={() => setChecked(!checked)}>
          <label htmlFor="check" style={{ color: checked ? textColor : color }}>
            ≡
          </label>
        </div>
        <ul className="navItems" style={backgroundColor}>
          <li>
            <a href="#home" style={initialStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={initialStyle}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" style={initialStyle}>
              Skill
            </a>
          </li>
          <li>
            <a href="#portfolio" style={initialStyle}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#education" style={initialStyle}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" style={initialStyle}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
