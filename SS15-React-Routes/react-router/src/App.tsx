import React from "react";
import "./App.css";
import Product from "./components/products/Product";
import User from "./components/User";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./components/products/Laptop";
import Phone from "./components/products/Phone";
import ProductList from "./components/products/ProductList";
import PageNotFound from "./components/PageNotFound";
import ProductDetail from "./components/products/ProductDetail";
import PhoneDetail from "./components/products/PhoneDetail";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import UserManagement from "./components/UserManager";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="laptop" element={<Laptop />} />
            <Route path="phone" element={<Phone />} />
            <Route path="phone/:phoneId" element={<PhoneDetail />} />
          </Route>
          <Route path="/user" element={<UserManagement />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
