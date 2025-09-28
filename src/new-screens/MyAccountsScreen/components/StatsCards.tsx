import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle }) => {
  const getValueColorClass = () => {
    switch (title) {
      case 'AI Health Score':
        return 'text-orange-600';
      case 'High Risk':
        return 'text-red-600';
      case 'Total Value':
        return 'text-blue-900';
      default:
        return 'text-gray-900';
    }
  };

  const getSubtitleColorClass = () => {
    switch (title) {
      case 'AI Health Score':
        return 'text-orange-500';
      case 'Total Value':
        return 'text-blue-900';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm flex-1 min-h-[90px] flex flex-col justify-between">
      <div className="flex items-start justify-between h-full">
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
            <p className={`text-2xl font-bold mb-1 ${getValueColorClass()}`}>{value}</p>
          </div>
          {subtitle && (
            <p className={`text-xs font-medium ${getSubtitleColorClass()}`}>{subtitle}</p>
          )}
        </div>
        <div className="ml-3 p-2 bg-gray-100 rounded-lg flex-shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const StatsCards: React.FC = () => {
  // More accurate icons matching the design
  const UsersIcon = () => (
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const WarningIcon = () => (
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );

  const DollarIcon = () => (
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );

  return (
    <div className="grid grid-cols-1 gap-3 h-full">
      <StatCard
        icon={<UsersIcon />}
        title="Total Accounts"
        value="15"
      />
      
      <StatCard
        icon={<HeartIcon />}
        title="AI Health Score"
        value="78%"
        subtitle="Average"
      />
      
      <StatCard
        icon={<WarningIcon />}
        title="High Risk"
        value="3"
      />
      
      <StatCard
        icon={<DollarIcon />}
        title="Total Value"
        value="$92.6M"
        subtitle="Portfolio"
      />
    </div>
  );
};