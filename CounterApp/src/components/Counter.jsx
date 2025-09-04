import React from "react";
import { useState } from 'react'
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  let handleAdd = () => {
    setCount(count + 1);
  };

  let handleSub = () => {
    setCount(count - 1);
  };

  let handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="main">
        <div className="top">
          <button class="sub" onClick={handleSub}>
            -
          </button>
          <p className="text">{count}</p>
          <button className="add" onClick={handleAdd}>
            +
          </button>
        </div>
        <button className="bottom" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

//rafce
