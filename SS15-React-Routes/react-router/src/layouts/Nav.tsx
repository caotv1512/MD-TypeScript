import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

function NavbarComponent() {
  const [searchParam, setSearchParam] = useSearchParams();
  let productName = searchParam.get("productName");
  let productPrice = searchParam.get("productPrice");
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/"> MY SHOPPING</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/"> Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/user">User</Link>
              </Nav.Link>
              <NavDropdown
                title={<Link to="/product">Product</Link>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/product/phone">Phone</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/product/laptop">Laptop</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={()=> setSearchParam({productName: 'iphone', productPrice: '1000'})}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
        <Button variant="secondary" onClick={() => navigate("/product/phone")}>
          Go to Phone page
        </Button>{" "}
        <Button variant="outline-info" onClick={() => navigate(-2)}>
          Go 2 page back
        </Button>{" "}
        <Button variant="outline-info" onClick={() => navigate(-1)}>
          Go page back
        </Button>{" "}
        <Button variant="outline-info" onClick={() => navigate(1)}>
          Go forward
        </Button>{" "}
        <Button variant="outline-info" onClick={() => navigate(2)}>
          Go2 forward
        </Button>{" "}
        <Button
          variant="outline-warning"
          onClick={() => navigate("product", { replace: true })}
        >
          Go to product - not save history
        </Button>{" "}
        <Button
          variant="outline-success"
          onClick={() => navigate("product", { state: {id: 1} })}
        >
          Go to product with data
        </Button>{" "}
      </div> */}
    </div>
  );
}

export default NavbarComponent;
