import React from "react";
import { Text, StyleSheet, View } from "react-native";

const OutOfStocks = () => {
  return (
    <View>
      <Text style={style.stockText}>Out of Stock</Text>
    </View>
  );
};

const style = StyleSheet.create({
  stockText: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    color: "lightgrey",
    width: 100,
    marginLeft: 35,
  },
});

export default OutOfStocks;
