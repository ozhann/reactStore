import React, { Component } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";

export default class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("/products").then(response => {
      console.log("test", response.data.message);
      this.setState({
        products: response.data.products
      });
    });
  };

  render() {
    return (
      <div className="products">
        <ProductsList
          products={this.state.products}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}
