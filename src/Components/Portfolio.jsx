import React from "react";
import "./CSS/Portfolio.css";

import img1 from "../images/kfu.png"
import img2 from "../images/ats.png"
import img3 from "../images/gorukhasi.png"

const Portfolio = ({ textColor, color }) => {
  const initialStyle = {
    color: textColor,
  };
  const imageCardStyle = {
    boxShadow: `${textColor + "80"} 6px 6px 15px`,
  };

  return (
    <div id="portfolio" style={initialStyle}>
      <div className="portfolioContainer">
        <p className="portfolioTitle" style={{ color: color }}>
          PORTFOLIO
        </p>
        <div className="portfolioDetailContainer">
          <p style={{ color: color }}>SELECTED WORKS</p>
          <div className="portfolioCardContainer">
            <div className="portfolioCard" style={imageCardStyle}>
              <img src={img1} alt="portfolio" className="imageStyle" />
            </div>
            <div className="portfolioCard" style={imageCardStyle}>
              <img src={img2} alt="portfolio" className="imageStyle" />
            </div>
            <div className="portfolioCard" style={imageCardStyle}>
              <img src={img3} alt="portfolio" className="imageStyle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
