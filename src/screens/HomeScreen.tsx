// import React, { useCallback, useState } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   TouchableOpacity,
//   View,
//   Image,
//   Text,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import FeatherIcon from 'react-native-vector-icons/Feather';

// interface NewsArticleTypes {
//   id: number;
//   img: string;
//   headline: string;
//   publishedDate: string;
//   description: string;
// }

// const newsArticles: NewsArticleTypes[] = [
//   {
//     id: 1,
//     img: 'https://images.deccanherald.com/deccanherald%2F2024-08-23%2Fxh1lkwwe%2FPTI08_10_2024_000366B.jpg?rect=0%2C26%2C4050%2C2025&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2',
//     headline: "Kolkata doctor's rape case stirs controversy",
//     publishedDate: 'August 23, 2024',
//     description: 'A shocking incident in Kolkata has led to widespread protests and demands for justice...',

//   },
//   {
//     id: 2,
//     img: 'https://imgeng.jagran.com/images/2024/08/23/article/image/RGKARHOSPITALRAPE-1724380378010.webp',
//     headline: 'Baveno, Italy: A hidden gem revealed',
//     publishedDate: 'August 22, 2024',
//     description: 'Discover the beauty of Baveno, a quaint town in Italy that is quickly becoming a top travel destination...',
//   },
//   {
//     id: 3,
//     img: 'https://images.thequint.com/thequint%2F2024-08-22%2Fk03z2058%2FScreenshot%202024-08-23%20at%2001.33.14.png?auto=format%2Ccompress&fmt=webp&width=720',
//     headline: 'Tucson, Arizona: A photographer\'s paradise',
//     publishedDate: 'August 20, 2024',
//     description: 'Tucson offers breathtaking landscapes that attract photographers from around the world...',
//   },
// ];

// export default function HomeScene() {
//   const [saved, setSaved] = useState<number[]>([]);

//   const handleSave = useCallback(
//     (id: number) => {
//       if (saved.includes(id)) {
//         setSaved(saved.filter((val) => val !== id));
//       } else {
//         setSaved([...saved, id]);
//       }
//     },
//     [saved]
//   );

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
//       <View style={styles.header}>
//         <View style={styles.headerTop}>
//           <View style={styles.headerAction} />

//           <View style={styles.headerAction}>
//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <FeatherIcon color="blue" name="sliders" size={21} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <Text style={styles.headerTitle}>Latest News</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.content}>
//         {newsArticles.map(({ id, img, headline, publishedDate, description }) => {
//           const isSaved = saved.includes(id);

//           return (
//             <TouchableOpacity
//               key={id}
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <View style={styles.card}>
//                 <View style={styles.cardLikeWrapper}>
//                   <TouchableOpacity onPress={() => handleSave(id)}>
//                     <View style={styles.cardLike}>
//                       <FontAwesome
//                         color={isSaved ? '#ea266d' : '#222'}
//                         name="heart"
//                         solid={isSaved}
//                         size={20}
//                       />
//                     </View>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.cardTop}>
//                   <Image
//                     alt=""
//                     resizeMode="cover"
//                     style={styles.cardImg}
//                     source={{ uri: img }}
//                   />
//                 </View>

//                 <View style={styles.cardBody}>
//                   <View style={styles.cardHeader}>
//                     <Text style={styles.cardTitle}>{headline}</Text>
                    
//                   </View>

//                   <Text style={styles.cardDates}>{publishedDate}</Text>

//                   <Text style={styles.cardDescription}>{description}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   content: {
//     paddingTop: 8,
//     paddingHorizontal: 16,
//   },
//   header: {
//     paddingHorizontal: 16,
//     marginBottom: 12,
//   },
//   headerTop: {
//     marginHorizontal: -6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerAction: {
//     width: 40,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerTitle: {
//     fontSize: 32,
//     fontWeight: '700',
//     color: '#1d1d1d',
//   },
//   card: {
//     position: 'relative',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     marginBottom: 16,
//     shadowColor: 'rgba(0, 0, 0, 0.5)',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   cardLikeWrapper: {
//     position: 'absolute',
//     zIndex: 1,
//     top: 12,
//     right: 12,
//   },
//   cardLike: {
//     width: 40,
//     height: 40,
//     borderRadius: 9999,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardTop: {
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   cardImg: {
//     width: '100%',
//     height: 160,
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   cardBody: {
//     padding: 12,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#232425',
//     marginRight: 'auto',
//   },
//   cardStars: {
//     marginLeft: 2,
//     marginRight: 4,
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#232425',
//   },
//   cardDates: {
//     marginTop: 4,
//     fontSize: 16,
//     color: '#595a63',
//   },
//   cardDescription: {
//     marginTop: 6,
//     fontSize: 14,
//     color: '#595a63',
//   },
// });


import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Header from "../components/Header";
import MiniHeader from "../components/MiniHeader";
import LatestNews from "./LatestNews";
import RegisterScreen from "./Register";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BookLab from "./BookLab";
const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  
  // Breaking News
  // const { data, isLoading: isBreakingLoading } = useQuery({
  //   queryKey: ["breakingNewss"],
  //   queryFn: fetchBreakingNews,
  // });

  // // Recommended News
  // const { data: recommendedNew, isLoading: isRecommendedLoading } = useQuery({
  //   queryKey: ["recommededNewss"],
  //   queryFn: fetchRecommendedNews,
  // });

  return (
    <SafeAreaView  style={styles.container}>
    
      <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image 
          source={require('../assests/Mycorralogo.png')}
          style={styles.image}
        />
        <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 10 }}>
          <Icon name='search' size={34} style={styles.icon} />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name='menu' size={34} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>


          <View className="">
            <MiniHeader  label="Breaking News" />
            <LatestNews />
            {/* <BookLab/> */}
          </View>
       
    
        <View>
          <MiniHeader label="Recommended" />
          <ScrollView
            contentContainerStyle={{
              paddingBottom: hp(80),
            }}
          >
            
             <RegisterScreen/>
           
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
   flex:1
  },
  icon: {
    marginRight: 8,
    color: '#7aa73f',
  },
  image: {
    width: 100, 
    height: 50, 
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
  }
});
