import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CartBilling = ({ Totalprice, Delivery }) => {
  return (
    <View style={style.price}>
      <View style={style.TotalPriceCont}>
        <Text style={style.TotalPriceText}>Total Price</Text>
        <Text style={style.TotalPriceText}>₹{Totalprice}</Text>
      </View>
      <View style={style.DeliveryCont}>
        <Text style={style.Delivery}>Delivery Fee</Text>
        <Text style={style.Delivery}>₹{Delivery}</Text>
      </View>
      <View style={style.PayCont}>
        <Text style={style.pay}>To Pay</Text>
        <Text style={style.pay}>₹{Totalprice + Delivery}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  price: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 150,
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "20%",
    paddingTop: 20,
    borderTopWidth: 0.8,
  },
  TotalPriceCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  TotalPriceText: {
    width: 100,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  DeliveryCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  Delivery: {
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
    fontSize: 15,
  },
  PayCont: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignSelf: "center",
  },
  pay: {
    fontSize: 20,
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
    color: "#12B75E",
  },
});

export default CartBilling;
