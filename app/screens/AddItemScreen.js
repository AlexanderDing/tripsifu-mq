import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";

function AddItemScreen({ navigation, route }) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const toPath = useRef("");

  useEffect(() => {
    const path = route.params.path;
    toPath.current = path;
  }, [route]);
  const submit = () => {
    console.log(name);
    console.log(address);
    console.log(toPath, "tttp");
    navigation.navigate(toPath.current, { name, address });
  };
  return (
    <AppScreen>
      <View style={styles.header}>
        <AppIcon
          name="chevron-left"
          onPress={() => navigation.navigate(toPath.current)}
        />
        <AppText
          style={{
            fontWeight: "bold",
            fontFamily: "Avenir-Roman",
            color: AppColors.otherColor,
          }}
        >
          Add a Place
        </AppText>
        <AppIcon name="pokemon-go" />
      </View>

      <View style={styles.textInputContainer}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Name of the Place"
          textContentType="emailAddress"
          onChangeText={(val) => setName(val)}
        />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Address of the Place"
          textContentType="emailAddress"
          onChangeText={(val) => setAddress(val)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Add" color="otherColor" onPress={() => submit()} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppColors.primaryColor,
  },

  textInputContainer: {
    paddingTop: 0,
    width: "80%",
    marginVertical: 20,
    alignSelf: "center",
  },

  buttonContainer: {
    width: "80%",
    alignSelf: "center",
  },
});

export default AddItemScreen;
