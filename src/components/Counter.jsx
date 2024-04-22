import React, { useState } from 'react';
import { a , animated } from 'react-spring';


const Counter = () => {
  const [count, setCount] = useState(0);

  const { backgroundColor } = a({
    backgroundColor: `rgba(100, 200, 150, ${count / 10})`,
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{width : '30vw', padding : '1vw'}}>
      <animated.div
        style={{
          height: '10vh',
          backgroundColor,
          borderRadius: '10px',
        }}
      >
        <h2 style={{textAlign : 'center'}}>Counter App</h2>
        <h2 style={{ textAlign: 'center'}}>{count}</h2>
      </animated.div>
      <div style={{ textAlign: 'center' }}>
        <div style={{display : 'flex' , justifyContent : 'space-around', padding : '1vw'}}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;















