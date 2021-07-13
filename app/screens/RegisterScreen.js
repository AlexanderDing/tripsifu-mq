import React, {useState} from 'react';
import { View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';


function RegisterScreen(props) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>

            <ImageBackground 
                source={require("../assets/Background-Image.png")}
                style={{flex:1}}>

                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="pokemon-go" 
                        size={80}
                        color={AppColors.primaryColor}/>
                        <AppText style = {{fontSize: 30, color: "white"}}>Register</AppText>
                </View>

                <View>
                    <AppText style = {styles.titleContainer}>BECOME A SIFU IN</AppText>
                    <AppText style = {styles.titleContainer}>GETTING AROUND, TODAY!</AppText>
                </View>

                <View style={styles.textInputContainer}>  
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Full Name"
                        textContentType="emailAddress"
                        onChangeText = { userInputName => setUserName(userInputName)}
                        />           
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setEmail(userInputEmail)}
                        />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setPassword(userInputPassword)}
                        />
                </View> 

                <View style = {styles.buttonContainer}>
                <AppButton title="Register" color = "otherColor" onPress={() => console.log(userName, email,password )}/>
                </View>

            </ImageBackground>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:AppColors.otherColor,
    },

    welcomeContainer:{
        alignItems: 'center',
        marginTop: 2,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    }, 

    titleContainer:{
        alignSelf: 'center',
        fontSize: 25,
        color: AppColors.primaryColor,
        marginTop: 20,
    },

    textInputContainer:{
        marginVertical:50,
        paddingTop:0,
        width:'80%',
        marginVertical:20,
        alignSelf: 'center',
    },

    buttonContainer:{
        width: '80%',
        alignSelf: 'center',
    }
})

export default RegisterScreen;