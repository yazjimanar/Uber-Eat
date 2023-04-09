import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { CheckBox, Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Lasanga",
    description: "Lorem Ipsum is simply dummy text ",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga7",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga9",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
  },
  {
    title: "Lasanga10",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$13.5",
    image:
      "https://contenthub.kraftheinz.com/api/public/content/5a31c252af944dc8aa2bee5b4cdae6f4?v=81dbeb44&t=w1004",
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

export default function MenuItems({ resturantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkBoxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        resturantName: resturantName,
        checkBoxValue: checkBoxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={style.menuItemsStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "gray", borderRadius: 0 }}
              fillColor="green"
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="horizontal"
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
