import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Detail = ({ route, navigation }) => {
  const { ticket } = route.params;

  return (
    <View style={syles.container}>
      <Text>Detail ticket: {ticket}</Text>
    </View>
  );
};

export default Detail;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
