import React, { useContext, createContext, useState, useEffect } from "react";
import UseState from "./components/UseState";
// import UseEffect from "./components/UseEffect";
// import UserContext from './components/UserContext/UserContext';

export const SendName = createContext<string>("string");
export interface Product{
  data: any[];
  id: number;
}
function App() {
  const [data, setData] = useState<Product[]>([]);
  const [id, setID] = useState(15);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setData(data.products);
        });
},[]);




  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <SendName.Provider value="CaoTV"> */}
        <UseState  data={data} id = {id} />
        {/* <UseEffect data={data} id ={id}/> */}
      {/* </SendName.Provider> */}
    </div>
  );
}

export default App;
