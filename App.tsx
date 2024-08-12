import React from 'react'
import 'react-native-gesture-handler'
import MultipleImages from './src/screens/Image';
import HelpScene from './src/screens/Help';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './src/components/Drawer';


const App: React.FC = () => {
  return (
    <>
    <SafeAreaProvider>
    <NavigationContainer>
<DrawerNavigator/>
    </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
};

export default App;