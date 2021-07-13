import React, { useCallback, useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import { useFocusEffect } from "@react-navigation/native";

const initialHotelList = [
  {
    id: 1,
    name: "Hilton Sydney",
    address: "Sydney, NSW, Australia",
  },

  {
    id: 2,
    name: "Sydney Central YHA",
    address: "Sydney, NSW, Australia",
  },
];

function HotelsScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const [hotels, setHotels] = useState(initialHotelList);
  const [path, setPath] = useState("");

  const handleDelete = (hotel) => {
    const newHotelList = hotels.filter((item) => item.id !== hotel.id);
    setHotels(newHotelList);
  };

  useFocusEffect(
    useCallback(() => {
      if (route.name == "Hotels") {
        if (route.params) {
          const { name, address } = route.params;
          const result = JSON.parse(JSON.stringify(hotels));
          result.push({
            name,
            address,
            id: Date.now(),
          });
          setHotels(result);
        }
        setPath("H2Detail");
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
          Hotels
        </AppText>
        <AppIcon
          name="plus-circle-outline"
          onPress={() => navigation.navigate("Add", { path: "Hotels" })}
        />
      </View>

      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={hotels}
          keyExtractor={(hotel) => hotel.id.toString()}
          refreshing={refreshing}
          onRefresh={() => setHotels(initialHotelList)}
          renderItem={({ item }) => (
            <AppListItem
              title={item.name}
              subtitle={item.address}
              image={item.image}
              onPress={() => jumpTo()}
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

export default HotelsScreen;
