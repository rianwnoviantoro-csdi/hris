import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeLayout from "./home/_layout";
import LeaveLayout from "./leave/_layout";
import HolidayLayout from "./holiday/_layout";
import AccountLayout from "./account/_layout";

const TabsLayout = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator screenOptions={{ animation: "none", headerShown: false }}>
      <Tabs.Screen name="home" component={HomeLayout} />
      <Tabs.Screen name="leave" component={LeaveLayout} />
      <Tabs.Screen name="holiday" component={HolidayLayout} />
      <Tabs.Screen name="account" component={AccountLayout} />
    </Tabs.Navigator>
  );
};

export default TabsLayout;
