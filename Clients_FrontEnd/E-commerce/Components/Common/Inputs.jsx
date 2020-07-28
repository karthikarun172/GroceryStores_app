import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Input = ({
  name,
  enter,
  keyboard = "default",
  secure = false,
  TextChange,
}) => {
  return (
    <View>
      <Text style={style.name}>{name}</Text>
      <TextInput
        onChangeText={TextChange}
        placeholder={enter}
        style={style.textIp}
        keyboardType={keyboard}
        secureTextEntry={secure}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  name: {
    color: "#555555",
  },
  textIp: {
    borderWidth: 0.8,
    borderColor: "#D5D5D5",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Input;
