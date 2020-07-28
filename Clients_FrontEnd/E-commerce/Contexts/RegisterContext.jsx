import httpServices from "../Services/httpServices";
import { apiEndPoint } from "../config.json";
import ContextDataProvider from "./ContextDataProvider";
import { AsyncStorage } from "react-native";

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_UP_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_IN":
      return { ...state, token: action.payload };
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    case "REGISTERED_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const locatSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGN_IN", payload: token });
  } else {
    return null;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

const Registerd_User = (dispatch) => async (_id) => {
  try {
    const response = await httpServices.get(apiEndPoint + `/Register/${_id} `);
    dispatch({ type: "REGISTERED_USER", payload: response.data });
  } catch (er) {
    console.log(er);
  }
};

const Register = (dispatch) => async (Username, Phone, Password) => {
  try {
    const response = await httpServices.post(apiEndPoint + "/Register", {
      Username,
      Phone,
      Password,
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN_IN", payload: response.data.token });
  } catch (er) {
    dispatch({ type: "SIGN_UP_ERROR", payload: "User Already Registered" });
  }
};

const Login = (dispatch) => async (Phone, Password, callback) => {
  try {
    const response = await httpServices.post(apiEndPoint + "/auth", {
      Phone,
      Password,
    });
    await AsyncStorage.setItem("token", response.data);
    dispatch({ type: "SIGN_IN", payload: response.data });
  } catch (er) {
    dispatch({ type: "SIGN_IN_ERROR", payload: "Invalid Phone or password " });
  }
  if (callback) {
    callback();
  }
};

const SignOut = (dispatch) => () => {
  AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
};

export const { Context, Provider } = ContextDataProvider(
  RegisterReducer,
  { Register, Login, locatSignIn, clearErrorMessage, SignOut, Registerd_User },
  { token: null, errorMessage: "", user: [] }
);
