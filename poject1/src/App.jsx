import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Count: {count}</h2>

      {/* middle row */}
      <div className="counter-row">
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <span className="count-value">{count}</span>

        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      {/* reset */}
      <button className="reset-btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;


