import React, { useContext, useEffect } from "react";
import StockList from "../../Components/StockList";
import { Context } from "../../Context/ProductContext";
import { ScrollView } from "react-native-gesture-handler";

const Stock = () => {
  const { state, getData } = useContext(Context);

  useEffect(() => {
    getData();
  }, []);

  let Out_of_Stock = state.filter((val) => val.Stock === 0);
  let Low_Stock = state.filter((val) => val.Stock <= 40);
  let High_Stock = state.filter((val) => val.Stock <= 50);
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <StockList
        filter={Out_of_Stock}
        name="Out Of Stock"
        textColor="white"
        color="#FF2963"
      />
      <StockList
        filter={Low_Stock}
        name="Low Stock"
        textColor="#5A5A5A"
        color="#FFEE24"
      />
      <StockList
        filter={High_Stock}
        name="High Stock"
        textColor="#5A5A5A"
        color="#8FFF86"
      />
    </ScrollView>
  );
};

export default Stock;
