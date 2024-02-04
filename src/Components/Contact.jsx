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
				<h1 className="get-in-title" style={{ color: color }}>
					Get in touch
				</h1>
				<div className="get-touch-container">
					<div className="contact-form-container"></div>
					<div className="ContactType">
						<h1 className="lets-title">
							let's build something{" "}
							<span style={{ color: color }}>great together.</span>
						</h1>
						<p className="contact">
							<strong>Phone:</strong> +880-1627-949470
						</p>
						<p className="contact">
							<strong>Email:</strong> mdasif.hossain1996@gmail.com
						</p>
						<p className="contact">
							<strong>Address: </strong> Kazifuri, Mirpur-1, Dhaka, Bangladesh
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
