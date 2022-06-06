import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from 'styled-components'

import { HomeRoutes } from "./src/routes/home.routes";
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { colorsTheme } from "./src/global/styles/theme";
import { Home } from "./src/screens/Home";


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={colorsTheme} >

      <NavigationContainer>
        <StatusBar barStyle="light-content" translucent backgroundColor="#161621" />

        <HomeRoutes />

      </NavigationContainer>


    </ThemeProvider>

  );
}

