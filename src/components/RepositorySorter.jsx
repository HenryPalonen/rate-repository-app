import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component

const styles = StyleSheet.create({
    picker: {
      width: 400, 
      height:150, 
    },
    // Other styles...
  });
const RepositorySorter = ({ onSortChange }) => {
  const [selectedValue, setSelectedValue] = useState('latest');

  const handleSortChange = (value) => {
    setSelectedValue(value);
    onSortChange(value);
  };

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={handleSortChange}
      style={styles.picker}>
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highestRated" />
      <Picker.Item label="Lowest rated repositories" value="lowestRated" />
    </Picker>
  );
};

export default RepositorySorter;