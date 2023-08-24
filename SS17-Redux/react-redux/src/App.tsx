import React, { useEffect } from "react";
import axios from "axios";
import Product from "./components/Product";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartCount, setCartCont] = React.useState(0);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log(cartCount);
  

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/products" element={<Product setCartCount={setCartCont} cartCount={cartCount} products={products} />} />
      </Routes>
      {/* <Product products={products} /> */}
    </div>
  );
}

export default App;
