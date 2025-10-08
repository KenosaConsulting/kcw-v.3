import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../data/case-studies';

const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const cs = CASE_STUDIES.find(c => c.slug === caseStudyId);

  if (!cs) {
    return <Navigate to="/case-studies" replace />;
  }

  // Category colors matching the listing page
  const categoryColors: { [key: string]: string } = {
    "Technology Scouting": "text-blue-600",
    "Market Intelligence": "text-emerald-600", 
    "Go-to-Market Strategy": "text-purple-600",
    "Competitive Analysis": "text-amber-600"
  };

  const categoryBorderColors: { [key: string]: string } = {
    "Technology Scouting": "border-l-blue-600",
    "Market Intelligence": "border-l-emerald-600", 
    "Go-to-Market Strategy": "border-l-purple-600",
    "Competitive Analysis": "border-l-amber-600"
  };
  
  const categoryColor = categoryColors[cs.category] || "text-slate-600";
  const categoryBorderColor = categoryBorderColors[cs.category] || "border-l-slate-600";

  return (
    <article className="cs-page-transition">
      {/* Minimal Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-8">
        <Link 
          to="/case-studies" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Case Studies
        </Link>
      </nav>

      {/* Hero Section - Full Width */}
      <header className={`
        max-w-7xl mx-auto px-6 md:px-8 lg:px-12 
        py-12 md:py-16 lg:py-20
        border-l-4 ${categoryBorderColor}
      `}>
        {/* Category - Minimal, Uppercase */}
        <p className={`text-xs uppercase tracking-[0.2em] font-medium mb-6 ${categoryColor}`}>
          {cs.category}
        </p>
        
        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-6">
          {cs.headline}
        </h1>
        
        {/* Payoff */}
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-slate-700 leading-[1.3] italic mb-8">
          "{cs.payoff}"
        </p>
        
        {/* Meta Information */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-slate-600">
          <div>
            <span className="font-medium text-slate-400 text-sm uppercase tracking-wider">Client</span>
            <p className="mt-1">{cs.client}</p>
          </div>
          {cs.timeframe && (
            <div>
              <span className="font-medium text-slate-400 text-sm uppercase tracking-wider">Timeframe</span>
              <p className="mt-1">{cs.timeframe}</p>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Grid with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content - Left Side (2/3 width) */}
          <div className="lg:col-span-2 space-y-14">
            {/* Challenge */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5 text-slate-900">
                Challenge
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                {cs.challenge}
              </p>
            </section>

            {/* What We Built */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5 text-slate-900">
                What We Built
              </h2>
              <ul className="space-y-3">
                {cs.build.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-lg leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5 text-slate-900">
                How It Works
              </h2>
              <ul className="space-y-3">
                {cs.howItWorks.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-lg leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Impact */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5 text-slate-900">
                Impact
              </h2>
              <ul className="space-y-3">
                {cs.impact.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-lg leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Story */}
            <section className="bg-slate-50 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 py-10 my-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-5 text-slate-900">
                The Story
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 font-serif italic">
                {cs.narrative}
              </p>
            </section>

            {/* Tech/Methods - If Present */}
            {cs.tech && (
              <section className="pt-8 border-t border-slate-200">
                <p className="text-base text-slate-600">
                  <span className="font-medium text-slate-700 uppercase tracking-wider text-sm block mb-2">
                    Technology & Methods
                  </span>
                  <span className="text-lg text-slate-700">{cs.tech}</span>
                </p>
              </section>
            )}
          </div>

          {/* KPI Sidebar - Right Side (1/3 width) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Key Metrics Header */}
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
                Key Metrics
              </h3>
              
              {/* Editorial Style Fact Box */}
              <div className={`bg-slate-50 rounded-sm p-6 border-l-4 ${categoryBorderColor}`}>
                <div className="space-y-5">
                  {cs.heroKPIs.map((kpi, i) => (
                    <div key={i}>
                      {/* Metric Block */}
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-slate-900 leading-none">
                          {kpi.value}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          {kpi.label}
                        </div>
                      </div>
                      {/* Separator - except for last item */}
                      {i < cs.heroKPIs.length - 1 && (
                        <div className="h-px bg-slate-300 mt-5"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer Section with Related Case Studies */}
      <footer className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Related Case Studies */}
        <div className="border-t border-slate-200 pt-12">
          <h3 className="font-serif text-2xl font-bold text-slate-800 mb-8">
            Related Case Studies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES
              .filter(study => study.slug !== cs.slug && study.category === cs.category)
              .slice(0, 2)
              .map(related => (
                <Link
                  key={related.slug}
                  to={`/case-studies/${related.slug}`}
                  className={`block bg-white rounded-sm border border-slate-200 border-l-4 p-6
                           hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] no-underline
                           group ${categoryBorderColors[related.category] || 'border-l-slate-600'}`}
                >
                  <h4 className="font-serif text-xl font-bold text-slate-800 group-hover:text-slate-900 mb-2">
                    {related.headline}
                  </h4>
                  <p className="text-base text-slate-600 italic">
                    "{related.payoff}"
                  </p>
                </Link>
              ))}
          </div>
        </div>

        {/* Back to All Case Studies - Evenly spaced */}
        <div className="text-center my-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 
                     font-medium transition-colors no-underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View All Case Studies
          </Link>
        </div>
      </footer>

      {/* Bottom CTA Section */}
      <section className="pb-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
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
    </article>
  );
};

export default CaseStudyDetailPage;
