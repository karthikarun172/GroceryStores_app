import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Stock from "../Screens/Products/Stock";
import Billing from "../Screens/Products/Billing";
import AddProduct from "../Screens/Products/AddProduct";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Today from "../Screens/AnalysisScreens/Today";
import PastWeek from "../Screens/AnalysisScreens/PastWeek";
import PastMonth from "../Screens/AnalysisScreens/PastMonth";
import PastSixMonth from "../Screens/AnalysisScreens/PastSixMonth";
import PastYear from "../Screens/AnalysisScreens/PastYear";

import Vegetables from "../Components/TodayAnalysis/Vegetables";
import Snacks from "../Components/TodayAnalysis/Snacks";
import Juices from "../Components/TodayAnalysis/Juices";
import Stationaries from "../Components/TodayAnalysis/Stationaries";
import Powders from "../Components/TodayAnalysis/Powders";
import Flours from "../Components/TodayAnalysis/Flours";
import Essentials from "../Components/TodayAnalysis/Essentials";
import Friuts from "../Components/TodayAnalysis/Fruits";
import Spices from "../Components/TodayAnalysis/Spices";

import VegetableWeek from "../Components/WeekAnalysis/VegetableWeek";
import SnackWeek from "../Components/WeekAnalysis/SnackWeek";
import JucieWeek from "../Components/WeekAnalysis/JuicesWeek";
import StationaryWeek from "../Components/WeekAnalysis/StationaryWeek";
import SpiceWeek from "../Components/WeekAnalysis/SpiceWeek";
import FruitWeek from "../Components/WeekAnalysis/FruitWeek";
import EssentialWeek from "../Components/WeekAnalysis/EssentialWeek";
import FlourWeek from "../Components/WeekAnalysis/FlourWeek";
import PowderWeek from "../Components/WeekAnalysis/PowderWeek";

import VegetableMonth from "../Components/MonthAnalysis/VegetableMonth";
import SnackMonth from "../Components/MonthAnalysis/SnackMonth";
import JuiceMonth from "../Components/MonthAnalysis/JuiceMonth";
import Stationarymonth from "../Components/MonthAnalysis/StationaryMonth";
import SpiceMonth from "../Components/MonthAnalysis/SpiceMonth";
import FruitMonth from "../Components/MonthAnalysis/FruitMonth";
import EssentialMonth from "../Components/MonthAnalysis/EssentialMonth";
import FlourMonth from "../Components/MonthAnalysis/FlourMonth";
import PowdeMonth from "../Components/MonthAnalysis/PowderMonth";

import VegetableSixMonth from "../Components/SixMonthAnalysis/VegetableSixMonth";
import SnackSixMonth from "../Components/SixMonthAnalysis/SnackSixMonth";
import JuiceSixMonth from "../Components/SixMonthAnalysis/JuiceSixMonth";
import StationarySixMonth from "../Components/SixMonthAnalysis/StationarySixMonth";
import SpiceSixMonth from "../Components/SixMonthAnalysis/SpiceSixMonth";
import FruitSixMonth from "../Components/SixMonthAnalysis/FruitSixMonth";
import EssentialSixMonth from "../Components/SixMonthAnalysis/EssentialSixMonth";
import FlourSixMonth from "../Components/SixMonthAnalysis/FlourSixMonth";
import PowderSixMonth from "../Components/SixMonthAnalysis/PowderSixMonth";

import VegetableYear from "../Components/YearAnalysis/VegetableYear";
import SnackYear from "../Components/YearAnalysis/SnackYear";
import JucieYear from "../Components/YearAnalysis/JuiceYear";
import StationaryYear from "../Components/YearAnalysis/StationaryYear";
import SpiceYear from "../Components/YearAnalysis/SpiceYear";
import FruitYear from "../Components/YearAnalysis/FruitYear";
import EssentialYear from "../Components/YearAnalysis/EssentialYear";
import FlourYear from "../Components/YearAnalysis/FlourYear";
import PowderYear from "../Components/YearAnalysis/PowderYear";
import AccountDetails from "../Components/ProfilePages/AccountDetails";
import PaymentDetails from "../Components/ProfilePages/PaymentDetails";
import MemberShip from "../Components/ProfilePages/MemberShip";
import Settings from "../Components/ProfilePages/Settings";

import {
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Products = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Billing" component={Billing} />
      <TopTab.Screen name="Stock" component={Stock} />
      <TopTab.Screen name="Add" component={AddProduct} />
    </TopTab.Navigator>
  );
};

const TodayAnalysis = () => {
  return (
    <Stack.Navigator initialRouteName="Today">
      <Stack.Screen name="Today" component={Today} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen name="Snacks" component={Snacks} />
      <Stack.Screen name="Juices" component={Juices} />
      <Stack.Screen name="Stationaries" component={Stationaries} />
      <Stack.Screen name="Spices" component={Spices} />
      <Stack.Screen name="Fruits" component={Friuts} />
      <Stack.Screen name="Essentials" component={Essentials} />
      <Stack.Screen name="Flours" component={Flours} />
      <Stack.Screen name="Powders" component={Powders} />
    </Stack.Navigator>
  );
};
const WeekAnalysis = () => {
  return (
    <Stack.Navigator initialRouteName="PastWeek">
      <Stack.Screen name="PastWeek" component={PastWeek} />
      <Stack.Screen name="VegetableWeek" component={VegetableWeek} />
      <Stack.Screen name="SnackWeek" component={SnackWeek} />
      <Stack.Screen name="JuiceWeek" component={JucieWeek} />
      <Stack.Screen name="StationaryWeek" component={StationaryWeek} />
      <Stack.Screen name="SpiceWeek" component={SpiceWeek} />
      <Stack.Screen name="FruitWeek" component={FruitWeek} />
      <Stack.Screen name="EssentialWeek" component={EssentialWeek} />
      <Stack.Screen name="FlourWeek" component={FlourWeek} />
      <Stack.Screen name="PowderWeek" component={PowderWeek} />
    </Stack.Navigator>
  );
};

const MonthAnalysis = () => {
  return (
    <Stack.Navigator initialRouteName="PastMonth">
      <Stack.Screen name="PastMonth" component={PastMonth} />
      <Stack.Screen name="VegetabelMonth" component={VegetableMonth} />
      <Stack.Screen name="SnackMonth" component={SnackMonth} />
      <Stack.Screen name="JuiceMonth" component={JuiceMonth} />
      <Stack.Screen name="StationaryMonth" component={Stationarymonth} />
      <Stack.Screen name="SpiceMonth" component={SpiceMonth} />
      <Stack.Screen name="FruitMonth" component={FruitMonth} />
      <Stack.Screen name="EssentialMonth" component={EssentialMonth} />
      <Stack.Screen name="FlourMonth" component={FlourMonth} />
      <Stack.Screen name="PowderMonth" component={PowdeMonth} />
    </Stack.Navigator>
  );
};

const SixMonthAnalysis = () => {
  return (
    <Stack.Navigator initialRouteName="PastSixMonth">
      <Stack.Screen name="PastSixMonth" component={PastSixMonth} />
      <Stack.Screen name="VegetableSixMonth" component={VegetableSixMonth} />
      <Stack.Screen name="SnackSixMonth" component={SnackSixMonth} />
      <Stack.Screen name="JucieSixMonth" component={JuiceSixMonth} />
      <Stack.Screen name="StationarySixMonth" component={StationarySixMonth} />
      <Stack.Screen name="SpiceSixMonth" component={SpiceSixMonth} />
      <Stack.Screen name="FruitSixMonth" component={FruitSixMonth} />
      <Stack.Screen name="EssentialSixMonth" component={EssentialSixMonth} />
      <Stack.Screen name="FlourSixMonth" component={FlourSixMonth} />
      <Stack.Screen name="PowderSixMonth" component={PowderSixMonth} />
    </Stack.Navigator>
  );
};

const YearAnalysis = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PastYear" component={PastYear} />
      <Stack.Screen name="VegetableYear" component={VegetableYear} />
      <Stack.Screen name="SnackYear" component={SnackYear} />
      <Stack.Screen name="JucieYear" component={JucieYear} />
      <Stack.Screen name="StationaryYear" component={StationaryYear} />
      <Stack.Screen name="SpiceYear" component={SpiceYear} />
      <Stack.Screen name="FruitYear" component={FruitYear} />
      <Stack.Screen name="EssentialYear" component={EssentialYear} />
      <Stack.Screen name="FlourYear" component={FlourYear} />
      <Stack.Screen name="PowderYear" component={PowderYear} />
    </Stack.Navigator>
  );
};

const Analysis = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Today_Analysis" children={TodayAnalysis} />
      <Drawer.Screen name="PastWeek" children={WeekAnalysis} />
      <Drawer.Screen name="PastMonth" children={MonthAnalysis} />
      <Drawer.Screen name="PastSixMont" children={SixMonthAnalysis} />
      <Drawer.Screen name="PastYear" children={YearAnalysis} />
    </Drawer.Navigator>
  );
};

const ProfilePage = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AccountDetails" component={AccountDetails} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
      <Stack.Screen name="MemberShip" component={MemberShip} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F4356F"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "white" }}
      tabBarOptions={{ showIcon: true, showLabel: true }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={18} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Stock",
          tabBarIcon: ({ color }) => (
            <AntDesign name="switcher" size={18} color={color} />
          ),
        }}
        name="products"
        children={Products}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bar-chart" size={18} color={color} />
          ),
        }}
        name="Anaysis"
        children={Analysis}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={18} color={color} />
          ),
        }}
        name="profile"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
