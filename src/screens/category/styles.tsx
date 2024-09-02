import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      padding: 10
    },
    image: {
      width: '100%',
      height: 180,
      marginBottom: 10,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center', // Rounds the corners of the image
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });