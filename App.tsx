import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import HelpScene from './src/screens/Help';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import BootSplash from "react-native-bootsplash";

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