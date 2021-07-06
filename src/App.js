import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <div>
        <WeatherWidget city="Miami" icon="🟡" unit={unit} celsius={29} />
        <WeatherWidget city="Mexico City" icon="⛈️" unit={unit} celsius={17} />
        <WeatherWidget city="Berlin" icon="🌥️" unit={unit} celsius={20} />
        <WeatherWidget city="Barcelona" icon="🌤️" unit={unit} celsius={28} />
      </div>
    </div>
  );
}

export default App;
