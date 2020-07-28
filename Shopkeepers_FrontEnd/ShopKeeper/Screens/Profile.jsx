import React from "react";
import { View, Text } from "react-native";
import ProfileView from "../Components/ProfilePages/ProfileView";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TouchableOpacity onPress={() => navigation.navigate("AccountDetails")}>
        <ProfileView name="Account Details" symbol=">" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PaymentDetails")}>
        <ProfileView name="Payment Details" symbol=">" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MemberShip")}>
        <ProfileView name="Membership" symbol=">" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <ProfileView name="Settings" symbol=">" />
      </TouchableOpacity>
      <TouchableOpacity>
        <ProfileView name="Sign Out" />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
