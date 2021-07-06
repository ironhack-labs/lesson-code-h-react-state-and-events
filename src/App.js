import Counter from "./components/Counter";
import { useState } from "react";
import WeatherWidget from "./components/WeatherWidget";

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
        <WeatherWidget city="Miami" icon="🟡" celsius={29} />
      </div>
    </div>
  );
}

export default App;
