import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ForgetPassword = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Forget</Text>
      <Text  style={styles.heading}>password?</Text>
        <TextInput
        placeholder='Enter your email address'
        placeholderTextColor='gray'
        style={styles.input}
        />
       <Text style={{marginTop:16, fontSize:14}}><Text style={styles.msg}>* </Text>We will send you a message to set or reset your new password</Text>
        <Pressable style={styles.button}>
            <Text style={styles.buttontxt}>Submit</Text>
        </Pressable>
    </View>
    </ScrollView>
  )
}

export default ForgetPassword

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
    msg:{
        color:'red',
        fontWeight:"500"
    }
})