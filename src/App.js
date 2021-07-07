import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  // Declare a new state variable named "unit"
  // Set the initial value to "C" for Celsius
  const [unit, setUnit] = useState("C");

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

      {/* ADD THE BUTTONS FOR CHANGING THE TEMP. UNIT */}

      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>
    </div>
  );
}

export default App;
