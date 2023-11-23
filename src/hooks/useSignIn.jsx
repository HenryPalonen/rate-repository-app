import { useApolloClient, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [authorize, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigation = useNavigation();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await authorize({ variables: { username, password } });
      
      console.log('Server response:', data);

      // Access the accessToken using the correct path
      if (data?.authenticate?.accessToken) {
        console.log('Sign in successful, navigating to RepositoryList');
        await authStorage.setAccessToken(data.authenticate.accessToken);
        await apolloClient.resetStore();
        console.log('Token:', data.authenticate.accessToken);
        navigation.navigate('RepositoryList');
      }

      return data;
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return [signIn, result];
};

export default useSignIn;
