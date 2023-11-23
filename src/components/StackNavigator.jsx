import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RepositoryList from './RepositoryList';
import SingleRepositoryView from './SingleRepositoryView';
import SignIn from './SignIn/Index';
import SignUp from './SignUp/Index';
import Review from './Review/Index';
import MyReviews from './MyReviews';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen 
        name="RepositoryList" 
        component={RepositoryList} 
        options={{ headerShown: false}}  // Hide the default header
      />
      <Stack.Screen 
        name="SingleRepositoryView" 
        component={SingleRepositoryView} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Review" 
        component={Review} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="MyReviews" 
        component={MyReviews} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{ headerShown: false}}  // Hide the default header
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{ headerShown: false}}  // Hide the default header
      />
     
      

    </Stack.Navigator>
  );
};

export default StackNavigator;
