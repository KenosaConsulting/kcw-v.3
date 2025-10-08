// Configuration for the AI-powered intake system

import { 
  IntakeStep, 
  ConsultingCategory,
  ProjectUrgency,
  BudgetRange 
} from '../types/intake.types';

// Main intake flow steps
export const intakeSteps: IntakeStep[] = [
  {
    id: 'organization',
    title: 'Organization Profile',
    description: 'Tell us about your organization',
    fields: [
      {
        name: 'company',
        label: 'Company Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your company name',
        validation: { minLength: 2, maxLength: 100 }
      },
      {
        name: 'industry',
        label: 'Industry',
        type: 'select',
        required: true,
        options: [
          { value: 'technology', label: 'Technology' },
          { value: 'financial', label: 'Financial Services' },
          { value: 'healthcare', label: 'Healthcare' },
          { value: 'manufacturing', label: 'Manufacturing' },
          { value: 'retail', label: 'Retail' },
          { value: 'energy', label: 'Energy' },
          { value: 'government', label: 'Government' },
          { value: 'education', label: 'Education' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'companySize',
        label: 'Company Size',
        type: 'select',
        required: true,
        options: [
          { value: '<50', label: 'Less than 50 employees' },
          { value: '50-250', label: '50-250 employees' },
          { value: '251-1000', label: '251-1,000 employees' },
          { value: '1000-5000', label: '1,001-5,000 employees' },
          { value: '5000+', label: 'More than 5,000 employees' }
        ]
      }
    ]
  },
  {
    id: 'problem',
    title: 'Problem Identification',
    description: 'Help us understand your challenges',
    fields: [
      {
        name: 'consultingCategory',
        label: 'What type of consulting do you need?',
        type: 'select',
        required: true,
        options: [
          { value: ConsultingCategory.STRATEGY, label: 'Strategy & Growth' },
          { value: ConsultingCategory.OPERATIONS, label: 'Operations & Efficiency' },
          { value: ConsultingCategory.TECHNOLOGY, label: 'Technology & Digital Transformation' },
          { value: ConsultingCategory.COMPLIANCE_RISK, label: 'Compliance & Risk Management' },
          { value: ConsultingCategory.FINANCIAL, label: 'Financial Advisory' },
          { value: ConsultingCategory.PEOPLE_CHANGE, label: 'People & Change Management' }
        ],
        aiHint: 'This determines the entire question flow'
      },
      {
        name: 'problemDescription',
        label: 'Describe your primary challenge',
        type: 'textarea',
        required: true,
        placeholder: 'Be specific about the problems you\'re facing...',
        aiHint: 'Include symptoms, duration, and what triggered this need',
        validation: { minLength: 50, maxLength: 2000 }
      },
      {
        name: 'businessImpact',
        label: 'What is the business impact?',
        type: 'textarea',
        required: true,
        placeholder: 'Financial impact, operational delays, strategic risks...',
        aiHint: 'Quantify if possible (%, $, time)',
        validation: { minLength: 30, maxLength: 1000 }
      },
      {
        name: 'urgency',
        label: 'How urgent is this?',
        type: 'select',
        required: true,
        options: [
          { value: ProjectUrgency.IMMEDIATE, label: 'Immediate (Crisis)' },
          { value: ProjectUrgency.QUARTER, label: 'This Quarter' },
          { value: ProjectUrgency.HALF_YEAR, label: 'Within 6 Months' },
          { value: ProjectUrgency.YEAR, label: 'Within 1 Year' },
          { value: ProjectUrgency.EXPLORATORY, label: 'Exploratory' }
        ]
      }
    ]
  },
  {
    id: 'objectives',
    title: 'Objectives & Success',
    description: 'Define what success looks like',
    fields: [
      {
        name: 'primaryObjectives',
        label: 'What are your top 3 objectives?',
        type: 'textarea',
        required: true,
        placeholder: '1. \n2. \n3. ',
        aiHint: 'List in priority order',
        validation: { minLength: 30, maxLength: 1000 }
      },
      {
        name: 'successMetrics',
        label: 'How will you measure success?',
        type: 'textarea',
        required: true,
        placeholder: 'Specific KPIs, metrics, or outcomes...',
        aiHint: 'Include baseline and target values',
        validation: { minLength: 30, maxLength: 1000 }
      },
      {
        name: 'budget',
        label: 'Budget Range',
        type: 'select',
        required: true,
        options: [
          { value: BudgetRange.UNDER_50K, label: 'Under $50,000' },
          { value: BudgetRange.FIFTY_TO_100K, label: '$50,000 - $100,000' },
          { value: BudgetRange.HUNDRED_TO_250K, label: '$100,000 - $250,000' },
          { value: BudgetRange.QUARTER_TO_HALF_M, label: '$250,000 - $500,000' },
          { value: BudgetRange.HALF_TO_1M, label: '$500,000 - $1,000,000' },
          { value: BudgetRange.OVER_1M, label: 'Over $1,000,000' },
          { value: BudgetRange.NOT_DEFINED, label: 'To Be Determined' }
        ]
      }
    ]
  },
  {
    id: 'scope',
    title: 'Scope & Constraints',
    description: 'Set boundaries for the engagement',
    fields: [
      {
        name: 'scopeIncluded',
        label: 'What should be INCLUDED in scope?',
        type: 'textarea',
        required: true,
        placeholder: 'Departments, processes, systems, geographies...',
        validation: { minLength: 30, maxLength: 1000 }
      },
      {
        name: 'scopeExcluded',
        label: 'What should be EXCLUDED? (Optional)',
        type: 'textarea',
        required: false,
        placeholder: 'What\'s out of bounds for this engagement...',
        validation: { maxLength: 1000 }
      },
      {
        name: 'timeline',
        label: 'Timeline constraints',
        type: 'text',
        required: true,
        placeholder: 'Any critical deadlines or milestones?',
        validation: { maxLength: 500 }
      }
    ]
  },
  {
    id: 'stakeholders',
    title: 'Stakeholder Information',
    description: 'Who are the key people involved?',
    fields: [
      {
        name: 'decisionMaker',
        label: 'Primary Decision Maker',
        type: 'text',
        required: true,
        placeholder: 'Name of the person with final authority'
      },
      {
        name: 'decisionMakerTitle',
        label: 'Decision Maker Title',
        type: 'text',
        required: true,
        placeholder: 'CEO, CFO, VP of...'
      },
      {
        name: 'keyStakeholders',
        label: 'Other Key Stakeholders',
        type: 'textarea',
        required: false,
        placeholder: 'List other important stakeholders and their roles...',
        validation: { maxLength: 1000 }
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact Information',
    description: 'How can we reach you?',
    fields: [
      {
        name: 'name',
        label: 'Your Name',
        type: 'text',
        required: true
      },
      {
        name: 'title',
        label: 'Your Title',
        type: 'text',
        required: true
      },
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        required: true,
        validation: { 
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
      },
      {
        name: 'phone',
        label: 'Phone (Optional)',
        type: 'text',
        required: false
      }
    ]
  }
];