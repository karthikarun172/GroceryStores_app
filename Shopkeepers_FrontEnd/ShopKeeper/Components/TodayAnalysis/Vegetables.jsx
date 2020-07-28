import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import _ from "lodash";
import TodayAnalysis from "../Common/TodayAnalysis";

const Vegetables = () => {
  return (
    <ScrollView>
      <TodayAnalysis Category="Vegetables" />
    </ScrollView>
  );
};

export default Vegetables;
