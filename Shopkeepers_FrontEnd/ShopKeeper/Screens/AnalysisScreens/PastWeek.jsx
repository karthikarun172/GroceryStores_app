import React from "react";
import { ScrollView } from "react-native";
import AnalisysHeader from "../../Components/AnalysisHeader";
import SalesCont from "../../Components/SalesCont";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChartCont from "../../Components/Charts/ChartCont";

const PastWeek = ({ navigation }) => {
  return (
    <ScrollView>
      <SalesCont Amount="₹10,380" Name="லாபம்" />
      <SalesCont bottom={50} Amount="₹14,240" Name="வியாபாரம்" />
      <TouchableOpacity onPress={() => navigation.navigate("VegetableWeek")}>
        <ChartCont name="காய்கறிகள்" Profit="2000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SnackWeek")}>
        <ChartCont name="தின்பண்டங்கள்" Profit="500" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("JuiceWeek")}>
        <ChartCont name="ஜூஸ்" Profit="430" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StationaryWeek")}>
        <ChartCont name="காய்கறிகள்" Profit="1200" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SpiceWeek")}>
        <ChartCont name="தானியங்கள்" Profit="2364.50" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FruitWeek")}>
        <ChartCont name="பழங்கள்" Profit="3300" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EssentialWeek")}>
        <ChartCont name="மசாலா" Profit="700" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FlourWeek")}>
        <ChartCont name="மாவு" Profit="1242" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PowderWeek")}>
        <ChartCont name="அத்தியாவசியங்கள்" Profit="2340" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PastWeek;
