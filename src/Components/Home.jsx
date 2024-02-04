import React from "react";
import "./CSS/Home.css";
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillFacebook,
	AiFillYoutube,
	AiFillInstagram,
	AiFillTwitterSquare,
} from "react-icons/ai";

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
					<p>A FULL-STACK WEB DEVELOPER IN BANGLADESH</p>
					<div className="homeContact">
						<div className="homeIconContainer">
							<a href="https://www.linkedin.com/in/mdasifin/" target="_blank">
								<AiFillLinkedin className="homeIcon li-icon" />
							</a>
							<a href="https://github.com/MdAsifHossn" target="_blank">
								<AiFillGithub className="homeIcon git-icon" />
							</a>
							<a href="https://www.facebook.com/mdasif.fb/" target="_blank">
								<AiFillFacebook className="homeIcon fb-icon" />
							</a>
							<a href="https://www.youtube.com/@mdasif.96" target="_blank">
								<AiFillYoutube className="homeIcon you-icon" />
							</a>
							<a href="https://www.instagram.com/md.asif1996/" target="_blank">
								<AiFillInstagram className="homeIcon ins-icon" />
							</a>
							<a href="#">
								<AiFillTwitterSquare className="homeIcon tw-icon" />
							</a>
						</div>
						<a href="#contact" style={{ color: color }}>
							➤ Contact with me
						</a>
						<a href="#about" style={{ color: color }}>
							➤ About me!
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
