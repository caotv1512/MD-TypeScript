import React, { useEffect, useState } from "react";

interface AppState {
  count: number;
}

const App: React.FC<{}> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component updated");
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </div>
  );
};

export default App;
