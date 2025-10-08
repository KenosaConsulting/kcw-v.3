import { DetailedCaseStudy } from '../types';

export const CAPTUREGPT_DETAILED: DetailedCaseStudy = {
  id: 'capturegpt',
  title: 'CaptureGPT: From 72-Hour Demo to Production',
  category: 'Technology Scouting',
  imageUrl: 'https://picsum.photos/seed/capturegpt/800/600',
  challenge: 'A rapidly scaling government contracting intelligence firm approached Kenosa Consulting with an ambitious request: build a sophisticated demonstration of AI-powered opportunity matching that could process contractor capability statements and intelligently match them against a database of federal opportunities. The catch? They needed it in 72 hours for a critical board presentation.',
  solution: 'Kenosa architected a modern, scalable solution leveraging React 18 with TypeScript, Node.js + Express, and Google Gemini AI. We built an intelligent data ingestion pipeline processing multiple heterogeneous data sources, implemented AI-powered capability extraction with 95%+ accuracy, and created a three-tier matching algorithm with thematic synthesis.',
  results: [
    'Board approval secured with immediate funding',
    'Moved to production within 1 week with full dev team assigned',
    'Reduced opportunity analysis time from 10 hours to 2 minutes',
    '5x increase in relevant opportunities identified',
    'Projected 30% improvement in proposal success rate',
    '200% return on investment within 6 months'
  ],
  client: 'High-growth Government Contracting Intelligence Startup',
  tags: ['AI/ML', 'Rapid Prototyping', 'Federal Contracting', 'React', 'Node.js', 'TypeScript', 'Google Gemini AI'],
  
  // Extended details
  timeline: {
    duration: '72 hours',
    breakdown: [
      {
        phase: 'Day 1: Architecture & Data Pipeline',
        activities: [
          'Morning: Technology stack selection and environment setup',
          'Afternoon: Data ingestion pipeline development',
          'Evening: Processing 21,000+ opportunities from 15 sources'
        ]
      },
      {
        phase: 'Day 2: AI Integration & Core Matching',
        activities: [
          'Morning: Gemini AI integration for PDF processing',
          'Afternoon: Matching algorithm development',
          'Evening: Thematic grouping and scoring logic'
        ]
      },
      {
        phase: 'Day 3: UI/UX & Polish',
        activities: [
          'Morning: React component architecture',
          'Afternoon: Dashboard analytics and visualizations',
          'Evening: Error handling, testing, and demo preparation'
        ]
      }
    ]
  },
  
  technicalStack: {
    frontend: [
      'React 18 with TypeScript for type-safe development',
      'Vite for lightning-fast development cycles',
      'Tailwind CSS for rapid, professional UI development',
      'PDF.js for client-side document processing'
    ],
    backend: [
      'Node.js + Express for API services',
      'Google Gemini AI (2.5 Flash) for document intelligence',
      'Custom data ingestion pipeline',
      'In-memory data processing for sub-second responses'
    ],
    keyDecisions: [
      'Copy-paste modularity: Following client preferences for maximum reusability',
      'Progressive enhancement: Core functionality with graceful AI service handling',
      'Smart caching: Pre-processed master data file eliminates redundant processing'
    ]
  },
  
  features: [
    {
      title: 'Market Intelligence Dashboard',
      description: 'Real-time analysis and visualization of federal opportunities',
      metrics: [
        '21,000+ opportunities analyzed',
        'Agency distribution visualization',
        'NAICS code analytics',
        'Data quality metrics',
        'Filterable by agency selection'
      ]
    },
    {
      title: 'PDF Processing Pipeline',
      description: 'Advanced document processing with AI-powered extraction',
      metrics: [
        'Drag-and-drop capability statement upload',
        'Multi-page document support',
        'Visual + text extraction',
        'Editable extracted data for verification'
      ]
    },
    {
      title: 'Intelligent Matching Engine',
      description: 'Three-tier matching algorithm for opportunity identification',
      metrics: [
        '25 best-fit opportunities identification',
        'A/B/C/D tier classification',
        'Detailed match reasoning',
        'Strength/weakness analysis'
      ]
    },
    {
      title: 'Strategic Thematic Pipeline',
      description: 'AI-generated insights for business development',
      metrics: [
        'AI-generated strategic themes',
        'Executive summaries for each theme',
        'Win theme positioning',
        'Value aggregation ($X-YM per theme)'
      ]
    }
  ],
  
  performanceMetrics: [
    {
      category: 'Data Processing',
      metrics: [
        { label: 'Opportunities loaded', value: '< 2 seconds for 21,000+ records' },
        { label: 'PDF processing', value: '5-10 seconds per document' },
        { label: 'Matching analysis', value: '8-15 seconds for 25 opportunities' }
      ]
    },
    {
      category: 'Quality Metrics',
      metrics: [
        { label: 'Data completeness', value: '85% across all fields' },
        { label: 'Agency normalization', value: '92% accuracy' },
        { label: 'NAICS extraction', value: '95% accuracy' },
        { label: 'Value parsing', value: '88% success rate' }
      ]
    },
    {
      category: 'Scalability',
      metrics: [
        { label: 'Concurrent users', value: '100+' },
        { label: 'File size support', value: 'Up to 25MB' },
        { label: 'Opportunity records', value: '50,000+' }
      ]
    }
  ],
  
  businessImpact: {
    immediate: [
      'Board Approval: Demo secured immediate funding approval',
      'Production Deployment: Moved to production within 1 week',
      'Team Expansion: Full development team assigned',
      'Market Differentiator: First-to-market with AI-powered thematic grouping'
    ],
    strategic: [
      { label: 'Time Savings', value: '10 hours → 2 minutes for analysis' },
      { label: 'Coverage', value: '5x increase in opportunities identified' },
      { label: 'Win Rate', value: '30% projected improvement' },
      { label: 'ROI', value: '200% within 6 months' }
    ]
  },
  
  testimonial: "Kenosa Consulting didn't just meet our deadline - they exceeded our vision. What started as a demo became our flagship product feature."
};

// Export a map for easy lookup
export const DETAILED_CASE_STUDIES: Record<string, DetailedCaseStudy> = {
  capturegpt: CAPTUREGPT_DETAILED
};
