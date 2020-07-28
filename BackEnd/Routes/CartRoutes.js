const express = require("express");
const router = express.Router();
const { CartItems, ValidateCart } = require("../Models/CartModel");
const { ProductForm } = require("../Models/ProductsModel");
const _ = require("lodash");

router.get("/", async (req, res) => {
  let cart = await CartItems.find().sort("-Date");
  res.send(cart);
});

router.post("/", async (req, res) => {
  // const { error } = ValidateCart(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let cart = new CartItems(
    _.pick(req.body, [
      "Products",
      "TotalPrice",
      "TotalProfit",
      "IndividualProfit",
      "SellingPrice",
      "Quantity",
      "Categories",
      "Units",
      "ItemIds",
      "UserName",
      "UserPhone",
      "Date",
    ])
  );

  cart = await cart.save();
  res.send(cart);
});

router.put("/:_id", (req, res) => {
  req.body.ItemIds.forEach(async (element, r) => {
    let product = await ProductForm.findById(element);
    product.Stock = product.Stock - req.body.Quantity[r];
    await product.save();
  });
  res.send("Updated");
});

router.delete("/:_id", async (req, res) => {
  const cart = await CartItems.findByIdAndRemove(req.params._id);
  if (!cart) return res.status(400).send("this has been already deleted");
  res.send(cart);
});

module.exports = router;
