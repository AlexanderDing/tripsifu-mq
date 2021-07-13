import  React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppIcon from '../components/AppIcon';
import AttractionsScreen from '../screens/AttractionsScreen';
import HotelsScreen from '../screens/HotelsScreen';
import AddItemScreen from '../screens/AddItemScreen';
import ListingNavigator from './ListingNavigator';

const AppDrawer = createDrawerNavigator();

const DrawerNavigator = () => (
<AppDrawer.Navigator initialRouteName="Restaurants"
    drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}>
    <AppDrawer.Screen name="Restaurants" component={ListingNavigator} options={{drawerIcon: ({focused, size}) => (<AppIcon name = "food-fork-drink"/>)}}/>
    <AppDrawer.Screen name="Visit" component={AttractionsScreen} options={{drawerIcon: ({focused, size}) => (<AppIcon name = "map-marker-outline"/>)}} />
    <AppDrawer.Screen name="Hotels" component={HotelsScreen} options={{drawerIcon: ({focused, size}) => (<AppIcon name = "bed-outline"/>)}} />
    <AppDrawer.Screen name="Add" component={AddItemScreen} options={{drawerIcon: ({focused, size}) => (<AppIcon name = "plus-circle-outline"/>)}} />
 </AppDrawer.Navigator>

)
                                                             
export default DrawerNavigator;

