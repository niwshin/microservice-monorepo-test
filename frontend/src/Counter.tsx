import React, { useState } from 'react';
import { Button } from 'antd';

const Counter: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <div>
        <p><b>Count:</b> {count}</p>
      </div>
      <div>
        <Button onClick={countDown}>-</Button>
        <Button onClick={countUp}>+</Button>
      </div>
      <div>
      </div>
    </>
  )
};

export default Counter;