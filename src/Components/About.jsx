import React from "react";
import "./CSS/About.css";
import cover from "./Pic/passport.png";

const About = ({ textColor, color, BGColor }) => {
  const initialStyle = {
    color: textColor,
  };
  const buttonStyle = {
    color: BGColor,
    boxShadow: textColor,
    backgroundColor: color,
  };

  return (
    <div id="about">
      <div style={initialStyle} className="allContainer">
        <p className="aboutTitle" style={{ color: color }}>
          ABOUT ME
        </p>
        <div className="allContent">
          <div className="imageContainer">
            <img src={cover} alt="myPhoto" width="250px" />
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
                <a
                  className="cv"
                  href="https://drive.google.com/drive/u/0/folders/1j4DJInAlCUYxeJ7W0zLfCQjEc8j_p6hU"
                  target="_blank"
                  rel="noreferrer"
                  style={buttonStyle}
                >
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
