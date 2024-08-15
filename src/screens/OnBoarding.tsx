import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const OnBoardingScreen = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require("../assests/banner.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.centerContentStyle}>
          <Text style={styles.titleStyle}>You want</Text>
          <Text style={styles.titleStyle}>Authentic, here</Text>
          <Text style={styles.titleStyle}>you go!</Text>
          <Text style={styles.textStyle}>Find it here, buy it now!</Text>
        </View>

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttontxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#0d79ad',
    padding: 12,
    borderRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  buttontxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
