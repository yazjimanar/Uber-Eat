import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/ResturantItems";
import SearchBar from "../components/Home/SearchBar";

const YELP_API_KEY =
  "cLW6DGuwdFr_FBFcp_rkzzD2TXv4X8d6uqwL3mY9C9l0mlb6epgAXVOnXwYZmOjf5xRsArdzwZ04bUNTjQ1ZIoYOGOJt9XJng0eZonWp1KDHIoaVyLUMRlMqj_AtZHYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
