import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const RegisterScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Create an</Text>
      <Text  style={styles.heading}>account</Text>
        <TextInput
        placeholder='Username or Email'
        placeholderTextColor='gray'
        style={styles.input}
        />
        <TextInput
        placeholder='Password'
        placeholderTextColor='gray'
        style={styles.input}
        />
        <TextInput
        placeholder='Confirm Password'
        placeholderTextColor='gray'
        style={styles.input}
        />
              <Text style={{marginTop:16, fontSize:14}}>By clicking the <Text style={{color:"red", fontWeight:"500"}}>Register</Text> button,you agree to the public offer</Text>
        <Pressable style={styles.button}>
            <Text style={styles.buttontxt}>Create Account</Text>
        </Pressable>
        <Text style={{textAlign:"center", marginTop:16, fontSize:16}}>I Already Have an Account <Text style={{color:"red", fontWeight:"600", textDecorationLine:"underline" }}>Login</Text></Text>
    </View>
    </ScrollView>
  )
}

export default RegisterScreen

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
    button:{
        backgroundColor:'red',
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