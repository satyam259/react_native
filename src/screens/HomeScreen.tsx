import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import React from 'react';
import {Text} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MiniHeader from '../components/miniHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RecommendedNews from './Recommended';
import BreakingNews from './breakingNews';
interface WindowDimension {
  width: number;
  height: number;
}

const HomeScreen = ({navigation}: any) => {
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

  const carousel = StyleSheet.create({
    safeContainer: {
      flex: 1,
    },
    scrollViewContent: {
      paddingBottom: 60,
    },
  });
  return (
    <SafeAreaView style={carousel.safeContainer}>
      <ScrollView contentContainerStyle={carousel.scrollViewContent}>
        <StatusBar backgroundColor="black" />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={34} style={styles.icon} />
            </TouchableOpacity>
            <Image
              source={require('../assets/Mycorralogo.png')}
              style={styles.logo}
            />
            <View
              style={{flexDirection: 'row', marginTop: 10, marginRight: 10}}>
              <Icon name="search" size={34} style={styles.icon} />
            </View>
          </View>
          <View>
            <MiniHeader label="Breaking News" />
            <BreakingNews/>
          </View>

          <View>
              <RecommendedNews />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  carouselContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    // marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  icon: {
    marginLeft: 8,
    color: '#304586',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
  },
});
