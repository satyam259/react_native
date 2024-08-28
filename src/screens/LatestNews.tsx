import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Define the dimensions for the carousel item
const { width: screenWidth } = Dimensions.get('window');

// Define the type for a single news item
interface NewsItem {
  title: string;
  description: string;
  imageUrl: string;
}

// Sample data
const newsData: NewsItem[] = [
  {
    title: 'Breaking News 1',
    description: 'Description of breaking news 1 if text is big remove it or show ..',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvOlhJpA7cIdQHShXA9t4GXFs3MlgOEf3jw&s',
  },
  {
    title:"HT News Desk",
    description: 'Chhatrapati Shivaji Maharaj statue collapse: FIR filed against contractor Jaydeep Apte',
    imageUrl: 'https://www.hindustantimes.com/ht-img/img/2024/08/27/550x309/PTI08-26-2024-000178B-0_1724729221777_1724729248876.jpg',
  },
  {
    title: "Rajat Pandit",
    description: 'Indian, Chinese warships dock in Colombo, send out ripples',
    imageUrl: 'https://static.toiimg.com/thumb/msid-112817028,imgsize-1315581,width-400,resizemode-4/112817028.jpg',
  },
];

// Dummy recommended news data
const recommendedNewsData: NewsItem[] = [
  // Add recommended news items here
];

const LatestNews: React.FC = () => {
  // Render each carousel item

  const renderCarouselItem = ({ item }: { item: NewsItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
      </View>
    </View>
  );

  // Render each recommended news item
  const renderRecommendedNewsItem = ({ item }: { item: NewsItem }) => (
    <View style={styles.recommendedItemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.recommendedImage} />
      <Text style={styles.recommendedTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={newsData}
        renderItem={renderCarouselItem}
        width={screenWidth}
        height={200}
        autoPlay
        loop
      />

      {recommendedNewsData.length > 0 && (
        <FlatList
          data={recommendedNewsData}
          renderItem={renderRecommendedNewsItem}
          keyExtractor={(item) => item.title} // Use a unique key
          style={styles.recommendedList}
        />
      )}
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#fff',
    marginTop: 3,
  },
  recommendedList: {
    flex: 1,
    marginTop: 10,
  },
  recommendedItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recommendedImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  recommendedTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LatestNews;
