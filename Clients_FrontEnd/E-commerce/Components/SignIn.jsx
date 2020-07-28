import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Input from "./Common/Inputs";
import { Context as RegisterContext } from "../Contexts/RegisterContext";

const SignIn = ({ navigation }) => {
  const { state, Login, clearErrorMessage, locatSignIn } = useContext(
    RegisterContext
  );
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");

  useEffect(() => {
    locatSignIn();
    clearErrorMessage();
    navigation.addListener("focus", () => {
      clearErrorMessage();
    });
  }, []);

  return (
    <ImageBackground
      source={require("../assets/signIn_BG.png")}
      style={style.Bg}
    >
      <View style={style.containter}>
        <View style={style.form}>
          <View style={style.header}>
            <Text style={style.login}>Login</Text>
          </View>
          <Text style={style.errorMessage}>
            {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
          </Text>
          <View>
            <Input
              name="Phone No"
              enter="enter your Phone number."
              keyboard="numeric"
              TextChange={SetPhone}
            />
            <Input
              name="Password"
              enter="enter your Password."
              // secure={true}
              TextChange={SetPassword}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => Login(Phone, Password)}>
              <View style={style.Btn}>
                <Text style={style.BtnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  Bg: { flex: 1, width: "100%", height: "70%", backgroundColor: "#F0F0F0" },
  containter: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 30,
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#841B2E",
    textAlign: "center",
  },
  errorMessage: {
    textAlign: "center",
    marginBottom: 15,
    color: "red",
  },
  form: {
    marginTop: 120,
    width: 300,
    height: 360,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 30,
    borderRadius: 25,
    elevation: 15,
  },
  name: {
    textAlign: "center",
    marginTop: 150,
    fontSize: 27,
    color: "white",
    paddingBottom: 250,
  },
  Btn: {
    backgroundColor: "#606060",
    width: 200,
    borderRadius: 12,
    marginLeft: 20,
    marginTop: 20,
  },
  BtnText: {
    padding: 8,
    color: "#E5E5E5",
    textAlign: "center",
  },
});

export default SignIn;
