import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WeekAnalysis from "../Common/WeekAnalysis";

const StationaryWeek = () => {
  return (
    <ScrollView>
      <WeekAnalysis Category="Stationaries" />
    </ScrollView>
  );
};

export default StationaryWeek;
