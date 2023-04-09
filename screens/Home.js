import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Home/Categories";
import ResturantItems, {
  localRestaurants,
} from "../components/Home/ResturantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import { StatusBar } from "expo-status-bar";

const YELP_API_KEY =
  "cLW6DGuwdFr_FBFcp_rkzzD2TXv4X8d6uqwL3mY9C9l0mlb6epgAXVOnXwYZmOjf5xRsArdzwZ04bUNTjQ1ZIoYOGOJt9XJng0eZonWp1KDHIoaVyLUMRlMqj_AtZHYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const res = await fetch(yelpUrl, apiOptions);
    const json = await res.json();
    return setRestaurantData(
      json.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <>
      <StatusBar style="dark" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
          <HeaderTabs activeTab={activeTab} setActivetab={setActiveTab} />
          <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <ResturantItems
            resturantData={restaurantData}
            navigation={navigation}
          />
        </ScrollView>
        <Divider width={1} />

        <BottomTabs />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
