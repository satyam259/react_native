import React from 'react'
import 'react-native-gesture-handler'
import Main from './src/components/Main';
import MultipleImages from './src/screens/Image';
import HelpScene from './src/screens/Help';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './src/components/Drawer';
import FeedbackScene from './src/screens/Feedback';
import HomeScene from './src/screens/HomeScreen';


const App: React.FC = () => {
  return (
    <>
    {/* <Main/> */}
    {/* <MultipleImages/> */}
    <SafeAreaProvider>
    <NavigationContainer>
{/* <Main/> */}
<DrawerNavigator/>
    {/* <HelpScene/> */}
    {/* <HomeScene/> */}
    {/* <FeedbackScene/> */}
    </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
};

export default App;