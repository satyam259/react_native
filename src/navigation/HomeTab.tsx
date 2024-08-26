import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LabScreen from '../screens/Lab';
import BookLab from '../screens/BookLab';

const Stack = createNativeStackNavigator();

export default function HomeTabNavigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Lab">
      <Stack.Screen name="LabScreen" component={LabScreen} />
      {/* Other screens if needed */}
    </Stack.Navigator>
//   </NavigationContainer>
  );
}
