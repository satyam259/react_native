// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Platform,
//   StatusBar,
//   useWindowDimensions,
// } from 'react-native';
// import {
//   SafeAreaView,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import { DrawerNavigationProp } from '@react-navigation/drawer';
// import  Icon  from 'react-native-vector-icons/MaterialIcons';
// import MyPressable from '../components/Pressable';

// const HelpScene: React.FC = () => {
//   const { width } = useWindowDimensions();
//   const navigation = useNavigation<DrawerNavigationProp<{}>>();
//   const { top } = useSafeAreaInsets();

//   const imageSize = width - 32;
//   const marginTop = Platform.OS === 'ios' ? top : StatusBar.currentHeight ?? 24;

//   return (
//     <SafeAreaView
//       edges={['bottom', 'left', 'right']}
//       style={{ flex: 1, backgroundColor: '#FEFEFE' }}
//     >
//       <Image
//         style={[
//           styles.image,
//           { width: imageSize, height: imageSize, marginTop },
//         ]}
//         source={{ uri: "https://img.freepik.com/premium-vector/sign-with-word-help-hand-icon-cartoon-style-white-background_96318-18754.jpg" }}
//         resizeMode="cover"
//       />
//       <Text style={styles.title}>How can we help you?</Text>
//       <Text style={styles.subTitle}>
//         It looks like you are experiencing problems{'\n'}with our sign up
//         process. We are here to{'\n'}help so please get in touch with us
//       </Text>
//       <View style={styles.buttonContainer}>
//         <MyPressable style={styles.button} android_ripple={{ color: 'grey' }}>
//           <Text style={styles.buttonText}>Chat with Us</Text>
//         </MyPressable>
//       </View>

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     backgroundColor: '#FEFEFE',
//     alignSelf: 'center',
//   },
//   title: {
//     color: 'black',
//     fontSize: 20,
//     fontFamily: 'WorkSans-Bold',
//     textAlign: 'center',
//     paddingTop: 8,
//   },
//   subTitle: {
//     color: 'black',
//     fontSize: 16,
//     fontFamily: 'WorkSans-Regular',
//     textAlign: 'center',
//     paddingTop: 16,
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     width: 140,
//     height: 40,
//     padding: 8,
//     backgroundColor: '#0d79ad',
//     borderRadius: 4,
//     elevation: 8,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '500',
//     textAlign: 'center',
//     padding: 4,
//   },
//   menuBtn: {
//     position: 'absolute',
//     padding: 8,
//     left: 8,
//   },
// });

// export default HelpScene;

import {
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "react-native-linear-gradient";

var { width, height } = Dimensions.get("window");

export default function BreakingNewsCard({ item }) {
  return (
    <TouchableWithoutFeedback >
      <View className="relative" style={{position:"relative"}}>
        <Image
          source={{
            uri:
              item.imageUrl ||
              "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={{
            width: width * 0.8,
            height: height * 0.22,
          }}
          resizeMode="cover"
          className="rounded-3xl"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        {/* Title and Author */}
        <View className="absolute bottom-6 left-4 justify-end h-[80%]" style={{
          position:"absolute",
          bottom: 6,
          left:4,
          justifyContent:"flex-end",
          height:100
        }}>
          <View className=" space-y-1" style={{}}>
            <View className=" max-w-[98%]">
              <Text className="text-white text-base font-semibold capitalize">
                {item.title.length > 60
                  ? item.title.slice(0, 58) + "..."
                  : item.title.split("-")[0] || "N/A"}
              </Text>
            </View>

            <View className="">
              <Text className="text-neutral-300 text-sm font-medium" style={{color:"black"}}>
                {item?.description?.length > 20
                  ? item.description.slice(0, 20) + "..."
                  : item.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
