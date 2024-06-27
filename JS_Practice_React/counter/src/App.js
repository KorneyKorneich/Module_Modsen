import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
      <div className="counter">
        <p>Current Count: {count}</p>
        <button
            onClick={increment}
            style={{ backgroundColor: count > 10 ? 'red' : 'green' }}
        >
          Increment
        </button>
      </div>
  );
};

const App = () => (
    <div className="App">
      <h1>Counter App</h1>
      <Counter />
    </div>
);

export default App;
