// Core type definitions for the AI-powered consulting intake system

export enum ConsultingCategory {
  STRATEGY = 'strategy',
  OPERATIONS = 'operations',
  TECHNOLOGY = 'technology',
  COMPLIANCE_RISK = 'compliance_risk',
  FINANCIAL = 'financial',
  PEOPLE_CHANGE = 'people_change'
}

export enum ProjectUrgency {
  IMMEDIATE = 'immediate',
  QUARTER = 'this_quarter',
  HALF_YEAR = 'six_months',
  YEAR = 'one_year',
  EXPLORATORY = 'exploratory'
}

export enum BudgetRange {
  UNDER_50K = 'under_50k',
  FIFTY_TO_100K = '50k_100k',
  HUNDRED_TO_250K = '100k_250k',
  QUARTER_TO_HALF_M = '250k_500k',
  HALF_TO_1M = '500k_1m',
  OVER_1M = 'over_1m',
  NOT_DEFINED = 'not_defined'
}

export interface IntakeFormData {
  // Organization
  company: string;
  industry: string;
  companySize: string;
  
  // Problem Definition
  consultingCategory: ConsultingCategory;
  problemDescription: string;
  businessImpact: string;
  urgency: ProjectUrgency;
  
  // Objectives
  primaryObjectives: string;
  successMetrics: string;
  budget: BudgetRange;
  
  // Scope
  scopeIncluded: string;
  scopeExcluded: string;
  timeline: string;
  
  // Stakeholders
  decisionMaker: string;
  decisionMakerTitle: string;
  keyStakeholders: string;
  
  // Contact
  name: string;
  title: string;
  email: string;
  phone: string;
}

export interface IntakeStep {
  id: string;
  title: string;
  description: string;
  fields: IntakeField[];
}

export interface IntakeField {
  name: keyof IntakeFormData;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect';
  required: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  aiHint?: string;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  };
}

export interface IntakeAnalysis {
  completenessScore: number;
  missingCriticalInfo: string[];
  suggestedFollowUps: string[];
  riskFactors: Array<{
    type: string;
    severity: 'low' | 'medium' | 'high';
    mitigation: string;
  }>;
  estimatedDuration: string;
  recommendedTeamSize: string;
  complexityScore: number;
}

export interface IntakeSession {
  sessionId: string;
  formData: Partial<IntakeFormData>;
  currentStep: number;
  completedSteps: string[];
  analysis?: IntakeAnalysis;
  createdAt: Date;
  updatedAt: Date;
}