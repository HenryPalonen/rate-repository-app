import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput'; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 12,
      backgroundColor: '#e1e4e8',
    },
    button: {
      backgroundColor: 'blue', // Button background
      color: 'white', // Button text color
      padding: 10,
      borderRadius: 5,
    },
  });
  
  const SignInForm = ({ onSubmit }) => {
    return (
      <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Button title="Sign In" onPress={onSubmit} color={styles.button.backgroundColor} />
      </View>
    );
  };

const SignIn = () => {
    const initialValues = {
      username: '',
      password: '',
    };
  
    const onSubmit = (values) => {
      console.log(values);
    };
  
    const validate = (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );
  };
  
  
export default SignIn;
