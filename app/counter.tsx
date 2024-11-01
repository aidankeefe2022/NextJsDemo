// components/Counter.tsx

"use client";

import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        -
      </button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
