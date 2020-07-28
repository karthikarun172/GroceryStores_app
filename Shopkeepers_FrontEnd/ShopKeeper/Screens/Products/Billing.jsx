import React, { useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
  ScrollView,
} from "react-native";
import { Context } from "../../Context/ProductContext";
import { Context as BillingContext } from "../../Context/BillingContext";
import { handleCount, handleSign } from "../../Utils/Units";

const Billing = () => {
  const [modalView, SetModalView] = useState(false);
  const [filter, setFilter] = useState([]);
  const { state, getData } = useContext(Context);

  const { state: BillingState, AddToCart, UpdateCart, DeleteCart } = useContext(
    BillingContext
  );

  const handleCategory = (category) => {
    let dat = [...state];
    let prices = [];
    dat.forEach((element) => {
      element.Category === category ? prices.push(element.SellingPrice) : null;
    });
    return [...new Set(prices)];
  };

  const handleModalView = (price, category) => {
    SetModalView(true);
    let data = [...state];
    let filtered_data = data.filter((item) => item.Category === category);
    let filtered_price = filtered_data.filter(
      (items) => items.SellingPrice === price
    );
    setFilter(filtered_price);
  };

  let TotalPrice = 130;

  const handleCart = (
    ProductName,
    CostPrice,
    _id,
    SellingPrice,
    CalculationPrice,
    Profit,
    Count,
    Quantity,
    Stock,
    Category,
    Units
  ) => {
    if (BillingState.length === 0) {
      return AddToCart(
        ProductName,
        CostPrice,
        _id,
        SellingPrice,
        CalculationPrice,
        Profit,
        Count,
        Quantity,
        Stock,
        Category,
        Units,
        handleCount(Units)
      );
    } else {
      let newCart;
      BillingState.forEach((element, r) => {
        if (element._id !== _id) {
          return (newCart = [
            ...BillingState,
            AddToCart(
              ProductName,
              CostPrice,
              _id,
              SellingPrice,
              CalculationPrice,
              Profit,
              Count,
              Quantity,
              Stock,
              Category,
              Units,
              handleCount(Units)
            ),
          ]);
        } else {
          UpdateCart(_id, handleCount(Units), CalculationPrice, Count);
        }
        BillingState = [...newCart];
      });
    }
  };

  console.log(BillingState, BillingState.length, "this is state length");

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => Alert.alert('Press "Done" to close')}
      >
        <View style={style.modalView}>
          <TouchableOpacity
            style={style.modalPick}
            onPress={() => SetModalView(!modalView)}
          >
            <Text style={style.modalDone}>Done</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filter}
              keyExtractor={(item, index) => item._id}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <View style={style.modalList}>
                    <TouchableOpacity
                      onPress={() =>
                        handleCart(
                          item.ProductName,
                          item.CostPrice,
                          item._id,
                          item.SellingPrice,
                          item.CalculationPrice,
                          item.Profit,
                          item.Count,
                          item.Quantity,
                          item.Stock,
                          item.Category,
                          item.Units
                          // handleCount(item.Units)
                        )
                      }
                    >
                      <Text style={style.modalListText}>
                        {item.ProductName}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Text style={style.Categoryheader}>Vegetables - ₹{TotalPrice}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={handleCategory("Vegetables")}
        keyExtractor={(item) => `item-${item}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => handleModalView(item, "Vegetables")}
            >
              <View style={style.CategoryType}>
                <Text style={style.CategoreyText}>₹ {item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={style.Categoryheader}>Snacks - ₹{TotalPrice}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={handleCategory("Snacks")}
        keyExtractor={(item) => `item-${item}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleModalView(item, "Snacks")}>
              <View style={style.CategoryType}>
                <Text style={style.CategoreyText}>₹ {item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={style.Categoryheader}>Powder - ₹{TotalPrice}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={handleCategory("Powder")}
        keyExtractor={(item) => `item-${item}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleModalView(item, "Powder")}>
              <View style={style.CategoryType}>
                <Text style={style.CategoreyText}>₹ {item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={style.Categoryheader}>Stationaries - ₹{TotalPrice}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={handleCategory("Stationaries")}
        keyExtractor={(item) => `item-${item}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => handleModalView(item, "Stationaries")}
            >
              <View style={style.CategoryType}>
                <Text style={style.CategoreyText}>₹ {item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={style.Categoryheader}>Flours - ₹{TotalPrice}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={handleCategory("Flours")}
        keyExtractor={(item) => `item-${item}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleModalView(item, "Flours")}>
              <View style={style.CategoryType}>
                <Text style={style.CategoreyText}>₹ {item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    height: "100%",
    marginTop: 200,
    elevation: 20,
    borderRadius: 20,
  },
  modalPick: {
    backgroundColor: "#00C92E",
    width: "100%",
  },
  modalDone: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
  modalList: {
    marginTop: 20,
    marginLeft: "10%",
    backgroundColor: "#D0D0D0",
    elevation: 5,
    width: "35%",
    height: 120,
    borderRadius: 12,
    marginBottom: 50,
  },
  modalListText: {
    color: "#5F5F5F",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "45%",
  },
  Categoryheader: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 19,
    fontWeight: "bold",
  },
  CategoryType: {
    backgroundColor: "#D0D0D0",
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 20,
    // elevation: 10,
  },
  CategoreyText: {
    textAlign: "center",
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: 60,
    fontSize: 18,
  },
});
export default Billing;

// AddToCart(
//   ProductName,
//   CostPrice,
//   _id,
//   SellingPrice,
//   CalculationPrice,
//   Profit,
//   Count,
//   Quantity,
//   Stock,
//   Category,
//   Units,
//   handleCount(Units)

//    UpdateCart(_id, handleCount(Units), CalculationPrice, Count);
