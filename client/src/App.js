import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

class App extends React.Component {
  state = {
    user: this.props.user,
    shoppingCart: []
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  addToCart = product => {
    console.log("added to cart,", product);
    this.setState(
      {
        shoppingCart: [...this.state.shoppingCart, product]
      },
      () => {
        localStorage.setItem("shoppingCart", this.state.shoppingCart);
      }
    );
  };

  render() {
    console.log(this.state.shoppingCart);
    return (
      <Router>
        <div className="App">
          <Navbar setUser={this.setUser} user={this.state.user} />
          <Switch>
            <Route
              path="/signup"
              render={props => (
                <Signup history={props.history} setUser={this.setUser} />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <Login history={props.history} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/products"
              render={props => (
                <Products
                  {...props}
                  user={this.state.user}
                  addToCart={this.addToCart}
                />
              )}
            />

            <Route
              exact
              path="/products/:productId"
              render={props => (
                <ProductDetail
                  {...props}
                  user={this.state.user}
                  addToCart={this.addToCart}
                  className="product-details-container"
                />
              )}
            />

            <Welcome />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
