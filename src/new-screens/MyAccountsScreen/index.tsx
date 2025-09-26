import React from 'react';
import { WorldMap } from './components/WorldMap';
import { StatsCards } from './components/StatsCards';
import { AccountsTable } from './components/AccountsTable';
import { AppSidebar } from './components/AppSidebar';
import { AppHeader } from './components/AppHeader';
import Breadcrumb from '../universal-components/navigation/Breadcrumb';
import Button from '../universal-components/ui/Button';

export const MyAccountsScreen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Organization details', href: '#' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AppHeader />
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Page Header */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Breadcrumb items={breadcrumbItems} />
                  <h1 className="text-2xl font-bold text-gray-900 mt-2">My Accounts</h1>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="secondary" 
                    className="inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Client Survey
                  </Button>
                  
                  <Button 
                    variant="primary"
                    className="inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-6">
            {/* Map and Stats Section */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-6">
              {/* World Map - Takes 3 columns */}
              <div className="xl:col-span-3 h-full">
                <WorldMap />
              </div>
              
              {/* Stats Cards - Takes 1 column */}
              <div className="xl:col-span-1 h-full">
                <div className="h-full flex flex-col">
                  <StatsCards />
                </div>
              </div>
            </div>

            {/* Accounts Table */}
            <AccountsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountsScreen;