// components/Counter.tsx

"use client";

import React, { useState } from 'react';

const Counter2: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => (prevCount+1) >= 10 ? prevCount = 0 : prevCount = prevCount + 1 );
  const incrementTwo = () => setCount((prevCount) => (prevCount+2) >= 10 ? prevCount = 0 : prevCount = prevCount + 2);
  const decrement = () => setCount((prevCount) => (prevCount-1) >= 10 ? prevCount = 0 : prevCount = prevCount - 1);
  const zero = () => setCount(0)

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} style={{ marginRight: '10px', backgroundColor:'lightblue' }}>
        -
      </button>

      <button onClick={incrementTwo} style={{marginRight: '10px', backgroundColor:'violet' }}>+2</button>
      
      <button onClick={zero}>zero</button>
    </div>
  );
};

export default Counter2;