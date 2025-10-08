import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  TargetIcon,
  UsersIcon,
  BriefcaseIcon,
  ClockIcon,
  ArrowRightIcon
} from '../components/icons';

const PricingPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const engagementModels = [
    {
      title: 'RETAINER',
      icon: ClockIcon,
      recommended: true,
      startingPrice: 'Starting at $4,000/mo',
      description: 'Ongoing partnership for continuous intelligence and strategic support',
      outcomes: [
        '40% faster opportunity qualification',
        '2 market intelligence reports per month',
        'Weekly pipeline reviews',
        '72-hour rapid research SLA'
      ],
      bestFor: 'Best for small & growth-stage companies',
      includes: ['Dedicated consultant', 'Monthly strategy reviews', 'Pause anytime (30-day notice)'],
      cta: 'Book 20-Minute Scoping Call',
      ctaSubtext: 'Bring one live pursuit—we\'ll pressure-test it',
      typical: 'Typical: $4,000 to $14,000/mo based on scope'
    },
    {
      title: 'PROJECT-BASED',
      icon: TargetIcon,
      recommended: false,
      startingPrice: 'Starting at $25,000',
      description: 'Fixed-scope engagements with clear deliverables and timelines',
      outcomes: [
        'Complete market analysis with forecasts',
        'Win/loss analysis with action plan',
        'Growth strategy with scoring framework',
        'Executive-ready deliverables'
      ],
      bestFor: 'Best for time-boxed initiatives',
      includes: ['Fixed timeline', 'Defined acceptance criteria', 'Post-delivery support'],
      cta: 'See Sample Deliverables',
      ctaSubtext: 'View excerpts from recent engagements',
      typical: 'Typical: $25,000 to $150,000 based on complexity'
    },
    {
      title: 'HOURLY CONSULTING',
      icon: UsersIcon,
      recommended: false,
      startingPrice: '$400/hour',
      description: 'Flexible engagement for advisory and specialized expertise',
      outcomes: [
        'Strategic review sessions',
        'Opportunity strategy development',
        'Competitive positioning themes',
        'Executive briefing prep'
      ],
      bestFor: 'Best for targeted advisory',
      includes: ['Senior consultants only', 'Same-week availability', 'Minimum 2-hour sessions'],
      cta: 'Book Working Session',
      ctaSubtext: 'First available slot this week',
      typical: 'Senior consultants: $400-500/hour'
    }
  ];

  const pricingFactors = [
    {
      title: 'SCOPE & COMPLEXITY',
      icon: BriefcaseIcon,
      description: 'The breadth and depth of analysis required, number of deliverables, and technical sophistication needed all influence the investment level.'
    },
    {
      title: 'TIMELINE & URGENCY',
      icon: ClockIcon,
      description: 'Standard delivery follows our proven methodologies. Expedited timelines require additional resources and senior team allocation.'
    },
    {
      title: 'ORGANIZATION SIZE',
      icon: UsersIcon,
      description: "We scale our approach to match your organization's complexity, from startups to Fortune 500 companies."
    },
    {
      title: 'LEVEL OF ENGAGEMENT',
      icon: TargetIcon,
      description: 'The degree of senior leadership involvement, customization needed, and strategic depth required shapes the partnership structure.'
    }
  ];

  const faqItems = [
    {
      question: "How quickly can you provide a custom quote?",
      answer: "Within 48 hours of an initial scoping call; 24 hours for preliminary estimates on time-sensitive requests. We base quotes on problem complexity, speed, data readiness, and stakeholder availability - not vague \"levels of effort.\""
    },
    {
      question: "What's included in the free consultation?",
      answer: "A 30-minute diagnostic: your goals, constraints, decision criteria, and success metrics. We outline options (fixed-fee, sprint, retainer, hybrid) and identify the fastest path to a measurable win."
    },
    {
      question: "Can we start with a smaller project?",
      answer: "Yes. We prefer a proof-of-value sprint (2-4 weeks) that validates approach, data access, and cadence before scaling. If the sprint doesn't show clear ROI, we recommend stopping or pivoting."
    },
    {
      question: "How do retainers provide value if we don't use all the time?",
      answer: "Retainers buy access and momentum - not just hours. Unused capacity is automatically applied to proactive deliverables (market monitoring, pipeline scoring, playbooks, dashboards). We also offer a limited rollover buffer (defined in the SOW) to smooth month-to-month variability."
    },
    {
      question: "Do you offer preferred pricing for longer commitments?",
      answer: "Yes. Multi-project programs and annual retainers receive preferred rates and priority access. Longer horizons reduce context-switching and let us compound value through shared systems and assets."
    },
    {
      question: "What makes your pricing different from big consulting firms?",
      answer: "You work directly with senior operators. No junior staffing pyramid, no overhead drag. Clients typically see materially lower total cost for senior attention and faster time-to-impact."
    },
    {
      question: "How do you ensure ROI on our investment?",
      answer: "We set success metrics up front (e.g., qualified pipeline created, cycle-time reduction, cost-to-serve, win-rate lift). Every engagement includes an implementation plan and a post-engagement results review."
    },
    {
      question: "Can you work within our budget constraints?",
      answer: "Yes. We phase scope, prioritize high-leverage work, and use hybrid pricing (fixed + milestone or retainer + success components) to match budget while protecting outcomes."
    },
    {
      question: "What pricing models do you offer?",
      answer: "Fixed-fee for well-defined deliverables. Sprint-based (time-boxed) for rapid discovery or prototypes. Retainer for ongoing advisory and execution with SLAs. Hybrid / outcome-linked where a portion of fees ties to agreed milestones. We recommend the model that minimizes your execution risk."
    },
    {
      question: "What drives price up or down?",
      answer: "Four levers: (1) problem complexity and data hygiene, (2) speed and coverage requirements (e.g., weekend/after-hours), (3) stakeholder access and decision velocity, (4) compliance/security constraints and on-site needs."
    },
    {
      question: "How do you handle scope changes?",
      answer: "We keep a living backlog. Small shifts are absorbed within the sprint; material changes trigger a change note (impact on timeline, cost, and outcomes) for approval before work proceeds."
    },
    {
      question: "What are your payment terms?",
      answer: "Standard: 50% on start for fixed-fee projects; monthly in advance for retainers; net-15 invoicing. Alternative terms can be accommodated in the MSA/SOW."
    },
    {
      question: "Do you charge rush fees?",
      answer: "Only when timelines compress beyond agreed SLAs. If so, we quote the premium up front and offer scope trade-offs to avoid it."
    },
    {
      question: "Who owns the work product and IP?",
      answer: "You own the bespoke deliverables, data models trained on your data, and implementation artifacts. We retain rights to our underlying frameworks, templates, and code libraries used to deliver the work."
    },
    {
      question: "How do you use AI and protect our data?",
      answer: "We use secure, enterprise-grade tooling and keep client data in approved environments. We can work inside your tenant, sign NDAs/DPAs, and avoid training public models on your data. Tooling and access are documented in the SOW."
    },
    {
      question: "Are software/tools included in the price?",
      answer: "Project-specific tools are included unless otherwise noted. Third-party licenses unique to your environment are billed at cost with prior approval."
    },
    {
      question: "What if early findings show low ROI?",
      answer: "We stop, present evidence, and recommend either a pivot or a graceful exit. No one wins by continuing a low-yield path."
    },
    {
      question: "Do you provide references or case summaries?",
      answer: "Yes. With client permission, we share anonymized outcomes and can arrange reference calls for late-stage diligence."
    },
    {
      question: "Can you work with our in-house team or other vendors?",
      answer: "Preferably. We integrate into your cadence (stand-ups, reviews), share playbooks and dashboards, and define clear RACI so internal teams retain capability post-engagement."
    },
    {
      question: "Do you offer exclusivity in our market?",
      answer: "If needed, we can offer time-boxed, scoped exclusivity (by segment/product/region) for a premium. Details are negotiated in the SOW."
    },
    {
      question: "What about travel and on-site work?",
      answer: "We are remote-first. On-site sessions are available when they accelerate outcomes. Travel is billed at cost, pre-approved, and scheduled to maximize value (e.g., workshops, executive alignment)."
    },
    {
      question: "How do we get started?",
      answer: "Book the diagnostic, align on success metrics, pick the lowest-risk pricing model, and kick off with a 2-4 week sprint. You'll see tangible artifacts in the first 10 business days - then we scale what works."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="text-center pt-24 md:pt-32 pb-16 overflow-visible">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient-navy font-serif mb-6 leading-tight descender-safe pb-3">
          Engagement Models
        </h1>
        <p className="text-xl md:text-2xl text-[rgb(107,114,128)] max-w-4xl mx-auto leading-[1.6]">
          Pick the level of partnership that fits—we'll meet you where you are and build repeatable wins
        </p>
      </section>

      {/* Proof Strip */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Top accent line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mb-8"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 group-hover:scale-105 transition-transform">90,000+</p>
              <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">Leads in &lt;30 days</p>
            </div>
            <div className="group">
              <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 group-hover:scale-105 transition-transform">677+</p>
              <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">Strategic Artifacts</p>
            </div>
            <div className="group">
              <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 group-hover:scale-105 transition-transform">52+</p>
              <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">Deep-Tech Briefs</p>
            </div>
            <div className="group">
              <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 group-hover:scale-105 transition-transform">35%</p>
              <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">Cycle-Time Reduction</p>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mt-8"></div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {engagementModels.map((model, index) => (
            <div key={index} className={`executive-card p-8 h-full flex flex-col hover:shadow-premium transition-all duration-300 relative ${
              model.recommended ? 'ring-2 ring-[rgba(212,175,55,0.3)] bg-gradient-to-br from-[rgba(250,250,249,1)] to-[rgba(247,246,243,1)]' : ''
            }`}>
              {/* Recommended Badge */}
              {model.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[rgb(212,175,55)] to-[rgb(184,148,28)] text-[rgb(250,250,249)] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Recommended
                  </span>
                </div>
              )}
              
              {/* Icon and Title Section */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[rgba(212,175,55,0.08)] rounded">
                  <model.icon className="w-10 h-10 text-[rgb(184,148,28)]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(10,22,40)] uppercase tracking-wider mb-4">
                  {model.title}
                </h3>
                <p className="text-2xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2">
                  {model.startingPrice}
                </p>
                <p className="text-sm text-[rgb(107,114,128)] italic">
                  {model.bestFor}
                </p>
              </div>
              
              {/* Description */}
              <p className="text-[rgb(107,114,128)] leading-relaxed text-center mb-8 px-2">
                {model.description}
              </p>
              
              <div className="flex-1 flex flex-col">
                {/* Outcomes Section */}
                <div className="mb-8">
                  <p className="text-xs text-[rgb(10,22,40)] font-bold uppercase tracking-wider mb-4">Outcomes:</p>
                  <div className="space-y-3">
                    {model.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-4 h-4 text-[rgb(212,175,55)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[rgb(107,114,128)] leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Spacer to push CTA to bottom */}
                <div className="flex-1"></div>
                
                {/* CTA Section */}
                <div className="mt-auto">
                  <div className="flex justify-center mb-6">
                    <Link 
                      to="/contact" 
                      className={model.recommended ? 'executive-button-gold px-8' : 'executive-button-outline px-8'}
                    >
                      {model.cta}
                    </Link>
                  </div>
                  <p className="text-xs text-[rgb(107,114,128)] text-center italic mb-8">
                    {model.ctaSubtext}
                  </p>
                  
                  <div className="border-t border-[rgba(10,22,40,0.08)] pt-5">
                    <p className="text-xs text-[rgb(107,114,128)] text-center">{model.typical}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[rgb(10,22,40)] mb-12 font-['Playfair_Display']">
          How We Determine Your Investment
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingFactors.map((factor, index) => (
            <div key={index} className="executive-card p-8 hover:shadow-premium transition-all">
              <div className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[rgba(212,175,55,0.08)] rounded">
                    <factor.icon className="w-8 h-8 text-[rgb(184,148,28)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[rgb(10,22,40)]">{factor.title}</h3>
                </div>
              </div>
              <div>
                <p className="text-[rgb(107,114,128)] leading-relaxed pl-16">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[rgb(10,22,40)] mb-12 font-['Playfair_Display']">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="executive-card cursor-pointer hover:shadow-premium transition-all"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[rgb(10,22,40)] pr-4">{item.question}</h3>
                  <ArrowRightIcon 
                    className={`w-5 h-5 text-[rgb(212,175,55)] transition-transform flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-[rgba(10,22,40,0.08)]">
                    <p className="text-[rgb(107,114,128)] leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="premium-gradient rounded-lg p-12 text-center space-y-6">
        <h2 className="text-4xl font-bold text-[rgb(250,250,249)] font-['Playfair_Display']">
          Ready to Build Your Growth System?
        </h2>
        <p className="text-xl text-[rgba(250,250,249,0.9)] max-w-2xl mx-auto leading-relaxed">
          Let's discuss how Kenosa Consulting can help you navigate federal markets with confidence.
        </p>
        <div className="flex justify-center">
          <Link to="/contact" className="executive-button-gold">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;