import React from "react";
import "./CSS/Portfolio.css";

const Portfolio = ({ textColor, color, BGColor }) => {
  const initialStyle = {
    color: textColor,
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
            <div className="portfolioCard"></div>
            <div className="portfolioCard"></div>
            <div className="portfolioCard"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
