import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import OrderList from "../Components/OrderList";

const Home = () => {
  return (
    <View>
      <OrderList Homeheader="Order's" />
    </View>
  );
};

const style = StyleSheet.create({});

export default Home;
