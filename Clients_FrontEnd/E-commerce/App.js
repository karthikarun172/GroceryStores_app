import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as DataProvider } from "./Contexts/DataContext";
import { Provider as CartProvider } from "./Contexts/CartContext";
import { Provider as RegisterProvider } from "./Contexts/RegisterContext";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <RegisterProvider>
      <CartProvider>
        <DataProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </DataProvider>
      </CartProvider>
    </RegisterProvider>
  );
}
