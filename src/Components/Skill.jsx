import React from "react";
import "./CSS/Skill.css";

import { FaJava } from "react-icons/fa";

import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	// SiNodedotjs,
	SiGithub,
	SiMongodb,
	SiApache,
	SiNextdotjs,
	SiNuxtdotjs,
	SiLaravel,
	SiTypescript,
	SiMysql,
} from "react-icons/si";

const Skill = ({ textColor, color }) => {
	const initialStyle = {
		color: textColor,
	};
	const imageCardStyle = {
		boxShadow: `${textColor + "80"} 5px 5px 15px`,
	};

	return (
		<div id="skills" style={initialStyle}>
			<div className="skillsContainer">
				<p className="skillTitle" style={{ color: color }}>
					SKILLS
				</p>
				<div className="skillDetailContainer">
					<p style={{ color: color }}>I AM GOOD AT</p>
					<div className="skillCardContainer">
						<div className="skillCard" style={imageCardStyle}>
							<SiHtml5 style={{ color: "#ff3c04" }} />
							<p>HTML</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiCss3 style={{ color: "#2965f1" }} />
							<p>CSS</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiJavascript style={{ color: "#ffcc00" }} />
							<p>JavaScript</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiTypescript />
							<p>JavaScript</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiReact style={{ color: "#61DBFB" }} />
							<p>React</p>
						</div>
						{/* <div className="skillCard" style={imageCardStyle}>
							<SiNodedotjs style={{ color: "#3c873a" }} />
							<p>Node.js</p>
						</div> */}
						<div className="skillCard" style={imageCardStyle}>
							<SiGithub style={{ color: "#171515" }} />
							<p>Github</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiNextdotjs />
							<p>Next.js</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiNuxtdotjs />
							<p>Nuxt.js</p>
						</div>
					</div>
					<p style={{ color: color }}>BASIC KNOWLEDGE</p>
					<div className="skillCardContainer">
						<div className="skillCard" style={imageCardStyle}>
							<SiMongodb style={{ color: "#4DB33D" }} />
							<p>MongoDB</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiMysql />
							<p>MySQL</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<FaJava style={{ color: "#ff3c04" }} />
							<p>Java</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiApache style={{ color: "#a22160" }} />
							<p>Apache</p>
						</div>
						<div className="skillCard" style={imageCardStyle}>
							<SiLaravel />
							<p>Laravel</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
