import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <product name={props.inventory[0].name} name={props.inventory[0].name} />
    </div>
  );
}

export default ProductList;
