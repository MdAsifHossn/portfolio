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
    border: `1px solid ${textColor}`,
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
          style={{ backgroundColor: "#ff0000" }}
          onClick={() => onColorChange("#ff0000")}
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
