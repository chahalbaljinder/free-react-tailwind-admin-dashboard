import React, { useState } from 'react';
import Input from '../../universal-components/ui/Input';
import Select from '../../universal-components/forms/Select';

export const EditAccountInformationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    accountId: '000-01',
    clientName: 'Megapolis',
    clientType: 'Tire 1',
    marketSector: 'transportation',
    address: '45, Street',
    city: 'City name',
    state: '',
    zipCode: '',
    companyWebsite: 'xyz.com',
    hostingArea: '',
    msaInPlace: 'yes',
    accountApprover: 'David Rodriguez - Senior Partner',
    approvalDateTime: 'December 15, 2024 at 2:30 PM PST'
  });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Account information</h2>
        <div className="flex space-x-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600"
            title="Reset form"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account ID - Read only */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Id
          </label>
          <Input
            type="text"
            value={formData.accountId}
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
            value={formData.clientName}
            onChange={handleInputChange('clientName')}
            required
          />
        </div>

        {/* Client Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client type
          </label>
          <Input
            type="text"
            value={formData.clientType}
            onChange={handleInputChange('clientType')}
            required
          />
        </div>

        {/* Market Sector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Market sector
          </label>
          <Select
            value={formData.marketSector}
            onChange={handleSelectChange('marketSector')}
            options={[
              { value: 'transportation', label: 'Transportation' },
              { value: 'technology', label: 'Technology' },
              { value: 'healthcare', label: 'Healthcare' },
              { value: 'finance', label: 'Finance' },
              { value: 'manufacturing', label: 'Manufacturing' },
              { value: 'retail', label: 'Retail' }
            ]}
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value={formData.address}
            onChange={handleInputChange('address')}
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value={formData.city}
            onChange={handleInputChange('city')}
            placeholder="Enter city name"
            required
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.state}
            onChange={handleSelectChange('state')}
            placeholder="Select State"
            required
            options={[
              { value: 'ca', label: 'California' },
              { value: 'ny', label: 'New York' },
              { value: 'tx', label: 'Texas' },
              { value: 'fl', label: 'Florida' },
              { value: 'wa', label: 'Washington' },
              { value: 'or', label: 'Oregon' }
            ]}
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zip Code <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            value={formData.zipCode}
            onChange={handleInputChange('zipCode')}
            placeholder="Enter postal code"
            required
          />
        </div>

        {/* Company Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company website
          </label>
          <Input
            type="url"
            value={formData.companyWebsite}
            onChange={handleInputChange('companyWebsite')}
            placeholder="https://example.com"
          />
        </div>

        {/* Hosting Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hosting area
          </label>
          <Select
            value={formData.hostingArea}
            onChange={handleSelectChange('hostingArea')}
            placeholder="Select hosting area"
            options={[
              { value: 'west-coast', label: 'West Coast Office' },
              { value: 'east-coast', label: 'East Coast Office' },
              { value: 'central', label: 'Central Office' },
              { value: 'north', label: 'Northern Office' },
              { value: 'south', label: 'Southern Office' }
            ]}
          />
        </div>

        {/* MSA in place - Dropdown with Yes/No */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            MSA in place <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.msaInPlace}
            onChange={handleSelectChange('msaInPlace')}
            required
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
          />
        </div>

        {/* Account Approver - Read only */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Approver
          </label>
          <Input
            type="text"
            value={formData.accountApprover}
            disabled
            className="bg-gray-50"
          />
        </div>

        {/* Approval Date & Time - Read only */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Approval date & time
          </label>
          <Input
            type="text"
            value={formData.approvalDateTime}
            disabled
            className="bg-gray-50"
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};