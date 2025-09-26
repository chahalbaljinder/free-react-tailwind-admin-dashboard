import React, { useState } from 'react';
import { 
  Container, 
  Card, 
  Grid, 
  Button, 
  Input, 
  Select, 
  TextArea, 
  Checkbox, 
  Alert, 
  Loading, 
  EmptyState,
  Typography,
  Flex,
  FormGroup,
  Breadcrumb,
  BackButton
} from './index';

/**
 * Demo component showcasing all universal components
 * Use this as a reference and for testing components
 */
const UniversalComponentsDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
    newsletter: false
  });
  
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showEmptyState, setShowEmptyState] = useState(false);

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' }
  ];

  const breadcrumbItems = [
    { label: 'Home', onClick: () => console.log('Navigate to home') },
    { label: 'Components', onClick: () => console.log('Navigate to components') },
    { label: 'Demo', current: true }
  ];

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Form submitted:', formData);
    }, 2000);
  };

  return (
    <Container maxWidth="full" padding="lg">
      {/* Navigation */}
      <BackButton 
        onClick={() => console.log('Go back')} 
        label="Back to Components"
        variant="button"
      />
      
      <div className="mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Header */}
      <div className="mt-8 mb-8">
        <Typography variant="h1" className="mb-2">
          Universal Components Demo
        </Typography>
        <Typography variant="body1" color="secondary">
          Showcase of all available components in the universal components library
        </Typography>
      </div>

      {/* Alerts */}
      {showAlert && (
        <div className="mb-6">
          <Alert 
            variant="info" 
            title="Component Demo"
            closable
            onClose={() => setShowAlert(false)}
          >
            This page demonstrates all universal components. Interact with them to see their behavior.
          </Alert>
        </div>
      )}

      {/* Main Content Grid */}
      <Grid cols={1} gap="lg" responsive={{ lg: 2 }}>
        {/* Form Components */}
        <Card title="Form Components" description="Interactive form elements">
          <Loading loading={loading} text="Submitting form...">
            <div className="space-y-6">
              <FormGroup title="Basic Information">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
                  required
                />
                
                <Select
                  label="Country"
                  value={formData.country}
                  onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                  options={countries}
                  placeholder="Select your country"
                />
              </FormGroup>

              <FormGroup title="Message">
                <TextArea
                  label="Your Message"
                  placeholder="Tell us what you think..."
                  value={formData.message}
                  onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
                  rows={4}
                />
              </FormGroup>

              <Checkbox
                checked={formData.newsletter}
                onChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
                label="Subscribe to our newsletter"
              />

              <Flex gap="md">
                <Button variant="outline" onClick={() => setFormData({
                  name: '', email: '', country: '', message: '', newsletter: false
                })}>
                  Reset
                </Button>
                <Button variant="primary" onClick={handleSubmit} loading={loading}>
                  Submit Form
                </Button>
              </Flex>
            </div>
          </Loading>
        </Card>

        {/* UI Components */}
        <Card title="UI Components" description="Basic interface elements">
          <div className="space-y-6">
            <FormGroup title="Buttons">
              <Flex gap="sm" wrap="wrap">
                <Button variant="primary" size="sm">Primary SM</Button>
                <Button variant="secondary" size="md">Secondary MD</Button>
                <Button variant="outline" size="lg">Outline LG</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger" disabled>Disabled</Button>
              </Flex>
            </FormGroup>

            <FormGroup title="Typography">
              <div className="space-y-2">
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="body1">Body text with normal weight</Typography>
                <Typography variant="body2" color="secondary">Secondary body text</Typography>
                <Typography variant="caption" color="muted">Caption text</Typography>
              </div>
            </FormGroup>

            <FormGroup title="Alerts">
              <div className="space-y-3">
                <Alert variant="success" title="Success">Operation completed successfully</Alert>
                <Alert variant="warning">Warning message without title</Alert>
                <Alert variant="error" title="Error" closable onClose={() => {}}>
                  Something went wrong
                </Alert>
              </div>
            </FormGroup>
          </div>
        </Card>
      </Grid>

      {/* Empty State Toggle */}
      <div className="mt-8">
        <Card title="State Components" description="Loading states and empty content">
          <div className="space-y-6">
            <Flex gap="md">
              <Button 
                variant="outline" 
                onClick={() => setShowEmptyState(!showEmptyState)}
              >
                Toggle Empty State
              </Button>
            </Flex>

            {showEmptyState && (
              <EmptyState
                title="No items found"
                description="There are no items to display. Try adding some content or adjusting your filters."
                variant="search"
                action={{
                  label: "Add New Item",
                  onClick: () => {
                    setShowEmptyState(false);
                    console.log("Add new item clicked");
                  }
                }}
              />
            )}
          </div>
        </Card>
      </div>

      {/* Layout Examples */}
      <div className="mt-8">
        <Card title="Layout Examples" description="Grid and flex layouts">
          <div className="space-y-6">
            <FormGroup title="Grid Layout">
              <Grid cols={4} gap="md" responsive={{ sm: 1, md: 2, lg: 4 }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-blue-100 p-4 rounded text-center">
                    Grid Item {i}
                  </div>
                ))}
              </Grid>
            </FormGroup>

            <FormGroup title="Flex Layout">
              <Flex justify="between" align="center" className="bg-gray-100 p-4 rounded">
                <Typography variant="body1">Left Content</Typography>
                <Button variant="primary" size="sm">Action</Button>
              </Flex>
            </FormGroup>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Typography variant="body2" color="muted" align="center">
          Universal Components Demo - Built with React and Tailwind CSS
        </Typography>
      </div>
    </Container>
  );
};

export default UniversalComponentsDemo;