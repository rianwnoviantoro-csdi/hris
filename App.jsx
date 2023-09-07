import React, { useCallback } from "react";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";

import RootLayout from "./src/screens/_layout";

SplashScreen.preventAutoHideAsync();

const App = () => {
  let [fontsLoaded] = useFonts({
    nunito_300: Nunito_300Light,
    nunito_400: Nunito_400Regular,
    nunito_500: Nunito_500Medium,
    nunito_600: Nunito_600SemiBold,
    nunito_700: Nunito_700Bold,
    nunito_800: Nunito_800ExtraBold,
    nunito_900: Nunito_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayout onLayout={onLayoutRootView} />;
};

export default App;
