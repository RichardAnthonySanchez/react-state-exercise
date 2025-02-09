import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  // setting the initial value of the backgroundColor
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const [counter, setCounter] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    // update the counter state to increment each time the color buttons are clicked
    setCounter(counter + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <span>{counter}</span>
      {/* this span just tells us the counter state current value */}
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
