import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import RestaurantsScreen from '../screens/RestaurantsScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import HotelsScreen from '../screens/HotelsScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import HotelDetailScreen from '../screens/HotelDetailScreen';
import AttractionDetailScreen from '../screens/AttractionDetailScreen';

const ListingStack =  createStackNavigator();


const ListingNavigator = () => (
    <ListingStack.Navigator>
        <ListingStack.Screen name="R2" component={RestaurantsScreen} options={{headerShown:false}}/>
        <ListingStack.Screen name="H2" component={HotelsScreen} options={{headerShown:false}}/>
        <ListingStack.Screen name="A2" component={AttractionsScreen} options={{headerShown:false}}/>
        <ListingStack.Screen name="R2Detail" component={RestaurantDetailScreen} options={{title: 'Restaurants Details'}}/>
        <ListingStack.Screen name="A2Detail" component={AttractionDetailScreen} options={{title: 'Attractions Details'}}/>
        <ListingStack.Screen name="H2Detail" component={HotelDetailScreen} options={{title: 'Hotels Details'}}/>
    </ListingStack.Navigator>
)

export default ListingNavigator;