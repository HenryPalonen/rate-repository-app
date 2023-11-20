import { useApolloClient, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native'; // Correctly using useNavigation
import { SIGN_IN } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [authorize, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigation = useNavigation(); // Correctly using useNavigation

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await authorize({ variables: { username, password } });

      if (data?.authorize) {
        console.log('Sign in successful, navigating to RepositoryList');
        await authStorage.setAccessToken(data.authorize.accessToken);
        await apolloClient.resetStore();
        navigation.navigate('RepositoryList');
      }

      return data;
    } catch (error) {
      // Handle or throw the error based on your error handling logic
      console.error(error);
    }
  };

  return [signIn, result];
};

export default useSignIn;

