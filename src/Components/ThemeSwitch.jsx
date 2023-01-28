import "./CSS/ThemeSwitch.css";

export default function ThemeSwitch({
  textColor,
  setTextColor,
  BGColor,
  setBGColor,
  color,
  setColor,
}) {
  const styleOne = {
    border: `1px solid ${color}`,
  };

  const onThemeChange = () => {
    BGColor === "#f0f8ff" ? setBGColor("#222222") : setBGColor("#f0f8ff");
    textColor === "#222222" ? setTextColor("#f0f8ff") : setTextColor("#222222");
  };
  const onColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <div className="themeChangeSection" style={styleOne}>
      <div className="colorSwitch">
        <button
          className="colorButton"
          style={{ backgroundColor: "#13b49f" }}
          onClick={() => onColorChange("#13b49f")}
        ></button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#00cc66" }}
          onClick={() => onColorChange("#00cc66")}
        ></button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#00cc00" }}
          onClick={() => onColorChange("#00cc00")}
        ></button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#00cc99" }}
          onClick={() => onColorChange("#00cc99")}
        ></button>
        <button
          className="colorButton"
          style={{ backgroundColor: "#00ffff" }}
          onClick={() => onColorChange("#00ffff")}
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
          style={{ backgroundColor: "#f54500" }}
          onClick={() => onColorChange("#f54500")}
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
  );
}
