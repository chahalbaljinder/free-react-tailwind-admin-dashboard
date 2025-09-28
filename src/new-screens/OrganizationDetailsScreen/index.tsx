import { Link } from "../_internal/router/Link";

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const EditIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const MoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Badge = ({ 
  children, 
  variant = "green",
  icon
}: { 
  children: React.ReactNode; 
  variant?: "green" | "orange";
  icon?: React.ReactNode;
}) => {
  const variants = {
    green: "bg-green-100 text-green-800",
    orange: "bg-orange-100 text-orange-800"
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {icon}
      {children}
    </span>
  );
};

const Button = ({ 
  children, 
  variant = "primary", 
  className = "",
  onClick
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 transition-colors";
  const variants = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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

export default function OrganizationDetailsScreen() {
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
          <Link to="/" className="hover:text-gray-700">
            Dashboard
          </Link>
          <span>/</span>
          <Link to="/profile" className="hover:text-gray-700">
            Profile
          </Link>
          <span>/</span>
          <span className="text-gray-900">Organization details</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Jai Laxmi Narayan Seva Trust
                </h1>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" className="p-2">
                    <EditIcon className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="p-2">
                    <MoreIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="green">
                  Active Organization
                </Badge>
                <Badge variant="orange" icon={<span className="text-orange-600">👤</span>}>
                  Administration
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                <span>Created on</span>
                <span className="text-gray-900 font-medium">August 24, 2025</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Organization Details */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Organization Details
              </h2>

              <div className="space-y-6">
                {/* Company Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Company Website
                  </label>
                  <Link 
                    to="#" 
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    https://your-company.com
                  </Link>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email address
                    </label>
                    <p className="text-gray-900">example@gmail.com</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Phone
                    </label>
                    <p className="text-gray-900">(555) 123 4567</p>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Address
                  </label>
                  <p className="text-gray-900">45, Street</p>
                </div>

                {/* City/State and Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      City/State
                    </label>
                    <p className="text-gray-900">Leeds, East London</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Postal Code
                    </label>
                    <p className="text-gray-900">12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Actions
              </h2>
              
              <div className="space-y-3">
                <Button variant="primary" className="w-full justify-center">
                  View Accounts
                </Button>
                
                <Button variant="secondary" className="w-full justify-center">
                  Manage Setting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}