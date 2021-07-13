import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

function RestaurantDetailScreen(props) {
    return (
        <AppScreen style = {styles.container}>
        <View style={styles.kebab}>
           <AppCard  title = "Epping Star Kebab" 
                     subtitle = "Epping Star Kebab serves excellent kebab, extremly tender chicken and delicious wraps."
                     image={require("../assets/Epping-Star-Kebab.jpg")}/>
        </View>

        <View style = {styles.beschico}>
        <AppCard  title = "Beschico" 
                     subtitle = "Chicken-based dishes with a pan-Asian twist, in an airy dining room with armchairs and banquettes."
                     image={require("../assets/Beschico.jpg")}/>
        </View>

        </AppScreen>
    );
}
const styles = StyleSheet.create({

    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
    },

    kebab:{
        marginTop: 50,
        height: 90,
        justifyContent:"center",
    
    },

    beschico:{
        marginTop: 120,
        height: 80,
        },
})

export default RestaurantDetailScreen;