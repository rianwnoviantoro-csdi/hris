import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Account = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Account</Text>
      <TouchableOpacity onPress={() => navigation.navigate("account/profile")}>
        <Text>My profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("account/setting")}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("account/term-and-condition")}
      >
        <Text>Term & Condition</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("account/privacy-police")}
      >
        <Text>Privacy police</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
