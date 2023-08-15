import React, { useState, useEffect } from 'react';

interface Props {
  initialCount: number;
}

const Lifecycle: React.FC<Props> = ({ initialCount }) => {
  // Cấu trúc của useState()::: const [state, setState]= useState(giá trị khơi tạo)
  const [count, setCount] = useState(initialCount);
  // useState => là 1 react Hook của React 
  // this.state === count 
  // this.setState === setCount
const handleOnclick = () => {
  setCount(count + 1);
}
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

export default Lifecycle;
