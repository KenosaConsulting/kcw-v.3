// Service layer for AI-powered intake analysis using Google Gemini

import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
  IntakeFormData, 
  IntakeAnalysis, 
  ConsultingCategory,
  ProjectUrgency,
  BudgetRange 
} from '../types/intake.types';

// Initialize Gemini AI (API key should be in environment variables)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// AI Analysis Service using Gemini
export async function analyzeIntakeData(
  data: Partial<IntakeFormData>
): Promise<IntakeAnalysis> {
  try {
    // If API key is not configured, fall back to local analysis
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      console.warn('Gemini API key not configured, using local analysis');
      return performLocalAnalysis(data);
    }

    const prompt = `
      You are an expert consulting analyst. Analyze this consulting intake data and provide a comprehensive assessment.
      
      Intake Data:
      ${JSON.stringify(data, null, 2)}
      
      Provide your analysis with the following structure:
      1. Completeness Score (0-100): How complete is this intake?
      2. Missing Critical Information: List any critical missing information
      3. Suggested Follow-up Questions: What additional questions should be asked?
      4. Risk Factors: Identify risks with severity (low/medium/high) and mitigation strategies
      5. Estimated Project Duration: Provide a realistic estimate
      6. Recommended Team Size: How many consultants are needed?
      7. Complexity Score (1-10): How complex is this engagement?
      
      Focus on:
      - Identifying gaps and risks
      - Providing actionable suggestions
      - Being realistic about timelines and resources
      
      Format your response as a structured analysis.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse Gemini's response into our structure
    return parseGeminiResponse(text, data);
  } catch (error) {
    console.error('Gemini AI analysis error:', error);
    // Fallback to local analysis if AI fails
    return performLocalAnalysis(data);
  }
}

// Parse Gemini's text response into structured data
function parseGeminiResponse(text: string, data: Partial<IntakeFormData>): IntakeAnalysis {
  // Extract completeness score
  const completenessMatch = text.match(/completeness\s*score[:\s]*(\d+)/i);
  const completenessScore = completenessMatch ? parseInt(completenessMatch[1]) : calculateCompleteness(data);

  // Extract missing info
  const missingInfoSection = text.match(/missing\s*critical\s*information[:\s]*([\s\S]*?)(?=suggested|risk|$)/i);
  const missingCriticalInfo = missingInfoSection 
    ? extractBulletPoints(missingInfoSection[1])
    : identifyMissingInfo(data);

  // Extract follow-up questions
  const followUpSection = text.match(/follow-?up\s*questions?[:\s]*([\s\S]*?)(?=risk|estimated|$)/i);
  const suggestedFollowUps = followUpSection
    ? extractBulletPoints(followUpSection[1])
    : generateFollowUpQuestions(data);

  // Extract risk factors
  const riskSection = text.match(/risk\s*factors?[:\s]*([\s\S]*?)(?=estimated|recommended|$)/i);
  const riskFactors = riskSection
    ? parseRiskFactors(riskSection[1])
    : assessRisks(data);

  // Extract duration
  const durationMatch = text.match(/duration[:\s]*([^.\n]+)/i);
  const estimatedDuration = durationMatch ? durationMatch[1].trim() : '3-6 months';

  // Extract team size
  const teamSizeMatch = text.match(/team\s*size[:\s]*([^.\n]+)/i);
  const recommendedTeamSize = teamSizeMatch ? teamSizeMatch[1].trim() : '3-5 consultants';

  // Extract complexity
  const complexityMatch = text.match(/complexity\s*score[:\s]*(\d+)/i);
  const complexityScore = complexityMatch ? parseInt(complexityMatch[1]) : 5;

  return {
    completenessScore,
    missingCriticalInfo,
    suggestedFollowUps,
    riskFactors,
    estimatedDuration,
    recommendedTeamSize,
    complexityScore
  };
}

// Extract bullet points from text
function extractBulletPoints(text: string): string[] {
  const lines = text.split('\n');
  const points: string[] = [];
  
  lines.forEach(line => {
    const cleaned = line.replace(/^[-•*]\s*/, '').trim();
    if (cleaned && cleaned.length > 5) {
      points.push(cleaned);
    }
  });
  
  return points.slice(0, 5); // Limit to 5 points
}

// Parse risk factors from text
function parseRiskFactors(text: string): IntakeAnalysis['riskFactors'] {
  const risks: IntakeAnalysis['riskFactors'] = [];
  const lines = text.split('\n');
  
  lines.forEach(line => {
    if (line.trim()) {
      let severity: 'low' | 'medium' | 'high' = 'medium';
      
      if (line.toLowerCase().includes('high')) severity = 'high';
      else if (line.toLowerCase().includes('low')) severity = 'low';
      
      const cleanedLine = line.replace(/^[-•*]\s*/, '').trim();
      if (cleanedLine) {
        risks.push({
          type: cleanedLine.split(':')[0] || 'General Risk',
          severity,
          mitigation: cleanedLine.split(':')[1] || 'Requires further assessment'
        });
      }
    }
  });
  
  return risks.slice(0, 5);
}

// Local analysis fallback (no AI)
function performLocalAnalysis(data: Partial<IntakeFormData>): IntakeAnalysis {
  return {
    completenessScore: calculateCompleteness(data),
    missingCriticalInfo: identifyMissingInfo(data),
    suggestedFollowUps: generateFollowUpQuestions(data),
    riskFactors: assessRisks(data),
    estimatedDuration: estimateProjectDuration(data),
    recommendedTeamSize: estimateTeamSize(data),
    complexityScore: calculateComplexity(data)
  };
}

// Calculate how complete the intake form is
function calculateCompleteness(data: Partial<IntakeFormData>): number {
  const requiredFields: (keyof IntakeFormData)[] = [
    'company', 'industry', 'companySize',
    'consultingCategory', 'problemDescription', 'businessImpact',
    'primaryObjectives', 'successMetrics', 'budget',
    'scopeIncluded', 'name', 'email'
  ];

  let filledFields = 0;
  requiredFields.forEach(field => {
    if (data[field] && data[field]!.toString().trim() !== '') {
      filledFields++;
    }
  });

  return Math.round((filledFields / requiredFields.length) * 100);
}

// Identify missing critical information
function identifyMissingInfo(data: Partial<IntakeFormData>): string[] {
  const missing: string[] = [];

  if (!data.businessImpact?.includes('$') && !data.businessImpact?.includes('%')) {
    missing.push('Quantified business impact (financial metrics)');
  }

  if (!data.successMetrics) {
    missing.push('Specific success metrics and KPIs');
  }

  if (data.budget === BudgetRange.NOT_DEFINED) {
    missing.push('Budget range needs to be defined');
  }

  if (!data.timeline) {
    missing.push('Timeline and critical deadlines');
  }

  if (!data.decisionMaker) {
    missing.push('Primary decision maker identification');
  }

  return missing;
}

// Generate intelligent follow-up questions
function generateFollowUpQuestions(data: Partial<IntakeFormData>): string[] {
  const questions: string[] = [];

  if (data.urgency === ProjectUrgency.IMMEDIATE) {
    questions.push('What specific event or deadline is driving the urgency?');
    questions.push('What interim measures are currently in place?');
  }

  if (data.consultingCategory === ConsultingCategory.TECHNOLOGY) {
    questions.push('What is your current technology stack?');
    questions.push('Do you have internal IT resources available?');
  }

  if (data.consultingCategory === ConsultingCategory.STRATEGY) {
    questions.push('Who are your main competitors?');
    questions.push('What market trends are affecting your business?');
  }

  if (!data.keyStakeholders) {
    questions.push('Who else needs to be involved in this project?');
  }

  questions.push('What solutions have you already tried?');

  return questions.slice(0, 5);
}

// Assess project risks
function assessRisks(data: Partial<IntakeFormData>): IntakeAnalysis['riskFactors'] {
  const risks: IntakeAnalysis['riskFactors'] = [];

  // Timeline risks
  if (data.urgency === ProjectUrgency.IMMEDIATE) {
    risks.push({
      type: 'Timeline Risk',
      severity: 'high',
      mitigation: 'Consider phased approach with quick wins'
    });
  }

  // Budget risks
  if (data.budget === BudgetRange.NOT_DEFINED) {
    risks.push({
      type: 'Budget Uncertainty',
      severity: 'medium',
      mitigation: 'Define budget range early to align expectations'
    });
  }

  // Scope risks
  if (!data.scopeExcluded) {
    risks.push({
      type: 'Scope Creep Risk',
      severity: 'medium',
      mitigation: 'Clearly define out-of-scope items'
    });
  }

  // Stakeholder risks
  if (!data.keyStakeholders) {
    risks.push({
      type: 'Stakeholder Alignment',
      severity: 'medium',
      mitigation: 'Identify and engage all stakeholders early'
    });
  }

  // Category-specific risks
  if (data.consultingCategory === ConsultingCategory.TECHNOLOGY) {
    risks.push({
      type: 'Technical Complexity',
      severity: 'medium',
      mitigation: 'Conduct technical assessment early'
    });
  }

  return risks;
}

// Estimate project duration
function estimateProjectDuration(data: Partial<IntakeFormData>): string {
  if (data.urgency === ProjectUrgency.IMMEDIATE) {
    return '4-8 weeks';
  }
  
  if (data.consultingCategory === ConsultingCategory.STRATEGY) {
    return '3-6 months';
  }
  
  if (data.consultingCategory === ConsultingCategory.TECHNOLOGY) {
    return '6-12 months';
  }
  
  return '3-6 months';
}

// Estimate team size
function estimateTeamSize(data: Partial<IntakeFormData>): string {
  const size = data.companySize || '';
  
  if (size.includes('5000')) {
    return '5-8 consultants';
  }
  
  if (size.includes('1000')) {
    return '3-5 consultants';
  }
  
  return '2-4 consultants';
}

// Calculate project complexity
function calculateComplexity(data: Partial<IntakeFormData>): number {
  let complexity = 5;
  
  if (data.urgency === ProjectUrgency.IMMEDIATE) complexity += 2;
  if (data.consultingCategory === ConsultingCategory.TECHNOLOGY) complexity += 1;
  if (data.companySize?.includes('5000')) complexity += 1;
  if (!data.budget || data.budget === BudgetRange.NOT_DEFINED) complexity += 1;
  
  return Math.min(10, complexity);
}

// Generate Statement of Work
export async function generateSOW(
  data: IntakeFormData,
  analysis: IntakeAnalysis
): Promise<string> {
  const sow = `
# STATEMENT OF WORK

## 1. ORGANIZATION & PROJECT DETAILS

**Client Organization:** ${data.company}
**Industry:** ${data.industry}
**Project Category:** ${formatCategory(data.consultingCategory)}
**Date:** ${new Date().toLocaleDateString()}

## 2. PROJECT PURPOSE & OBJECTIVES

### Business Challenge
${data.problemDescription}

### Business Impact
${data.businessImpact}

### Primary Objectives
${data.primaryObjectives}

### Success Criteria
${data.successMetrics}

## 3. SCOPE OF WORK

### Included in Scope
${data.scopeIncluded}

### Excluded from Scope
${data.scopeExcluded || 'To be determined'}

## 4. PROJECT APPROACH

Based on the analysis, we recommend a phased approach:
- Phase 1: Discovery & Assessment (2-3 weeks)
- Phase 2: Solution Design (3-4 weeks)
- Phase 3: Implementation Planning (2-3 weeks)
- Phase 4: Knowledge Transfer (1-2 weeks)

## 5. PROJECT TIMELINE

**Estimated Duration:** ${analysis.estimatedDuration}
**Key Milestones:**
- Week 1: Project kickoff and stakeholder alignment
- Week 2-3: Current state assessment
- Week 4-6: Solution development
- Week 7-8: Implementation roadmap
- Final Week: Presentation and handover

## 6. PROJECT TEAM

**Recommended Team Size:** ${analysis.recommendedTeamSize}
**Team Composition:**
- 1 Engagement Lead
- 2-3 Senior Consultants
- 1-2 Analysts

## 7. INVESTMENT

**Budget Range:** ${formatBudget(data.budget)}
**Pricing Structure:** To be determined based on final scope

## 8. TERMS & CONDITIONS

This Statement of Work is subject to the terms and conditions of the Master Service Agreement.

## 9. AUTHORIZATION

**Client Representative:**
Name: ${data.name}
Title: ${data.title}
Email: ${data.email}

---
*This SOW was generated based on AI-powered intake analysis with ${analysis.completenessScore}% completeness score.*
`;

  return sow;
}

// Helper functions
function formatCategory(category: ConsultingCategory): string {
  return category.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function formatBudget(budget: BudgetRange): string {
  const budgetMap = {
    [BudgetRange.UNDER_50K]: 'Under $50,000',
    [BudgetRange.FIFTY_TO_100K]: '$50,000 - $100,000',
    [BudgetRange.HUNDRED_TO_250K]: '$100,000 - $250,000',
    [BudgetRange.QUARTER_TO_HALF_M]: '$250,000 - $500,000',
    [BudgetRange.HALF_TO_1M]: '$500,000 - $1,000,000',
    [BudgetRange.OVER_1M]: 'Over $1,000,000',
    [BudgetRange.NOT_DEFINED]: 'To be determined'
  };
  return budgetMap[budget];
}

// Save session to localStorage
export function saveSession(sessionId: string, data: Partial<IntakeFormData>, currentStep: number) {
  const session = {
    sessionId,
    formData: data,
    currentStep,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(`intake-session-${sessionId}`, JSON.stringify(session));
}

// Load session from localStorage
export function loadSession(sessionId: string) {
  const saved = localStorage.getItem(`intake-session-${sessionId}`);
  return saved ? JSON.parse(saved) : null;
}

export default {
  analyzeIntakeData,
  generateSOW,
  saveSession,
  loadSession
};