import React, { useCallback, useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import { useFocusEffect } from "@react-navigation/native";

const initialAttractionList = [
  {
    id: 1,
    name: "Bondi Beach",
    address: "Bondi Beach, NSW, Australia",
  },

  {
    id: 2,
    name: "Sydney Opera House",
    address: "Sydney, NSW, Australia",
  },
];

function AttractionsScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const [attractions, setAttractions] = useState(initialAttractionList);
  const [path, setPath] = useState("");

  const handleDelete = (attraction) => {
    const newAttractionList = attractions.filter(
      (item) => item.id !== attraction.id
    );
    setAttractions(newAttractionList);
  };

  useFocusEffect(
    useCallback(() => {
      console.log(route, "r");
      if (route.name == "Visit") {
        if (route.params) {
          const { name, address } = route.params;
          const result = JSON.parse(JSON.stringify(attractions));
          result.push({
            name,
            address,
            id: Date.now(),
          });
          setAttractions(result);
        }
        setPath("A2Detail");
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
          Attractions
        </AppText>
        <AppIcon
          name="plus-circle-outline"
          onPress={() => navigation.navigate("Add", { path: "Visit" })}
        />
      </View>

      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={attractions}
          keyExtractor={(attraction) => attraction.id.toString()}
          refreshing={refreshing}
          onRefresh={() => setAttractions(initialAttractionList)}
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

export default AttractionsScreen;
