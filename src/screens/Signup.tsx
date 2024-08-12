import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const SignUp = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up!</Text>
        <TextInput
        placeholder='Enter your Mobile Number'
        placeholderTextColor='gray'
        style={styles.input}
        />
        <Pressable style={styles.button}>
            <Text style={styles.buttontxt}>SEND OTP</Text>
        </Pressable>
        <Text style={{textAlign:"center", marginTop:16, fontSize:16}}>By providing my phone number, i hereby agree and accept the <Text style={{color:"#0d79ad", fontWeight:"500", textDecorationLine:"underline"}}>Terms of Service</Text> and <Text style={{color:"#0d79ad", fontWeight:"500", textDecorationLine:"underline"}}>Privacy Policy</Text> in use of the IRL app.</Text>
    </View>
    </ScrollView>
  )
}

export default SignUp
const styles = StyleSheet.create({
    heading:{
        fontSize: 40,
        color:'black',
        fontWeight:'800'
    },
    container:{
        padding:24,
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:8,
        padding:12,
        width:"100%",
        marginTop:23
    },
    forget:{
        color:'red',
        textAlign:"right",
        marginTop:7,
        fontWeight:"500"
    },
    button:{
        backgroundColor:'#0d79ad',
        padding:16,
        textAlign:"center",
        borderRadius:8,
        marginTop:32
    },
    buttontxt:{
        color:'white',
        textAlign:"center",
        fontSize:20,
        fontWeight:"600"
    },

})