import React from "react";
import "./CSS/Portfolio.css";

const Portfolio = ({ textColor, color }) => {
  const initialStyle = {
    color: textColor,
  };
  const imageCardStyle = {
    boxShadow: `${textColor + "80"} 10px 10px 15px`,
  };

  return (
    <div id="portfolio" style={initialStyle}>
      <div className="portfolioContainer">
        <p className="title" style={{ color: color }}>
          PORTFOLIO
        </p>
        <div className="portfolioDetailContainer">
          <p style={{ color: color }}>SELECTED WORKS</p>
          <div className="portfolioCardContainer">
            <div className="portfolioCard" style={imageCardStyle}></div>
            <div className="portfolioCard" style={imageCardStyle}></div>
            <div className="portfolioCard" style={imageCardStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
