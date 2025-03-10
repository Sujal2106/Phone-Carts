import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <div className="container">
      <div className="row">
        {props.productList.map((product, index) => (
          <div key={index} className="col-md-6">
            <Product 
              product={product} 
              index={index} 
              incQuan={props.incQuan} 
              decQuan={props.decQuan} 
              removeItem={props.removeItem} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
