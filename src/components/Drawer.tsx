import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScene from '../screens/HomeScreen';
import HelpScene from '../screens/Help';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/Register';
import ForgetPassword from '../screens/ForgetPassword';
import SignUp from '../screens/Signup';
import OtpScreen from '../screens/Otp';
import OnBoardingScreen from '../screens/OnBoarding';
import LandingScreen from '../screens/LandingPage';
import LabScreen from '../screens/Lab';
import HomeTabNavigator from '../navigation/HomeTab';
import BookLab from '../screens/BookLab';

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
      <Drawer.Screen name="Landing" component={LandingScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Card" component={BookLab} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Forget" component={ForgetPassword} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Otp" component={OtpScreen} />
      <Drawer.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Drawer.Screen name="homeScreen" component={HomeTabNavigator} />
      
    </Drawer.Navigator>
  );
}
