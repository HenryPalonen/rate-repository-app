import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { useField } from 'formik';
import { theme } from '../themes/theme'


const formikStyles = StyleSheet.create({
  input: {
    fontFamily: theme.fonts.main,
    borderWidth: 1,
    borderColor: 'gray', // Default border color
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: '#d73a4a', // Red border color for error
  },
  errorText: {
    fontFamily: theme.fonts.main,
    color: '#d73a4a', // Red color for error text
    marginBottom: 10,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={[formikStyles.input, showError && formikStyles.errorInput]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {showError && <Text style={formikStyles.errorText}>{meta.error}</Text>}
    </>
  );
};


export default FormikTextInput;
