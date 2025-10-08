// Backend API endpoint template for contact form email integration
// This file shows how to set up the backend to send emails to your inbox

// Option 1: Using Node.js with Express and Nodemailer
// =====================================================
/*
// Install required packages:
// npm install express nodemailer cors body-parser

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure your email transporter
const transporter = nodemailer.createTransport({
  // Option A: Using Gmail
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Use app-specific password for Gmail
  }
  
  // Option B: Using custom SMTP
  // host: 'smtp.example.com',
  // port: 587,
  // secure: false,
  // auth: {
  //   user: 'your-email@example.com',
  //   pass: 'your-password'
  // }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, company, phone, subject, message } = req.body;
  
  // Email template
  const mailOptions = {
    from: email,
    to: 'your-inbox@example.com', // Your inbox email
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
*/

// Option 2: Using Vercel Serverless Functions
// ============================================
/*
// Create this file at: api/contact.js in your Vercel project
// Install: npm install nodemailer

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { name, email, company, phone, subject, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  const mailOptions = {
    from: email,
    to: process.env.INBOX_EMAIL,
    subject: `Contact Form: ${subject}`,
    html: `...` // Same template as above
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
*/

// Option 3: Using EmailJS (No Backend Required)
// ==============================================
/*
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service and template
// 3. Get your service ID, template ID, and public key
// 4. Install: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

// In your React component:
const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    console.log('Email sent:', result.text);
  } catch (error) {
    console.error('Email error:', error);
  }
};
*/

// Option 4: Using Resend (Modern Email API)
// ==========================================
/*
// 1. Sign up at https://resend.com/
// 2. Get your API key
// 3. Install: npm install resend

import { Resend } from 'resend';

const resend = new Resend('re_YOUR_API_KEY');

export default async function handler(req, res) {
  const { name, email, company, phone, subject, message } = req.body;
  
  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['your-inbox@example.com'],
      subject: `Contact Form: ${subject}`,
      html: `...` // Your HTML template
    });
    
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
*/

// Frontend Integration
// ====================
// Update the ContactForm.tsx handleSubmit function:
/*
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) return;
  
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    const result = await response.json();
    // Handle success
  } catch (error) {
    // Handle error
  } finally {
    setIsSubmitting(false);
  }
};
*/

// Environment Variables (.env)
// ============================
/*
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
INBOX_EMAIL=where-to-send@example.com

# For EmailJS
REACT_APP_EMAILJS_SERVICE_ID=service_xxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxx

# For Resend
RESEND_API_KEY=re_xxx
*/

export {}; // Keep TypeScript happy