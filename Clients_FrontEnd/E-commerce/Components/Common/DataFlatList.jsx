import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import ProductDisplay from "./ProductDisplay";

const DataFlatList = ({ filter, name }) => {
  return (
    <View>
      <Text style={style.Title}>{name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filter}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <ProductDisplay
              _id={item._id}
              ProductName={item.TamilProductName}
              CalculationPrice={item.CalculationPrice}
              Profit={item.Profit}
              Count={item.Count}
              CostPrice={item.CostPrice}
              SellingPrice={item.SellingPrice}
              Quantity={item.Quantity}
              Stock={item.Stock}
              Category={item.Category}
              Units={item.Units}
            />
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  Title: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DataFlatList;
