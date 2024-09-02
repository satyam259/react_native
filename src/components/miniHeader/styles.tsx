import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
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
      backgroundColor: '#304586',
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