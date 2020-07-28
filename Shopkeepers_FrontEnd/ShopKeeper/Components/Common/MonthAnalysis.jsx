import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Context } from "../../Context/CartContext";
import { ObjectCombine } from "../../Utils/ObjectComb";
import { BarPlot } from "../Charts/Charts";
import SalesReport from "./LaabamCont";

const MonthAnalysis = ({ Category }) => {
  const { state } = useContext(Context);

  let today = new Date().toISOString();
  let pastMonth_Number = parseInt(today.slice(6, 7)) - 1;

  let pastMonthData = [];
  state.forEach((element, r) => {
    if (parseInt(state[r].Date.slice(6, 7)) === pastMonth_Number) {
      pastMonthData.push(element);
    }
  });

  const Categorised_Data = [];
  pastMonthData.forEach((element, r) => {
    element.Categories.forEach((child, e) => {
      let objs = {};
      if (child === Category) {
        if (element.Date.slice(8, 10) <= 7) {
          objs.dates = "Week 1";
        }
        if (element.Date.slice(8, 10) >= 8 && element.Date.slice(8, 10) <= 14) {
          objs.dates = "Week 2";
        }
        if (
          element.Date.slice(8, 10) >= 15 &&
          element.Date.slice(8, 10) <= 21
        ) {
          objs.dates = "Week 3";
        }
        if (
          element.Date.slice(8, 10) >= 22 &&
          element.Date.slice(8, 10) <= 31
        ) {
          objs.dates = "Week 4";
        }
        objs.profit = element.IndividualProfit[e];
        objs.SellingPrice = element.SellingPrice[e];
        Categorised_Data.push(objs);
      }
    });
  });

  let MonthProfit = ObjectCombine(
    Categorised_Data.map((m) => m.dates),
    Categorised_Data.map((m) => m.profit)
  );
  let MonthSales = ObjectCombine(
    Categorised_Data.map((m) => m.dates),
    Categorised_Data.map((m) => m.SellingPrice)
  );

  let totalProfits = MonthProfit.reduce((a, b) => a + b.quantity, 0);
  let TotalSales = MonthSales.reduce((a, b) => a + b.quantity, 0);

  return (
    <ScrollView>
      {pastMonthData.length === 0 ? (
        <View>
          <Text>oops</Text>
        </View>
      ) : (
        <View style={styles.TodayAn}>
          {Categorised_Data.length === 0 ? (
            <View>
              <Text>nope</Text>
            </View>
          ) : (
            <View>
              <View style={styles.sales}>
                <SalesReport price={totalProfits} name="இன்றைய லாபம்" />
                <SalesReport price={TotalSales} name="இன்றைய விற்பனை" />
              </View>
              <BarPlot data={MonthProfit} title="லாப கணக்கு" />
              <BarPlot data={MonthSales} title="லாப கணக்கு" />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TodayAn: {
    backgroundColor: "white",
  },
  sales: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 80,
  },
});

export default MonthAnalysis;
