import React from "react";
import "./CSS/About.css";

const About = ({ textColor, color, BGColor }) => {
  const initialStyle = {
    color: textColor,
  };
  const buttonStyle = {
    color: BGColor,
    boxShadow: textColor,
    backgroundColor: color,
  };

  const imageCardStyle = {
    boxShadow: `${textColor + "80"} 10px 10px 15px`,
  };

  return (
    <div id="about">
      <div style={initialStyle} className="allContainer">
        <p className="aboutTitle" style={{ color: color }}>
          ABOUT ME
        </p>
        <div className="allContent">
          <div className="imageContainer">
            <div className="imageCard" style={imageCardStyle}></div>
          </div>
          <div className="aboutContainer">
            <h1 style={{ color: color }}>Hello!</h1>
            <p>
              I am Md. Asif Hossain, a front-end web developer from Bangladesh.
              I have deep understanding of the technologies and the processes
              required for realising a successful web project from A to Z. I'm
              ready and eager to work to create something simple and unique.
            </p>
            <div className="emailContainer">
              <p>
                <strong>Email: </strong> mdasif.hossain1996@gmail.com
              </p>
              <p>
                <strong>Location: </strong>Dhaka, Bangladesh.
              </p>
              <p>
                <strong>Education: </strong> Education: B.Sc in C.S.E.
              </p>
              <div className="aboutBtnContaier">
                <a className="cv" href="#portfolio" style={buttonStyle}>
                  WORKS
                </a>
                <a className="cv" href="#education" style={buttonStyle}>
                  RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
