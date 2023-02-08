import React from "react";
import "./CSS/Skill.css";
import htmlImg from "../Logo/html.png";
import cssImg from "../Logo/css.png";
import jsImg from "../Logo/js.png";
import reactImg from "../Logo/react.png";
import nodeImg from "../Logo/node.png";
import githubImg from "../Logo/github.png";
import mongoImg from "../Logo/mongo.png";
import javaImg from "../Logo/java.png";
import apacheImg from "../Logo/apache.png";

import { AiFillHtml5 } from "react-icons/ai";

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
              <AiFillHtml5 style={{ color: "#ff3c04", fontSize: "80px" }} />
              <p>HTML</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="css" src={cssImg} alt="logo" />
              <p>CSS</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="js" src={jsImg} alt="logo" />
              <p>JavaScript</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="react" src={reactImg} alt="logo" />
              <p>React</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="node" src={nodeImg} alt="logo" />
              <p>Node.js</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="github" src={githubImg} alt="logo" />
              <p>Github</p>
            </div>
          </div>
          <p style={{ color: color }}>BASIC KNOWLEDGE</p>
          <div className="skillCardContainer">
            <div className="skillCard" style={imageCardStyle}>
              <img className="mongo" src={mongoImg} alt="logo" />
              <p>MongoDB</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="java" src={javaImg} alt="logo" />
              <p>Java</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img className="apache" src={apacheImg} alt="logo" />
              <p>Apache</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
