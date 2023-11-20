import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AppBar from './AppBar';
import StackNavigator from './StackNavigator'; 
// Using StackNavigator

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <StackNavigator />
    </View>
  );
};


// 
    
export default Main;

