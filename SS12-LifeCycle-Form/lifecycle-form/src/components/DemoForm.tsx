import { log } from 'console';
import React, { useState } from 'react';

const DemoFrom: React.FC = () => {
  const data =['ThangLV', 'MinhNA']
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    data.push(inputValue)
    console.log(data);
    
    alert(`You submitted: ${inputValue}`);
  };

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputField">Input:</label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DemoFrom;
