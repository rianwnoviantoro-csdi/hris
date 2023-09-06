import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from ".";
import Profile from "./profile";
import Setting from "./setting";
import TermAndCondition from "./term-and-condition";
import PrivacyPolice from "./privacy-police";

const AccountLayout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ animation: "none" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="account/index"
        component={Account}
      />
      <Stack.Screen
        options={{ title: "My Profile" }}
        name="account/profile"
        component={Profile}
      />
      <Stack.Screen
        options={{ title: "Settings" }}
        name="account/setting"
        component={Setting}
      />
      <Stack.Screen
        options={{ title: "Term & Condition" }}
        name="account/term-and-condition"
        component={TermAndCondition}
      />
      <Stack.Screen
        options={{ title: "Privacy Police" }}
        name="account/privacy-police"
        component={PrivacyPolice}
      />
    </Stack.Navigator>
  );
};

export default AccountLayout;
