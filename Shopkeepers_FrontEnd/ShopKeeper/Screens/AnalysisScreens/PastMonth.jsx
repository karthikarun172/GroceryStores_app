import React from "react";
import { ScrollView } from "react-native";
import AnalisysHeader from "../../Components/AnalysisHeader";
import SalesCont from "../../Components/SalesCont";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChartCont from "../../Components/Charts/ChartCont";

const PastMonth = ({ navigation }) => {
  return (
    <ScrollView>
      <SalesCont Amount="₹30,380" Name="லாபம்" />
      <SalesCont bottom={50} Amount="₹80,440" Name="வியாபாரம்" />
      <TouchableOpacity onPress={() => navigation.navigate("VegetabelMonth")}>
        <ChartCont name="காய்கறிகள்" Profit="4313.50" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SnackMonth")}>
        <ChartCont name="தின்பண்டங்கள்" Profit="5103" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("JuiceMonth")}>
        <ChartCont name="ஜூஸ்" Profit="2344" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StationaryMonth")}>
        <ChartCont name="காய்கறிகள்" Profit="10313.50" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SpiceMonth")}>
        <ChartCont name="தானியங்கள்" Profit="6123" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FruitMonth")}>
        <ChartCont name="பழங்கள்" Profit="9200" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EssentialMonth")}>
        <ChartCont name="மசாலா தூள்" Profit="7000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FlourMonth")}>
        <ChartCont name="மாவு" Profit="3112" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PowderMonth")}>
        <ChartCont name="அத்தியாவசியங்கள்" Profit="5043" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PastMonth;
