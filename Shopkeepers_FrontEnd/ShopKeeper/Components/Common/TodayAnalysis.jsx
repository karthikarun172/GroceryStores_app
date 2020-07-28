import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BarPlot } from "../../Components/Charts/Charts";
import { Context } from "../../Context/CartContext";
import _ from "lodash";
import SalesReport from "../Common/LaabamCont";
import { ObjectCombine } from "../../Utils/ObjectComb";

const TodayAnalysis = ({ Category }) => {
  const { state } = useContext(Context);

  let today = new Date().toISOString();
  let todayData = state.filter(
    (m) => m.Date.slice(0, 10) === today.slice(0, 10)
  );

  let Datas_today = [];

  todayData.forEach((element) => {
    element.Categories.forEach((child, e) => {
      let objs = {};
      if (child === Category) {
        objs.product = element.Products[e];
        objs.quantity = element.Quantity[e];
        objs.profit = element.IndividualProfit[e];
        objs.sales = element.SellingPrice[e];
        Datas_today.push(objs);
      }
    });
  });
  console.log(Datas_today);

  let totalProfits = Datas_today.reduce((a, b) => a + b.profit, 0);
  let TotalSales = Datas_today.reduce((a, b) => a + b.sales, 0);

  let QuantityAnalysis = ObjectCombine(
    Datas_today.map((m) => m.product),
    Datas_today.map((m) => m.quantity)
  );
  let ProfitAnaltsis = ObjectCombine(
    Datas_today.map((m) => m.product),
    Datas_today.map((m) => m.profit)
  );

  return (
    <ScrollView>
      <View style={styles.TodayAn}>
        {todayData.length === 0 ? (
          <View>
            <Text>nope</Text>
          </View>
        ) : (
          <View>
            <View style={styles.sales}>
              <SalesReport price={totalProfits} name="இன்றைய லாபம்" />
              <SalesReport price={TotalSales} name="இன்றைய விற்பனை" />
            </View>
            <BarPlot data={QuantityAnalysis} title="லாப கணக்கு" />
            <BarPlot data={ProfitAnaltsis} title="லாப கணக்கு" />
          </View>
        )}
      </View>
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

export default TodayAnalysis;
