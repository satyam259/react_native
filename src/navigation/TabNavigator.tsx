import 'react-native-gesture-handler';
import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigator } from './DrawerNavigator';
import Category from '../screens/Category';


const Tab = createBottomTabNavigator();
  type DrawerParamList={
    Home:undefined,
    Discover:undefined
  }
const TabNavigator = () => {
    type DrawerNavigation = DrawerNavigationProp<DrawerParamList>;
    const navigation = useNavigation<DrawerNavigation>();
  
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = ''; 

          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'OnBoarding') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

        
          if (!iconName) {
            iconName = 'home'; 
          }

          // Return the icon component with the selected icon name
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7aa73f',
        tabBarInactiveTintColor: 'gray',
      })}>
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
          name="Discover"
          component={Category}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Icon name="explore" color={color} size={size} />
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