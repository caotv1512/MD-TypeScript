import React, { useEffect, useState } from "react";
import { IProduct } from "../types/product-type";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//B1: import useSelector from "react-redux";
import { useSelector, useDispatch } from "react-redux";

interface IProductProps {
  products: IProduct[];
}

function Product(props: IProductProps) {
  // B2: Xử dụng useSelector để lấy ra giá trị của state
  const count = useSelector((state: any) => state.cartCount);

  // B3: Xử dụng dispatch để update state
  const dispatch = useDispatch();
  // dispatch: Đại diện cho action được khởi tạo bên store

  const handleUpdateCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };
  const { products } = props;
  const [product, setProducts] = useState<IProduct[]>(products);

  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  return (
    <div>
      <div className="ml-5"></div>
      <div className="row m-5">
        {product?.map((product, index) => (
          <div key={index} className="col-3">
            <Card className="mb-3" style={{ width: "17rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button onClick={handleUpdateCart} variant="primary">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to=""
                  >
                    {" "}
                    Add to Cart
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
