import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodayAnalysis from "../Common/TodayAnalysis";

const Friuts = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Fruits" />
    </ScrollView>
  );
};

export default Friuts;
