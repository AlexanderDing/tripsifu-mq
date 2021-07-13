import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import DrawerNavigator from './DrawerNavigator';


const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColors.otherColor, activeBackgroundColor:AppColors.primaryColor}}>
        <AppTab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="Listings" component={DrawerNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" backgroundColor={AppColors.otherColor}/>}}/>
    </AppTab.Navigator>
)

export default TabNavigator;