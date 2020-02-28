import React from "react";
import { Link } from "react-router-dom";

const ProductsList = props => {
  return props.products.map(product => {
    // console.log(product.images[0]);
    const path = product.images[0];
    console.log(path);
    return (
      <p key={product._id}>
        {/* [product.type] */}
        <b>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
          <img src={path} alt={product.title} />
        </b>
      </p>
    );
  });
};

export default ProductsList;
