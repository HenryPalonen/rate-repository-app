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

const SignInContainer = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={onSubmit}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Username is required';
                }
                if (!values.password) {
                    errors.password = 'Password is required';
                }
                return errors;
            }}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput name="username" placeholder="Username" />
                    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                    <Button title="Sign In" onPress={handleSubmit} color={styles.button.backgroundColor} />
                </View>
            )}
        </Formik>
    );
};

export default SignInContainer;
