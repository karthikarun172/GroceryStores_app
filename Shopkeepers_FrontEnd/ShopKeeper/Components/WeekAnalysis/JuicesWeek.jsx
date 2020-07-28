import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WeekAnalysis from "../Common/WeekAnalysis";

const JucieWeek = () => {
  return (
    <ScrollView>
      <WeekAnalysis Category="Jucies" />
    </ScrollView>
  );
};

export default JucieWeek;
