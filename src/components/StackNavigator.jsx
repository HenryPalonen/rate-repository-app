import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn/Index';
import SignUp from './SignUp/Index';

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
