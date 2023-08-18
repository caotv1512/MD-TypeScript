import React from "react";
import Button from "react-bootstrap/Button";
import {InputGroup, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Card";
// or less ideally

function Bootstrap() {
  return (
    <>
      {/* <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      <Button>Click me!!!!</Button> */}
      <Cards/>
    </>
  );
}

export default Bootstrap;
