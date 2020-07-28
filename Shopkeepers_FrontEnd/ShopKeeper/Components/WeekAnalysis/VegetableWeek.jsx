import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import WeekAnalysis from "../Common/WeekAnalysis";

const VegetableWeek = () => {
  return (
    <ScrollView>
      <WeekAnalysis Category="Vegetables" />
    </ScrollView>
  );
};

export default VegetableWeek;
