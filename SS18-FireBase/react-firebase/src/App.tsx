import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const DOMAIN = process.env.REACT_APP_PORT_SERVER
function App() {
  axios.delete(`${DOMAIN}/products`).then((res) => {
    console.log(res.data);
  })
 

 console.log(DOMAIN, 'server port');
 
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
