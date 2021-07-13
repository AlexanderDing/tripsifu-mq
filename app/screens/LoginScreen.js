import React from 'react';
import { View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';


const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(4).max(8).label("Password"),
    }
);

const users = [
    {
        name:"The Hacker",
        email: "1@protonmail.com",
        password: "1234"
    },
    {
        name:"USER2",
        email: "2@gmail.com",
        password: "5678"
    },
];

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    );
};

function LoginScreen({navigation}) {


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
                        <AppText style = {{fontSize: 30, color: "white"}}>Login</AppText>
                </View>

                <View>
                    <AppText style = {styles.titleContainer}>WELCOME BACK,</AppText>
                    <AppText style = {styles.titleContainer}>SIFU.</AppText>
                </View>

                <Formik
                    initialValues={{email:'', password:'',}}
                    onSubmit = {(values, {resetForm})=> {
                            if(validateUser(values)){    
                                console.log(values);
                                resetForm();
                                navigation.navigate("Home");
                            }
                            else{
                                resetForm();
                                alert("Invalid Login Details")
                            }
                        }}
                    validationSchema={schema}
                    >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                    <>
                    <View style={styles.textInputContainer}>             
                    <AppTextInput
                        name="emailField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={values.email}
                        onBlur = {() => setFieldTouched("email")}
                        onChangeText = {handleChange("email")}
                        />
                    {touched.email && <AppText style={{color:"red", fontSize:16}}>{errors.email}</AppText>}
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        value={values.password}
                        onBlur = {() => setFieldTouched("password") }
                        onChangeText = {handleChange("password")}
                        />
                    {touched.password && <AppText style={{color:"red", fontSize:16}}>{errors.password}</AppText>}
                </View> 
                <View style = {styles.buttonContainer}>
                <AppButton title="Login" color = "otherColor" onPress={handleSubmit}/>
                </View>

                    </>
                )}
                 </Formik>
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
        fontSize: 30,
        color: AppColors.primaryColor,
        marginTop: 20,
    },

    textInputContainer:{
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

export default LoginScreen;