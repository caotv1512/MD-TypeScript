import { log } from 'console';
import React, { useState } from 'react';

const DemoFrom: React.FC = () => {
  const data =['ThangLV', 'MinhNA']
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(1);

  const handleInputChange = async () => {
    // console.log(event.target.value);
    await setCount(count + 1);
    await setCount(count + 1);
    await setCount(count + 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    data.push(inputValue)
    console.log(data);
    
    alert(`You submitted: ${inputValue}`);
  };

  return (
   
    <div>
      <h2>Lifecycle Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleInputChange}>Increment</button>
    </div>
  );
};

export default DemoFrom;
