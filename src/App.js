import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
