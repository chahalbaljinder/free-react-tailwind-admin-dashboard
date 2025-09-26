import React from 'react';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'proposal' | 'meeting' | 'contract' | 'update';
  icon: React.ReactNode;
  color: string;
}

export const RecentActivity: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      title: 'Proposal submitted for metro transit expansion',
      description: '',
      date: '2 days ago',
      type: 'proposal',
      color: 'bg-green-500',
      icon: (
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      )
    },
    {
      id: '2',
      title: 'Meeting with Sarah Johnson scheduled',
      description: '',
      date: '1 week ago',
      type: 'meeting',
      color: 'bg-blue-500',
      icon: (
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      )
    },
    {
      id: '3',
      title: 'Contract amendment signed',
      description: '',
      date: '2 week ago',
      type: 'contract',
      color: 'bg-purple-500',
      icon: (
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex space-x-3">
            <div className="flex-shrink-0 mt-2">
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                <span className="text-xs text-gray-500">{activity.date}</span>
              </div>
              {activity.description && (
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};