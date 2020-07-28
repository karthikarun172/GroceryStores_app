import React, { useContext, useEffect } from "react";
import { Context as RegisterContext } from "../Contexts/RegisterContext";
import jwt from "jwt-decode";

export function CurrentUser() {
  const { state, Registerd_User } = useContext(RegisterContext);
  useEffect(() => {
    let user = jwt(state.token);
    Registerd_User(user._id);
  }, []);

  return {
    Name: state.user.Username,
    Phone: state.user.Phone,
  };
}
