import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

function HotelDetailScreen(props) {
    return (
        <AppScreen style = {styles.container}>
        <View style={styles.hilton}>
           <AppCard  title = "Hilton Sydney" 
                     subtitle = "A 5-minute walk from Hyde Park, this upscale hotel is a 10-minute walk from Darling Harbour and 2 km from the Sydney Opera House."
                     image={require("../assets/Hilton-Sydney.png")}/>
        </View>

        <View style = {styles.YHA}>
        <AppCard  title = "Sydney Central YHA" 
                     subtitle = "Set in the city centre, this relaxed redbrick hostel is a 2-minute walk from Central train station."
                     image={require("../assets/Sydney-Central-YHA.jpg")}/>
        </View>

        </AppScreen>
    );
}
const styles = StyleSheet.create({

    container:{
        backgroundColor: AppColors.otherColor,
        flex: 1,
    },

    hilton:{
        marginTop: 50,
        height: 100,
        justifyContent:"center",
    
    },

    YHA:{
        marginTop: 120,
        height: 80,
        },
})

export default HotelDetailScreen;