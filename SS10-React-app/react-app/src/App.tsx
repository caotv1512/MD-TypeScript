// import React from "react";
import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
import LifecycleComponent from "./components/LifeCycle";
// import SS5 from "./components/SS5";
import Greeting from './components/Greeting';
import SS5 from "./components/SS5";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <Body/>
        <Footer /> */}
        {/* <SS5 /> */}
        {/* <LifecycleComponent  initialCount= {10}/> */}
        {/* <Greeting name="Cao"/> */}
      </div>
    </>
  );
}

// Có 2 cách export;
// - export
// +, export được nhiều componenet
// - export default
// -  trong 1 file chỉ có thể export default duy nhất 1 lần.
export default App;
