import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PrivacyPolice = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>PrivacyPolice</Text>
    </View>
  );
};

export default PrivacyPolice;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
