// components/Counter.tsx

"use client";

import React, { useState } from 'react';

interface Props{
  num : number;
}

const Counter: React.FC<Props> = ({num}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => (prevCount+1) >= 10 ? prevCount = 0 : prevCount = prevCount + num);
  const decrement = () => setCount((prevCount) => (prevCount-1) >= 10 ? prevCount = 0 : prevCount = prevCount - num);
  const zero = () => setCount(0)

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} style={{ marginRight: '10px', backgroundColor:'lightblue' }}>
        -
      </button>
      <button onClick={increment} style={{ marginRight: '10px',  backgroundColor:'green' }}>+</button>

      
      <button onClick={zero}>zero</button>
    </div>
  );
};

export default Counter;
