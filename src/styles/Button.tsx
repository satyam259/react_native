import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
interface ButtonProps {
    label: string;
  }
const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <View style={style.container}>
        <TouchableOpacity style={style.headingButton} >
              <Text style={style.buttonText}>{label}</Text>
            </TouchableOpacity>
    </View>
  );
}

export default Button

const style= StyleSheet.create({
    container:{
        paddingHorizontal:12,
         marginVertical:8,
          justifyContent: "space-between",
          alignItems:"center",
           flexDirection:"row"
    },
    headingButton:{
      backgroundColor: '#7aa73f',
      paddingVertical: 8,
      paddingHorizontal:15,
      alignSelf: 'flex-start',
      marginTop: 10,
      marginLeft:10

    },

    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 1,
      textTransform: 'uppercase'
      
    },
})