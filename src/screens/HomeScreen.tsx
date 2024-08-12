import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
interface PlaceTypes{
    id:number,
    img: String,
    name:String ,
    dates: String,
    price:number ,
    rating:number ,
    reviews:number,
}
const places:PlaceTypes[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Marbella, Spain',
    dates: 'Apr 23 - May 5',
    price: 200,
    rating: 4.45,
    reviews: 124,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Baveno, Italy',
    dates: 'Apr 25 - May 5',
    price: 320,
    rating: 4.81,
    reviews: 409,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    name: 'Tucson, Arizona',
    dates: 'Apr 22 - May 4',
    price: 695,
    rating: 4.3,
    reviews: 72,
  },
];

export default function HomeScene() {
  const [saved, setSaved] = useState<String[]>([]);

  const handleSave = useCallback((id: number) => {
    const stringId = id.toString(); // Convert id to string
    if (saved.includes(stringId)) {
      setSaved(saved.filter(val => val !== stringId));
    } else {
      setSaved([...saved, stringId]);
    }
  }, [saved]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerAction} />

          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <FeatherIcon
                color="blue"
                name="sliders"
                size={21} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.headerTitle}>Places to stay</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {places.map(
          ({ id, img, name, dates, price, rating, reviews }, index) => {
            const isSaved = saved.includes(id.toString());

            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <View style={styles.cardLikeWrapper}>
                    <TouchableOpacity onPress={() => handleSave(id)}>
                      <View style={styles.cardLike}>
                        <FontAwesome
                          color={isSaved ? '#ea266d' : '#222'}
                          name="heart"
                          solid={isSaved}
                          size={20} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.cardTop}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      style={styles.cardImg}
                      source={{ uri: img as string }} />
                  </View>

                  <View style={styles.cardBody}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>{name}</Text>

                      <FontAwesome
                        color="#ea266d"
                        name="star"
                        solid={true}
                        size={12}
                        style={{ marginBottom: 2 }} />

                      <Text style={styles.cardStars}>{rating}</Text>

                      <Text style={{ color: '#595a63' }}>
                        ({reviews} reviews)
                      </Text>
                    </View>

                    <Text style={styles.cardDates}>{dates}</Text>

                    <Text style={styles.cardPrice}>
                      <Text style={{ fontWeight: '600' }}>${price} </Text>/
                      night
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  headerTop: {
    marginHorizontal: -6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  /** Card */
  card: {
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLikeWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardLike: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#232425',
    marginRight: 'auto',
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 4,
    fontSize: 15,
    fontWeight: '500',
    color: '#232425',
  },
  cardDates: {
    marginTop: 4,
    fontSize: 16,
    color: '#595a63',
  },
  cardPrice: {
    marginTop: 6,
    fontSize: 16,
    color: '#232425',
  },
});