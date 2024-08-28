import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#9288F9",
          marginTop: -50,
          zIndex: 10,
        }}
      >
        <ImageBackground
          source={require("../assests/background.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            alt="User Avatar"
            source={require("../assests/user.jpg")}
            style={styles.userAvatar}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            Name
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          {/* {/ Custom Drawer Items with Icons /} */}
          <DrawerItem
            label="Home"
            icon={({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )}
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            label="Categories"
            icon={({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            )}
            onPress={() => props.navigation.navigate('Categories')}
          />
          <DrawerItem
            label="Settings"
            icon={({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            )}
            onPress={() => props.navigation.navigate('Settings')}
          />
          <DrawerItem
            label="Support"
            icon={({ color, size }) => (
              <Icon name="support" color={color} size={size} />
            )}
            onPress={() => props.navigation.navigate('Support')}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <Text style={styles.preferences}>Preferences</Text>
        <View style={styles.switchTextContainer}>
          {/* <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor="#f4f3f4"
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          /> */}
          {/* <Text
            style={{
              fontSize: 15,
            }}
          >
            Dark Theme
          </Text> */}
        </View>
      </View>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="share" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="exit-to-app" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
  },
  switchTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: "#ccc",
    paddingTop: 10,
    fontWeight: "500",
    paddingLeft: 20,
  },
});