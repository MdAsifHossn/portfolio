import React, { useEffect, useState } from "react";
import "./App.css";
import ThemeSwitch from "./Components/ThemeSwitch";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  const [textColor, setTextColor] = useState("#222222");
  const [BGColor, setBGColor] = useState("#f0f8ff");
  const [color, setColor] = useState("#ff0c00");

  useEffect(() => {
    document.body.style.backgroundColor = BGColor;
  }, [BGColor]);

  return (
    <div>
      <ThemeSwitch
        textColor={textColor}
        setTextColor={setTextColor}
        BGColor={BGColor}
        setBGColor={setBGColor}
        color={color}
        setColor={setColor}
      />
      <Navbar textColor={textColor} color={color} BGColor={BGColor} />
      <Home textColor={textColor} color={color} BGColor={BGColor} />
      <About textColor={textColor} color={color} BGColor={BGColor} />
      <Skill textColor={textColor} color={color} BGColor={BGColor} />
      <Portfolio textColor={textColor} color={color} BGColor={BGColor} />
      <Education textColor={textColor} color={color} BGColor={BGColor} />
      <Contact textColor={textColor} color={color} BGColor={BGColor} />
    </div>
  );
}

export default App;
