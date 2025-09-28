import { useState } from "react";
import { Link } from "../_internal/router/Link";
import GridShape from "../_internal/components/common/GridShape";
import ThemeTogglerTwo from "../_internal/components/common/ThemeTogglerTwo";
import ResetPasswordModal from "../components/ResetPasswordModal";

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-gray-600 mb-2">
    {children}
  </label>
);

const Input = ({ type = "text", placeholder, value, onChange }: { 
  type?: string; 
  placeholder?: string; 
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 text-gray-700 bg-white border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
);

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onChange(e.target.checked)}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
  />
);

const Button = ({ children, className = "" }: { 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <button
    type="submit"
    className={`w-full py-3 px-4 text-white bg-indigo-900 rounded-lg font-medium hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
  >
    {children}
  </button>
);

export default function SignInScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);

  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {/* Left Side - Sign In Form */}
        <div className="flex flex-col flex-1">
          <div className="w-full max-w-md pt-10 mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              Back to dashboard
            </Link>
          </div>

          {/* Form Content */}
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div>
              {/* Title */}
              <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2 dark:text-white">
                  Sign In
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your email and password to sign in!
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Email Input */}
                <div>
                  <Label>
                    Email address<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input 
                    placeholder="Enter your email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <Label>
                    Password<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    type="password"
                    placeholder="hello123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowResetModal(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Sign In Button */}
                <div className="pt-2">
                  <Button>
                    Sign In
                  </Button>
                </div>
              </form>

              {/* Contact Us Link */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account? {" "}
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Brand Section */}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/" className="block mb-4">
                <img
                  width={231}
                  height={48}
                  src="/images/logo/auth-logo.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                Free and Open-Source Tailwind CSS Admin Dashboard Template
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
      
      {/* Reset Password Modal */}
      <ResetPasswordModal 
        isOpen={showResetModal} 
        onClose={() => setShowResetModal(false)} 
      />
    </div>
  );
}