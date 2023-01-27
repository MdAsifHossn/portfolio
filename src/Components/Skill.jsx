import React from "react";
import "./CSS/Skill.css";

const Skill = ({ textColor, color, BGColor }) => {
  const initialStyle = {
    color: textColor,
  };

  return (
    <div id="skills" style={initialStyle}>
      <div className="skillsContainer">
        <p className="title" style={{ color: color }}>
          SKILLS
        </p>
        <div className="skillDetailContainer">
          <p style={{ color: color }}>I AM GOOD AT</p>
          <div className="skillCardContainer">
            <div className="skillCard"></div>
            <div className="skillCard"></div>
            <div className="skillCard"></div>
            <div className="skillCard"></div>
            <div className="skillCard"></div>
            <div className="skillCard"></div>
          </div>
          <p style={{ color: color }}>BASIC KNOWLEDGE</p>
          <div className="skillCardContainer">
            <div className="skillCard"></div>
            <div className="skillCard"></div>
            <div className="skillCard"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
