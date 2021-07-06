import React, { useState } from "react";
import Counter from "./components/Counter";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");

  const toggleTheme = (event) => {
    const value = event.target.value; // value -->  'light' || 'dark'
    setTheme(value);
  };

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>

      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
      <br />

      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>

      <WeatherForecast tempUnit={unit} theme={theme} />
      {/* 
      <div>
        <WeatherWidget city="Miami" icon="🟡" unit={unit} celsius={29} />
        <WeatherWidget city="Mexico City" icon="⛈️" unit={unit} celsius={17} />
        <WeatherWidget city="Berlin" icon="🌥️" unit={unit} celsius={20} />
        <WeatherWidget city="Barcelona" icon="🌤️" unit={unit} celsius={28} />
      </div> 
      */}
    </div>
  );
}

export default App;
