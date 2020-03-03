import React, { Component } from "react";

class ShoppingCart extends Component {
  removeItem = item => {
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(item.details, "hıııı");
    const filteredBasket = shoppingCart.filter(
      (buyItem, i) => {
        console.log("COMPAREEE", buyItem, shoppingCart[i]);
        return buyItem !== item.details;
      },
      () => {
        localStorage.setItem("shoppingCart", JSON.stringify(filteredBasket));
      }
    );

    const reduceQty = item => {};

    const increaseQty = item => {};

    //set SHOPPING CART IN LOCAL STORAGE
  };

  render() {
    // Put below ınto CART COMPONENT
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    //loop over shoppıngCart
    // console.log("SHOOOOPIINNNGGGG", shoppingCart, shoppingCart.length);
    const productCounter = shoppingCart.reduce((acc, val, i, arr) => {
      const cart = arr.filter(el => el._id === val._id);
      const alreadyInside = acc.find(product => {
        return product.details._id == val._id;
      });

      if (!alreadyInside) {
        return [...acc, { counter: cart.length, details: val }];
      } else return acc;
    }, []);

    const total = productCounter.reduce((acc, val) => {
      console.log(val);
      return acc + val.details.price * val.counter;
    }, 0);
    console.log({ total });
    return (
      <div>
        <h1>Shopping Cart</h1>
        <table>
          <tr>
            <th></th>
            <th>Name </th>
            <th>Quantity </th>
            <th>Price </th>
            <th>Total </th>
          </tr>
          <tbody>
            {productCounter.map((product, i) => (
              <tr>
                <td>
                  <img
                    style={{ height: "50px" }}
                    src={product.details.images[0]}
                  />
                </td>
                <td>
                  {product.details.title}
                  <br />
                  <button onClick={() => this.removeItem(product)}>
                    remove
                  </button>{" "}
                </td>
                <td>
                  <button onClick={this.reduceQty}>-</button>
                  {productCounter[i].counter}
                  <button onClick={this.increaseQty}>+</button>
                </td>
                <td>€{product.details.price}</td>
                <td>€{product.details.price * productCounter[i].counter}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h1>Total</h1>
          <h1>€{total}</h1>
          <p>Free Delivery</p>
          <button>GO TO CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
