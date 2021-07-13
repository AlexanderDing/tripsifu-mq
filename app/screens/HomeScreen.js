import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';

function HomeScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
                <View style={styles.profileContainer}>
                    <AppListItem image={require("../assets/user1.png")} title="Hello, The Hacker" subtitle="1@protonmail.com"/>
                </View>

                <View>
                    <AppCard  title = "About Us" 
                              subtitle = "TripSifu is an app that gets you around the city with ease. In this app, you can browse restaurants in the city, know what places to go as a tourist or a resident, choose places to stay, and most importantly, find how to have fun in the city."
                              image={require("../assets/about.jpg")}/>
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton image title="Log Out" color = "red" onPress={ () => navigation.navigate("Welcome")}/>
                </View>
              
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        marginTop:0,
    },

    profileContainer:{
        marginTop: 50,
        height: 90,
        backgroundColor:AppColors.otherColor,
        justifyContent:"center",
    },

    buttonContainer:{
        width: '80%',
        alignSelf: 'center',
    }

})
export default HomeScreen;
