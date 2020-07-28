const mongoose = require("mongoose");
const Joi = require("joi");

const ProductForm = mongoose.model(
  "Products",
  new mongoose.Schema({
    ProductName: {
      type: String,
      required: true,
    },
    TamilProductName: {
      type: "String",
      required: true,
    },
    Category: {
      type: String,
      enum: [
        "Snacks",
        "Jucies",
        "Powder",
        "Cereals & Spices",
        "Stationaries",
        "Vegetables",
        "Fruits",
        "Essentials",
        "Flours",
      ],
      required: true,
    },
    CostPrice: {
      type: Number,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    SellingPrice: {
      type: Number,
      required: true,
    },
    CalculationPrice: {
      type: Number,
      required: true,
    },
    Profit: {
      type: Number,
      required: true,
    },
    Count: {
      type: Number,
      required: true,
    },
    Stock: {
      type: Number,
      required: true,
    },
    Units: {
      type: String,
      enum: ["Grams", "Kilograms", "Liter", "product"],
      required: true,
    },
  })
);

function ValidateProduct(product) {
  const Schema = {
    ProductName: Joi.string().required(),
    TamilProductName: Joi.string().required(),
    Category: Joi.string().required(),
    CostPrice: Joi.number().required(),
    SellingPrice: Joi.number().required(),
    CalculationPrice: Joi.number().required(),
    Profit: Joi.number().required(),
    Count: Joi.number().required(),
    Quantity: Joi.number().required(),
    Stock: Joi.number().required(),
    Units: Joi.string().required(),
  };
  return Joi.validate(product, Schema);
}

exports.ProductForm = ProductForm;
exports.ValidateProduct = ValidateProduct;
