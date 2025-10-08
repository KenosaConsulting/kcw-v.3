import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/case-studies';
import { caseStudyHeroImages } from '../data/case-study-images';
import { 
  Binoculars, 
  ChartLineUp, 
  Rocket,
  Users,
  Lightbulb,
  TrendUp,
  Files,
  MapTrifold,
  ChartBar,
  UsersFour,
  Handshake
} from 'phosphor-react';

type CaseStudyCategory = 'Market Intelligence' | 'Competitive Analysis' | 'Go-to-Market Strategy' | 'Technology Scouting';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CaseStudyCategory | 'All'>('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories: (CaseStudyCategory | 'All')[] = [
    'All',
    'Market Intelligence',
    'Competitive Analysis', 
    'Go-to-Market Strategy',
    'Technology Scouting'
  ];

  // Category colors
  const categoryColors: { [key: string]: string } = {
    "Technology Scouting": "border-l-blue-600",
    "Market Intelligence": "border-l-emerald-600",
    "Go-to-Market Strategy": "border-l-purple-600",
    "Competitive Analysis": "border-l-amber-600"
  };

  // Premium minimal gradients for each category
  const categoryGradients: { [key: string]: string } = {
    "Technology Scouting": "bg-gradient-to-br from-slate-800 to-slate-700",
    "Market Intelligence": "bg-gradient-to-br from-slate-900 to-slate-800",
    "Go-to-Market Strategy": "bg-gradient-to-br from-zinc-900 to-zinc-800",
    "Competitive Analysis": "bg-gradient-to-br from-neutral-900 to-neutral-800"
  };

  // Unique icon for EACH individual case study by slug
  const caseStudyIcons: { [key: string]: React.ComponentType<any> } = {
    "capturegpt-72-hour-demo": Rocket,                                    // Speed, rapid deployment, launch
    "federal-agency-strategy-market-intelligence": MapTrifold,            // Multi-agency navigation, strategic mapping
    "erc-market-intelligence-growth-strategy": ChartBar,                  // Market sizing, data analysis, 500+ processors
    "proposalgpt-leadgen-marketing-intelligence": UsersFour,              // 90k+ qualified leads, enterprise contacts
    "sales-pipeline-transformation-opportunity-management": TrendUp,      // Pipeline growth, velocity, performance
    "smb-behavioral-research-market-intelligence": Users,                 // SMB personas, behavioral archetypes
    "enterprise-sop-system-federal-contractor": Files,                    // Documentation, modular SOPs, process library
    "specialized-research-strategic-intelligence": Binoculars,            // Deep research, technology scouting, discovery
    "tribal-dealroom-platform-design": Handshake,                         // Partnerships, connections, deal-making
    "enterprise-growth-architecture-operating-system": ChartLineUp,       // Systems architecture, enterprise operations
    "project-w-smb-behavioral-research-product-development": Lightbulb   // Product innovation, insights, reframing
  };

  const filteredCaseStudies = selectedCategory === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(cs => cs.category === selectedCategory);

  return (
    <div className="bg-slate-50">
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-20 lg:pb-24">
        {/* Header Section - Standardized */}
        <section className="text-center pt-24 md:pt-32 pb-16 overflow-visible">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient-navy font-serif mb-6 leading-tight descender-safe pb-3">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-[rgb(107,114,128)] max-w-4xl mx-auto leading-[1.6]">
            Evidence-first stories with numbers that move decisions.
          </p>
        </section>
        
        {/* Category Filter - Clean Pills */}
        <section className="flex flex-wrap gap-3 mb-8 md:mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-300 text-slate-700 hover:border-slate-400'
              }`}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Clean Grid with Gradient + Unique Icon Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map(cs => {
            const categoryColor = categoryColors[cs.category] || "border-l-slate-600";
            const categoryGradient = categoryGradients[cs.category] || "bg-gradient-to-br from-slate-600 to-slate-400";
            const CaseStudyIcon = caseStudyIcons[cs.slug] || Lightbulb;
            const isHovered = hoveredCard === cs.slug;
            
            return (
              <Link 
                key={cs.slug} 
                to={`/case-studies/${cs.slug}`}
                onMouseEnter={() => setHoveredCard(cs.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative block bg-white rounded-sm border border-slate-200 
                  ${categoryColor} border-l-4
                  overflow-hidden
                  hover:shadow-xl transition-all duration-300 ease-out
                  hover:translate-y-[-2px]
                  no-underline
                `}
              >
                {/* Hero Image Section - Replaced gradient + icon */}
                <div className={`relative h-48 md:h-56 overflow-hidden`}>
                  {/* Background Image */}
                  <img 
                    src={caseStudyHeroImages[cs.slug]} 
                    alt={cs.headline}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs uppercase tracking-wider text-slate-700 font-medium rounded-sm">
                      {cs.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Headline as Hero Element */}
                  <h2 className={`
                    font-serif text-2xl md:text-3xl font-bold 
                    tracking-[-0.01em] leading-[1.2] mb-4
                    transition-colors duration-300
                    ${isHovered ? 'text-slate-900' : 'text-slate-800'}
                  `}>
                    {cs.headline}
                  </h2>

                  {/* Payoff Line */}
                  <p className={`
                    text-base md:text-lg text-slate-600 
                    leading-relaxed italic mb-6
                    transition-colors duration-300
                    ${isHovered ? 'text-slate-700' : ''}
                  `}>
                    "{cs.payoff}"
                  </p>

                  {/* Client - Always Visible but Subtle */}
                  <div className="text-sm text-slate-500 font-medium">
                    {cs.client}
                  </div>

                  {/* Read More Link */}
                  <div className={`
                    inline-flex items-center gap-2 mt-6
                    text-sm font-medium text-slate-700
                    transition-all duration-300
                    ${isHovered ? 'text-slate-900 gap-3' : ''}
                  `}>
                    <span>Read Case Study</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Bottom CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="premium-gradient rounded-2xl py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(250,250,249)] font-serif leading-tight mb-6">
                Ready to Build Your Growth System?
              </h2>
              <p className="text-lg md:text-xl text-[rgba(250,250,249,0.9)] mb-8 leading-relaxed">
                Let's discuss how Kenosa Consulting can help you navigate federal markets with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact"
                  className="inline-block px-8 py-3 bg-[rgb(212,175,55)] text-[rgb(10,22,40)] font-semibold rounded hover:bg-[rgb(184,148,28)] transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/services"
                  className="inline-block px-8 py-3 border-2 border-[rgba(250,250,249,0.3)] text-[rgb(250,250,249)] font-semibold rounded hover:bg-[rgba(250,250,249,0.1)] transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
