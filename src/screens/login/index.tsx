import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable, ScrollView ,ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import CheckBox from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

type RootStackParamList = {
  SignIn: undefined;
  Card: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;



const LoginScreen: React.FC = () => {

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation<NavigationProps>(); // Use typed navigation

  const styles = StyleSheet.create<{
    // container: ViewStyle;
    container: ViewStyle;
    image: ImageStyle;
    heading: TextStyle;
    contactheading: TextStyle
    input: ViewStyle;
    errorText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
 
  }>({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 16,
      
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 32,
      color: '#304586'
    },
    contactheading:{

        fontSize: 16,
        fontWeight: 'bold',
        // marginBottom: 32,
        color: '#304586',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: 20
 
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      width: '100%',
      maxWidth: 320,
      padding: 16,
      marginBottom: 16,
    },
    errorText: {
      color: 'red',
      marginBottom: 16,
      alignSelf: 'flex-start',
    },
    image: {
        width: 200, // Adjusted width
        height: 200, // Adjusted height to keep aspect ratio
        // marginBottom: 32, // Space between the image and other elements
        resizeMode: 'contain', // Ensures the image scales properly within its bounds
        marginTop: 32,
        display: 'flex',
        justifyContent: 'flex-end'
      },
    svgIcon: {
      marginBottom: 16, // Adjusted margin for spacing
    },

    button: {
        backgroundColor: '#304586', // Tailwind color bg-gray-800
        paddingVertical: 12, // Tailwind class py-2
        paddingHorizontal: 12, // Tailwind class px-4
        borderRadius: 50, // Tailwind class rounded
        width: '90%', // Tailwind class w-full
        marginBottom: 16, // Tailwind class mb-4
        alignItems: 'center',
        justifyContent: 'center',
      },

    buttonText: {
        color: '#ffffff', // Tailwind color text-white
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      checkbox: {
        // alignSelf: 'center',
        marginLeft: 20

      },
      checkboxcontainer:{

        flexDirection: 'column',
        marginBottom: 20,
        alignSelf:'flex-start',
      }
  });

  return (
    <View>

  
    <ScrollView>

<Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        console.log(values);
        resetForm();
        navigation.navigate('Card');      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>

          <Image 
            source={require('../../assets/Mycorralogo.png')}
            style={styles.image}
          />
          <Text style={styles.heading}> Create New Account</Text>
          
       
          <TextInput
            style={[styles.input, touched.email && errors.email ? { borderColor: 'red' } : null]}
            placeholder="Email Address"
            placeholderTextColor="#888"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            style={[styles.input, touched.name && errors.name ? { borderColor: 'red' } : null]}
            placeholder="Name"
            placeholderTextColor="#888"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={[styles.input, touched.password && errors.password ? { borderColor: 'red' } : null]}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      

          <Pressable
        onPress={() => handleSubmit()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

        </View>
      )}
    </Formik>
    </ScrollView>
    </View>
  );
};

export default LoginScreen;