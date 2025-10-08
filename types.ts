import { SVGProps } from 'react';

// FIX: Added full content for types.ts
export type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description?: string;
  sampleAvailable?: boolean;
}

export interface Service {
  id: string;
  title: string;
  heroMessaging: string;
  expandedDescription: string;
  icon: IconComponent;
  features: ServiceFeature[];
  deliverables: ServiceDeliverable[];
  caseStudyIntegration: string;
  proofMetrics: string[];
  signatureVisual?: string;
  crossSellServices?: string[];
}

export type CaseStudyCategory = 'Market Intelligence' | 'Competitive Analysis' | 'Go-to-Market Strategy' | 'Technology Scouting';

export interface CaseStudy {
  id: string;
  title: string;
  category: CaseStudyCategory;
  imageUrl: string;
  challenge: string;
  solution: string;
  results: string[];
  client: string;
  tags: string[];
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  isFeatured: boolean;
}

export interface DetailedCaseStudy extends CaseStudy {
  timeline?: {
    duration: string;
    breakdown?: {
      phase: string;
      activities: string[];
    }[];
  };
  technicalStack?: {
    frontend?: string[];
    backend?: string[];
    keyDecisions?: string[];
  };
  features?: {
    title: string;
    description: string;
    metrics?: string[];
  }[];
  performanceMetrics?: {
    category: string;
    metrics: { label: string; value: string }[];
  }[];
  businessImpact?: {
    immediate: string[];
    strategic: { label: string; value: string }[];
  };
  testimonial?: string;
}