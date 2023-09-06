import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Holiday from ".";

const HolidayLayout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ animation: "none" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="holiday/index"
        component={Holiday}
      />
    </Stack.Navigator>
  );
};

export default HolidayLayout;
