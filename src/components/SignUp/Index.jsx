import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();

  const register = async ({ username, password, confirmPassword }) => {
    try {
      // Sign up the user
      await signUp({ username, password, confirmPassword });

      // Automatically sign in the user after successful sign up
      await signIn({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUpContainer onSubmit={register} />;
};

export default SignUp;
