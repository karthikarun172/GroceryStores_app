import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodayAnalysis from "../Common/TodayAnalysis";

const Essentials = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Essentials" />
    </ScrollView>
  );
};

export default Essentials;
