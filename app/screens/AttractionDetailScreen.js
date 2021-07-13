import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

function AttractionDetailScreen(props) {
    return (
        <AppScreen style = {styles.container}>
        <View style={styles.bondi}>
           <AppCard  title = "Bondi Beach" 
                     subtitle = "The sweeping white-sand crescent of Bondi is one of Australia’s most iconic beaches. "
                     image={require("../assets/Bondi-Beach.jpg")}/>
        </View>

        <View style = {styles.opera}>
        <AppCard  title = "Sydney Opera House" 
                     subtitle = "The Sydney Opera House is known for its unique use of a series of gleaming white sail-shaped shells as its roof structure."
                     image={require("../assets/Opera-House.jpg")}/>
        </View>

        </AppScreen>
    );
}
const styles = StyleSheet.create({

    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
    },

    bondi:{
        marginTop: 50,
        height: 90,
        justifyContent:"center",
    
    },

    opera:{
        marginTop: 110,
        height: 100,
        },
})

export default AttractionDetailScreen;