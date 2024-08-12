import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScene from '../screens/HomeScreen';
import HelpScene from '../screens/Help';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => console.log('Logout pressed')} // Use console.log for debugging
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScene} />
      <Drawer.Screen name="Help" component={HelpScene} />
      <Drawer.Screen name="Login" component={LoginScreen} />

    </Drawer.Navigator>
  );
}
