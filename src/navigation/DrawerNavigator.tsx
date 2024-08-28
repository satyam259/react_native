import React, { useEffect, useState, } from 'react';
import { Switch } from 'react-native'
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { EventRegister } from 'react-native-event-listeners'
import TabNavigator from "./TabNavigator";
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerContent from "./DrawerContent";
import HelpScene from '../screens/Help';
import LoginScreen from '../screens/LoginScreen';
import BookLab from '../screens/BookLab';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
      <Drawer.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>
      <Drawer.Screen name ='Categories' component={BookLab}/>
     </Drawer.Navigator>
    
  );
}

export default DrawerNavigator;



