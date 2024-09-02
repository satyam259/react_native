// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Pressable,
//   Image,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Categories, categories } from "../utils/discoverCardDetails"
// import { LinearGradient } from "react-native-linear-gradient"

// const { width } = Dimensions.get('window');

// const renderItem = ({ item }: { item: Categories }) => {
//   return (
    
//       <Pressable>
//         <View style={styles.cardContainer}>
//           <Image
//             source={{ uri: item.image_url }}
//             style={styles.image}
//             resizeMode='cover'
//           />
//           <LinearGradient
//             colors={['transparent', 'rgba(0,0,0,0.9)']}
//             start={{ x: 0.5, y: 0 }}
//             end={{ x: 0, y: 1 }}
//             style={styles.gradient}
//           />
//           <View style={styles.textContainer}>
//             <Text style={styles.title}>
//               {item.name}
//             </Text>
//           </View>
//         </View>
//       </Pressable>

//   );
// };

// export default function NewsSection() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={styles.headerSubtitle}>
//           The world from your palm
//         </Text>
//       </View>
//       <View style={styles.searchContainer}>
//         <Icon name='search' size={24} color='gray' style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder='Search for news'
//           onPressIn={() => ''}
//         />
//       </View>

//       <View style={styles.flatListContainer}>
//         <FlatList
//           data={categories}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           numColumns={2}
//           contentContainerStyle={styles.flatListContent}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   header: {
//     paddingHorizontal: 16,
//     // marginBottom: 8,
//     padding:15
//   },
//   headerSubtitle: {
//     opacity: 0.7,
//     fontSize: 28,
//     fontWeight:"800",
//     color:"black"
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginHorizontal: 8,
//     width: '95%',
//     borderRadius: 24,
//     backgroundColor: '#F3F4F6', // Gray-100 color
//     borderColor: '#D1D5DB', // Stone-300 color
//     borderWidth: 1,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     marginVertical:12
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     fontFamily: 'Medium',
//   },
//   flatListContainer: {
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     // elevation: 5,
//   },
//   cardContainer: {
//     position: 'relative',
//     margin: 7,
//   },
//   image: {
//     width: width * 0.47,
//     height: width * 0.45,
//     borderRadius: 10,
//   },
//   gradient: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: '100%',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   textContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 16,
//     right: 0,
//     justifyContent: 'flex-end',
//     height: '80%',
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//   },
//   title: {
//     fontSize: 20,
//     color: '#FFFFFF', // White color
//     fontFamily: 'Bold',
//   },
//   flatListContent: {
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     width: '100%',
//   },
// });


import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
// Define the types for your navigation params
type RootStackParamList = {
  'Energy': undefined;
  'EDITORS CHOICE': undefined;
  'INFORMATION TECHNOLOGY': undefined;
  'ADVANCED MANUFACTURING': undefined;
};

// Type for navigation prop
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Category: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Energy')}  
        >
          <ImageBackground
            source={{ uri: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202205/shutterstock_1582549144_3x2.jpg?itok=g9kZmIFY' }}
            style={styles.image}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>ENERGY</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Energy')}  
        >
          <ImageBackground
            source={{ uri: 'https://images.cnbctv18.com/uploads/2023/04/earnings-shutterstock.jpg' }}
            style={styles.image}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>INFORMATION TECHNOLOGY</Text>  
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Energy')}  
        >
          <ImageBackground
            source={{ uri: 'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1720068089/1720068086.jpg' }}
            style={styles.image}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>ADVANCED MANUFACTURING</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Energy')}  
        >
          <ImageBackground
            source={{ uri: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202205/shutterstock_1582549144_3x2.jpg?itok=g9kZmIFY' }}
            style={styles.image}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>EDITORS CHOICE</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



export default Category;