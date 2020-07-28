import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodayAnalysis from "../Common/TodayAnalysis";

const Spices = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Spices" />
    </ScrollView>
  );
};

export default Spices;
