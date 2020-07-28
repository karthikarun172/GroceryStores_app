import React from "react";
import { ScrollView } from "react-native";
import AnalisysHeader from "../../Components/AnalysisHeader";
import SalesCont from "../../Components/SalesCont";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChartCont from "../../Components/Charts/ChartCont";

const PastSixMonth = ({ navigation }) => {
  return (
    <ScrollView>
      <SalesCont Amount="₹5,34,380" Name="லாபம்" />
      <SalesCont bottom={50} Amount="₹10,14,440" Name="வியாபாரம்" />
      <TouchableOpacity
        onPress={() => navigation.navigate("VegetableSixMonth")}
      >
        <ChartCont name="காய்கறிகள்" Profit="203432" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SnackSixMonth")}>
        <ChartCont name="தின்பண்டங்கள்" Profit="63432" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("JucieSixMonth")}>
        <ChartCont name="ஜூஸ்" Profit="3432" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("StationarySixMonth")}
      >
        <ChartCont name="காய்கறிகள்" Profit="13432" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SpiceSixMonth")}>
        <ChartCont name="தானியங்கள்" Profit="132432" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FruitSixMonth")}>
        <ChartCont name="பழங்கள்" Profit="203432" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("EssentialSixMonth")}
      >
        <ChartCont name="மசாலா தூள்" Profit="603432" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FlourSixMonth")}>
        <ChartCont name="மாவு" Profit="23232" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PowderSixMonth")}>
        <ChartCont name="அத்தியாவசியங்கள்" Profit="12432.50" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PastSixMonth;
