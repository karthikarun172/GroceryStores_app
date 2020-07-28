import React, { useContext, useEffect } from "react";
import { Context as RegisterContext } from "../../Contexts/RegisterContext";

const ResolveAuth = ({ navigation }) => {
  const { locatSignIn } = useContext(RegisterContext);

  //   console.log(navigation);
  useEffect(() => {
    if (!locatSignIn()) {
      () => navigation.navigate("SignIn");
    } else {
      locatSignIn();
    }
  });

  return null;
};

export default ResolveAuth;
