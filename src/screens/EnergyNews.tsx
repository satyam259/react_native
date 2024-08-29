import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MiniHeader from '../components/MiniHeader';

const { width } = Dimensions.get('window');
interface News {
    urlToImage: string;
    author: string;
    title: string;
    publishedAt: string;
    url: string;
  }
// Dummy data for news items
const dummyNews: News[] = [
  {
    urlToImage: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202205/shutterstock_1582549144_3x2.jpg?itok=g9kZmIFY',
    author: 'John Doe',
    title: 'Sample News Title That Is Quite Long to Test Truncation',
    publishedAt: '2024-08-27T12:00:00Z',
    url: 'https://example.com/news1',
  },
  {
    urlToImage: 'https://static.toiimg.com/thumb/imgsize-23456,msid-112887660,width-600,resizemode-4/112887660.jpg',
    author: 'Jane Smith',
    title: 'Never threatened ... : Mamata clarifies remarks made during TMCP rally',
    publishedAt: '2024-08-27T14:00:00Z',
    url: 'https://example.com/news2',
  },
  {
    urlToImage: 'https://static.toiimg.com/thumb/imgsize-23456,msid-112888253,width-600,resizemode-4/112888253.jpg',
    author: 'Jane Smith',
   title: 'When a team like Australia can tour Pak, why not India?',
    publishedAt: '2024-08-27T14:00:00Z',
    url: 'https://example.com/news3',
  },
  {
    urlToImage: 'https://static.toiimg.com/thumb/imgsize-23456,msid-112888684,width-600,resizemode-4/112888684.jpg',
    author: 'Jane Smith',
    title: 'Another Sample News Title',
    publishedAt: '2024-08-27T14:00:00Z',
    url: 'https://example.com/news4',
  },
  {
    urlToImage: 'https://static.toiimg.com/thumb/imgsize-23456,msid-112881017,width-600,resizemode-4/112881017.jpg',
    author: 'Jane Smith',
    title: 'Another Sample News Title',
    publishedAt: '2024-08-27T14:00:00Z',
    url: 'https://example.com/news5',
  },
  {
    urlToImage: 'https://static.toiimg.com/thumb/imgsize-23456,msid-112881017,width-600,resizemode-4/112881017.jpg',
    author: 'Jane Smith',
    title: 'Another Sample News Title',
    publishedAt: '2024-08-27T14:00:00Z',
    url: 'https://example.com/news6',
  },
  {
    urlToImage: 'https://static.toiimg.com/thumb/imgsize-23456,msid-112881017,width-600,resizemode-4/112881017.jpg',
    author: 'Jane Smith',
    title: 'Another Sample News Title',
    publishedAt: '2024-08-27T14:00:00Z',
    url: 'https://example.com/news7',
  },
];

const newsItem = ({ item }: { item: News })=> {
  return (
    <Pressable style={styles.newsItem}>
      <View style={styles.newsItemContent}>
        <Image
          source={{ uri: item.urlToImage }}
          style={styles.image}
          resizeMode='cover'
        />
        <View style={styles.textContainer}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.title}>
            {item.title.length > 48
              ? item.title.slice(0, 47) + '...'
              : item.title}
          </Text>
          <Text style={styles.date}>{convertToReadableDate(item.publishedAt)}</Text>
        </View>
        <Icon name='keyboard-arrow-right' size={26} color='brown' />
      </View>
    </Pressable>
  );
};

export default function EnergyNews() {
  return <DisplayNews news={{ data: { articles: dummyNews } }} title='Energy News' />;
}

const DisplayNews = ({ news, title }: { news: { data: { articles: News[] } }, title: string }) =>{
  return (
    <View style={styles.container}>
      <MiniHeader label='Energy News'/>
      <View style={styles.newsList}>
        <FlatList
          data={news.data.articles}
          renderItem={newsItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.url}
        />
      </View>
    </View>
  );
};

// Utility function to convert date to readable format
const convertToReadableDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return date.toDateString();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
//   header: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor:"white",
//     color:"black"
//   },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
  },
  newsList: {
    flex: 1,
  },
  newsItem: {
    paddingHorizontal: 16,
    width: '100%',
  },
  newsItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
    padding: 12,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 5,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  author: {
    color: "#787878",
    fontSize: 10,
    fontWeight:"700"
  },
  title: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight:"800",
    color:"black"
  },
  date: {
    color: '#787878',
    fontSize: 10,
    fontWeight:"700"
  },
});
