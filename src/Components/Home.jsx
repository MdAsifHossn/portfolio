import React from "react";
import "./CSS/Home.css";

const Home = ({ textColor, color, BGColor }) => {
  const initialStyle = {
    color: textColor,
  };
  const cardStyle = {
    color: BGColor,
    boxShadow: `${textColor + "80"} 5px 5px 15px`,
    backgroundColor: color,
  };
  return (
    <div id="home">
      <div className="homeIntroContainer" style={initialStyle}>
        <div className="nameInfo">
          <h1 style={{ color: color }}>MD. ASIF HOSSAIN</h1>
          <p>FRONT-END WEB DEVELOPER IN BANGLADESH</p>
          <div className="homeContact">
            <a href="#contact" style={initialStyle}>
              ➤ Contact with me
            </a>
            <a href="#about" style={initialStyle}>
              ➤ About me !
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="AandS">
            <div className="letterCard" style={cardStyle}>
              A
            </div>
            <div className="letterCard" style={cardStyle}>
              S
            </div>
          </div>
          <div className="IandF">
            <div className="letterCard" style={cardStyle}>
              I
            </div>
            <div className="letterCard" style={cardStyle}>
              F
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
