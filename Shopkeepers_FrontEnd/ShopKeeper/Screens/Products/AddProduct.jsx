import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Picker } from "react-native";
import Inputs from "../../Components/Common/Inputs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as ProductContext } from "../../Context/ProductContext";

const AddProduct = () => {
  const { AddData } = useContext(ProductContext);

  const [ProductName, SetProductName] = useState("");
  const [Category, SetCategory] = useState("");
  const [CostPrice, SetCostPrice] = useState("");
  const [Stock, SetStock] = useState("");
  const [SellingPrice, SetSellingPrice] = useState("");
  const [Units, SetUnits] = useState("");

  let Count = 0;
  let Quantity = 0;
  let Profit = SellingPrice - CostPrice;
  let CalculationPrice = SellingPrice;
  let TamilProductName = ProductName;

  const handleAdded = () => {
    console.log("addwd");
  };
  console.log(ProductName, "ds");

  return (
    <View style={style.ProductForm}>
      <View style={style.Form}>
        <Inputs
          placeholder="Product name"
          TextChange={SetProductName}
          name="Product Name"
          Wid="100%"
        />
        <Text style={{ marginTop: 30 }}>Category</Text>
        <View style={{ borderRadius: 10, backgroundColor: "lightgrey" }}>
          <Picker
            selectedValue={Category}
            style={{
              height: 50,
              width: 300,
            }}
            onValueChange={(itemValue, itemIndex) => SetCategory(itemValue)}
          >
            <Picker.Item label="Select Category" />
            <Picker.Item label="Vegetables" value="Vegetables" />
            <Picker.Item label="Snacks" value="Snacks" />
            <Picker.Item label="Powder" value="Powder" />
            <Picker.Item label="Stationary" value="Stationaries" />
            <Picker.Item label="Flour" value="Flour" />
          </Picker>
        </View>

        <View style={style.FormFlex}>
          <Inputs
            name="Cost Price"
            Wid={140}
            TextChange={SetCostPrice}
            keyboard="numeric"
          />
          <Inputs
            name="Selling Price"
            Wid={140}
            TextChange={SetSellingPrice}
            keyboard="numeric"
          />
        </View>
        <View style={style.FormFlex}>
          <Inputs
            name="Stock"
            Wid={140}
            TextChange={SetStock}
            keyboard="numeric"
          />
          <View style={{ marginTop: 35 }}>
            <Text style={{}}>Units</Text>
            <View
              style={{
                height: 50,
                width: 140,
                backgroundColor: "lightgrey",
                borderRadius: 10,
              }}
            >
              <Picker
                selectedValue={Units}
                onValueChange={(itemValue, itemIndex) => SetUnits(itemValue)}
              >
                <Picker.Item label="Select Units" />
                <Picker.Item label="Product" value="product" />
                <Picker.Item label="Grams" value="Grams" />
                <Picker.Item label="Kilograms" value="Kilograms" />
                <Picker.Item label="Liters" value="Liter" />
              </Picker>
            </View>
          </View>
          {/* <Inputs name="Units" TextChange={SetUnits} Wid={140} /> */}
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          AddData(
            ProductName,
            TamilProductName,
            Category,
            CostPrice,
            Quantity,
            SellingPrice,
            CalculationPrice,
            Profit,
            Count,
            Stock,
            Units,
            handleAdded()
          )
        }
      >
        <View style={style.AddBtn}>
          <Text style={style.AddBtnText}>Add Product</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  ProductForm: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Form: {
    width: "80%",
    alignSelf: "center",
    marginTop: 70,
  },
  FormFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  AddBtn: {
    backgroundColor: "green",
    padding: 15,
  },
  AddBtnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddProduct;
