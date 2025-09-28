import React, { useState } from 'react';
import Input from '../../universal-components/ui/Input';
import Select from '../../universal-components/forms/Select';

interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (accountData: any) => void;
}

export const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    companyWebsite: '',
    clientName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    primaryContact: '',
    emailAddress: '',
    clientMarketSector: '',
    clientType: '',
    hostingAreaOffice: '',
    msaInPlace: ''
  });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      companyWebsite: '',
      clientName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      primaryContact: '',
      emailAddress: '',
      clientMarketSector: '',
      clientType: '',
      hostingAreaOffice: '',
      msaInPlace: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400/50 backdrop-blur-[32px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Account</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Row 1: Company Website & Client Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Website <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    type="url"
                    value={formData.companyWebsite}
                    onChange={handleInputChange('companyWebsite')}
                    placeholder="xyz.com"
                    required
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded">
                    AI Enhanced
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.clientName}
                  onChange={handleInputChange('clientName')}
                  placeholder="Megapolis"
                  required
                />
              </div>
            </div>

            {/* Row 2: Address 1 & Address 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address 1 <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.address1}
                  onChange={handleInputChange('address1')}
                  placeholder="45, Street"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address 2
                </label>
                <Input
                  type="text"
                  value={formData.address2}
                  onChange={handleInputChange('address2')}
                  placeholder="Address (optional)"
                />
              </div>
            </div>

            {/* Row 3: City, State & Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange('city')}
                  placeholder="City name"
                  required
                />
              </div>
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
                    { value: 'or', label: 'Oregon' },
                    { value: 'nv', label: 'Nevada' },
                    { value: 'az', label: 'Arizona' }
                  ]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.zipCode}
                  onChange={handleInputChange('zipCode')}
                  placeholder="Postal code"
                  required
                />
              </div>
            </div>

            {/* Row 4: Primary Contact & Email Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary contact
                </label>
                <Input
                  type="text"
                  value={formData.primaryContact}
                  onChange={handleInputChange('primaryContact')}
                  placeholder="Contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  value={formData.emailAddress}
                  onChange={handleInputChange('emailAddress')}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>

            {/* Row 5: Client Market Sector & Client Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client market sector <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.clientMarketSector}
                  onChange={handleSelectChange('clientMarketSector')}
                  placeholder="Select State"
                  required
                  options={[
                    { value: 'transportation', label: 'Transportation' },
                    { value: 'technology', label: 'Technology' },
                    { value: 'healthcare', label: 'Healthcare' },
                    { value: 'finance', label: 'Finance' },
                    { value: 'manufacturing', label: 'Manufacturing' },
                    { value: 'retail', label: 'Retail' },
                    { value: 'energy', label: 'Energy' },
                    { value: 'education', label: 'Education' }
                  ]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client type <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.clientType}
                  onChange={handleSelectChange('clientType')}
                  placeholder="Select State"
                  required
                  options={[
                    { value: 'tier1', label: 'Tier 1' },
                    { value: 'tier2', label: 'Tier 2' },
                    { value: 'tier3', label: 'Tier 3' },
                    { value: 'enterprise', label: 'Enterprise' },
                    { value: 'startup', label: 'Startup' },
                    { value: 'government', label: 'Government' }
                  ]}
                />
              </div>
            </div>

            {/* Row 6: Hosting Area/Office & MSA in place */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hosting Area/Office
                </label>
                <Select
                  value={formData.hostingAreaOffice}
                  onChange={handleSelectChange('hostingAreaOffice')}
                  placeholder="Select State"
                  options={[
                    { value: 'west-coast', label: 'West Coast Office' },
                    { value: 'east-coast', label: 'East Coast Office' },
                    { value: 'central', label: 'Central Office' },
                    { value: 'north', label: 'Northern Office' },
                    { value: 'south', label: 'Southern Office' }
                  ]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MSA in place
                </label>
                <Select
                  value={formData.msaInPlace}
                  onChange={handleSelectChange('msaInPlace')}
                  placeholder="Select State"
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-medium"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};