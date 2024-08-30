import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
interface MiniHeaderProps {
    label: string;
    view: () => void; 
  }
const MiniHeader: React.FC<MiniHeaderProps> = ({ label,view }) => {
  return (
    <View style={style.container}>
        <TouchableOpacity style={style.headingButton} >
              <Text style={style.buttonText}>{label}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.headingButton}  onPress={view}>
      <Text
        style={style.view}
     >
        View All
      </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MiniHeader

const style= StyleSheet.create({
    container:{
        paddingHorizontal:10,
         marginVertical:8,
          justifyContent: "space-between",
          alignItems:"center",
           flexDirection:"row"
    },
    text:{
        fontSize:18,
        fontWeight:"800",
        color:"#87B946",
        fontFamily: "SpaceGroteskBold",
        
    },
    view:{
        fontSize:18,
        fontWeight:"600",
        color:"black",
        fontFamily: "SpaceGroteskBold",
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