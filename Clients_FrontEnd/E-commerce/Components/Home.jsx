import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Button,
  Text,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as DataContext } from "../Contexts/DataContext";
import { TextInput, ScrollView, Switch } from "react-native-gesture-handler";
import DataFlatList from "./Common/DataFlatList";

const Home = ({ navigation }) => {
  const { state, getData } = useContext(DataContext);

  useEffect(() => {
    getData();
    // const listener = navigation.addListener("focus", () => {
    //   getData();
    // });
    // return () => {
    //   listener.remove();
    // };
  }, []);
  // console.log(state);
  console.log("dsads");

  const Snacks = state.filter((m) => m.Category === "Snacks");
  const Juice = state.filter((m) => m.Category === "Jucies");
  const Powder = state.filter((m) => m.Category === "Powder");
  const Cereals = state.filter((m) => m.Category === "Cereals & Spices");
  const Stationary = state.filter((m) => m.Category === "Stationaries");
  const Vegetables = state.filter((m) => m.Category === "Vegetables");

  return (
    <SafeAreaView forceInset={{ bottom: "always" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {state.length === 0 ? (
          <View style={style.Activity}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <View>
            <TextInput
              style={style.Search}
              placeholder="Search"
              placeholderTextColor="darkgrey"
            />
            <DataFlatList filter={Vegetables} name="Vegetables" />
            <DataFlatList filter={Snacks} name="Snacks" />
            <DataFlatList filter={Juice} name="Juices" />
            <DataFlatList filter={Powder} name="Powders" />
            <DataFlatList filter={Cereals} name="Cereals & Spices" />
            <DataFlatList filter={Stationary} name="Stationaries" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Search: {
    height: 40,
    backgroundColor: "lightgrey",
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    paddingLeft: 25,
    paddingRight: 25,
  },
  Activity: {
    marginTop: "50%",
  },
});

export default Home;
