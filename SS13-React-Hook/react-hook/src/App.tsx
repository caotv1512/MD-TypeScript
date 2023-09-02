import React, { useContext, createContext, useState, useEffect } from "react";
import Reducer from "./components/Reducer/Reducer";

export const SendName = createContext<string>("string");
export interface Product{
  data: any[];
  id: number;
}
function App() {
  const [data, setData] = useState<Product[]>([]);
  return (
    <div className="App">
     <Reducer />
    </div>
  );
}

export default App;
