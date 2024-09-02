import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
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