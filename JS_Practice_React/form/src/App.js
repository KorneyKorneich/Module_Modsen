import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
      <form onSubmit={handleSubmit} className="form">
        <label>
          Input:
          <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
  );
};

const App = () => (
    <div className="App">
      <h1>Form Example</h1>
      <Form />
    </div>
);

export default App;
