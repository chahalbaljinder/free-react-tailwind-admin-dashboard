import React from 'react';
import CountryMap from '../../../components/ecommerce/CountryMap';

export const WorldMap: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Enhanced Geospatial Intelligence</h3>
      
      {/* World Map Container */}
      <div className="relative flex-1 bg-gray-50 rounded-lg overflow-hidden min-h-[280px]">
        <div className="absolute inset-0 p-3">
          <CountryMap mapColor="#e2e8f0" />
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-3 bg-white px-2 py-1.5 rounded-md shadow-sm z-10">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Low</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Medium</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <span className="text-xs text-gray-600">High</span>
          </div>
        </div>
      </div>
    </div>
  );
};