import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PlaceTheOrder = ({ orderPlace }) => {
  return (
    <View style={style.placeOrder}>
      <TouchableOpacity onPress={orderPlace}>
        <Text style={style.placeOrderText}>Place the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  placeOrder: {
    backgroundColor: "#12B75E",
    width: "100%",
  },
  placeOrderText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 20,
  },
});

export default PlaceTheOrder;
