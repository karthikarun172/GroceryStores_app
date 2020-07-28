import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Context as CartContext } from "../Contexts/CartContext";
import EmptyCart from "./CartComponents/EmptyCart";
import CartProductList from "./CartComponents/CartProductList";
import CartBilling from "./CartComponents/CartBilling";
import PlaceTheOrder from "./CartComponents/CartPlaceOrder";
import { CurrentUser } from "../utils/CurrentUser";

const Cart = ({ navigation }) => {
  const { state, PostCart } = useContext(CartContext);

  const handleQuantity = (Unit) => {
    if (Unit === "Grams" || "Kilograms" || "products" || "Liter") {
      return 1;
    }
  };

  const Totalprice = state.reduce((acc, curr) => acc + curr.SellingPrice, 0);
  // const TotalProfit1 = state.reduce(
  //   (acc, curr) => acc + curr.Profit * handleQuantity(curr.Units),
  //   0
  // );
  const Delivery = 5;

  let Products = [];
  let IndividualProfit = [];
  let Quantity = [];
  let Stock = [];
  let ItemIds = [];
  let SellingPrice = [];
  let UserName = CurrentUser().Name;
  let UserPhone = CurrentUser().Phone;
  let Categories = [];
  let Units = [];

  // console.log(UserName, UserPhone);

  state.forEach((elements, t) => {
    Products.push(state[t].ProductName);
    IndividualProfit.push(state[t].Profit * state[t].Count);
    SellingPrice.push(state[t].SellingPrice);
    Quantity.push(state[t].Quantity);
    Stock.push(state[t].Stock);
    ItemIds.push(state[t]._id);
    Categories.push(state[t].Category);
    Units.push(state[t].Units);
  });

  let TotalProfit =
    IndividualProfit.length === 0
      ? 0
      : IndividualProfit.reduce((a, b) => a + b);
  // console.log(TotalProfit, IndividualProfit, "fdssdfs");
  console.log(state);

  return (
    <View>
      {state.length === 0 ? (
        <EmptyCart toHome={() => navigation.navigate("Home")} />
      ) : (
        <View style={style.CartPage}>
          <CartProductList />
          <CartBilling Totalprice={Totalprice} Delivery={Delivery} />
          <PlaceTheOrder
            orderPlace={() =>
              PostCart(
                Products,
                Totalprice,
                TotalProfit,
                IndividualProfit,
                SellingPrice,
                Quantity,
                Categories,
                Units,
                ItemIds,
                UserName,
                UserPhone
              )
            }
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  CartPage: {
    height: "100%",
    justifyContent: "space-between",
  },
});

export default Cart;
