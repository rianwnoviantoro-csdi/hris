import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Apply = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Apply</Text>
    </View>
  );
};

export default Apply;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
