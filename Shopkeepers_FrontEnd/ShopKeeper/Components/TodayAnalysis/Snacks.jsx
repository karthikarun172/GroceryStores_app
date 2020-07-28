import React, { useContext } from "react";
import { View, Text } from "react-native";
import _ from "lodash";
import { ScrollView } from "react-native-gesture-handler";
import { BarPlot } from "../Charts/Charts";
import TodayAnalysis from "../Common/TodayAnalysis";

const Snacks = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Snacks" />
    </ScrollView>
  );
};

export default Snacks;
