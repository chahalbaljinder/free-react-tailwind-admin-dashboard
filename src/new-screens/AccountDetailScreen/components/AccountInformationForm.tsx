import React from 'react';
import Input from '../../universal-components/ui/Input';

export const AccountInformationForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Account information</h2>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Id
          </label>
          <Input
            type="text"
            value="000-01"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Client Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client name
          </label>
          <Input
            type="text"
            value="Megapolis"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Client Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client type
          </label>
          <Input
            type="text"
            value="Tire 1"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Market Sector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Market sector
          </label>
          <Input
            type="text"
            value="Transportation"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value="45, Street"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value="City name"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value="Select State"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zip Code <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value="Postal code"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Company Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company website
          </label>
          <Input
            type="text"
            value="xyz.com"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Hosting Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hosting area
          </label>
          <Input
            type="text"
            value="Select State"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* MSA in place */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            MSA in place
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800">
              Yes
            </span>
          </div>
        </div>

        {/* Account Approver */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Approver
          </label>
          <Input
            type="text"
            value="David Rodriguez - Senior Partner"
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Approval Date & Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Approval date & time
          </label>
          <Input
            type="text"
            value="December 15, 2024 at 2:30 PM PST"
            disabled
            className="bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
};