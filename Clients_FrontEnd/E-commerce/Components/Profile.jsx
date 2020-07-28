import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  AsyncStorage,
  Modal,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context as CartContext } from "../Contexts/CartContext";
import Counter from "./Common/Counter";
import { Context as RegisterContext } from "../Contexts/RegisterContext";
import jwt from "jwt-decode";
import { CurrentUser } from "../utils/CurrentUser";

const Profile = () => {
  const [modalView, SetModalView] = useState(false);
  const { SignOut, state, Registerd_User } = useContext(RegisterContext);
  useEffect(() => {
    let user = jwt(state.token);
    Registerd_User(user._id);
  }, []);
  const [Name, SetName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");
  console.log(Name);

  return (
    <View style={{ margin: 120 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => Alert.alert("Press Done to Close")}
      >
        <View
          style={{ backgroundColor: "white", height: "100%", marginTop: 100 }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "red", height: 30 }}
            onPress={() => SetModalView(false)}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
          <Text>Change Name</Text>
          <TextInput
            onChangeText={() => SetName()}
            placeholder={`${state.user.Username}`}
          />
          <Text>Change Phone</Text>
          <TextInput
            onChangeText={() => SetPhone()}
            placeholder={`${state.user.Phone}`}
          />
          <Text>Change Password</Text>
          <TextInput
            onChangeText={() => SetPassword()}
            secureTextEntry={true}
          />
        </View>
      </Modal>
      <View>
        <TouchableOpacity onPress={() => SetModalView(true)}>
          <Text>Account Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SignOut()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
