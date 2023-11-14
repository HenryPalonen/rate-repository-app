import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList'; 
import AppBar from './AppBar'; 
import SignIn from './SignIn';

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
      <Routes>
        <Route path="/" exact element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};



export default Main;