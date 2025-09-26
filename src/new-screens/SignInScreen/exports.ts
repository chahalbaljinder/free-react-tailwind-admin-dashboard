// Main SignInScreen Component
export { default as SignInScreen } from './index';

// Individual Components (for reuse in other screens)
export { default as FormInput } from './components/FormInput';
export { default as CustomCheckbox } from './components/CustomCheckbox';
export { default as PrimaryButton } from './components/PrimaryButton';
export { default as BrandSection } from './components/BrandSection';

// Component Props Types
export type { default as SignInScreenProps } from './index';

// Usage Example:
/*
import { SignInScreen, FormInput, PrimaryButton } from '../new-screens/SignInScreen/exports';

// Use the complete SignInScreen
<SignInScreen 
  onSignIn={(email, password, remember) => console.log('Sign in', { email, password, remember })}
  onBackToDashboard={() => console.log('Back to dashboard')}
  onForgotPassword={() => console.log('Forgot password')}
  onContactUs={() => console.log('Contact us')}
/>

// Or use individual components
<FormInput 
  label="Email" 
  type="email" 
  placeholder="Enter email"
  value={email}
  onChange={setEmail}
/>
*/