import React from "react";
import { View, Text } from "react-native";

const ProfileView = ({ name, symbol }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 60,
        }}
      >
        <Text
          style={{
            color: "#5A5A5A",
            fontSize: 20,
            textAlign: "left",
            width: 200,
          }}
        >
          {name}
        </Text>
        <Text style={{ color: "#5A5A5A", fontSize: 25 }}>{symbol}</Text>
      </View>
    </View>
  );
};

export default ProfileView;
