import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryBoxPlot,
} from "victory-native";

export function BarPlot({ data, title }) {
  return (
    <View style={styles.container}>
      <VictoryChart width={400} height={500} theme={VictoryTheme.material}>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={320} />} />
        <VictoryBar
          barRatio={1}
          style={{
            data: { fill: "#FF2963" },
            labels: { fontWeight: "bold" },
          }}
          data={data}
          x="name"
          y="quantity"
          labels={({ datum }) => `₹${datum.quantity}`}
        />
      </VictoryChart>
      <Text style={{ marginTop: 30, fontWeight: "bold" }}>{title}</Text>
    </View>
  );
}

export function BoxPlot({ data }) {
  return (
    <View>
      <VictoryChart
        domainPadding={100}
        style={styles.container}
        maxDomain={{ x: 3 }}
      >
        <VictoryBoxPlot
          horizontal
          maxLabels
          minLabels
          medianLabels
          labelOrientation="top"
          boxWidth={30}
          whiskerWidth={5}
          data={data}
          style={{
            min: { stroke: "red", strokeWidth: 3 },
            max: { stroke: "green", strokeWidth: 3 },
            q1: { fill: "red" },
            q3: { fill: "darkgrey" },
            median: { stroke: "maroon", strokeWidth: 5 },
            labels: { fontWeight: "bold" },
          }}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
