const router = require("express").Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");

/* Here we'll write the routes for the product */

router.get("/products", (req, res, next) => {
  Product.find({})
    .then(products => {
      console.log(products);
      res.json({ products: products });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get("/products/:productId", (req, res, next) => {
  const productId = req.params.productId;
  Product.findOne({ productID: productId })
    .then(product => {
      if (product) {
        res.json({ message: product });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
