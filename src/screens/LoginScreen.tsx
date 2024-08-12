import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const LoginScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text  style={styles.heading}>Back!</Text>
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
        <Text style={styles.forget}>Forget Password?</Text>
        <Pressable style={styles.button}>
            <Text style={styles.buttontxt}>Login</Text>
        </Pressable>
        <Text style={{textAlign:"center", marginTop:16, fontSize:16}}>Create An Account? <Text style={styles.createAccount}>Sign up</Text></Text>
    </View>
    </ScrollView>
  )
}

export default LoginScreen

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
    createAccount:{
        color:'red',
        fontWeight:"500"
    }
})