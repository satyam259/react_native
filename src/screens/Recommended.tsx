// import { StyleSheet, Text, View, Pressable, Image, Dimensions, ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import MiniHeader from '../components/MiniHeader';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import Button from '../styles/Button';

// // Screen dimensions
// const { width } = Dimensions.get('window');

// // Dummy data array
// const items = [
//   {
//     url: 'https://example.com',
//     urlToImage: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Sample Title for the Card Displayed Here',
//     author: 'Author Name',
//     publishedAt: '2024-08-29T10:00:00Z',
//   },
//   {
//     url: 'https://example.com',
//     urlToImage: 'https://images.unsplash.com/photo-1560957123-e8e019c66980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
//     title: 'Another Sample Title for the Card',
//     author: 'Another Author',
//     publishedAt: '2024-08-29T12:00:00Z',
//   },
//   {
//     url: 'https://example.com',
//     urlToImage: 'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
//     title: 'A Longer Sample Title That Will Be Truncated Here',
//     author: 'Third Author',
//     publishedAt: '2024-08-29T14:00:00Z',
//   },
//   {
//     url: 'https://example.com',
//     urlToImage: 'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
//     title: 'A Longer Sample Title That Will Be Truncated Here',
//     author: 'Third Author',
//     publishedAt: '2024-08-29T14:00:00Z',
//   },
//   {
//     url: 'https://example.com',
//     urlToImage: 'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
//     title: 'A Longer Sample Title That Will Be Truncated Here',
//     author: 'Third Author',
//     publishedAt: '2024-08-29T14:00:00Z',
//   },
// ];

// // Utility functions (dummy implementations)
// const generateRandomImage = () => 'https://via.placeholder.com/150';
// const convertToReadableDate = (dateString:string) => new Date(dateString).toLocaleDateString();
// type RootStackParamList = {
//   Recommended: undefined;
// };
// type NavigationProps = NavigationProp<RootStackParamList>;

// const RecommendedNews = () => {
//   const navigation= useNavigation<NavigationProps>();

//   return (
//     <View>
//      <View>
//         <MiniHeader label='recommend' />
//       </View><ScrollView style={styles.scrollView}>
//           {items.map((item, index) => (
//             <Pressable key={index} onPress={() => console.log('Card Pressed')}>
//               <View style={styles.cardContainer}>
//                 <Image
//                   source={{ uri: item.urlToImage || generateRandomImage() }}
//                   style={styles.image}
//                   resizeMode="cover" />

//                 <View style={styles.textContainer}>
//                   <Text style={[styles.author, styles.mediumFont]}>{item.author}</Text>
//                   <Text style={[styles.title, styles.boldFont]}>
//                     {item.title.length > 0 ? item.title.slice(0, 47) + '...' : item.title}
//                   </Text>
//                   <Text style={[styles.date, styles.mediumFont]}>
//                     {convertToReadableDate(item.publishedAt)}
//                   </Text>
//                 </View>
//               </View>
//             </Pressable>
//           ))}

//         </ScrollView>
//     </View>

//   );
// };

// export default RecommendedNews;

// const styles = StyleSheet.create({
//     scrollView: {
//         padding: 16, // Add padding around the ScrollView
//       },
//   cardContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 16,
//     backgroundColor: '#ffffff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     borderRadius: 10,
//   },
//   image: {
//     width: width * 0.4,
//     height: width * 0.3,
//     borderRadius: 5,
//     marginRight: 4,
//   },
//   textContainer: {
//     flex: 1,
//     paddingHorizontal: 12,
//   },
//   author: {
//     color: "#787878",
//     fontSize: 10,
//     fontWeight:"700"
//   },
//   title: {
//     fontSize: 12,
//     marginBottom: 4,
//     fontWeight:"800",
//     color:"black"
//   },
//   date: {
//     color: '#787878',
//     fontSize: 10,
//     fontWeight:"700"
//   },
//   mediumFont: {
//     fontFamily: 'Medium',
//   },
//   boldFont: {
//     fontFamily: 'Bold',
//   },
// });


import { StyleSheet, Text, View, Pressable, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import MiniHeader from '../components/miniHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Button from '../styles/Button';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icon library

// Screen dimensions
const { width } = Dimensions.get('window');

// Dummy data array
const items = [
  {
    url: 'https://example.com',
    urlToImage: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sample Title for the Card Displayed Here',
    author: 'Author Name',
    publishedAt: '2024-08-29T10:00:00Z',
  },
  {
    url: 'https://example.com',
    urlToImage: 'https://images.unsplash.com/photo-1560957123-e8e019c66980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Another Sample Title for the Card',
    author: 'Another Author',
    publishedAt: '2024-08-29T12:00:00Z',
  },
  {
    url: 'https://example.com',
    urlToImage: 'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
    title: 'A Longer Sample Title That Will Be Truncated Here',
    author: 'Third Author',
    publishedAt: '2024-08-29T14:00:00Z',
  },
  {
    url: 'https://example.com',
    urlToImage: 'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
    title: 'A Longer Sample Title That Will Be Truncated Here',
    author: 'Third Author',
    publishedAt: '2024-08-29T14:00:00Z',
  },
  {
    url: 'https://example.com',
    urlToImage: 'https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
    title: 'A Longer Sample Title That Will Be Truncated Here',
    author: 'Third Author',
    publishedAt: '2024-08-29T14:00:00Z',
  },
];

// Utility functions (dummy implementations)
const generateRandomImage = () => 'https://via.placeholder.com/150';
const convertToReadableDate = (dateString:string) => new Date(dateString).toLocaleDateString();
type RootStackParamList = {
  Recommended: undefined;
};
type NavigationProps = NavigationProp<RootStackParamList>;

const RecommendedNews = () => {
  const navigation= useNavigation<NavigationProps>();

  return (
    <View>
     <View>
        <MiniHeader label='recommend' />
      </View>
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => (
          <Pressable key={index} onPress={() => console.log('Card Pressed')}>
            <View style={styles.cardContainer}>
              <Image
                source={{ uri: item.urlToImage || generateRandomImage() }}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.textContainer}>
                <Text style={[styles.author, styles.mediumFont]}>{item.author}</Text>
                <Text style={[styles.title, styles.boldFont]}>
                  {item.title.length > 0 ? item.title.slice(0, 47) + '...' : item.title}
                </Text>
                <Text style={[styles.date, styles.mediumFont]}>
                  {convertToReadableDate(item.publishedAt)}
                </Text>
              </View>

              {/* Mic Icon */}
              <Icon name="mic" size={24} color="#000" style={styles.micIcon} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecommendedNews;

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 10, // Added padding to increase the card size
  },
  image: {
    width: width * 0.4, // Increased width
    height: width * 0.3, // Increased height
    borderRadius: 5,
    marginRight: 8, // Adjusted margin
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  author: {
    color: "#787878",
    fontSize: 14,
    fontWeight: "700",
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "800",
    color: "black",
  },
  date: {
    color: '#787878',
    fontSize: 12,
    fontWeight: "700",
  },
  mediumFont: {
    fontFamily: 'Medium',
  },
  boldFont: {
    fontFamily: 'Bold',
  },
  micIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
