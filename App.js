import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import Main from './src/components/Main'; 

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <NavigationContainer>
          <Main/> 
        </NavigationContainer>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
};

export default App;


// Old one, navigation updated
/*
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main'; 
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);



const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
   );
};

export default App;
*/