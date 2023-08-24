import React, { useEffect, useState } from "react";
import { IProduct } from "../types/product-type";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCategory from "./ProductDetail";

interface IProductProps {
  products: IProduct[];
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

function Product(props: IProductProps) {
    const { products, cartCount, setCartCount } = props;
  const [product, setProducts] = useState<IProduct[]>(products);


  useEffect(() => {
    setProducts(props.products);
  }, [props]);


  return (
    <div>
      <div className="ml-5">
      </div>
      <div className="row m-5">
        {product?.map((product, index) => (
          <div key={index} className="col-3">
            <Card className="mb-3" style={{ width: "17rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button
                  onClick={() => setCartCount(cartCount + 1)}
                  variant="primary"
                >
                  <Link style={{ textDecoration: "none" , color: "white"}} to=''> Add to Cart</Link>
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
