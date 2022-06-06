import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { WorkShop } from '../screens/WorkShop';

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      workshop: undefined
    }
  }
}

export function HomeRoutes() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >

      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="workshop" component={WorkShop} />

    </Stack.Navigator>
  )
}