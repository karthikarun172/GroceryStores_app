import httpServices from "../Services/httpServices";
import { apiEndPoint } from "../config.json";
import ContextProvider from "./ContextProvider";

const CartContext = (state, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return action.payloads;
    case "FILTER_DATA":
      return state.filter((item) => item._id !== action.payload);
  }
};

const getOrders = (dispatch) => async () => {
  try {
    const response = await httpServices.get(apiEndPoint + "/cart");
    dispatch({ type: "GET_ORDERS", payloads: response.data });
  } catch (er) {
    console.log(er.message);
  }
};

const deleteOrder = (dispatch) => async (_id) => {
  try {
    await httpServices.delete(apiEndPoint + `/cart/${_id}`);
    dispatch({ type: "FILTER_DATA", payload: _id });
  } catch (er) {
    console.log(er.message);
  }
};

const StockChange = (dispatch) => async (
  _id,
  Stock,
  Quantity,
  ItemIds,
  callBack
) => {
  try {
    await httpServices.put(apiEndPoint + `/cart/${_id}`, {
      Stock,
      Quantity,
      ItemIds,
    });
  } catch (er) {
    console.log(er.message);
  }
  if (callBack) {
    callBack();
  }
};

const FilterOrder = (dispatch) => async (_id) => {
  try {
    dispatch({ type: "FILTER_DATA", payload: _id });
  } catch (er) {
    console.log(er);
  }
};

export const { Context, Provider } = ContextProvider(
  CartContext,
  { getOrders, deleteOrder, FilterOrder, StockChange },
  []
);
