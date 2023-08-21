import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarComponent from "../layouts/Nav";

function HomePage() {
  return (
    <div>
      {" "}
      <NavbarComponent />
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
