import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetails from "./screens/ResturantDetails";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShows: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ResturatDetails" component={ResturantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
