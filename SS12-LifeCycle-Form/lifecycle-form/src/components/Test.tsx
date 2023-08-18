import React, { useState, useEffect } from 'react';

const NoDependenciesExample: React.FC = () => {
  const [count, setCount] = useState(0);

  // useEffect sẽ chạy mỗi lần component được render lại
  useEffect(() => {
    console.log('Effect ran!', count);
  });

  return (
    <div>
      <h1>No Dependencies Example using useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default NoDependenciesExample;
