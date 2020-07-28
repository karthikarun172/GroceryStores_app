import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WeekAnalysis from "../Common/WeekAnalysis";

const SnackWeek = () => {
  return (
    <ScrollView>
      <WeekAnalysis Category="Snacks" />
    </ScrollView>
  );
};

export default SnackWeek;
