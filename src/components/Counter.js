import React, { useState } from "react";

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked 0 times</p>

      <button> - </button>
      <button> + </button>
    </div>
  );
}

export default Counter;
