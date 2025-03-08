import React from "react";

export default function Product(props) {
  return (
    <div className="row mb-3 p-3 border-bottom align-items-center">
      {/* Product Image */}
      <div className="col-3">
        <img 
          src={props.product.image || "https://via.placeholder.com/100"} 
          alt={props.product.name} 
          className="img-fluid rounded" 
          style={{ maxHeight: "100px" }} 
        />
      </div>

      {/* Product Details */}
      <div className="col-9">
        <h2>{props.product.name}</h2>
        <p className="text-muted">Price: ₹{props.product.price}</p>

        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group" role="group">
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => props.decQuan(props.index)}
            >
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.product.quantity}
            </button>
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={() => props.incQuan(props.index)}
            >
              +
            </button>
          </div>
          <strong>Total: ₹{props.product.quantity * props.product.price}</strong>
        </div>

        {/* Remove Button */}
        <div className="text-end mt-2">
          <button 
            className="btn btn-danger" 
            onClick={() => props.removeItem(props.index)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
