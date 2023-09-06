import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Leave = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Leave</Text>
      <TouchableOpacity onPress={() => navigation.navigate("leave/apply")}>
        <Text>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("leave/detail", {
            ticket: "R0ZUSNVuZQ",
          })
        }
      >
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Leave;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
