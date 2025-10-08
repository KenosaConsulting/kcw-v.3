import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { CASE_STUDIES } from "@/data/case-studies";

export default function CaseStudiesIndex() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Category colors - subtle, sophisticated palette
  const categoryColors: { [key: string]: string } = {
    "Technology Scouting": "border-l-blue-600",
    "Market Intelligence": "border-l-emerald-600",
    "Go-to-Market Strategy": "border-l-purple-600",
    "Competitive Analysis": "border-l-amber-600"
  };

  // Select the hero metric for each case study (most impressive one)
  const getHeroMetric = (cs: typeof CASE_STUDIES[0]) => {
    // Custom selection logic for each case to pick the most impressive metric
    const heroMetricMap: { [key: string]: number } = {
      "capturegpt-72-hour-demo": 0, // 72 hours
      "federal-agency-strategy-market-intelligence": 1, // 677+ artifacts
      "erc-market-intelligence-growth-strategy": 1, // $254.8B runway
      "proposalgpt-leadgen-marketing-intelligence": 0, // 90,000+ leads
      "sales-pipeline-transformation-opportunity-management": 2, // -40% cycle time
      "smb-behavioral-research-market-intelligence": 0, // 300%+ adoption
      "enterprise-sop-system-federal-contractor": 1, // -50% rework
      "specialized-research-strategic-intelligence": 0, // 52+ briefs
      "tribal-dealroom-platform-design": 2, // Measurable impact
      "enterprise-growth-architecture-operating-system": 0, // Faster decisions
      "project-w-smb-behavioral-research-product-development": 2 // >$7B value
    };
    
    const index = heroMetricMap[cs.slug] || 0;
    return cs.heroKPIs[index];
  };

  return (
    <>
      <Head>
        <title>Case Studies | Kenosa Consulting</title>
        <meta name="description" content="Our track record across AI, market intelligence, and GTM. Hard outcomes, repeatable plays." />
        <meta property="og:title" content="Case Studies | Kenosa Consulting" />
        <meta property="og:description" content="Our track record across AI, market intelligence, and GTM. Hard outcomes, repeatable plays." />
        <meta property="og:type" content="website" />
      </Head>
      
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 lg:py-32">
        {/* Header Section - More Editorial */}
        <header className="mb-16 md:mb-20 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.9]">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mt-6 leading-relaxed">
            Evidence-first stories with numbers that move decisions.
          </p>
        </header>
        
        {/* Poster-Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {CASE_STUDIES.map(cs => {
            const heroMetric = getHeroMetric(cs);
            const categoryColor = categoryColors[cs.category] || "border-l-slate-600";
            const isHovered = hoveredCard === cs.slug;
            
            return (
              <Link 
                key={cs.slug} 
                href={`/case-studies/${cs.slug}`}
                onMouseEnter={() => setHoveredCard(cs.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative block bg-white rounded-sm border border-slate-200 
                  ${categoryColor} border-l-4
                  p-10 md:p-12 lg:p-14
                  hover:shadow-xl transition-all duration-300 ease-out
                  hover:translate-y-[-2px]
                `}
              >
                {/* Category - Subtle, Small, Top Corner */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium">
                    {cs.category}
                  </span>
                </div>

                {/* Hero Metric - Massive Typography */}
                <div className="mb-8">
                  <div className="relative">
                    <div className={`
                      text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.85]
                      bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent
                      transition-all duration-300
                      ${isHovered ? 'scale-105 origin-left' : ''}
                    `}>
                      {heroMetric.value}
                    </div>
                    <div className={`
                      text-sm md:text-base text-slate-500 mt-2 font-medium tracking-wide
                      transition-opacity duration-300
                      ${isHovered ? 'opacity-100' : 'opacity-70'}
                    `}>
                      {heroMetric.label}
                    </div>
                  </div>
                </div>

                {/* Headline - Bold Graphic Element */}
                <h2 className={`
                  font-serif text-2xl md:text-3xl lg:text-4xl font-bold 
                  tracking-[-0.02em] leading-[1.1] mb-4
                  transition-all duration-300
                  ${isHovered ? 'text-slate-900' : 'text-slate-800'}
                `}>
                  {cs.headline}
                </h2>

                {/* Payoff - Elegant Serif */}
                <p className={`
                  font-serif text-lg md:text-xl text-slate-600 
                  leading-relaxed italic
                  transition-all duration-300
                  ${isHovered ? 'text-slate-700' : ''}
                `}>
                  "{cs.payoff}"
                </p>

                {/* Client - Subtle Byline (appears on hover) */}
                <div className={`
                  absolute bottom-6 left-14 text-sm text-slate-400
                  transition-all duration-300
                  ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}>
                  {cs.client}
                </div>

                {/* Arrow Icon - Subtle CTA */}
                <div className={`
                  absolute bottom-6 right-6
                  transition-all duration-300
                  ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-40'}
                `}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-slate-600"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>

                {/* Hover Accent - Subtle Gradient Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50
                  opacity-0 group-hover:opacity-30 transition-opacity duration-500
                  pointer-events-none rounded-sm
                `} />
              </Link>
            );
          })}
        </div>

        {/* Footer CTA Section */}
        <section className="mt-24 md:mt-32 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Ready to see what evidence-driven strategy looks like?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 
                     text-lg font-semibold bg-slate-900 text-white rounded-sm
                     hover:bg-slate-800 transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </section>
      </main>
    </>
  );
}
