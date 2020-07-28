import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context as CartContext } from "../../Contexts/CartContext";
import AddButton from "./AddButton";
import Counter from "./Counter";
import { handleCount, handleSign } from "../../utils/Units";

const AddAndCount = ({
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
  const { state, AddToCart, UpdateCart, DeleteCart } = useContext(CartContext);

  // const ToggleAdd = (_id) => {
  //   if (state.length === 0) {
  //     return (
  //       <AddButton
  //         onAddtoCart={() =>
  //           AddToCart(
  //             ProductName,
  //             CostPrice,
  //             _id,
  //             SellingPrice,
  //             Quantity,
  //             Stock,
  //             Categorey,
  //             Units
  //           )
  //         }
  //       />
  //     );
  //   } else if (state.length >= 1) {
  //     if (_id === state.map((item) => item._id)) {
  //       return <Text>ds</Text>;
  //     }
  //   }
  //   return;
  // };
  return (
    <View>
      <AddButton
        onAddtoCart={() =>
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
          )
        }
      />
      {state.map((item) => {
        if (item._id === _id) {
          return (
            <Counter
              key={item._id}
              value={item.Quantity + handleSign(item.Units)}
              onAdd={() =>
                UpdateCart(
                  item._id,
                  handleCount(item.Units),
                  item.CalculationPrice,
                  1
                )
              }
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
            />
          );
        }
      })}
    </View>
  );
};

export default AddAndCount;
