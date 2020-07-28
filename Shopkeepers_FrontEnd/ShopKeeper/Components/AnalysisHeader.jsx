import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AnalisysHeader = ({ Time }) => {
  return (
    <View>
      <View style={style.todayHeader}>
        <Text style={style.BackButton}>←</Text>
        <Text style={style.analysisHeader}>Analysis</Text>
        <Text style={style.todayHeaderText}>{Time}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  todayHeader: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  BackButton: {
    width: 55,
    fontSize: 20,
  },
  analysisHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  todayHeaderText: {
    fontSize: 20,
  },
});

export default AnalisysHeader;
