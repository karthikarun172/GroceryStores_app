import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const StockList = ({ filter, color, name, textColor }) => {
  return (
    <View>
      <Text
        style={{
          marginLeft: 30,
          marginBottom: 20,
          fontSize: 20,
          color: "#5A5A5A",
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        {name}
      </Text>
      <FlatList
        // ref={(ref) => {
        //   filter = ref;
        // }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filter}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 180, height: 170 }}>
              <View
                style={{
                  backgroundColor: `${color}`,
                  marginLeft: 20,
                  height: 150,
                  width: 150,
                  justifyContent: "center",
                  borderRadius: 25,
                  elevation: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: `${textColor}`,
                    fontWeight: "bold",
                  }}
                >
                  {item.ProductName}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: `${textColor}`,
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  +
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  ProductCont: {},
});
export default StockList;
