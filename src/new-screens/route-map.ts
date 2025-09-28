/**
 * Simple Route Map for New Screens Application
 * 
 * Quick reference file showing all available routes and their purposes.
 * Use this for navigation, testing, or documentation purposes.
 */

// Authentication Routes
export const AUTH_ROUTES = {
  signIn: '/signin',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
} as const;

// Main Application Routes
export const APP_ROUTES = {
  dashboard: '/',
  accounts: '/accounts',
  organizations: '/organizations',
} as const;

// Account Management Routes
export const ACCOUNT_ROUTES = {
  list: '/accounts',
  detail: '/accounts/:id',
  edit: '/accounts/:id/edit',
  create: '/accounts/new',
} as const;

// Organization Management Routes
export const ORGANIZATION_ROUTES = {
  list: '/organizations',
  detail: '/organizations/:id',
  edit: '/organizations/:id/edit',
  create: '/organizations/new',
} as const;

// All routes in one object for easy access
export const ALL_ROUTES = {
  ...AUTH_ROUTES,
  ...APP_ROUTES,
  ...ACCOUNT_ROUTES,
  ...ORGANIZATION_ROUTES,
} as const;

// Screen descriptions for reference
export const SCREEN_DESCRIPTIONS = {
  // Authentication
  '/signin': 'User login and authentication screen',
  '/forgot-password': 'Password recovery request screen',
  '/reset-password': 'New password setup screen',
  
  // Main Screens
  '/': 'Main dashboard (currently shows MyAccountsScreen)',
  '/accounts': 'Account management dashboard with table and statistics',
  '/organizations': 'Organization management interface',
  
  // Account Management
  '/accounts/:id': 'View detailed account information and activity timeline',
  '/accounts/:id/edit': 'Edit account details and settings',
  '/accounts/new': 'Create new account form (modal or screen)',
  
  // Organization Management
  '/organizations/:id': 'View organization details and member information',
  '/organizations/:id/edit': 'Edit organization settings and details',
  '/organizations/new': 'Create new organization form',
} as const;

// Available screen components
export const SCREEN_COMPONENTS = {
  SignInScreen: './SignInScreen',
  ForgotPasswordScreen: './ForgotPasswordScreen',
  MyAccountsScreen: './MyAccountsScreen',
  AccountDetailScreen: './AccountDetailScreen',
  EditAccountScreen: './EditAccountScreen',
  CreateOrganizationScreen: './CreateOrganizationScreen',
  OrganizationDetailsScreen: './OrganizationDetailsScreen',
  EditOrganizationScreen: './EditOrganizationScreen',
} as const;

// Helper function to build dynamic routes
export const buildRoute = {
  accountDetail: (id: string) => `/accounts/${id}`,
  accountEdit: (id: string) => `/accounts/${id}/edit`,
  organizationDetail: (id: string) => `/organizations/${id}`,
  organizationEdit: (id: string) => `/organizations/${id}/edit`,
};

// Example usage:
// buildRoute.accountDetail('123') → '/accounts/123'
// buildRoute.organizationEdit('abc') → '/organizations/abc/edit'

export default ALL_ROUTES;