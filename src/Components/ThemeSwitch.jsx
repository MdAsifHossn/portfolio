import { useState } from "react";
import "./CSS/ThemeSwitch.css";

export default function ThemeSwitch({
  textColor,
  setTextColor,
  BGColor,
  setBGColor,
  color,
  setColor,
}) {
  const [checked, setChecked] = useState(true);
  const initialStyle = {
    color: textColor,
  };
  const borderTheme = {
    border: `1px solid ${color}`,
    // backgroundColor: BGColor,
  };

  const borderButton = {
    border: `1px solid ${color}`,
    // backgroundColor: BGColor,
  };

  const onThemeChange = () => {
    BGColor === "#f0f8ff" ? setBGColor("#222222") : setBGColor("#f0f8ff");
    textColor === "#222222" ? setTextColor("#f0f8ff") : setTextColor("#222222");
  };
  const onColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <div className="themeContainer" style={initialStyle}>
      <input type="checkbox" id="click"></input>
      <div
        className="arrowButton"
        style={borderButton}
        onClick={() => setChecked(!checked)}
      >
        <label htmlFor="click" style={{ color: checked ? textColor : color }}>
          ⁕
        </label>
      </div>
      <div className="themeChangeSection" style={borderTheme}>
        <div className="colorSwitch">
          <button
            className="colorButton"
            style={{ backgroundColor: "#f54500" }}
            onClick={() => onColorChange("#f54500")}
          ></button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#00cc00" }}
            onClick={() => onColorChange("#00cc00")}
          ></button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#13b49f" }}
            onClick={() => onColorChange("#13b49f")}
          ></button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#9933ff" }}
            onClick={() => onColorChange("#9933ff")}
          ></button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#ff00ff" }}
            onClick={() => onColorChange("#ff00ff")}
          ></button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#ffff00" }}
            onClick={() => onColorChange("#ffff00")}
          ></button>
          <button
            className="colorButton"
            style={{ backgroundColor: "#0000ff" }}
            onClick={() => onColorChange("#0000ff")}
          ></button>
        </div>
        <div className="themeSwitch">
          <button className="themeButton" onClick={onThemeChange}>
            {BGColor === "#f0f8ff" ? <p>🌑</p> : <p>☀️</p>}
          </button>
        </div>
      </div>
    </div>
  );
}
