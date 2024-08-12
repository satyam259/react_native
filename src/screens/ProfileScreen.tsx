import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { layoutStyle } from '../styles/commonStyle';
const ProfileScreen: React.FC = () => (
    <SafeAreaView style={layoutStyle.container}>
      <View style={layoutStyle.content}>
        <Text>Profile Content Goes Here</Text>
      </View>
    </SafeAreaView>
  );
export default ProfileScreen 