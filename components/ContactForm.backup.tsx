// Enhanced AI-Powered Consulting Intake Form
// This replaces the original ContactForm with full intake capabilities

import React, { useState, useCallback, useEffect } from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { ShieldCheckIcon, SparklesIcon, AlertCircleIcon, ArrowRightIcon, ArrowLeftIcon, FileTextIcon } from './icons';
import { cn } from '../lib/utils';
import { useToast } from '../hooks/useToast';
import { trackEvent } from '../lib/analytics';
import { 
  IntakeFormData, 
  IntakeAnalysis,
  ProjectUrgency,
  BudgetRange,
  ConsultingCategory
} from '../types/intake.types';
import { intakeSteps } from '../config/intakeConfig';
import { 
  analyzeIntakeData, 
  generateSOW, 
  saveSession, 
  loadSession 
} from '../services/intakeService';

export const ContactForm: React.FC = () => {
  const [generatedSOW, setGeneratedSOW] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<IntakeFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<IntakeAnalysis | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [sessionId] = useState(`intake-${Date.now()}`);
  const { toast } = useToast();

  const step = intakeSteps[currentStep];
  const progress = Math.round(((currentStep + 1) / intakeSteps.length) * 100);

  // Load saved session on mount
  useEffect(() => {
    const saved = loadSession(sessionId);
    if (saved && saved.formData) {
      setFormData(saved.formData);
      if (saved.currentStep) {
        setCurrentStep(saved.currentStep);
      }
    }
  }, [sessionId]);

  // Auto-save session
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      saveSession(sessionId, formData, currentStep);
    }
  }, [formData, currentStep, sessionId]);

  const handleFieldChange = useCallback((field: keyof IntakeFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const validateStep = useCallback((): boolean => {
    const stepErrors: Record<string, string> = {};
    
    step.fields.forEach(field => {
      if (field.required && !formData[field.name]?.toString().trim()) {
        stepErrors[field.name] = `${field.label} is required`;
      } else if (field.validation) {
        const value = formData[field.name]?.toString() || '';
        
        if (field.validation.minLength && value.length < field.validation.minLength) {
          stepErrors[field.name] = `Minimum ${field.validation.minLength} characters required`;
        }
        
        if (field.validation.maxLength && value.length > field.validation.maxLength) {
          stepErrors[field.name] = `Maximum ${field.validation.maxLength} characters allowed`;
        }
        
        if (field.validation.pattern && !field.validation.pattern.test(value)) {
          stepErrors[field.name] = `Invalid format`;
        }
      }
    });
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }, [step, formData]);

  const runAnalysis = useCallback(async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeIntakeData(formData);
      setAnalysis(result);
      
      // Show analysis if there are issues
      if (result.completenessScore < 80 || result.missingCriticalInfo.length > 0) {
        setShowAnalysis(true);
      }
      
      trackEvent('Intake', 'analysis_complete', `score_${result.completenessScore}`);
    } catch (error) {
      console.error('Analysis failed:', error);
      toast({
        title: 'Analysis Error',
        description: 'AI analysis failed, but you can continue',
      });
    } finally {
      setIsAnalyzing(false);
    }
  }, [formData, toast]);

  const handleNext = useCallback(async () => {
    if (!validateStep()) {
      toast({
        title: 'Missing Information',
        description: 'Please complete all required fields',
        variant: 'destructive'
      });
      return;
    }

    trackEvent('Intake', 'step_complete', step.id);

    // Run analysis on key steps
    if (['problem', 'objectives'].includes(step.id)) {
      await runAnalysis();
    }

    if (currentStep < intakeSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  }, [currentStep, validateStep, step, runAnalysis, toast]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    trackEvent('Intake', 'form_submit', sessionId);
    
    try {
      // Run final analysis
      const finalAnalysis = await analyzeIntakeData(formData);
      setAnalysis(finalAnalysis);
      
      // Generate SOW if data is complete enough
      let sow = '';
      if (finalAnalysis.completenessScore >= 70) {
        sow = await generateSOW(formData as IntakeFormData, finalAnalysis);
        setGeneratedSOW(sow);
      }
      
      // Here you would normally submit to your backend
      console.log('Submitting intake:', {
        formData,
        analysis: finalAnalysis,
        sow
      });
      
      // Create downloadable SOW
      if (sow) {
        const blob = new Blob([sow], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `SOW-${formData.company || 'draft'}-${new Date().toISOString().split('T')[0]}.md`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      
      toast({
        title: 'Success!',
        description: `Intake submitted with ${finalAnalysis.completenessScore}% completeness. We'll be in touch within 24 hours.`,
      });
      
      // Show final analysis
      setShowAnalysis(true);
      
      // Clear session after successful submission
      localStorage.removeItem(`intake-session-${sessionId}`);
      
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact support',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-background border border-input rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Step {currentStep + 1} of {intakeSteps.length}: {step.title}
          </span>
          <span className="text-sm text-muted-foreground">{progress}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Form Card */}
      <Card className="p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
          <p className="text-muted-foreground">{step.description}</p>
        </div>

        <div className="space-y-6">
          {step.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-2">
                {field.label}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </label>
              
              {field.type === 'textarea' ? (
                <div className="relative">
                  <textarea
                    value={formData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className={cn(inputClasses, 'min-h-[100px] resize-y')}
                  />
                  {field.aiHint && (
                    <div className="absolute top-2 right-2">
                      <SparklesIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ) : field.type === 'select' ? (
                <select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select an option...</option>
                  {field.options?.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.name === 'email' ? 'email' : 'text'}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className={inputClasses}
                />
              )}
              
              {errors[field.name] && (
                <div className="flex items-center mt-1 text-destructive text-sm">
                  <AlertCircleIcon className="h-4 w-4 mr-1" />
                  {errors[field.name]}
                </div>
              )}
              
              {field.aiHint && (
                <p className="mt-1 text-xs text-muted-foreground">{field.aiHint}</p>
              )}
            </div>
          ))}
        </div>

        {/* Security Notice on Contact Step */}
        {step.id === 'contact' && (
          <div className="flex items-start gap-2 p-3 bg-muted rounded-md mt-6">
            <ShieldCheckIcon className="h-5 w-5 text-primary mt-0.5" />
            <div className="text-sm text-muted-foreground">
              Your information is secure and will only be used to discuss your inquiry.
              We never share or sell your data.
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex gap-3">
            {analysis && (
              <Button
                variant="outline"
                onClick={() => setShowAnalysis(!showAnalysis)}
              >
                <SparklesIcon className="h-4 w-4 mr-2" />
                {showAnalysis ? 'Hide' : 'Show'} Analysis
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              disabled={isSubmitting || isAnalyzing}
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 mr-2 inline-block animate-spin">⟳</span>
                  Submitting...
                </>
              ) : isAnalyzing ? (
                <>
                  <span className="h-4 w-4 mr-2 inline-block animate-spin">⟳</span>
                  Analyzing...
                </>
              ) : currentStep === intakeSteps.length - 1 ? (
                'Submit'
              ) : (
                <>
                  Next
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* AI Analysis Panel */}
      {showAnalysis && analysis && (
        <Card className="mt-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <SparklesIcon className="h-5 w-5" />
              AI Analysis
            </h3>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowAnalysis(false)}
            >
              ×
            </Button>
          </div>

          <div className="space-y-4">
            {/* Completeness Score */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Completeness Score</span>
                <span className="text-xl font-bold">{analysis.completenessScore}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    analysis.completenessScore >= 80 ? "bg-green-500" :
                    analysis.completenessScore >= 60 ? "bg-yellow-500" : "bg-red-500"
                  )}
                  style={{ width: `${analysis.completenessScore}%` }}
                />
              </div>
            </div>

            {/* Missing Information */}
            {analysis.missingCriticalInfo?.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-destructive">Missing Information</h4>
                <ul className="space-y-1">
                  {analysis.missingCriticalInfo.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suggestions */}
            {analysis.suggestedFollowUps?.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Suggested Follow-ups</h4>
                <ul className="space-y-1">
                  {analysis.suggestedFollowUps.map((suggestion, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Risks */}
            {analysis.riskFactors?.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Risk Assessment</h4>
                <div className="space-y-2">
                  {analysis.riskFactors.map((risk, i) => (
                    <div key={i} className="text-sm p-2 bg-muted rounded">
                      <div className="flex justify-between items-start">
                        <span className="font-medium">{risk.type}</span>
                        <span className={cn(
                          "text-xs px-2 py-1 rounded",
                          risk.severity === 'high' ? "bg-red-100 text-red-700" :
                          risk.severity === 'medium' ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        )}>
                          {risk.severity}
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1">{risk.mitigation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Estimates */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <span className="text-sm text-muted-foreground">Est. Duration</span>
                <p className="font-medium">{analysis.estimatedDuration}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Team Size</span>
                <p className="font-medium">{analysis.recommendedTeamSize}</p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Display Generated SOW */}
      {generatedSOW && (
        <Card className="mt-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileTextIcon className="h-5 w-5" />
              Generated Statement of Work
            </h3>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const blob = new Blob([generatedSOW], { type: 'text/markdown' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `SOW-${formData.company || 'draft'}-${new Date().toISOString().split('T')[0]}.md`;
                link.click();
                URL.revokeObjectURL(url);
              }}
            >
              Download SOW
            </Button>
          </div>
          <div className="prose prose-sm max-w-none bg-muted p-4 rounded-md overflow-auto max-h-96">
            <pre className="whitespace-pre-wrap text-xs font-mono">{generatedSOW}</pre>
          </div>
        </Card>
      )}
    </div>
  );
};