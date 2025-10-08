import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { AlertCircleIcon, CheckCircleIcon } from './icons';
import { cn } from '../lib/utils';
import { useToast } from '../hooks/useToast';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// 🔧 CONFIGURE YOUR EMAILJS CREDENTIALS HERE
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_s659no4',      // ✅ Service ID configured
  TEMPLATE_ID: 'template_v7l3k2o',    // ✅ Template ID configured
  PUBLIC_KEY: 'azd2TlZ8v0hd-E_A8'     // ✅ Public Key configured
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, check format)
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field changes
  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please check all required fields',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      // Show success message
      setSubmitSuccess(true);
      toast({
        title: 'Message Sent!',
        description: 'We\'ll get back to you within 24 hours.',
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Hide success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      console.error('Email submission error:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again or email us directly at nkalosakenyon@kenosaconsulting.com',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="executive-card p-12 text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <CheckCircleIcon className="h-20 w-20 text-executive-gold mx-auto" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-executive-navy mb-4">Thank You!</h3>
        <p className="text-lg text-slate-600 mb-8">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <button
          className="executive-button-outline"
          onClick={() => setSubmitSuccess(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="executive-card p-10 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-executive-navy mb-2 uppercase tracking-wider">
              Name <span className="text-executive-gold">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="John Doe"
              className={cn(
                "executive-input w-full",
                errors.name && 'border-destructive focus:border-destructive'
              )}
              disabled={isSubmitting}
            />
            {errors.name && (
              <div className="flex items-center mt-2 text-destructive text-sm">
                <AlertCircleIcon className="h-4 w-4 mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-executive-navy mb-2 uppercase tracking-wider">
              Email <span className="text-executive-gold">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="john@example.com"
              className={cn(
                "executive-input w-full",
                errors.email && 'border-destructive focus:border-destructive'
              )}
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className="flex items-center mt-2 text-destructive text-sm">
                <AlertCircleIcon className="h-4 w-4 mr-1" />
                {errors.email}
              </div>
            )}
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Company Field (Optional) */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-executive-navy mb-2 uppercase tracking-wider">
              Company <span className="text-slate-500 text-xs normal-case">(Optional)</span>
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Acme Corp"
              className="executive-input w-full"
              disabled={isSubmitting}
            />
          </div>

          {/* Phone Field (Optional) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-executive-navy mb-2 uppercase tracking-wider">
              Phone <span className="text-slate-500 text-xs normal-case">(Optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
              className={cn(
                "executive-input w-full",
                errors.phone && 'border-destructive focus:border-destructive'
              )}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <div className="flex items-center mt-2 text-destructive text-sm">
                <AlertCircleIcon className="h-4 w-4 mr-1" />
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-executive-navy mb-2 uppercase tracking-wider">
            Subject <span className="text-executive-gold">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder="How can we help you?"
            className={cn(
              "executive-input w-full",
              errors.subject && 'border-destructive focus:border-destructive'
            )}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <div className="flex items-center mt-2 text-destructive text-sm">
              <AlertCircleIcon className="h-4 w-4 mr-1" />
              {errors.subject}
            </div>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-executive-navy mb-2 uppercase tracking-wider">
            Message <span className="text-executive-gold">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us about your project or inquiry..."
            rows={6}
            className={cn(
              "executive-input w-full min-h-[180px] resize-y",
              errors.message && 'border-destructive focus:border-destructive'
            )}
            disabled={isSubmitting}
          />
          {errors.message && (
            <div className="flex items-center mt-2 text-destructive text-sm">
              <AlertCircleIcon className="h-4 w-4 mr-1" />
              {errors.message}
            </div>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="p-4 bg-gradient-to-br from-pearl-white to-subtle-cream rounded border border-executive-navy/5">
          <p className="text-sm text-slate-600 flex items-start">
            <svg className="h-5 w-5 text-executive-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>
              We respect your privacy. Your information will only be used to respond to your inquiry 
              and will never be shared with third parties.
            </span>
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="executive-button-gold px-12 py-4 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block animate-spin mr-2">⟳</span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};