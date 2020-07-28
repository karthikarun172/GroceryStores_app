import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Context } from "../../Context/CartContext";
import { ObjectCombine } from "../../Utils/ObjectComb";
import { BarPlot } from "../Charts/Charts";
import SalesReport from "../Common/LaabamCont";

const WeekAnalysis = ({ Category }) => {
  const { state } = useContext(Context);

  let pastWeekDate = [];
  let pastWeekDays = [];

  let datas = [];

  state.forEach((element) => {
    element.Categories.forEach((child, e) => {
      let obj = {};
      if (child === Category) {
        obj.dates = element.Date.slice(0, 10);
        obj.profit = element.IndividualProfit[e];
        obj.price = element.SellingPrice[e];
        datas.push(obj);
      }
    });
  });

  let CombinedData = ObjectCombine(
    datas.map((m) => m.dates),
    datas.map((p) => p.profit)
  );

  let CombinedData_Sales = ObjectCombine(
    datas.map((m) => m.dates),
    datas.map((s) => s.price)
  );

  let day = new Date();

  let week = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  week.forEach((element, r) => {
    pastWeekDate.push(day.getDate() - r - 1);
    pastWeekDays.push(week[(day.getDate() - 1 - r) % 7]);
  });

  let Profits = [];
  let Days = [];
  let Sales = [];

  pastWeekDate.forEach((element, r) => {
    CombinedData.forEach((child) => {
      if (element === parseInt(child.name.slice(8, 10))) {
        Profits.push(child.quantity);
        Days.push(pastWeekDays[r]);
      }
    });
  });

  pastWeekDate.forEach((element, r) => {
    CombinedData_Sales.forEach((child) => {
      if (element === parseInt(child.name.slice(8, 10))) {
        Sales.push(child.quantity);
      }
    });
  });

  let totalProfits = Profits.reduce((a, b) => a + b);
  let TotalSales = Sales.reduce((a, b) => a + b);

  let WeekProfitReport = ObjectCombine(Days, Profits);
  let WeekSalesReport = ObjectCombine(Days, Sales);

  return (
    <ScrollView>
      <View style={styles.sales}>
        <SalesReport price={totalProfits} name="week Profit" />
        <SalesReport price={TotalSales} name="week Sales" />
      </View>
      <View>
        <BarPlot data={WeekProfitReport} title="Profit Report" />
        <BarPlot data={WeekSalesReport} title="sales Report" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TodayAn: {
    backgroundColor: "white",
  },
  sales: {
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 80,
  },
});

export default WeekAnalysis;
