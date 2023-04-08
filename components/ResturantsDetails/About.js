import { View, Text, Image } from "react-native";
import React from "react";

const yelpResturantInfo = {
  name: "Farmhouse Kitchen Thai",
  image:
    "https://image-tc.galaxy.tf/wijpeg-bfq1kvhzxyodf6wke9bpw82wq/60-titanic-mardan-palace-aquamarine-restaurant_wide.jpg?crop=0%2C100%2C1920%2C1080",
  price: "$$",
  reviews: 1500,
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const { name, image, price, reviews, rating, categories } = yelpResturantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
  return (
    <View>
      <ResturantImage image={image} />
      <ResturantName name={name} />
      <ResturantDescription description={description} />
    </View>
  );
}

const ResturantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const ResturantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const ResturantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
