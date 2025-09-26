# SignInScreen Component

A complete, reusable sign-in screen component built to match the Figma design exactly. This component is fully independent and can be easily migrated to other projects.

## 🎨 Design Features

- **Split Layout**: Form on left, branding on right
- **Responsive**: Mobile-first design with desktop optimization
- **Modern UI**: Clean, professional styling with smooth transitions
- **Accessibility**: Proper labels, focus states, and keyboard navigation
- **Brand Customization**: Easy to customize branding section

## 📁 Structure

```
SignInScreen/
├── index.tsx                 # Main SignInScreen component
├── exports.ts               # Clean exports for all components
├── SignInScreenDemo.tsx     # Demo/example usage
├── README.md               # This documentation
└── components/
    ├── FormInput.tsx       # Reusable form input component
    ├── CustomCheckbox.tsx  # Custom checkbox component
    ├── PrimaryButton.tsx   # Primary button component
    └── BrandSection.tsx    # Right-side branding component
```

## 🚀 Usage

### Complete SignInScreen

```tsx
import { SignInScreen } from '../new-screens/SignInScreen/exports';

<SignInScreen
  onSignIn={(email, password, rememberMe) => {
    // Handle sign-in logic
    console.log({ email, password, rememberMe });
  }}
  onBackToDashboard={() => {
    // Navigate back to dashboard
    router.push('/dashboard');
  }}
  onForgotPassword={() => {
    // Navigate to forgot password
    router.push('/forgot-password');
  }}
  onContactUs={() => {
    // Navigate to contact/signup
    router.push('/contact');
  }}
  loading={false}
  error={undefined}
/>
```

### Individual Components

```tsx
import { 
  FormInput, 
  PrimaryButton, 
  CustomCheckbox,
  BrandSection 
} from '../new-screens/SignInScreen/exports';

// Use individual components in other screens
<FormInput 
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={setEmail}
  required
/>

<PrimaryButton onClick={handleSubmit} fullWidth>
  Submit
</PrimaryButton>

<CustomCheckbox 
  checked={agreed}
  onChange={setAgreed}
  label="I agree to terms"
/>

<BrandSection 
  companyName="Your Company"
  tagline="Your Tagline"
/>
```

## 🎛️ Props & Customization

### SignInScreen Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSignIn` | `(email: string, password: string, rememberMe: boolean) => void` | - | Callback when sign in is attempted |
| `onBackToDashboard` | `() => void` | - | Callback for back to dashboard link |
| `onForgotPassword` | `() => void` | - | Callback for forgot password link |
| `onContactUs` | `() => void` | - | Callback for contact us link |
| `loading` | `boolean` | `false` | Show loading state |
| `error` | `string` | - | Error message to display |

### FormInput Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `type` | `'email' \| 'password' \| 'text'` | - | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Current value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `required` | `boolean` | `false` | Required field indicator |
| `error` | `string` | - | Error message |

### PrimaryButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content |
| `onClick` | `() => void` | - | Click handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state |
| `fullWidth` | `boolean` | `false` | Full width button |

### BrandSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `companyName` | `string` | `"Megapolis"` | Company name |
| `tagline` | `string` | `"Advisory"` | Company tagline |

## 🎨 Styling & Customization

The component uses Tailwind CSS classes and is fully customizable:

- **Colors**: Modify the color scheme by changing Tailwind color classes
- **Typography**: Adjust font sizes and weights using Tailwind typography classes
- **Spacing**: Modify padding, margins using Tailwind spacing classes
- **Brand Section**: Completely customize the right-side branding

### Custom Brand Colors

```tsx
// Modify the BrandSection component for custom colors
<BrandSection 
  companyName="YourCo"
  tagline="Innovation"
  className="bg-gradient-to-br from-purple-900 to-pink-900"
/>
```

## 🔒 Independence & Migration

This component is designed to be completely independent:

- ✅ **No external dependencies** beyond React and Tailwind CSS
- ✅ **Self-contained components** with their own styling
- ✅ **Clean prop interfaces** for easy integration
- ✅ **TypeScript support** with full type definitions
- ✅ **Modular structure** - use parts independently

### Migration Checklist

When moving to another project:
1. Copy the entire `SignInScreen` folder
2. Ensure Tailwind CSS is configured
3. Import and use via `exports.ts`
4. Customize colors/branding as needed

## 🧪 Testing

Use the `SignInScreenDemo.tsx` component to test all functionality:

```tsx
import SignInScreenDemo from './SignInScreen/SignInScreenDemo';

// Add to your app for testing
<SignInScreenDemo />
```

## 📱 Responsive Design

- **Mobile**: Single column layout, form takes full width
- **Tablet**: Form with wider padding
- **Desktop**: Split layout with branding section visible
- **Large screens**: Optimized spacing and typography

The component automatically adapts to different screen sizes using Tailwind's responsive prefixes.