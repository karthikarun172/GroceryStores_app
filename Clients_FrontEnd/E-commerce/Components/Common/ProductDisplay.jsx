import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddButton from "./AddButton";
import OutOfStocks from "./OutofStock";
import Counter from "./Counter";
import AddAndCount from "./AddAndCount";

const ProductDisplay = ({
  Title,
  ProductName,
  CostPrice,
  CalculationPrice,
  Profit,
  Count,
  _id,
  SellingPrice,
  Quantity,
  Stock,
  Category,
  Units,
}) => {
  return (
    <View style={style.Container}>
      <Text>{Title}</Text>
      <View style={style.product}>
        <Text style={style.productName}>{ProductName}</Text>
        <Text style={style.productPrice}>₹{SellingPrice}</Text>
      </View>
      {Stock === 0 ? (
        <OutOfStocks />
      ) : (
        <AddAndCount
          ProductName={ProductName}
          CalculationPrice={CalculationPrice}
          Profit={Profit}
          Count={Count}
          CostPrice={CostPrice}
          _id={_id}
          SellingPrice={SellingPrice}
          Quantity={Quantity}
          Stock={Stock}
          Category={Category}
          Units={Units}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  product: {
    elevation: 10,
    borderRadius: 25,
    height: 140,
    width: 140,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: "#FF2963",
  },
  productName: {
    color: "white",
    textAlign: "center",
    marginTop: 55,
    fontWeight: "bold",
  },
  productPrice: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
  },
});

export default ProductDisplay;
