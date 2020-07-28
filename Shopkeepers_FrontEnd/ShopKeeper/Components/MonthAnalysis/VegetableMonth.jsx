import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MonthAnalysis from "../Common/MonthAnalysis";

const VegetableMonth = () => {
  return (
    <ScrollView>
      <MonthAnalysis Category="Vegetables" />
    </ScrollView>
  );
};

export default VegetableMonth;
