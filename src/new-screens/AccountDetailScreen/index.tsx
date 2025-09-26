import React, { useState } from 'react';
import { AppSidebar } from '../MyAccountsScreen/components/AppSidebar';
import { AppHeader } from '../MyAccountsScreen/components/AppHeader';
import { AccountInformationForm } from './components/AccountInformationForm';
import { AccountStatsCards } from './components/AccountStatsCards';
import { RecentActivity } from './components/RecentActivity';

interface TabConfig {
  id: string;
  label: string;
  content: React.ReactNode;
}

const AccountDetailScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tabs: TabConfig[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Account Form */}
          <div className="lg:col-span-2">
            <AccountInformationForm />
          </div>
          
          {/* Sidebar - Stats and Activity */}
          <div className="space-y-6">
            <AccountStatsCards />
            <RecentActivity />
          </div>
        </div>
      )
    },
    {
      id: 'contacts',
      label: 'Contacts',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Management</h2>
          <p className="text-gray-600">Contact management functionality will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'team',
      label: 'Team',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h2>
          <p className="text-gray-600">Team management functionality will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'opportunities',
      label: 'Opportunities',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Business Opportunities</h2>
          <p className="text-gray-600">Opportunity tracking functionality will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Client Experience</h2>
          <p className="text-gray-600">Experience tracking functionality will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'performance',
      label: 'Performance',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h2>
          <p className="text-gray-600">Performance analytics functionality will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'notes',
      label: 'Notes',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Notes</h2>
          <p className="text-gray-600">Note management functionality will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'financial',
      label: 'Financial',
      content: (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h2>
          <p className="text-gray-600">Financial tracking functionality will be implemented here.</p>
        </div>
      )
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="flex h-screen bg-gray-50">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppHeader />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>My Accounts</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">Los Angeles County Metropolitan Transportation Authority</span>
            </div>
          </nav>

          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Los Angeles County Metropolitan Transportation Authority</h1>
          </div>

          {/* Tab Navigation */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {currentTab?.content}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountDetailScreen;