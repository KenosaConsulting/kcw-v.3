# Contact Form Email Setup Guide

## Current Status
✅ Frontend contact form is ready and fully functional
⏳ Backend email integration needs to be configured

## Quick Start Options

### Option 1: EmailJS (Easiest - No Backend Required)
**Time to setup: 10 minutes**

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Add your email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
4. Get your credentials (Service ID, Template ID, Public Key)
5. Install EmailJS: `npm install @emailjs/browser`
6. Update the ContactForm.tsx file:

```typescript
import emailjs from '@emailjs/browser';

// Replace the TODO section in handleSubmit with:
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || '',
    phone: formData.phone || '',
    subject: formData.subject,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'
);
```

### Option 2: Vercel Serverless Function
**Time to setup: 20 minutes**

1. Create `/api/contact.js` in your project root
2. Copy the Vercel function code from `services/emailService.template.ts`
3. Set up environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `INBOX_EMAIL`
4. Deploy to Vercel

### Option 3: Express Backend
**Time to setup: 30 minutes**

1. Set up a Node.js server with the code from `services/emailService.template.ts`
2. Configure your email credentials
3. Deploy to your preferred hosting service
4. Update the API endpoint in ContactForm.tsx

## Email Service Setup

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an app-specific password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use this password in your configuration

### Other Email Providers
- **SendGrid**: Professional email delivery service
- **Mailgun**: Developer-friendly email API
- **Resend**: Modern email API with great DX
- **AWS SES**: Cost-effective for high volume

## Testing Your Form

1. Fill out the form with test data
2. Check browser console for any errors
3. Verify email arrives in your inbox
4. Test form validation by leaving fields empty

## Environment Variables

Create a `.env` file in your project root:

```env
# For backend solutions
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
INBOX_EMAIL=where-to-receive@example.com

# For EmailJS
REACT_APP_EMAILJS_SERVICE_ID=service_xxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxx
```

## Need Help?

The form is currently set up to:
- ✅ Validate all inputs
- ✅ Show loading states
- ✅ Display success/error messages
- ✅ Clear form after submission
- ⏳ Send emails (requires one of the above integrations)

Choose the option that best fits your deployment setup. EmailJS is recommended for quick setup without backend infrastructure.
