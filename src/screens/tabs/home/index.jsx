import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("home/activity")}>
        <Text>Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
