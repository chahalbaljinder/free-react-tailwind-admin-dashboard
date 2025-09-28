/**
 * Routes Configuration for New Screens Application
 * 
 * This file defines all the routes, navigation paths, and screen metadata
 * for the standalone new-screens application.
 */

// Route constants
export const ROUTES = {
  // Authentication Routes
  SIGN_IN: '/signin',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // Dashboard & Main Routes
  DASHBOARD: '/',
  MY_ACCOUNTS: '/accounts',
  
  // Account Management Routes
  ACCOUNT_DETAIL: '/accounts/:id',
  EDIT_ACCOUNT: '/accounts/:id/edit',
  CREATE_ACCOUNT: '/accounts/new',

  // Organization Management Routes
  ORGANIZATIONS: '/organizations',
  ORGANIZATION_DETAIL: '/organizations/:id',
  EDIT_ORGANIZATION: '/organizations/:id/edit',
  CREATE_ORGANIZATION: '/organizations/new',

  // Utility Routes
  NOT_FOUND: '*',
} as const;

// Screen metadata interface
export interface ScreenMetadata {
  path: string;
  title: string;
  description?: string;
  requiresAuth?: boolean;
  icon?: string;
  category?: 'auth' | 'accounts' | 'organizations' | 'dashboard';
  showInNavigation?: boolean;
  parentRoute?: string;
}

// Complete screen definitions
export const SCREEN_DEFINITIONS: Record<string, ScreenMetadata> = {
  // Authentication Screens
  SIGN_IN: {
    path: ROUTES.SIGN_IN,
    title: 'Sign In',
    description: 'User authentication and login',
    requiresAuth: false,
    icon: 'user-circle',
    category: 'auth',
    showInNavigation: false,
  },
  FORGOT_PASSWORD: {
    path: ROUTES.FORGOT_PASSWORD,
    title: 'Forgot Password',
    description: 'Password recovery',
    requiresAuth: false,
    icon: 'lock',
    category: 'auth',
    showInNavigation: false,
  },
  RESET_PASSWORD: {
    path: ROUTES.RESET_PASSWORD,
    title: 'Reset Password',
    description: 'Set new password',
    requiresAuth: false,
    icon: 'lock',
    category: 'auth',
    showInNavigation: false,
  },

  // Dashboard & Main Screens
  DASHBOARD: {
    path: ROUTES.DASHBOARD,
    title: 'Dashboard',
    description: 'Main dashboard overview',
    requiresAuth: true,
    icon: 'grid',
    category: 'dashboard',
    showInNavigation: true,
  },
  MY_ACCOUNTS: {
    path: ROUTES.MY_ACCOUNTS,
    title: 'My Accounts',
    description: 'Account management dashboard',
    requiresAuth: true,
    icon: 'folder',
    category: 'accounts',
    showInNavigation: true,
  },

  // Account Management Screens
  ACCOUNT_DETAIL: {
    path: ROUTES.ACCOUNT_DETAIL,
    title: 'Account Details',
    description: 'View account information and activity',
    requiresAuth: true,
    icon: 'page',
    category: 'accounts',
    showInNavigation: false,
    parentRoute: ROUTES.MY_ACCOUNTS,
  },
  EDIT_ACCOUNT: {
    path: ROUTES.EDIT_ACCOUNT,
    title: 'Edit Account',
    description: 'Modify account details',
    requiresAuth: true,
    icon: 'pencil',
    category: 'accounts',
    showInNavigation: false,
    parentRoute: ROUTES.MY_ACCOUNTS,
  },
  CREATE_ACCOUNT: {
    path: ROUTES.CREATE_ACCOUNT,
    title: 'Create New Account',
    description: 'Add a new account',
    requiresAuth: true,
    icon: 'plus',
    category: 'accounts',
    showInNavigation: false,
    parentRoute: ROUTES.MY_ACCOUNTS,
  },

  // Organization Management Screens
  ORGANIZATIONS: {
    path: ROUTES.ORGANIZATIONS,
    title: 'Organizations',
    description: 'Organization management',
    requiresAuth: true,
    icon: 'group',
    category: 'organizations',
    showInNavigation: true,
  },
  ORGANIZATION_DETAIL: {
    path: ROUTES.ORGANIZATION_DETAIL,
    title: 'Organization Details',
    description: 'View organization information',
    requiresAuth: true,
    icon: 'page',
    category: 'organizations',
    showInNavigation: false,
    parentRoute: ROUTES.ORGANIZATIONS,
  },
  EDIT_ORGANIZATION: {
    path: ROUTES.EDIT_ORGANIZATION,
    title: 'Edit Organization',
    description: 'Modify organization details',
    requiresAuth: true,
    icon: 'pencil',
    category: 'organizations',
    showInNavigation: false,
    parentRoute: ROUTES.ORGANIZATIONS,
  },
  CREATE_ORGANIZATION: {
    path: ROUTES.CREATE_ORGANIZATION,
    title: 'Create Organization',
    description: 'Add a new organization',
    requiresAuth: true,
    icon: 'plus',
    category: 'organizations',
    showInNavigation: false,
    parentRoute: ROUTES.ORGANIZATIONS,
  },
};

// Navigation menu structure
export const NAVIGATION_MENU = [
  {
    title: 'Dashboard',
    route: ROUTES.DASHBOARD,
    icon: 'grid',
    category: 'dashboard',
  },
  {
    title: 'My Accounts',
    route: ROUTES.MY_ACCOUNTS,
    icon: 'folder',
    category: 'accounts',
  },
  {
    title: 'Organizations',
    route: ROUTES.ORGANIZATIONS,
    icon: 'group',
    category: 'organizations',
  },
] as const;

// Breadcrumb helper functions
export const getBreadcrumbs = (pathname: string): Array<{title: string, path?: string}> => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: Array<{title: string, path?: string}> = [];

  if (segments.length === 0) {
    return [{ title: 'Dashboard' }];
  }

  // Build breadcrumbs based on path segments
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Find matching screen definition
    const screenKey = Object.keys(SCREEN_DEFINITIONS).find(key => {
      const screen = SCREEN_DEFINITIONS[key];
      const routePath = screen.path.replace(':id', segment);
      return routePath === currentPath;
    });

    if (screenKey) {
      const screen = SCREEN_DEFINITIONS[screenKey];
      breadcrumbs.push({
        title: screen.title,
        path: index === segments.length - 1 ? undefined : currentPath,
      });
    } else {
      // Fallback for dynamic segments
      breadcrumbs.push({
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: index === segments.length - 1 ? undefined : currentPath,
      });
    }
  });

  return breadcrumbs;
};

// Route helper functions
export const getScreenByPath = (path: string): ScreenMetadata | undefined => {
  return Object.values(SCREEN_DEFINITIONS).find(screen => screen.path === path);
};

export const getScreensByCategory = (category: ScreenMetadata['category']): ScreenMetadata[] => {
  return Object.values(SCREEN_DEFINITIONS).filter(screen => screen.category === category);
};

export const getNavigationRoutes = (): ScreenMetadata[] => {
  return Object.values(SCREEN_DEFINITIONS).filter(screen => screen.showInNavigation);
};

export const isProtectedRoute = (path: string): boolean => {
  const screen = getScreenByPath(path);
  return screen?.requiresAuth ?? true;
};

// Route parameter helpers
export const buildRoutePath = (routeTemplate: string, params: Record<string, string>): string => {
  let path = routeTemplate;
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value);
  });
  return path;
};

// Example usage:
// buildRoutePath(ROUTES.ACCOUNT_DETAIL, { id: '123' }) -> '/accounts/123'
// buildRoutePath(ROUTES.EDIT_ORGANIZATION, { id: 'abc' }) -> '/organizations/abc/edit'

export default ROUTES;