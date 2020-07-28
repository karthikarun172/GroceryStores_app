import React from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const EmptyCart = ({ toHome }) => {
  return (
    <ImageBackground
      style={style.EmptyCartBG}
      source={require("../../assets/emptyCartBG1.png")}
    >
      <View style={style.EmptyCartCont}>
        <Text style={style.EmptyCartText}>Your cart is empty</Text>
        <TouchableOpacity onPress={toHome}>
          <Text style={style.ShopText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  EmptyCartBG: {
    width: "100%",
    height: "100%",
  },
  EmptyCartCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
  },
  EmptyCartText: {
    fontWeight: "bold",
    color: "lightgrey",
  },
  ShopText: {
    color: "#FF1E56",
    borderColor: "grey",
    marginTop: 25,
    borderWidth: 1,
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "bold",
  },
});

export default EmptyCart;
