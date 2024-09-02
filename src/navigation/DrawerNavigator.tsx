

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import CustomDrawer from './DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/Register';
import TabNavigator from './TabNavigator';
import EnergyNews from '../screens/energyNews';
import RecommendedNews from '../screens/Recommended';
import WebViewScreen from '../components/webView';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



export const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CardScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
      <Stack.Screen    options={{ headerShown: false }} name="WebView" component={WebViewScreen} />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Energy"
      component={EnergyNews}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Recommended"
      component={RecommendedNews}
      options={{ headerShown: true}}
    />
  </Stack.Navigator>
);




const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="HomeTabs" component={TabNavigator} options={{ headerShown: false }} />
  </Drawer.Navigator>
);
export default DrawerNavigator





