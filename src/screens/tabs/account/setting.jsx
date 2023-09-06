import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Setting = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
