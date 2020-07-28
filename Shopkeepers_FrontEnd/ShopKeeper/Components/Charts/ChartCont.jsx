import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChartCont = ({ name, Profit }) => {
  return (
    <View style={Style.BoxCont}>
      <View style={Style.box}>
        <Text style={Style.boxText}>{name}</Text>
        <Text style={Style.BoxText1}>₹{Profit}</Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  box: {
    width: "95%",
    backgroundColor: "white",
    alignSelf: "center",
    height: 150,
    marginTop: 10,
  },
  boxText: {
    textAlign: "left",
    marginTop: 10,
    marginLeft: 20,
  },
  BoxText1: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 40,
    // fontWeight: "bold",
    color: "#5A5A5A",
  },
});

export default ChartCont;
