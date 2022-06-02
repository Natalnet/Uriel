import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeRoutes } from "./src/routes/home.routes";


export default function App() {
  return (
    <NavigationContainer>
      <HomeRoutes />
    </NavigationContainer>
  );
}

