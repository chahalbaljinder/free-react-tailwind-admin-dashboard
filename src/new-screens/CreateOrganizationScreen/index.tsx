import { useState } from "react";
import { Link } from "react-router";

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange,
  className = ""
}: { 
  type?: string; 
  placeholder?: string; 
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  className?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
  />
);

const Select = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select State"
}: { 
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
  options?: { value: string; label: string }[];
  placeholder?: string;
}) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
  </div>
);

const Label = ({ children, required = false }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-sm font-medium text-gray-700 mb-2">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

const Button = ({ 
  children, 
  variant = "primary", 
  className = "",
  onClick
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 transition-colors";
  const variants = {
    primary: "text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-indigo-500",
    secondary: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-gray-500"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const stateOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  // Add more states as needed
];

export default function CreateOrganizationScreen() {
  const [formData, setFormData] = useState({
    companyWebsite: "xyz.com",
    organizationName: "Megapolis",
    address1: "45, Street",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    emailAddress: "",
    phone: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Megapolis</h1>
              <p className="text-sm text-gray-500">Advisory</p>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h0v14z"/>
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar and Name */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/user/user-01.png" 
                alt="Emirhan Boruch"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-900">Emirhan Boruch</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 py-4 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/new-screens/signin" className="hover:text-gray-700">
            Sign-in
          </Link>
          <span>/</span>
          <span className="text-gray-900">Create Organization</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Title and Description */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Create Your Organization
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Set up your organization to get started with the platform. You need an organization to access all 
              features and collaborate with your team.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Row 1: Company Website and Organization Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label required>Company Website</Label>
                <div className="relative">
                  <Input
                    value={formData.companyWebsite}
                    onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                    ✨ AI Enhanced
                  </span>
                </div>
              </div>
              <div>
                <Label required>Organization Name</Label>
                <Input
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange('organizationName', e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Address 1 and Address 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label required>Address 1</Label>
                <Input
                  value={formData.address1}
                  onChange={(e) => handleInputChange('address1', e.target.value)}
                />
              </div>
              <div>
                <Label>Address 2</Label>
                <Input
                  placeholder="Address (optional)"
                  value={formData.address2}
                  onChange={(e) => handleInputChange('address2', e.target.value)}
                />
              </div>
            </div>

            {/* Row 3: City, State, Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label required>City</Label>
                <Input
                  placeholder="City name"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
              <div>
                <Label required>State</Label>
                <Select
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  options={stateOptions}
                />
              </div>
              <div>
                <Label required>Zip Code</Label>
                <Input
                  placeholder="Postal code"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                />
              </div>
            </div>

            {/* Row 4: Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label required>Email address</Label>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  placeholder="(555) 123 4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button variant="secondary" className="flex-1">
                Back to Sign-in
              </Button>
              <Button variant="primary" className="flex-1">
                Create Organization
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}