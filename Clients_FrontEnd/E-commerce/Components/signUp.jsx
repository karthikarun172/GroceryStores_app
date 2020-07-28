import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Common/Inputs";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as RegisterContext } from "../Contexts/RegisterContext";

const SignUp = ({ navigation }) => {
  const [UserName, SetUserName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");
  const { state, Register, clearErrorMessage, locatSignIn } = useContext(
    RegisterContext
  );

  useEffect(() => {
    locatSignIn();
    clearErrorMessage();
    navigation.addListener("focus", () => {
      clearErrorMessage();
    });
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View style={style.RegisterCont}>
        <Text style={style.RegisterHeader}>Sign-Up</Text>
        <Text style={style.errorMessage}>
          {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
        </Text>
        <View style={style.RegisterBody}>
          <Input name="Name" enter="enter your name" TextChange={SetUserName} />
          <Input
            name="Phone number"
            enter="enter your Phone number"
            keyboard="numeric"
            TextChange={SetPhone}
          />
          <Input
            name="Password"
            enter="enter the password"
            secure={true}
            TextChange={SetPassword}
          />
        </View>
        <TouchableOpacity onPress={() => Register(UserName, Phone, Password)}>
          <View style={style.RegisterButtom}>
            <Text style={style.RegisterText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  RegisterCont: {},
  RegisterHeader: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
    color: "red",
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
  },
  RegisterBody: {
    padding: 30,
  },
  RegisterButtom: {
    alignSelf: "center",
    width: 150,
  },
  RegisterText: {
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default SignUp;
