import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      borderRadius: 8,
      backgroundColor: '#fff',
      marginHorizontal: 10,
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
  });
  