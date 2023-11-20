import React, { useContext } from 'react'; // Import useContext here
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'; 
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
      zIndex: 1,
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 10,
      backgroundColor: '#24292e',
      minHeight: 20,
    },
    scrollView: {
      flexDirection: 'row',
    },
    tab: {
        padding: 10, 
    },
  });
  

  const AppBar = () => {
    const { loading, error, data } = useQuery(GET_ME);
    const isAuthenticated = data?.me;
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext); // Using context
    const navigation = useNavigation();
  
    const handleSignOut = async () => {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      navigation.navigate('SignIn');
    };
  
    //if (loading) return <View style={styles.container}><Text>Loading...</Text></View>;
    //if (error) return <View style={styles.container}><Text>Error</Text></View>;
  
    return (
        <View style={styles.container}>
          <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
            <AppBarTab text="Repositories" screenName="RepositoryList" />
            {isAuthenticated ? (
              <AppBarTab text="Sign out" onPress={handleSignOut} />
            ) : (
              <>
                <AppBarTab text="Sign in" screenName="SignIn" />
                <AppBarTab text="Sign up" screenName="SignUp" />
              </>
            )}
          </ScrollView>
        </View>
      );
  };
  
  export default AppBar;

  

// Old one
/*
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
*/