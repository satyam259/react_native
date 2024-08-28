import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon  from "react-native-vector-icons//MaterialIcons";
import HomeScene from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoarding";
import LatestNews from "../screens/LatestNews";





const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScene}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={30} />)
                }}
            />
            <Tab.Screen
                name="Main"
                component={LatestNews}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="book" color={color} size={30} />)
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="login" color={color} size={30} />)
                }}
            />
          
           
           
         
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;





