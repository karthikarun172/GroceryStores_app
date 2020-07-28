import React, { useContext } from "react";
import { Context as RegisterContext } from "../Contexts/RegisterContext";
import Home from "./Home";
import Cart from "./Cart";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./signUp";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const { state } = useContext(RegisterContext);

  return (
    <>
      {state.token === null ? (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Register" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#F4356F"
          inactiveColor="grey"
          barStyle={{ backgroundColor: "white" }}
          tabBarOptions={{ showIcon: true, showLabel: false }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="home" size={18} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="shopping-cart" size={18} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="face-profile"
                  size={18}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default Navigation;
