import React from "react";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="navLogo">ASIF</div>
      <input type={"checkbox"} id={"check"}></input>
      <div className="navButton">
        <label htmlFor="check">≡</label>
      </div>
      <ul className="navItems">
        <li>
          <a target={"_blank"} href="">
            Home
          </a>
        </li>
        <li>
          <a target={"_blank"} href="">
            About
          </a>
        </li>
        <li>
          <a target={"_blank"} href="">
            Education
          </a>
        </li>
        <li>
          <a target={"_blank"} href="">
            Skill
          </a>
        </li>
        <li>
          <a target={"_blank"} href="">
            Portfolio
          </a>
        </li>
        <li>
          <a target={"_blank"} href="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
