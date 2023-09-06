import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from ".";
import Activity from "./activity";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ animation: "none" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home/index"
        component={Home}
      />
      <Stack.Screen
        options={{ title: "Activity" }}
        name="home/activity"
        component={Activity}
      />
    </Stack.Navigator>
  );
};

export default HomeLayout;
