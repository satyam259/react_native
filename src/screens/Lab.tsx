import React, { useState } from 'react';
import { ScrollView, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BookLab from '../screens/BookLab';
import ScheduleLab from '../screens/ScheduleLab'; // Import other screens you need

const data = [
  { key: '1', job: 'BookLabs' }, // No space in 'BookLabs'
  { key: '2', job: 'ScheduleLab' }, // No space in 'ScheduleLab'
  { key: '3', job: 'UpcomingAppointment' }, // This should be removed if no matching screen
];

const _colors = {
  inactive: '#63B4FF1A',
  hoverBackground: '#4894FE',
  hoverText: '#FFFFFF',
};

const _spacing = 14;

const LabScreen: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('BookLabs'); // Manage internal navigation
  const [zoomedItem, setZoomedItem] = useState<string | null>(null);

  const renderContent = () => {
    switch (currentScreen) {
      case 'BookLabs':
        return <BookLab />;
      case 'ScheduleLab':
        return <ScheduleLab />;
      default:
        console.warn('Unknown screen:', currentScreen); 
        return <BookLab />; // Fallback case
    }
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
        <FlatList
          style={{ flexGrow: 0 }}
          data={data}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingLeft: _spacing }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => {
            let formattedJob;
            try {
              formattedJob = String(item.job).replace(/([A-Z])/g, ' $1').trim();
            } catch (error) {
              console.error("Error formatting job:", error);
              formattedJob = String(item.job); // Ensure item.job is treated as a string
            }

            return (
              <TouchableOpacity
                onPressIn={() => setZoomedItem(item.key)}
                onPressOut={() => setZoomedItem(null)}
                onPress={() => setCurrentScreen(item.job)} // Directly set the job name
              >
                <Animatable.View
                  animation={zoomedItem === item.key ? 'bounceIn' : undefined}
                  duration={400}
                  style={[
                    styles.button,
                    zoomedItem === item.key && styles.buttonZoomed,
                  ]}
                >
                  <Text
                    style={{
                      color: zoomedItem === item.key ? _colors.hoverText : '#4894FE',
                      fontWeight: '700',
                    }}
                  >
                    {formattedJob} {/* Display with spaces */}
                  </Text>
                </Animatable.View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ padding: _spacing }}>
        {renderContent()} {/* Render the selected content */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: _spacing,
    padding: _spacing,
    paddingHorizontal: 72,
    borderRadius: 25,
    backgroundColor: _colors.inactive,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonZoomed: {
    transform: [{ scale: 1.1 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
});

export default LabScreen;


// import {
//   SafeAreaView,
//   SectionList,
//   StyleSheet,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import {View, Text} from 'react-native-animatable';
// import {Animation} from 'react-native-animatable';
// import React, {memo, useCallback, useRef} from 'react';

// interface GroupedAnimationType {
//   title: string;
//   data: Animation[];
// }
// export const animationTypes: GroupedAnimationType[] = [
//   {
//     title: 'Attention Seekers',
//     data: [
//       'pulse',
//     ],
//   },
// ];

// const COLORS = [
//   '#346ca5', // blue
//   '#a0a0a0', // light grey
//   '#ffc508', // yellow
// ];

// const NATIVE_INCOMPATIBLE_ANIMATIONS = [
//   'jello',
//   'lightSpeedIn',
//   'lightSpeedOut',
// ];


// const styles = StyleSheet.create({
//   cell: {
//     padding: 16,
//     marginBottom: 10,
//     marginHorizontal: 10,
//   },
//   name: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '300',
//     textAlign: 'center',
//     margin: 20,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 20,
//     backgroundColor: 'transparent',
//   },
//   slider: {
//     height: 30,
//     margin: 10,
//   },
//   toggle: {
//     width: 120,
//     backgroundColor: '#333',
//     borderRadius: 3,
//     padding: 5,
//     fontSize: 14,
//     alignSelf: 'center',
//     textAlign: 'center',
//     margin: 10,
//     color: 'rgba(255, 255, 255, 1)',
//   },
//   toggledOn: {
//     color: 'rgba(255, 33, 33, 1)',
//     fontSize: 16,
//     transform: [
//       {
//         rotate: '8deg',
//       },
//       {
//         translateY: -20,
//       },
//     ],
//   },
//   sectionHeader: {
//     backgroundColor: '#F5FCFF',
//     padding: 15,
//   },
//   sectionHeaderText: {
//     textAlign: 'center',
//     fontSize: 18,
//   },
// });

// interface AnimationCellProps {
//   animationType: Animation;
//   color: string;
//   onPress: (view: View, animationType: Animation) => void;
//   useNativeDriver: boolean;
// }

// function AnimationCell({
//   useNativeDriver,
//   color,
//   onPress,
//   animationType,
// }: AnimationCellProps) {
//   const ref = useRef<View>(null);

//   const handlePress = useCallback(() => {
//     if (ref.current && onPress) {
//       onPress(ref.current, animationType);
//     }
//   }, [ref, onPress, animationType]);

//   return (
//     <TouchableWithoutFeedback 
//     onPress={handlePress}
//     >
//       <View
//         ref={ref}
//         style={[{backgroundColor: color}, styles.cell]}
//         useNativeDriver={useNativeDriver}>
//         <Text style={styles.name}>{animationType}</Text>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// export default function LabScreen() {
//   const [duration, setDuration] = React.useState(1000);
//   const handleRowPressed = useCallback(
//     (componentRef: typeof View, animationType: Animation) => {
//       componentRef.animate(animationType, duration);
//     },
//     [duration],
//   );

//   return (
//     <View animation="fadeIn" style={styles.container} useNativeDriver>
//       <View
//         animation="bounceInDown"
//         duration={1100}
//         delay={1400}
//         style={styles.container}>
//         <SectionList
//           contentInsetAdjustmentBehavior="automatic"
//           keyExtractor={item => item}
//           sections={animationTypes}
//           removeClippedSubviews={false}
//           renderItem={({item, index}) => (
//             <AnimationCell
//               animationType={item}
//               color={COLORS[index % COLORS.length]}
//               onPress={handleRowPressed}
//               useNativeDriver={
//                 NATIVE_INCOMPATIBLE_ANIMATIONS.indexOf(item) === -1
//               }
//             />
//           )}
//         />
//       </View>
//     </View>
//   );
// }