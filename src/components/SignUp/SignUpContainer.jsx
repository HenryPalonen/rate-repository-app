import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#e1e4e8',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', confirmPassword: '' }}
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Username is required';
        }else if (values.username.length < 5 || values.username.length > 30) {
          errors.password = 'Username must be between 5 and 30 characters';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 5 || values.password.length > 50) {
          errors.password = 'Password must be between 5 and 50 characters';
        }
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry />
          <FormikTextInput name="confirmPassword" placeholder="Confirm Password" secureTextEntry />
          <Button title="Sign Up" onPress={handleSubmit} color={styles.button.backgroundColor} />
        </View>
      )}
    </Formik>
  );
};

export default SignUpContainer;
