import React from "react";
import { View, Text } from "react-native";
import TodayAnalysis from "../Common/TodayAnalysis";
import { ScrollView } from "react-native-gesture-handler";

const Powders = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Powder" />
    </ScrollView>
  );
};

export default Powders;
