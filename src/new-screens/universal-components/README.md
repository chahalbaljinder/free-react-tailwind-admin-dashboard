# Universal Components Library

A comprehensive, independent component library for the new-screens folder. These components are designed to be reusable, consistent, and easily portable across projects.

## 🚀 Quick Start

```tsx
import { 
  Button, 
  Card, 
  Input, 
  Container, 
  Grid,
  Alert 
} from '../universal-components';

// Use components directly
<Container maxWidth="lg">
  <Card title="My Form">
    <Input label="Email" type="email" />
    <Button variant="primary">Submit</Button>
  </Card>
</Container>
```

## 📁 Component Categories

### 🎨 UI Components (`./ui/`)
Core interface elements with consistent styling and behavior.

#### Button
```tsx
<Button variant="primary" size="lg" fullWidth>
  Submit Form
</Button>

<Button variant="outline" leftIcon={<PlusIcon />}>
  Add Item
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `fullWidth`, `disabled`, `loading`
- `leftIcon`, `rightIcon`

#### Input
```tsx
<Input 
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={setEmail}
  error={emailError}
  required
/>
```

**Props:**
- All standard input props
- `label`, `error`, `success`, `hint`
- `leftIcon`, `rightIcon`
- `size`: 'sm' | 'md' | 'lg'

#### Card
```tsx
<Card 
  title="User Profile"
  description="Manage your account settings"
  variant="elevated"
>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `variant`: 'default' | 'bordered' | 'shadow' | 'elevated'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `title`, `description`, `header`, `footer`

#### Typography
```tsx
<Typography variant="h1" color="primary">
  Page Title
</Typography>

<Typography variant="body1" color="secondary">
  Description text
</Typography>
```

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline'
- `color`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted'
- `align`, `weight`, `as`

### 🏗️ Layout Components (`./layout/`)
Structural components for page layout and content organization.

#### Container
```tsx
<Container maxWidth="xl" padding="lg" centerContent>
  <h1>Centered Content</h1>
</Container>
```

**Props:**
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `centerContent`: boolean

#### Grid
```tsx
<Grid 
  cols={3} 
  gap="md" 
  responsive={{ sm: 1, md: 2, lg: 3 }}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

**Props:**
- `cols`: 1 | 2 | 3 | 4 | 5 | 6 | 12
- `gap`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `responsive`: breakpoint overrides

#### Flex
```tsx
<Flex 
  direction="row" 
  align="center" 
  justify="between" 
  gap="md"
>
  <div>Left content</div>
  <div>Right content</div>
</Flex>
```

**Props:**
- `direction`: 'row' | 'row-reverse' | 'col' | 'col-reverse'
- `align`: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- `justify`: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
- `wrap`, `gap`

#### Section
```tsx
<Section variant="primary" size="lg" fullHeight>
  <Container>
    <h1>Section Content</h1>
  </Container>
</Section>
```

### 📝 Form Components (`./forms/`)
Form inputs and validation components.

#### Checkbox
```tsx
<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the terms"
  error={agreementError}
/>
```

#### Select
```tsx
<Select
  label="Country"
  value={country}
  onChange={setCountry}
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ]}
  placeholder="Select a country"
/>
```

#### TextArea
```tsx
<TextArea
  label="Message"
  value={message}
  onChange={setMessage}
  rows={4}
  placeholder="Enter your message"
/>
```

#### FormGroup
```tsx
<FormGroup 
  title="Personal Information"
  description="Please provide your details"
>
  <Input label="First Name" />
  <Input label="Last Name" />
</FormGroup>
```

### 🧭 Navigation Components (`./navigation/`)
Navigation and wayfinding components.

#### Breadcrumb
```tsx
<Breadcrumb
  items={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Settings', onClick: () => navigate('/settings') },
    { label: 'Profile', current: true }
  ]}
  separator="chevron"
/>
```

#### BackButton
```tsx
<BackButton
  onClick={() => navigate(-1)}
  label="Back to Dashboard"
  variant="button"
/>
```

### 💬 Feedback Components (`./feedback/`)
User feedback and state indication components.

#### Alert
```tsx
<Alert 
  variant="success" 
  title="Success!"
  closable
  onClose={handleClose}
>
  Your changes have been saved.
</Alert>
```

**Variants:** 'info' | 'success' | 'warning' | 'error'

#### Loading
```tsx
<Loading 
  loading={isSubmitting} 
  text="Saving changes..."
>
  <MyForm />
</Loading>

// Or standalone spinner
<LoadingSpinner size="lg" color="blue" />
```

#### EmptyState
```tsx
<EmptyState
  title="No results found"
  description="Try adjusting your search criteria"
  variant="search"
  action={{
    label: "Clear filters",
    onClick: clearFilters
  }}
/>
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades (blue-50 to blue-900)
- **Secondary**: Gray shades (gray-50 to gray-900)
- **Success**: Green shades (green-50 to green-900)
- **Warning**: Yellow shades (yellow-50 to yellow-900)
- **Error**: Red shades (red-50 to red-900)

### Typography Scale
- **Headings**: 4xl, 3xl, 2xl, xl, lg, base
- **Body**: base, sm
- **Caption**: xs
- **Weights**: light, normal, medium, semibold, bold

### Spacing Scale
- **none**: 0
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

### Border Radius
- **sm**: 0.375rem (6px)
- **md**: 0.5rem (8px)
- **lg**: 0.75rem (12px)
- **xl**: 1rem (16px)

## 🔧 Customization

### Extending Components
```tsx
// Create custom variants by extending base components
import { Button } from '../universal-components';

const CustomButton = (props) => (
  <Button 
    {...props} 
    className={`custom-styles ${props.className}`}
  />
);
```

### Theme Customization
All components use Tailwind CSS classes. Customize by:
1. Modifying Tailwind config
2. Adding custom CSS classes
3. Using the `className` prop to override styles

## 🚀 Migration Guide

These components are designed to be completely portable:

### To New Project:
1. Copy the `universal-components` folder
2. Ensure Tailwind CSS is configured
3. Import and use components via `index.ts`

### Dependencies:
- React 16.8+ (for hooks)
- Tailwind CSS 3.0+
- No other external dependencies

## 📖 Examples

### Complete Form Example
```tsx
import { 
  Container, 
  Card, 
  FormGroup, 
  Input, 
  Select, 
  TextArea, 
  Checkbox, 
  Button, 
  Alert 
} from '../universal-components';

function ContactForm() {
  return (
    <Container maxWidth="md">
      <Card title="Contact Us" description="We'd love to hear from you">
        {error && (
          <Alert variant="error" title="Error">
            {error}
          </Alert>
        )}
        
        <FormGroup title="Personal Information">
          <Input label="Full Name" required />
          <Input label="Email" type="email" required />
        </FormGroup>
        
        <FormGroup title="Message">
          <Select
            label="Subject"
            options={[
              { value: 'general', label: 'General Inquiry' },
              { value: 'support', label: 'Support' }
            ]}
          />
          <TextArea 
            label="Message" 
            rows={4} 
            required 
          />
        </FormGroup>
        
        <Checkbox
          label="Subscribe to newsletter"
          checked={subscribe}
          onChange={setSubscribe}
        />
        
        <Button variant="primary" fullWidth loading={submitting}>
          Send Message
        </Button>
      </Card>
    </Container>
  );
}
```

### Dashboard Layout Example
```tsx
import { 
  Container, 
  Grid, 
  Card, 
  Typography, 
  Button,
  Breadcrumb,
  EmptyState
} from '../universal-components';

function Dashboard() {
  return (
    <Container maxWidth="full" padding="lg">
      <Breadcrumb
        items={[
          { label: 'Home', onClick: () => navigate('/') },
          { label: 'Dashboard', current: true }
        ]}
      />
      
      <div className="mt-6">
        <Typography variant="h1" className="mb-2">
          Dashboard
        </Typography>
        <Typography variant="body1" color="secondary">
          Welcome back! Here's what's happening.
        </Typography>
      </div>
      
      <Grid cols={3} gap="lg" className="mt-8">
        <Card title="Total Users" variant="elevated">
          <Typography variant="h2">1,234</Typography>
        </Card>
        
        <Card title="Revenue" variant="elevated">
          <Typography variant="h2">$12,345</Typography>
        </Card>
        
        <Card title="Orders" variant="elevated">
          <Typography variant="h2">567</Typography>
        </Card>
      </Grid>
      
      {data.length === 0 ? (
        <EmptyState
          title="No data available"
          description="Start by adding some content"
          action={{ label: "Add Content", onClick: addContent }}
        />
      ) : (
        // Render data
      )}
    </Container>
  );
}
```

## 🎯 Best Practices

1. **Consistent Spacing**: Use the provided spacing scale
2. **Semantic HTML**: Components render proper semantic elements
3. **Accessibility**: All components include proper ARIA attributes
4. **Performance**: Components are optimized and use React.memo where beneficial
5. **TypeScript**: Full type safety with comprehensive prop interfaces
6. **Testing**: Components are designed to be easily testable

## 🔍 Component Props Reference

See individual component files for complete prop interfaces and TypeScript definitions. Each component exports its props interface for reuse and extension.