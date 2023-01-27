import React from "react";
import "./CSS/Education.css";

const Education = ({ textColor, color }) => {
  const initialStyle = {
    color: textColor,
  };

  return (
    <div id="education" style={initialStyle}>
      <div className="educationContainer">
        <p className="title" style={{ color: color }}>
          EDUCATION
        </p>
        <div className="educationDetailContainer">
          <p style={{ color: color }}>ACADEMIC BACKROUND</p>
          <div className="educationCardContainer">
            <div className="educationDetail">
              <p className="year">2018 - 2022</p>
              <p className="exam">B.Sc. in Computer Science and Engineering</p>
              <p className="academy">
                Bangladesh University of Business & Technology (BUBT)
              </p>
              <p className="result">
                <strong>Result: </strong>3.80 out of 4.00
              </p>
            </div>
            <div className="educationDetail">
              <p className="year">2016</p>
              <p className="exam">Higher Secondary Certificate</p>
              <p className="academy">Govt. KC. College, Jhenidah</p>
              <p className="result">
                <strong>Result: </strong>3.75 out of 5.00
              </p>
            </div>
            <div className="educationDetail">
              <p className="year">2013</p>
              <p className="exam">Higher Secondary Certificate</p>
              <p className="academy">Jhnidah Govt. High School</p>
              <p className="result">
                <strong>Result: </strong>4.88 out of 4.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
