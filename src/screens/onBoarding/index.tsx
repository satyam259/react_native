import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
const OnBoardingScreen = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require("../assets/banner.jpg")}
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


