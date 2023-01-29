import React from "react";
import "./CSS/Contact.css";

const Contact = ({ textColor, color }) => {
  const initialStyle = {
    color: textColor,
  };

  return (
    <div style={initialStyle} id="contact">
      <div className="contactContainer">
        <p className="contactTitle" style={{ color: color }}>
          CONTACT
        </p>
        <div className="ContactType">
          <p className="contact">
            <strong>Name:</strong> Md. Asif Hossain
          </p>
          <p className="contact">
            <strong>Phone:</strong> +880-1627-949470
          </p>
          <p className="contact">
            <strong>Email:</strong> mdasif.hossain1996@gmail.com
          </p>
          <p className="contact">
            <strong>Address: </strong> Kazifuri, Mirpur-1, Dhaka, Bangladesh
          </p>
          <a
            className="fb"
            href="https://www.facebook.com/mdasif.fb/"
            target="_blank"
            rel="noreferrer"
            style={{ color: color }}
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
