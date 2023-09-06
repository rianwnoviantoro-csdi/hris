import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Holiday = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Holiday</Text>
    </View>
  );
};

export default Holiday;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
