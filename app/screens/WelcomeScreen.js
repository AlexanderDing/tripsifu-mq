import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>

            <ImageBackground 
                source={require("../assets/Background-Image.png")}
                style={styles.background}>
                
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="pokemon-go"
                        size={100}
                        color={AppColors.primaryColor}/>
                    <AppText style = {{fontSize: 30, color: "white"}}> Welcome</AppText>
                </View>

                <View style = {styles.titleContainer}>
                    <Text style = {{fontSize: 45, fontFamily: "Copperplate", color: AppColors.primaryColor}}>TripSifu</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <AppButton title="Login" color = "secondaryColor"onPress={ () => navigation.navigate("Login")}/>
                    <AppButton title="Register" color="otherColor" onPress={ () => navigation.navigate("Register")}/>
                </View>

            </ImageBackground>

        </AppScreen>

    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    
    welcomeContainer:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }, 

    titleContainer:{
        marginTop: 10,
        alignItems:'center',
    },

    buttonsContainer:{
        marginTop: 230,
        flexDirection:'column',
        justifyContent: 'space-around',
        height: 150,
        alignSelf: 'center',
        width: '80%'
    }
})
export default WelcomeScreen;