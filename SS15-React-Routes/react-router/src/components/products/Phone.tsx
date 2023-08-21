import React from "react";
import NavbarComponent from "../../layouts/Nav";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Phone() {
  const navigate = useNavigate();
  const dataProduct = [
    {
      id: 1,
      name: "Iphone 12",
      img: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "Iphone 4",
      img: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg",
      price: 1000,
    },
    {
      id: 3,
      name: "Iphone 5",
      img: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg",
      price: 1000,
    },
    {
      id: 4,
      name: "Iphone 15 Pro Max",
      img: "https://cdn.tgdd.vn/Files/2019/11/01/1214418/ip11pm1_800x450.jpg",
      price: 1000,
    },
  ];
  return (
    <div>
      {" "}
      <>
        <h1>Phone Manager</h1>
        <div style={{ display: "flex" }}>
          {dataProduct?.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`${item.id}`)}
                >
                  View detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </>
    </div>
  );
}

export default Phone;
