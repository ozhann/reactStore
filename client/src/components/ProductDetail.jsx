import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProductDetail extends Component {
  state = {
    product: null
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    console.log(productId);
    axios.get(`/products/${productId}`).then(response => {
      console.log("resolved", response.data);
      this.setState({
        product: response.data
      });
    });
  }

  render() {
    const product = this.state.product;

    if (!product) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <div className="Product">
          <div className="ProductImage">
            <img src={product.product.images[0]} alt={product.product.title} />
          </div>
          <div>
            <h2>{product.product.title}</h2>
            <h2>{product.product.price} Euro</h2>
            <p>{product.product.descriptionFull}</p>
          </div>
          <button onClick={() => this.props.addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
