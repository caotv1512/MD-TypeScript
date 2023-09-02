import React, { useEffect } from "react";
import axios from "axios";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

// anhminh.server.com/user
//                   /product

export const DOMAIN = "localhost:3000";
// HOST: 'localhost';
// DATABASE_TYPE = mysql || mongodb || posstgree || sequelize;
// DATABASE_NAME = react || node;
function App() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios.get(`${DOMAIN}/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<Product products={products} />} />
      </Routes>
      {/* <Product products={products} /> */}
    </div>
  );
}

export default App;
