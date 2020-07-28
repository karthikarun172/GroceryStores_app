import http from "../Services/httpServices";
import config from "../config.json";
import ContextDataProvider from "./ContextDataProvider";

const DataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

const getData = (dispatch) => {
  return async () => {
    const response = await http.get(config.apiEndPoint + "/product");
    dispatch({ type: "FETCH_DATA", payload: response.data });
  };
};

export const { Context, Provider } = ContextDataProvider(
  DataReducer,
  { getData },
  []
);
