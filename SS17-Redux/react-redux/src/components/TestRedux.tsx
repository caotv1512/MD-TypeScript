import React from "react";
import { useSelector } from "react-redux";
function TestRedux() {
  const product = useSelector((state: any) => state.products);
  console.log(product, "counter");

  return <div>TestRedux</div>;
}

export default TestRedux;
