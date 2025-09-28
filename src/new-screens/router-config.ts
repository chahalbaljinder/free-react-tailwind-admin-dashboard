/**
 * React Router Configuration for New Screens Application
 * 
 * This file provides router setup and routing components for use with
 * React Router v6. Import and use these configurations to add navigation
 * to your standalone new-screens application.
 */

import React from 'react';
import { ROUTES } from './routes';

// Screen component imports (uncomment when implementing routing)
/*
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import MyAccountsScreen from './MyAccountsScreen';
import AccountDetailScreen from './AccountDetailScreen';
import EditAccountScreen from './EditAccountScreen';
import CreateOrganizationScreen from './CreateOrganizationScreen';
import OrganizationDetailsScreen from './OrganizationDetailsScreen';
import EditOrganizationScreen from './EditOrganizationScreen';
*/

// Route configuration for React Router v6
export const routeConfig = [
  // Authentication Routes
  {
    path: ROUTES.SIGN_IN,
    element: 'SignInScreen', // Replace with <SignInScreen />
    title: 'Sign In',
    requiresAuth: false,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: 'ForgotPasswordScreen', // Replace with <ForgotPasswordScreen />
    title: 'Forgot Password',
    requiresAuth: false,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: 'ResetPasswordScreen', // Replace with <ResetPasswordScreen />
    title: 'Reset Password',
    requiresAuth: false,
  },

  // Protected Routes (require authentication)
  {
    path: ROUTES.DASHBOARD,
    element: 'MyAccountsScreen', // Replace with <MyAccountsScreen /> or Dashboard component
    title: 'Dashboard',
    requiresAuth: true,
  },
  {
    path: ROUTES.MY_ACCOUNTS,
    element: 'MyAccountsScreen', // Replace with <MyAccountsScreen />
    title: 'My Accounts',
    requiresAuth: true,
  },
  {
    path: ROUTES.ACCOUNT_DETAIL,
    element: 'AccountDetailScreen', // Replace with <AccountDetailScreen />
    title: 'Account Details',
    requiresAuth: true,
  },
  {
    path: ROUTES.EDIT_ACCOUNT,
    element: 'EditAccountScreen', // Replace with <EditAccountScreen />
    title: 'Edit Account',
    requiresAuth: true,
  },
  {
    path: ROUTES.CREATE_ACCOUNT,
    element: 'CreateAccountModal', // Replace with modal or dedicated screen
    title: 'Create Account',
    requiresAuth: true,
  },
  {
    path: ROUTES.ORGANIZATIONS,
    element: 'OrganizationsScreen', // Replace with organizations list component
    title: 'Organizations',
    requiresAuth: true,
  },
  {
    path: ROUTES.ORGANIZATION_DETAIL,
    element: 'OrganizationDetailsScreen', // Replace with <OrganizationDetailsScreen />
    title: 'Organization Details',
    requiresAuth: true,
  },
  {
    path: ROUTES.EDIT_ORGANIZATION,
    element: 'EditOrganizationScreen', // Replace with <EditOrganizationScreen />
    title: 'Edit Organization',
    requiresAuth: true,
  },
  {
    path: ROUTES.CREATE_ORGANIZATION,
    element: 'CreateOrganizationScreen', // Replace with <CreateOrganizationScreen />
    title: 'Create Organization',
    requiresAuth: true,
  },

  // Catch-all route
  {
    path: ROUTES.NOT_FOUND,
    element: 'NotFoundScreen', // Replace with <NotFoundScreen />
    title: '404 - Page Not Found',
    requiresAuth: false,
  },
];

// Protected Route wrapper component interface
export interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

// Navigation utilities
export const navigationUtils = {
  /**
   * Get the current screen metadata based on pathname
   */
  getCurrentScreen: (pathname: string) => {
    return routeConfig.find(route => {
      if (route.path.includes(':')) {
        // Handle dynamic routes
        const routeRegex = new RegExp('^' + route.path.replace(/:[^\s/]+/g, '[^/]+') + '$');
        return routeRegex.test(pathname);
      }
      return route.path === pathname;
    });
  },

  /**
   * Check if a route requires authentication
   */
  isProtectedRoute: (pathname: string): boolean => {
    const screen = navigationUtils.getCurrentScreen(pathname);
    return screen?.requiresAuth ?? true;
  },

  /**
   * Get navigation breadcrumbs
   */
  getBreadcrumbs: (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Array<{title: string, path?: string}> = [];

    if (segments.length === 0) {
      return [{ title: 'Dashboard' }];
    }

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      const screen = navigationUtils.getCurrentScreen(currentPath);
      if (screen) {
        breadcrumbs.push({
          title: screen.title,
          path: index === segments.length - 1 ? undefined : currentPath,
        });
      } else {
        breadcrumbs.push({
          title: segment.charAt(0).toUpperCase() + segment.slice(1),
          path: index === segments.length - 1 ? undefined : currentPath,
        });
      }
    });

    return breadcrumbs;
  },
};

/**
 * Example implementation with React Router v6:
 * 
 * import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 * import { routeConfig } from './router-config';
 * 
 * const router = createBrowserRouter(
 *   routeConfig.map(route => ({
 *     path: route.path,
 *     element: route.requiresAuth ? 
 *       <ProtectedRoute>{route.element}</ProtectedRoute> : 
 *       route.element
 *   }))
 * );
 * 
 * function App() {
 *   return <RouterProvider router={router} />;
 * }
 */

/**
 * Example ProtectedRoute component:
 * 
 * import { Navigate, useLocation } from 'react-router-dom';
 * 
 * const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
 *   children, 
 *   redirectTo = ROUTES.SIGN_IN 
 * }) => {
 *   const isAuthenticated = useAuth(); // Your auth logic here
 *   const location = useLocation();
 * 
 *   if (!isAuthenticated) {
 *     return <Navigate to={redirectTo} state={{ from: location }} replace />;
 *   }
 * 
 *   return <>{children}</>;
 * };
 */

export default routeConfig;