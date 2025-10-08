import React from 'react';
import { ContactForm } from '../components/ContactForm';

const IntakePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            AI-Powered Consulting Intake
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's understand your unique challenges and create a tailored solution. 
            Our intelligent intake process ensures we capture everything needed to deliver exceptional results.
          </p>
        </div>
        
        <ContactForm />
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            This form uses AI to analyze your responses and provide immediate insights.
            Your session is automatically saved, so you can return anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntakePage;