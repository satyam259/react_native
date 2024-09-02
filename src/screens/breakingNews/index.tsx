import {View, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './styles';
const BreakingNews = () => {
  const {width: screenWidth} = Dimensions.get('window');
  interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
  }

  const newsData: NewsItem[] = [
    {
      title: 'Breaking News 1',
      description:
        'Description of breaking news 1 if text is big remove it or show ..',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvOlhJpA7cIdQHShXA9t4GXFs3MlgOEf3jw&s',
    },
    {
      title: 'HT News Desk',
      description:
        'Chhatrapati Shivaji Maharaj statue collapse: FIR filed against contractor Jaydeep Apte',
      imageUrl:
        'https://www.hindustantimes.com/ht-img/img/2024/08/27/550x309/PTI08-26-2024-000178B-0_1724729221777_1724729248876.jpg',
    },
    {
      title: 'Rajat Pandit',
      description: 'Indian, Chinese warships dock in Colombo, send out ripples',
      imageUrl:
        'https://static.toiimg.com/thumb/msid-112817028,imgsize-1315581,width-400,resizemode-4/112817028.jpg',
    },
  ];

  const renderCarouselItem = ({item}: {item: NewsItem}) => (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {item.description}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Carousel
        loop
        width={screenWidth}
        height={200}
        autoPlay
        data={newsData}
        renderItem={renderCarouselItem}
      />
    </View>
  );
};

export default BreakingNews;

