import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getNewsApiUrl } from '../api/NewsApi'; // Import the reusable function

export type RootStackParamList = {
  Home: undefined;
  WebView: { url: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'WebView'>;

interface Article {
  title: string;
  date: string;
  image?: string;
  url: string;
}

interface ApiResponse {
  articles: {
    results: Article[];
    totalResults: number;
  };
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (url: string) => {
    navigation.navigate('WebView', { url });
  };

  const fetchAllArticles = async () => {
    try {
      const data: ApiResponse = await getNewsApiUrl(); // Use the reusable function to get the API response

      if (data.articles.totalResults === 0) {
        // Handle no results case here
        console.log('No articles found');
      } else {
        setArticles(data.articles.results);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllArticles();
  }, []);

  const renderItem = ({ item }: { item: Article }) => {
    const formattedDate = new Date(item.date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const truncatedTitle = item.title.split(' ').slice(0, 10).join(' ') + '...';

    return (
      <View style={styles.articleCard}>
        {item.image && <Image source={{ uri: item.image }} style={styles.articleImage} resizeMode="cover" />}
        <Text style={styles.articleTitle}>{truncatedTitle}</Text>
        <Text style={styles.articleDate}>{formattedDate}</Text>
        <TouchableOpacity onPress={() => handlePress(item.url)}>
          <Text style={styles.articleButton}>Read more</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  articleCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  articleTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  articleDate: {
    marginTop: 4,
    fontSize: 14,
    color: '#888',
  },
  articleButton: {
    marginTop: 8,
    fontSize: 14,
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});

export default App;
