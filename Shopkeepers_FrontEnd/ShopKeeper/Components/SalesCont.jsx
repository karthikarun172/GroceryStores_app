import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SalesCont = ({ Amount, Name, bottom }) => {
  return (
    <View style={style.Sales}>
      <Text style={style.amount}>{Amount}</Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#5A5A5A",
          marginBottom: bottom,
        }}
      >
        {Name}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  Sales: {},
  amount: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: "#09E37E",
  },
});

export default SalesCont;
