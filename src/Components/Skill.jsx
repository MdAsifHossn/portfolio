import React from "react";
import "./CSS/Skill.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiMongodb,
  SiJava,
  SiApache,
} from "react-icons/si";

const Skill = ({ textColor, color }) => {
  const initialStyle = {
    color: textColor,
  };
  const imageCardStyle = {
    boxShadow: `${textColor + "80"} 5px 5px 15px`,
  };

  return (
    <div id="skills" style={initialStyle}>
      <div className="skillsContainer">
        <p className="skillTitle" style={{ color: color }}>
          SKILLS
        </p>
        <div className="skillDetailContainer">
          <p style={{ color: color }}>I AM GOOD AT</p>
          <div className="skillCardContainer">
            <div className="skillCard" style={imageCardStyle}>
              <SiHtml5 style={{ color: "#ff3c04", fontSize: "80px" }} />
              <p>HTML</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiCss3 style={{ color: "#2965f1", fontSize: "80px" }} />
              <p>CSS</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiJavascript style={{ color: "#ffcc00", fontSize: "80px" }} />
              <p>JavaScript</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiReact style={{ color: "#61DBFB", fontSize: "80px" }} />
              <p>React</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiNodedotjs style={{ color: "#3c873a", fontSize: "80px" }} />
              <p>Node.js</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiGithub style={{ color: "#171515", fontSize: "80px" }} />
              <p>Github</p>
            </div>
          </div>
          <p style={{ color: color }}>BASIC KNOWLEDGE</p>
          <div className="skillCardContainer">
            <div className="skillCard" style={imageCardStyle}>
              <SiMongodb style={{ color: "#4DB33D", fontSize: "80px" }} />
              <p>MongoDB</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiJava style={{ color: "#ff3c04", fontSize: "80px" }} />
              <p>Java</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <SiApache style={{ color: "#a22160", fontSize: "80px" }} />
              <p>Apache</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
