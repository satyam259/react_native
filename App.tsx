import React, { useEffect } from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BootSplash from "react-native-bootsplash";
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App: React.FC = () => {


  return (
    <>
    <SafeAreaProvider>
    <NavigationContainer onReady={() => {
      BootSplash.hide();
    }} >
<DrawerNavigator/>
    </NavigationContainer>
    </SafeAreaProvider>
    {/* <DrawerNavigator/> */}
    </>
  );
};

export default App;