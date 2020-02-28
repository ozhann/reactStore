import React from "react";
import { Link } from "react-router-dom";

const ProductsList = props => {
  return props.products.map(product => {
    return (
      <p key={product._id}>
        {/* [product.type] */}
        <b>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </b>
      </p>
    );
  });
};

export default ProductsList;
