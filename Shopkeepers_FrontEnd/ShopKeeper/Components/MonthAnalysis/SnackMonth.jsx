import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MonthAnalysis from "../Common/MonthAnalysis";

const SnackMonth = () => {
  return (
    <ScrollView>
      <MonthAnalysis Category="Snacks" />
    </ScrollView>
  );
};

export default SnackMonth;
