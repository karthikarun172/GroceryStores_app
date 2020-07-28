import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SalesCont from "../../Components/SalesCont";
import ChartCont from "../../Components/Charts/ChartCont";
import { TodayProfit } from "../../Utils/ProfitDisplay";

const Today = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <SalesCont Amount="₹380" Name="லாபம்" />
      <SalesCont bottom={50} Amount="₹1440" Name="வியாபாரம்" />
      <TouchableOpacity onPress={() => navigation.navigate("Vegetables")}>
        <ChartCont name="காய்கறிகள் " Profit={TodayProfit("Vegetables")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Snacks")}>
        <ChartCont name="தின்பண்டங்கள்" Profit={TodayProfit("Snacks")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Juices")}>
        <ChartCont name="ஜூஸ்" Profit={TodayProfit("Juices")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Stationaries")}>
        <ChartCont name="ஜூஸ் " Profit={TodayProfit("Stationaries")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Spices")}>
        <ChartCont name="தானியங்கள்" Profit={TodayProfit("Spices")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Fruits")}>
        <ChartCont name="பழங்கள்" Profit={TodayProfit("Fruits")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Powders")}>
        <ChartCont name="மசாலா தூள்" Profit={TodayProfit("Powders")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Flours")}>
        <ChartCont name="மாவு" Profit={TodayProfit("Flours")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Essentials")}>
        <ChartCont name="அத்தியாவசியங்கள்" Profit={TodayProfit("Essentials")} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({});

export default Today;
