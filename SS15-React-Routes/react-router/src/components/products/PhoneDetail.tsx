import React from "react";
import { useParams } from "react-router-dom";

function PhoneDetail() {
  const params = useParams();
  console.log(params);

  return <div>PhoneDetail</div>;
}

export default PhoneDetail;
