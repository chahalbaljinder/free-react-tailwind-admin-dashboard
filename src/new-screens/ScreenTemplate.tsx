import React from 'react';
import ComponentCard from '../components/common/ComponentCard';
import Button from '../components/ui/button/Button';
import Input from '../components/form/input/InputField';
import { Modal } from '../components/ui/modal';

// Template for creating new screens from Figma designs
// Copy this template and modify according to your Figma design

interface YourScreenTemplateProps {
  // Define your props here
}

const YourScreenTemplate: React.FC<YourScreenTemplateProps> = () => {
  // Add your state and handlers here
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Your Screen Title
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Screen description
          </p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => setIsModalOpen(true)}
        >
          Action Button
        </Button>
      </div>

      {/* Main Content - Use ComponentCard for sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComponentCard 
          title="Section Title" 
          desc="Section description"
        >
          <div className="space-y-4">
            <Input 
              placeholder="Enter value" 
              type="text"
            />
            <Input 
              placeholder="Enter email" 
              type="email"
            />
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard title="Another Section">
          <div className="space-y-4">
            {/* Add your components here */}
            <p className="text-gray-600 dark:text-gray-300">
              Content goes here
            </p>
          </div>
        </ComponentCard>
      </div>

      {/* Modal Example */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <div className="p-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
            Modal Title
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Modal content goes here
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="primary">
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default YourScreenTemplate;