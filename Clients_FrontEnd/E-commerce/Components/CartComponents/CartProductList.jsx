import React, { useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Context as CartContext } from "../../Contexts/CartContext";
import { handleCount, handleSign } from "../../utils/Units";
import Counter from "../Common/Counter";
import { ScrollView } from "react-native-gesture-handler";

const CartProductList = () => {
  const { state, DeleteCart, UpdateCart, PostCart } = useContext(CartContext);

  return (
    <View style={style.Cart}>
      <Text style={style.CartHeader}>ITEMS</Text>
      <View style={style.CartListCont}>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <ScrollView>
                <View style={style.CartList}>
                  <Text style={{ width: 150, fontSize: 14 }}>
                    {item.ProductName}
                  </Text>
                  <View style={style.SellingPrice}>
                    <Text style={style.SellingPriceText}>
                      ₹{item.SellingPrice}
                    </Text>
                  </View>
                  <Counter
                    value={item.Quantity + handleSign(item.Units)}
                    onSub={
                      item.Quantity <= handleCount(item.Units)
                        ? () => DeleteCart(item._id)
                        : () =>
                            UpdateCart(
                              item._id,
                              -1 * handleCount(item.Units),
                              -1 * item.CalculationPrice,
                              -1
                            )
                    }
                    onAdd={() =>
                      UpdateCart(
                        item._id,
                        handleCount(item.Units),
                        item.CalculationPrice,
                        1
                      )
                    }
                  />
                </View>
              </ScrollView>
            );
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Cart: {
    marginTop: 0,
  },
  CartHeader: {
    textAlign: "left",
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  CartListCont: {
    height: 350,
  },
  SellingPrice: {
    width: 50,
  },
  SellingPriceText: {
    textAlign: "right",
  },
  CartList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
});

export default CartProductList;
