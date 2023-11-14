import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#24292e',
    },
    scrollView: {
        flexDirection: 'row', 
    },
    tab: {
      padding: 10, 
    },
  });

const AppBarTab = ({ text, to }) => (
    <Pressable style={styles.tab}>
      <Link to={to}>
        <Text style={{ color: 'white' }}>{text}</Text>
      </Link>
    </Pressable>
  );

  const AppBar = () => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
            <AppBarTab text="Repositories" to="/" />
            <AppBarTab text="Sign in" to="/signin" />
        </ScrollView>
      </View>
    );
  };

export default AppBar;
