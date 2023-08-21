import React from "react";
import { Table } from "react-bootstrap";
import NavbarComponent from "../../layouts/Nav";
import { Outlet } from "react-router-dom";
function Product() {
  return (
    <>
       <NavbarComponent />
       {/* <h1>Product Lisst</h1> */}
      <Outlet />
    </>
  );
}

export default Product;
