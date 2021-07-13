import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const initialRestaurantList = [
  {
    id: 1,
    name: "Epping Star Kebab",
    address: "Epping, NSW, Australia",
  },

  {
    id: 2,
    name: "Beschico",
    address: "Epping, NSW, Australia",
  },
];

function RestaurantsScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const [restaurants, setRestaurants] = useState(initialRestaurantList);
  const [path, setPath] = useState("");

  const handleDelete = (restaurant) => {
    const newRestaurantList = restaurants.filter(
      (item) => item.id !== restaurant.id
    );
    setRestaurants(newRestaurantList);
  };
  useFocusEffect(
    useCallback(() => {
      if (route.name == "R2") {
        if (route.params) {
          const { name, address } = route.params;
          const result = JSON.parse(JSON.stringify(restaurants));
          result.push({
            name,
            address,
            id: Date.now(),
          });
          setRestaurants(result);
        }
        setPath("R2Detail");
      }
    }, [route])
  );

  const jumpTo = () => {
    navigation.navigate(path);
  };

  return (
    <AppScreen style={styles.container}>
      <View style={styles.header}>
        <AppIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <AppText
          style={{
            fontWeight: "bold",
            fontFamily: "Avenir-Roman",
            color: AppColors.otherColor,
          }}
        >
          Restaurants
        </AppText>
        <AppIcon
          name="plus-circle-outline"
          onPress={() => navigation.navigate("Add", { path: "R2" })}
        />
      </View>

      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={restaurants}
          keyExtractor={(restaurant) => restaurant.id.toString()}
          refreshing={refreshing}
          onRefresh={() => setRestaurants(initialRestaurantList)}
          renderItem={({ item }) => (
            <AppListItem
              title={item.name}
              subtitle={item.address}
              onPress={() => jumpTo()}
              image={item.image}
              onSwipeLeft={() => (
                <View style={styles.deleteView}>
                  <TouchableOpacity onPress={() => handleDelete(item)}>
                    <AppIcon
                      name="trash-can"
                      iconColor={AppColors.otherColor}
                      backgroundColor={AppColors.primaryColor}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.secondaryColor,
    flex: 1,
  },

  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppColors.secondaryColor,
  },

  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: AppColors.black,
  },
  deleteView: {
    backgroundColor: AppColors.primaryColor,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RestaurantsScreen;
