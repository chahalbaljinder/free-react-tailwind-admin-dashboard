import { useState } from "react";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-gray-600 mb-2">
    {children}
  </label>
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

export default function ResetPasswordModal({ isOpen, onClose }: ResetPasswordModalProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Reset Your Password
          </h2>
          <p className="text-gray-600 text-sm">
            Enter your e-mail address and we will send you a link to reset your password
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* New Password */}
          <div>
            <Label>
              New Password<span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Label>
              Confirm Password<span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              type="password"
              placeholder="123456"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Password requirement */}
          <p className="text-xs text-gray-500">
            Min 8 character require
          </p>

          {/* Save Button */}
          <div className="pt-2">
            <Button>
              Save Your Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}