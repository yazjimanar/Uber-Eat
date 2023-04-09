import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/ResturantsDetails/About";
import MenuItems from "../components/ResturantsDetails/MenuItems";
import ViewCart from "../components/ResturantsDetails/ViewCart";

export default function ResturantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems resturantName={route.params.name} />
      <ViewCart navigation={navigation} resturantName={route.params.name} />
    </View>
  );
}
