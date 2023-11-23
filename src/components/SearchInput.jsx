import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
});

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  // Create a debounced version of the onChange handler
  const debouncedOnChange = useDebouncedCallback(
    (value) => {
      onSearch(value);
    },
    1000 // Delay in ms
  );

  const handleChange = (value) => {
    setInput(value);
    debouncedOnChange(value); // Use the debounced function here
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChange}
      value={input}
      autoCapitalize="none" 
      placeholder="Search repositories"
    />
  );
};

export default SearchInput;

