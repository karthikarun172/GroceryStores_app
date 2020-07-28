const mongoose = require("mongoose");
const Joi = require("joi");

const CartItems = mongoose.model(
  "CartData",
  new mongoose.Schema({
    Products: {
      type: [String],
      required: true,
    },
    TotalPrice: {
      type: Number,
      required: true,
    },
    TotalProfit: {
      type: Number,
      required: true,
    },
    IndividualProfit: {
      type: [Number],
      required: true,
    },
    SellingPrice: {
      type: [Number],
      required: true,
    },
    Quantity: {
      type: [Number],
      required: true,
    },
    Categories: {
      type: [String],
      required: true,
    },
    Units: {
      type: [String],
      required: true,
    },
    ItemIds: {
      type: [String],
      required: true,
    },
    UserName: {
      type: String,
      required: true,
    },
    UserPhone: {
      type: Number,
      required: true,
    },
    Date: {
      type: Date,
      default: Date.now,
      trim: true,
    },
  })
);

function ValidateCart(cart) {
  const Schema = {
    Products: Joi.array().required(),
    TotalPrice: Joi.number().required(),
    TotalProfit: Joi.number().required(),
    IndividualProfit: Joi.array().required(),
    SellingPrice: Joi.array().required(),
    Quantity: Joi.array().required(),
    Categories: Joi.array().required(),
    Units: Joi.array().required(),
    Stock: Joi.array().required(),
    ItemIds: Joi.array().required(),
    UserName: Joi.string().required(),
    UserPhone: Joi.number().required(),
  };
  return Joi.validate(cart, Schema);
}

exports.CartItems = CartItems;
exports.ValidateCart = ValidateCart;
