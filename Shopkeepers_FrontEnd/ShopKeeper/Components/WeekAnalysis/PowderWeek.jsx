import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WeekAnalysis from "../Common/WeekAnalysis";

const PowderWeek = () => {
  return (
    <ScrollView>
      <WeekAnalysis Category="Powder" />
    </ScrollView>
  );
};

export default PowderWeek;
