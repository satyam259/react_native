import 'react-native-gesture-handler';
import React from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../types';
import { HomeStackNavigator } from './DrawerNavigator';
import OnBoardingScreen from '../screens/OnBoarding';


const Tab = createBottomTabNavigator();
  
const TabNavigator = () => {
    type DrawerNavigation = DrawerNavigationProp<DrawerParamList>;
    const navigation = useNavigation<DrawerNavigation>();
  
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="OnBording"
          component={OnBoardingScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Icon name="article" color={color} size={size} />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon 
                  name="menu" 
                  size={24} 
                  color="#7aa73f" 
                  style={{ marginLeft: 15 }} 
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  export default TabNavigator