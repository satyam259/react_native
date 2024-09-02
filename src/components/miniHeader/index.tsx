import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
interface MiniHeaderProps {
    label: string;
  }
const MiniHeader: React.FC<MiniHeaderProps> = ({ label }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.headingButton} >
              <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
      <Text
        style={styles.view}
     >
        View All
      </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MiniHeader

