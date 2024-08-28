import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface NewsCardProps {
  headline: string;
  subheadline: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ headline, subheadline, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.cardContainer}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={[styles.image, isHovered && styles.imageHovered]}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.headline}>{headline}</Text>
          <Text style={styles.subheadline}>{subheadline}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  imageHovered: {
    transform: [{ scale: 1.05 }],
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
  },
  headline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subheadline: {
    fontSize: 12,
    color: '#ddd',
    marginTop: 4,
  },
});




// Update the main component's export and fix the name to match the purpose
const BookLab: React.FC = () => {
  return (
    

    <View style={{ padding: 20 }}>
       <NewsCard
        headline="Breaking News: React Native Simplifies Mobile Development"
        subheadline="Published: August 23, 2024"
        imageUrl="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"
      />
   
    
       {/* <NewsCard
        headline="Breaking News: React Native Simplifies Mobile Development"
        subheadline="Published: August 23, 2024"
        imageUrl="https://cdn.photofunia.com/effects/breaking-news/icons/huge.jpg"
      />
  
 
       <NewsCard
        headline="Breaking News: React Native Simplifies Mobile Development"
        subheadline="Published: August 23, 2024"
        imageUrl="https://c8.alamy.com/comp/2G5TWCW/dehradun-uttarakhand-india-june-28-2021-coronavirus-covid-19-news-headline-in-newspaper-of-india-headlines-of-the-month-march-april-2020-high-quality-apple-prores-422-4k-footage-60p-2G5TWCW.jpg"
      />
   
    
       <NewsCard
        headline="Breaking News: React Native Simplifies Mobile Development"
        subheadline="Published: August 23, 2024"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkr08xv_mW05JZ50j7a5Q-CgYnLzKhslJwQ&s"
      /> */}
  </View>
   
  );
};

export default BookLab;
