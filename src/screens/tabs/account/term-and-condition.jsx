import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TermAndCondition = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>TermAndCondition</Text>
    </View>
  );
};

export default TermAndCondition;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
