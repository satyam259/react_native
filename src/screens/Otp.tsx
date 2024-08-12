import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const OtpScreen = () => {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Verify your</Text>
        <Text style={styles.heading}>Phone number</Text>
        <View style={styles.inputContainer}>
          <TextInput
          placeholderTextColor='gray'
          style={styles.input}
          />
          <TextInput
          placeholderTextColor='gray'
          style={styles.input}
          />
          <TextInput
          placeholderTextColor='gray'
          style={styles.input}
          />
          <TextInput
          placeholderTextColor='gray'
          style={styles.input}
          />

        </View>
          <Pressable style={styles.button}>
              <Text style={styles.buttontxt}>SEND OTP</Text>
          </Pressable>
          <Text style={{textAlign:"center", marginTop:16, fontSize:16, fontWeight:"500"}}>Didn't you receive any code?</Text>
          <Text style={{textAlign:"center", marginTop:16, fontSize:16, fontWeight:"500", color:"#0d79ad"}}>RESEND NEW CODE</Text>
      </View>
      </ScrollView>
    )
  }
  
  export default OtpScreen
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
          borderRadius:999,
          padding:16,
          width:"20%",
          marginTop:23,
          textAlign:"center"
      },
      inputContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        gap:6,
        width:"100%"
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