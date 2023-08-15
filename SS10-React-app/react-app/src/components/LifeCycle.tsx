import React, { useState, useEffect } from 'react';

interface Props {
  initialCount: number;
}

const LifecycleComponent: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  // ComponentDidMount
  useEffect(() => {
    console.log('Component is mounted.');

    // ComponentWillUnmount
    return () => {
      console.log('Component will unmount.');
    };
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log('Component is updated.');

    // Cleanup effect before the next update
    return () => {
      console.log('Clean up previous update effect.');
    };
  }, [count]);

  // ComponentWillUnmount (cleanup effect)
  useEffect(() => {
    return () => {
      console.log('Clean up before unmounting.');
    };
  }, []);

  return (
    <div>
      <h2>Lifecycle Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleComponent;
