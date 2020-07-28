import React from "react";
import { ScrollView } from "react-native";
import SalesCont from "../../Components/SalesCont";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChartCont from "../../Components/Charts/ChartCont";

const PastYear = ({ navigation }) => {
  return (
    <ScrollView>
      <SalesCont Amount="₹9,34,280" Name="லாபம்" />
      <SalesCont bottom={50} Amount="₹21,21,440" Name="வியாபாரம்" />
      <TouchableOpacity onPress={() => navigation.navigate("VegetableYear")}>
        <ChartCont name="காய்கறிகள்" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SnackYear")}>
        <ChartCont name="தின்பண்டங்கள்" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("JucieYear")}>
        <ChartCont name="ஜூஸ்" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StationaryYear")}>
        <ChartCont name="PastYear" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SpiceYear")}>
        <ChartCont name="தானியங்கள்" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FruitYear")}>
        <ChartCont name="பழங்கள்" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EssentialYear")}>
        <ChartCont name="மசாலா தூள்" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FlourYear")}>
        <ChartCont name="மாவு" Profit="245035" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PowderYear")}>
        <ChartCont name="அத்தியாவசியங்கள்" Profit="245035" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PastYear;
