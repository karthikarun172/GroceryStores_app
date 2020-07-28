import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Inputs = ({
  placeholder,
  TextChange,
  name,
  Wid,
  keyboard = "default",
}) => {
  return (
    <View>
      <Text style={style.name}>{name}</Text>
      <TextInput
        ref={(input) => {
          textinput: input;
        }}
        placeholder={placeholder}
        placeholderTextColor="grey"
        onChangeText={TextChange}
        keyboardType={keyboard}
        style={{
          width: Wid,
          backgroundColor: "lightgrey",
          padding: 10,
          borderRadius: 10,
        }}
        autoCapitalize="none"
      />
    </View>
  );
};

const style = StyleSheet.create({
  name: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#505050",
    marginTop: 30,
  },
  textIp: {},
});

export default Inputs;
