const express = require("express");
const router = express.Router();
const { ProductForm, ValidateProduct } = require("../Models/ProductsModel");
const _ = require("lodash");
const auth = require("../Middlewares/auth");

router.get("/:_id", async (req, res) => {
  const product = await ProductForm.findById(req.params._id);
  res.send(product);
});

router.get("/", async (req, res) => {
  const product = await ProductForm.find().sort("SellingPrice");
  res.send(product);
});

router.post("/", async (req, res) => {
  const { error } = ValidateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = new ProductForm(
    _.pick(req.body, [
      "ProductName",
      "TamilProductName",
      "Category",
      "Quantity",
      "CostPrice",
      "SellingPrice",
      "CalculationPrice",
      "Profit",
      "Count",
      "Stock",
      "Units",
    ])
  );

  product = await product.save();
  res.send(product);
});

router.put("/:_id", async (req, res) => {
  const { error } = ValidateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = await ProductForm.findByIdAndUpdate(
    req.params._id,
    _.pick(req.body, [
      "ProductName",
      "TamilProductName",
      "Category",
      "CostPrice",
      "Quantity",
      "SellingPrice",
      "CalculationPrice",
      "Profit",
      "Count",
      "Stock",
      "Units",
    ]),
    {
      new: true,
    }
  );
  if (!product)
    return res.status(400).send("the product with given id is not found");
  res.send(product);
});

router.put("/:_id", async (req, res) => {
  let product = await ProductForm.updateMany(
    { Quantity: 0 },
    { $set: { Stock: 50 } }
  );
  res.send(product);
});

router.delete("/:_id", async (req, res) => {
  let product = await ProductForm.findByIdAndRemove(req.params._id);
  if (!product) return res.status(400).send("this is already been deleted");

  res.send(product);
});

module.exports = router;
