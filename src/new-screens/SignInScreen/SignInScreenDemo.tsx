import React from 'react';
import SignInScreen from './index';

/**
 * Demo/Example component showing how to use the SignInScreen
 * This can be used as a reference or for testing the component
 */
const SignInScreenDemo: React.FC = () => {
  const handleSignIn = (email: string, password: string, rememberMe: boolean) => {
    console.log('Sign In Attempted:', { email, password, rememberMe });
    // Here you would typically call your authentication API
    alert(`Sign in attempt with email: ${email}`);
  };

  const handleBackToDashboard = () => {
    console.log('Navigating back to dashboard');
    // Here you would typically navigate using your router
    alert('Navigating back to dashboard');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Here you would typically navigate to forgot password page
    alert('Opening forgot password flow');
  };

  const handleContactUs = () => {
    console.log('Contact us clicked');
    // Here you would typically navigate to contact page or sign up
    alert('Opening contact/sign up flow');
  };

  return (
    <SignInScreen
      onSignIn={handleSignIn}
      onBackToDashboard={handleBackToDashboard}
      onForgotPassword={handleForgotPassword}
      onContactUs={handleContactUs}
      loading={false}
      error={undefined}
    />
  );
};

export default SignInScreenDemo;