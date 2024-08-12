// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ProfileScreen from '../screens/ProfileScreen';
// const Tab = createBottomTabNavigator();

//  const HomeTabNavigator: React.FC = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName: string;

//         switch (route.name) {
//           case 'Home':
//             iconName = 'home';
//             break;
//           case 'Profile':
//             iconName = 'person';
//             break;
//           default:
//             iconName = 'help-circle'; // Default icon if needed
//         }

//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//     })}
//   >
//     {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//   </Tab.Navigator>
// );

// export default HomeTabNavigator