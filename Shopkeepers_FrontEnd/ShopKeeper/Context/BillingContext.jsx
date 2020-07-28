import httpServices from "../Services/httpServices";
import ContextProvider from "./ContextProvider";
import { apiEndPoint } from "../config.json";

const BillingContext = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let cart = [...state, action.payloads];
      cart.map((item) => {
        if (item._id === action._id) {
          item.Quantity += action.amount;
          item.Count += 1;
        }
      });
      return cart;

    case "REMOVE_FROM_CART":
      return state.filter((m) => m._id !== action.payload);

    case "UPDATE_CART":
      let data = [...state];
      data.map((item) => {
        if (item._id === action._id) {
          item.Quantity += action.amount;
          item.Count += action.Count;
          item.SellingPrice += action.price;
        }
      });
      return data;
    default:
      return state;
  }
};

const AddToCart = (dispatch) => {
  return (
    ProductName,
    CostPrice,
    _id,
    SellingPrice,
    CalculationPrice,
    Profit,
    Count,
    Quantity,
    Stock,
    Category,
    Units,
    amount
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      amount,
      _id,
      Quantity,
      payloads: {
        ProductName,
        CostPrice,
        _id,
        SellingPrice,
        CalculationPrice,
        Profit,
        Count,
        Quantity,
        Stock,
        Category,
        Units,
      },
    });
  };
};
const PostCart = () => async (
  Products,
  TotalPrice,
  TotalProfit,
  IndividualProfit,
  SellingPrice,
  Quantity,
  Categories,
  Units,
  ItemIds,
  UserName,
  UserPhone
) => {
  await httpServices.post(apiEndPoint + "/cart", {
    Products,
    TotalPrice,
    TotalProfit,
    IndividualProfit,
    SellingPrice,
    Quantity,
    Categories,
    Units,
    ItemIds,
    UserName,
    UserPhone,
  });
};

const UpdateCart = (dispatch) => {
  return (_id, amount, price, Count) => {
    dispatch({ type: "UPDATE_CART", _id, amount, price, Count });
  };
};

const DeleteCart = (dispatch) => {
  return (_id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: _id });
  };
};
export const { Context, Provider } = ContextProvider(
  BillingContext,
  { AddToCart, DeleteCart, PostCart, UpdateCart },
  []
);
