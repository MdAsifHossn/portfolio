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
              <img src={htmlImg} alt="" width="80px" />
              <p>HTML</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={cssImg} alt="" width="80px" />
              <p>CSS</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={jsImg} alt="" width="80px" />
              <p>JavaScript</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={reactImg} alt="" width="110px" />
              <p>React</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={nodeImg} alt="" width="80px" />
              <p>Node.js</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={githubImg} alt="" width="80px" />
              <p>Github</p>
            </div>
          </div>
          <p style={{ color: color }}>BASIC KNOWLEDGE</p>
          <div className="skillCardContainer">
            <div className="skillCard" style={imageCardStyle}>
              <img src={mongoImg} alt="" width="80px" />
              <p>MongoDB</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={javaImg} alt="" width="80px" />
              <p>Java</p>
            </div>
            <div className="skillCard" style={imageCardStyle}>
              <img src={apacheImg} alt="" width="80px" />
              <p>Apache</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
