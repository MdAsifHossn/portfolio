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
            <img src={cover} alt="myPhoto" />
          </div>
          <div className="aboutContainer">
            <h1 style={{ color: color }}>Hello!</h1>
            <p>
              I am Md. Asif Hossain, a dedicated and creative web developer with
              a passion for designing and building websites that provide an
              exceptional user experience. With expertise in a variety of
              programming languages and a strong understanding of the latest web
              technologies, I am able to bring ideas to life and create
              innovative solutions for my clients. I am a problem-solver at
              heart and enjoy the challenge of finding the best technical
              solutions to meet the needs of my clients. I am a team player who
              enjoys collaborating with designers, administrators, and other
              professionals to deliver high-quality results. I am constantly
              learning and expanding my skills, staying up-to-date with the
              latest developments in web development.
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
                  href="https://drive.google.com/file/d/1R4RxwGeUSaWmUStRQYijokCklycDcFOQ/view?usp=share_link"
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
