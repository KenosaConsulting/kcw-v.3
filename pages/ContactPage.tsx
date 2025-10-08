import React from 'react';
import { ContactForm } from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Let's start a conversation.
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactPage;