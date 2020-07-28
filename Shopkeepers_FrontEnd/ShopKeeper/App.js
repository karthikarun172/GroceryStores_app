import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigations/Navigation";
import { Provider as OrderProvider } from "./Context/CartContext";
import { Provider as ProductProvider } from "./Context/ProductContext";
import { Provider as BillingProvider } from "./Context/BillingContext";

export default function App() {
  return (
    <BillingProvider>
      <ProductProvider>
        <OrderProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </OrderProvider>
      </ProductProvider>
    </BillingProvider>
  );
}
