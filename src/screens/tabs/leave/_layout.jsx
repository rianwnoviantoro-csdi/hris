import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Leave from ".";
import Apply from "./apply";
import Detail from "./detail";

const LeaveLayout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ animation: "none" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="leave/index"
        component={Leave}
      />
      <Stack.Screen
        options={{ title: "Apply leave" }}
        name="leave/apply"
        component={Apply}
      />
      <Stack.Screen
        options={{ title: "Leave details" }}
        name="leave/detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
};

export default LeaveLayout;
