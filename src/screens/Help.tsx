import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import MyPressable from '../components/Pressable';

const HelpScene: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const { top } = useSafeAreaInsets();

  const imageSize = width - 32;
  const marginTop = Platform.OS === 'ios' ? top : StatusBar.currentHeight ?? 24;

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={{ flex: 1, backgroundColor: '#FEFEFE' }}
    >
      <Image
        style={[
          styles.image,
          { width: imageSize, height: imageSize, marginTop },
        ]}
        source={{ uri: "https://img.freepik.com/premium-vector/sign-with-word-help-hand-icon-cartoon-style-white-background_96318-18754.jpg" }}
        resizeMode="cover"
      />
      <Text style={styles.title}>How can we help you?</Text>
      <Text style={styles.subTitle}>
        It looks like you are experiencing problems{'\n'}with our sign up
        process. We are here to{'\n'}help so please get in touch with us
      </Text>
      <View style={styles.buttonContainer}>
        <MyPressable style={styles.button} android_ripple={{ color: 'grey' }}>
          <Text style={styles.buttonText}>Chat with Us</Text>
        </MyPressable>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#FEFEFE',
    alignSelf: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'WorkSans-Bold',
    textAlign: 'center',
    paddingTop: 8,
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    textAlign: 'center',
    paddingTop: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 140,
    height: 40,
    padding: 8,
    backgroundColor: '#0d79ad',
    borderRadius: 4,
    elevation: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    padding: 4,
  },
  menuBtn: {
    position: 'absolute',
    padding: 8,
    left: 8,
  },
});

export default HelpScene;
