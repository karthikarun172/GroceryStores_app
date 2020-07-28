import httpServices from "../Services/httpServices";
import { apiEndPoint } from "../config.json";
import ContextProvider from "./ContextProvider";

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

const getData = (dispatch) => {
  return async () => {
    const response = await httpServices.get(apiEndPoint + "/product");
    dispatch({ type: "FETCH_DATA", payload: response.data });
  };
};

const AddData = (dispatch) => {
  return async (
    ProductName,
    TamilProductName,
    Category,
    CostPrice,
    Quantity,
    SellingPrice,
    CalculationPrice,
    Profit,
    Count,
    Stock,
    Units,
    callback
  ) => {
    await httpServices.post(apiEndPoint + "/product", {
      ProductName,
      TamilProductName,
      Category,
      CostPrice,
      Quantity,
      SellingPrice,
      CalculationPrice,
      Profit,
      Count,
      Stock,
      Units,
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = ContextProvider(
  ProductsReducer,
  { getData, AddData },
  []
);
