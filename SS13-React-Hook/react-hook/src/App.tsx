import React, { useContext, createContext } from "react";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
// import UserContext from './components/UserContext/UserContext';

export const SendName = createContext<string>("string");
function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      <SendName.Provider value="CaoTV">
        <UseState />
      </SendName.Provider>
    </div>
  );
}

export default App;
