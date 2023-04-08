import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Lasanga",
    description: "Lorem Ipsum is simply dummy text ",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasanga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasanga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasanga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasanga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasanga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasanga",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
];

const style = StyleSheet.create({
  menuItemsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={style.menuItemsStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={style.titleStle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);
