import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SalesReport = ({ price, name }) => {
  return (
    <View style={styles.ProfitView}>
      <Text style={styles.laabam}>₹ {price}</Text>
      <Text style={styles.laabamText}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ProfitView: {
    width: 200,
  },
  laabam: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#393e46",
  },
  laabamText: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    color: "#393e46",
  },
});

export default SalesReport;
