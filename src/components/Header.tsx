import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header: React.FC<{ navigation: any }> = ({ navigation }) => {
  const localNavigation = useNavigation();

  return (
    <View style={{ backgroundColor: "yellow" }}>
      <StatusBar backgroundColor="black" />
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image 
          source={require('../assets/images/Mycorralogo.png')}
          style={styles.image}
        />
        <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 10 }}>
          <Icon name='search' size={34} style={styles.icon} />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name='menu' size={34} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 8,
    color: '#7aa73f',
  },
  image: {
    width: 100, 
    height: 50, 
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
  }
});

export default Header;
