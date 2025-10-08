import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { TargetIcon, UsersIcon, BriefcaseIcon, LightbulbIcon, ShieldCheckIcon, TrendingUpIcon } from '../components/icons';

// Map slugs to icons for display
const iconMap: Record<string, React.ComponentType<any>> = {
  'market-intelligence': TargetIcon,
  'competitive-analysis': UsersIcon,
  'go-to-market-strategy': BriefcaseIcon,
  'technology-scouting': LightbulbIcon,
  'strategic-due-diligence': ShieldCheckIcon,
  'growth-strategy': TrendingUpIcon
};

const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section - Standardized Format */}
      <section className="text-center pt-24 md:pt-32 pb-16 overflow-visible">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient-navy font-serif mb-6 leading-tight descender-safe pb-3">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl text-[rgb(107,114,128)] max-w-4xl mx-auto leading-[1.6]">
          Strategic intelligence services designed to drive informed decisions and sustainable growth
        </p>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">90,000+</p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">Leads in {'<'}30 days</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">677+</p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">Strategic Artifacts</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">52+</p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">Deep-Tech Briefs</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">35%</p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">Cycle-Time Reduction</p>
            </div>
          </div>
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mt-12"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const IconComponent = iconMap[service.slug] || TargetIcon;
          
          return (
            <Link 
              key={service.slug} 
              to={`/services/${service.slug}`} 
              className="group block h-full"
            >
              <div className="executive-card h-full p-8 hover:shadow-premium transition-all duration-300 relative overflow-hidden">
                {/* Signature Visual Badge */}
                {service.signatureVisual && (
                  <div className="absolute top-4 right-4 text-xs font-semibold text-black opacity-60">
                    {service.signatureVisual}
                  </div>
                )}
                
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[rgba(212,175,55,0.08)] rounded flex items-center justify-center group-hover:bg-[rgba(212,175,55,0.12)] transition-colors">
                    <IconComponent className="h-8 w-8 text-[rgb(184,148,28)]"/>
                  </div>
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold text-[rgb(10,22,40)] mb-3 font-serif group-hover:text-[rgb(30,58,95)] transition-colors leading-snug">
                  {service.title}
                </h3>
                
                {/* Unified narrative (truncated) */}
                <p className="text-[rgb(107,114,128)] mb-4 leading-[1.75] line-clamp-3">
                  {service.unified}
                </p>
                
                {/* Proof Metrics */}
                {service.proofMetrics && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.proofMetrics.split('|').slice(0, 2).map((metric, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-[rgba(212,175,55,0.08)] text-[rgb(184,148,28)] rounded font-medium">
                        {metric.trim()}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Learn More Link */}
                <div className="flex items-center text-[rgb(30,58,95)] font-semibold text-sm group-hover:text-[rgb(10,22,40)] transition-colors">
                  <span>Explore Service</span>
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="premium-gradient rounded-lg p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[rgb(250,250,249)] font-serif leading-snug">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-[rgba(250,250,249,0.85)] max-w-2xl mx-auto leading-[1.8]">
          Schedule a 20-minute scoping call—bring one live pursuit; we'll pressure-test it on the call.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="executive-button-gold inline-block"
          >
            Request a Scoping Call
          </Link>
          <Link 
            to="/case-studies"
            className="executive-button-outline !text-[rgb(250,250,249)] !border-[rgba(250,250,249,0.3)] hover:!bg-[rgba(250,250,249,0.1)] inline-block"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
