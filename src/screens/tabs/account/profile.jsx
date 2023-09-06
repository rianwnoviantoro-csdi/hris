import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={syles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
