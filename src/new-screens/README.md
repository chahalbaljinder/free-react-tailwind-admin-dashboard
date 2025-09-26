# New Screens - Figma to React Conversion Guide

This folder contains screens converted from Figma designs using the existing components and elements from the codebase.

## Available Components Library

### 🎨 UI Components (`src/components/ui/`)

#### Button Component
- **Location**: `src/components/ui/button/Button.tsx`
- **Props**:
  - `size`: "sm" | "md"
  - `variant`: "primary" | "outline"
  - `startIcon`, `endIcon`: ReactNode
  - `onClick`, `disabled`, `className`
- **Usage**: Primary actions, secondary actions, icon buttons

#### Modal Component
- **Location**: `src/components/ui/modal/index.tsx`
- **Props**:
  - `isOpen`: boolean
  - `onClose`: function
  - `showCloseButton`: boolean
  - `isFullscreen`: boolean
- **Usage**: Dialogs, popups, overlays

#### Other UI Elements
- **Alert**: `src/components/ui/alert/`
- **Avatar**: `src/components/ui/avatar/`
- **Badge**: `src/components/ui/badge/`
- **Dropdown**: `src/components/ui/dropdown/`
- **Table**: `src/components/ui/table/`

### 📝 Form Components (`src/components/form/`)

#### Input Field
- **Location**: `src/components/form/input/InputField.tsx`
- **Props**:
  - `type`: "text" | "number" | "email" | "password" | "date" | "time"
  - `success`, `error`: boolean states
  - `hint`: string for helper text
  - `disabled`: boolean
- **Usage**: Text inputs, form fields

#### Other Form Elements
- **Checkbox**: `src/components/form/input/Checkbox.tsx`
- **Radio**: `src/components/form/input/Radio.tsx`
- **TextArea**: `src/components/form/input/TextArea.tsx`
- **Select**: `src/components/form/Select.tsx`
- **MultiSelect**: `src/components/form/MultiSelect.tsx`
- **DatePicker**: `src/components/form/date-picker.tsx`
- **Switch**: `src/components/form/switch/`

### 📊 Chart Components (`src/components/charts/`)
- **Bar Charts**: `src/components/charts/bar/`
- **Line Charts**: `src/components/charts/line/`

### 🏗️ Layout Components

#### ComponentCard
- **Location**: `src/components/common/ComponentCard.tsx`
- **Props**: `title`, `desc`, `children`, `className`
- **Usage**: Card containers, content sections

#### Other Common Components
- **PageBreadCrumb**: Navigation breadcrumbs
- **ThemeToggleButton**: Dark/light mode toggle
- **GridShape**: Grid layout helper

### 🎨 Design System

#### Colors (Tailwind Classes)
- **Primary Brand**: `bg-brand-500`, `text-brand-500`, `border-brand-300`
- **Gray Scale**: `bg-gray-100` to `bg-gray-900`, `text-gray-500`
- **Status Colors**:
  - Success: `bg-success-500`, `text-success-500`
  - Error: `bg-error-500`, `text-error-500`
- **Dark Mode**: `dark:bg-gray-800`, `dark:text-white/90`

#### Spacing
- **Padding**: `p-4`, `px-6`, `py-5`, `p-6`
- **Margins**: `mt-1`, `mb-6`, `mx-4`
- **Gaps**: `gap-2`, `gap-6`, `space-y-6`

#### Borders & Radius
- **Borders**: `border`, `border-gray-200`, `dark:border-gray-800`
- **Radius**: `rounded-lg`, `rounded-2xl`, `rounded-3xl`

## 🚀 Conversion Process

### Step 1: Analyze Figma Design
1. Identify the main layout structure
2. Break down into reusable components
3. Map Figma elements to existing components
4. Note custom styling requirements

### Step 2: Create Component Structure
```tsx
// Template for new screen component
import React from 'react';
import ComponentCard from '../components/common/ComponentCard';
import Button from '../components/ui/button/Button';
import Input from '../components/form/input/InputField';
// ... other imports

const YourNewScreen: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <ComponentCard title="Your Section Title" desc="Description">
        {/* Your content here */}
      </ComponentCard>
    </div>
  );
};

export default YourNewScreen;
```

### Step 3: Implementation Guidelines

#### Layout Patterns
```tsx
// Full width container
<div className="w-full">
  
// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
// Flex layouts  
<div className="flex items-center justify-between">
<div className="flex flex-col space-y-4">
```

#### Common Combinations
```tsx
// Card with form
<ComponentCard title="Form Title">
  <div className="space-y-4">
    <Input placeholder="Enter value" />
    <Button variant="primary">Submit</Button>
  </div>
</ComponentCard>

// Modal with content
<Modal isOpen={isOpen} onClose={handleClose}>
  <div className="p-6">
    <h2 className="text-xl font-medium mb-4">Modal Title</h2>
    {/* Modal content */}
  </div>
</Modal>
```

## 📁 File Organization

Create your screens following this structure:
```
src/new-screens/
├── YourScreenName/
│   ├── index.tsx          # Main component
│   ├── components/        # Screen-specific components
│   │   ├── SubComponent.tsx
│   └── hooks/            # Screen-specific hooks (if needed)
│       └── useYourHook.ts
└── README.md             # This file
```

## 🎯 Best Practices

1. **Reuse Existing Components**: Always check if an existing component can fulfill your needs
2. **Follow Design System**: Use consistent spacing, colors, and typography
3. **Responsive Design**: Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
4. **Dark Mode Support**: Include dark mode variants using `dark:` prefix
5. **Accessibility**: Ensure proper ARIA attributes and keyboard navigation
6. **Performance**: Use React.memo for complex components if needed

## 🔧 Development Workflow

1. Create your screen folder in `src/new-screens/`
2. Start with the main component file
3. Import and use existing components
4. Add custom styling with Tailwind classes
5. Test responsiveness and dark mode
6. Add to routing if needed

## 📞 Need Help?

When converting Figma designs:
1. Share the Figma link or screenshot
2. Describe the intended functionality
3. Point out any specific interactions or animations
4. Mention if you need any new custom components

The existing component library should cover most common UI patterns. Let's work together to convert your Figma designs efficiently!