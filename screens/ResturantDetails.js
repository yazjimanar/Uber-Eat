import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/ResturantsDetails/About";
import MenuItems from "../components/ResturantsDetails/MenuItems";

export default function ResturantDetails({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
