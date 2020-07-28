import React from "react";
import { View, Text } from "react-native";
import TodayAnalysis from "../Common/TodayAnalysis";
import { ScrollView } from "react-native-gesture-handler";

const Juices = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Jucies" />
    </ScrollView>
  );
};

export default Juices;
