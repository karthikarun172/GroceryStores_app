import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodayAnalysis from "../Common/TodayAnalysis";

const Stationaries = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Stationaries" />
    </ScrollView>
  );
};

export default Stationaries;
