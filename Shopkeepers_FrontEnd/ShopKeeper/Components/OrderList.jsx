import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { Context as OrderContext } from "../Context/CartContext";
import { handleSign } from "../Utils/Units";

const OrderList = ({ navigation }) => {
  const { state, getOrders, deleteOrder, StockChange } = useContext(
    OrderContext
  );
  const [OrderData, SetOrderData] = useState([]);

  useEffect(() => {
    getOrders();
    const datas = [...state];
    SetOrderData(datas);

    // const listener = navigation.addListener("focus", () => {
    //   getOrders();
    // });
    // return () => {
    //   listener.remove();
    // };
  }, []);

  const handleChange = (_id, Stock, Quantity, ItemIds) => {
    () => StockChange(_id, Stock, Quantity, ItemIds);
    OrderData.filter((m) => m._id !== _id);
  };
  console.log(OrderData[0]);

  const dialCall = (number) => {
    let phoneNumber;
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  const handleFilter = (_id) => {
    OrderData.filter((m) => m._id !== _id);
    console.log("filtered");
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={style.orderContainer}>
              <Text style={style.UserName}>{item.UserName}</Text>
              <Text style={style.UserName}>{item.Date}</Text>
              <View>
                {item.Products.map((val, indx) => {
                  return (
                    <View style={style.orderList} key={`${indx}`}>
                      <Text style={style.Products}>{val}</Text>
                      <Text style={style.Quantity}>
                        {item.Quantity[indx]}
                        {handleSign(item.Units[indx])}
                      </Text>
                      <Text style={style.Price}>
                        ₹{item.SellingPrice[indx]}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <Text style={style.TotalPrice}>
                Total Price: ₹{item.TotalPrice}
              </Text>
              <Text style={style.TotalProfit}>
                Total Profit: ₹{item.TotalProfit}
              </Text>
              <View style={style.Icons}>
                <TouchableOpacity onPress={() => deleteOrder(item._id)}>
                  <Image source={require("../assets/close_Btn.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dialCall(item.UserPhone)}>
                  <Image source={require("../assets/call_Btn.png")} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    StockChange(
                      item._id,
                      item.Stock,
                      item.Quantity,
                      item.ItemIds,
                      handleFilter(item._id)
                    )
                  }
                >
                  <Image source={require("../assets/confirm_Btn.png")} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  OrdersHeader: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  orderContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: "#F4356F",
    width: "85%",
    alignSelf: "center",
    borderRadius: 20,
    elevation: 5,
  },
  UserName: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  orderList: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  Products: {
    width: 140,
    textAlign: "left",
    color: "white",
  },
  Quantity: {
    borderRadius: 4,
    backgroundColor: "white",
    width: 70,
    textAlign: "center",
  },
  Price: {
    width: 50,
    color: "white",
  },
  TotalPrice: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  TotalProfit: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  Icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default OrderList;
