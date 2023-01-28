import React from "react";
import "./CSS/Skill.css";

const Skill = ({ textColor, color }) => {
  const initialStyle = {
    color: textColor,
  };
  const imageCardStyle = {
    boxShadow: `${textColor + "80"} 10px 10px 15px`,
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
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
          </div>
          <p style={{ color: color }}>BASIC KNOWLEDGE</p>
          <div className="skillCardContainer">
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
            <div className="skillCard" style={imageCardStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
