import React from "react";
import type { CaseStudy } from "@/data/case-studies";
import { KPI } from "@/components/case-studies/KPI";

export const CaseStudyPage: React.FC<{ cs: CaseStudy }> = ({ cs }) => {
  // Category colors matching the listing page
  const categoryColors: { [key: string]: string } = {
    "Technology Scouting": "border-l-blue-600",
    "Market Intelligence": "border-l-emerald-600", 
    "Go-to-Market Strategy": "border-l-purple-600",
    "Competitive Analysis": "border-l-amber-600"
  };
  
  const categoryColor = categoryColors[cs.category] || "border-l-slate-600";
  
  return (
    <article className="cs-page-transition">
      {/* Hero Section - Editorial Style */}
      <header className={`
        max-w-6xl mx-auto px-6 md:px-8 lg:px-12 
        py-20 md:py-24 lg:py-32
        border-l-4 ${categoryColor}
      `}>
        {/* Category - Minimal, Uppercase */}
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-8">
          {cs.category}
        </p>
        
        {/* Headline - Massive Typography */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.03em] leading-[0.95] mb-8">
          {cs.headline}
        </h1>
        
        {/* Payoff - Elegant Serif */}
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-slate-700 leading-[1.3] italic mb-12">
          "{cs.payoff}"
        </p>
        
        {/* Meta Information - Clean Typography */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-base md:text-lg text-slate-600">
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

      {/* KPI Section - Clean Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cs.heroKPIs.map((kpi, i) => (
            <div key={i} className="rounded-sm border border-slate-200 p-6 bg-white hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {kpi.value}
              </div>
              <div className="text-sm md:text-base text-slate-600 mt-2 font-medium">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Sections - Editorial Prose */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="space-y-16">
          {/* Challenge */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
              Challenge
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              {cs.challenge}
            </p>
          </div>

          {/* What We Built */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
              What We Built
            </h2>
            <ul className="space-y-3">
              {cs.build.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <span className="text-lg md:text-xl leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
              Impact
            </h2>
            <ul className="space-y-3">
              {cs.impact.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="block w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <span className="text-lg md:text-xl leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Narrative - Feature Block */}
          <div className="bg-slate-50 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 py-12 my-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
              The Story
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-serif italic">
              {cs.narrative}
            </p>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
              How It Works
            </h2>
            <ul className="space-y-3">
              {cs.howItWorks.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-slate-400 mr-4 font-mono text-sm mt-1">{`0${i + 1}`}</span>
                  <span className="text-lg md:text-xl leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech/Methods - If Present */}
          {cs.tech && (
            <div className="pt-8 border-t border-slate-200">
              <p className="text-base text-slate-500">
                <span className="font-medium text-slate-700 uppercase tracking-wider text-sm">
                  Technology & Methods
                </span>
                <span className="block mt-2 text-lg">{cs.tech}</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer - Clean and Centered */}
      <footer className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24">
        <div className="text-center border-t border-slate-200 pt-16">
          <p className="text-xl text-slate-600 mb-8">
            Ready to create your own success story?
          </p>
          <a
            href={cs.ctaHref || "/contact"}
            className="inline-flex items-center justify-center px-10 py-4 
                     text-lg font-semibold bg-slate-900 text-white rounded-sm
                     hover:bg-slate-800 transition-colors duration-200
                     shadow-lg hover:shadow-xl"
          >
            {cs.ctaText || "Request a Scoping Call"}
          </a>
        </div>
      </footer>
    </article>
  );
};
