import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodayAnalysis from "../Common/TodayAnalysis";

const Flours = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Flours" />
    </ScrollView>
  );
};

export default Flours;
