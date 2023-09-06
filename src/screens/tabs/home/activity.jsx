import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Activity = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
