import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { ServiceIntro } from '../components/services/ServiceIntro';
import NotFoundPage from './NotFoundPage';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Map old IDs to new slugs for backwards compatibility
  const slugMap: Record<string, string> = {
    'market-intelligence': 'market-intelligence',
    'competitive-analysis': 'competitive-analysis',
    'g2m-strategy': 'go-to-market-strategy',
    'go-to-market-strategy': 'go-to-market-strategy',
    'tech-scouting': 'technology-scouting',
    'technology-scouting': 'technology-scouting',
    'due-diligence': 'strategic-due-diligence',
    'strategic-due-diligence': 'strategic-due-diligence',
    'growth-strategy': 'growth-strategy'
  };
  
  const slug = slugMap[serviceId || ''] || serviceId;
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedServices = service.related 
    ? SERVICES.filter(s => service.related?.includes(s.slug))
    : SERVICES.filter(s => s.slug !== slug).slice(0, 2);

  return (
    <div className="w-full bg-white">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-8">
        <Link 
          to="/services"
          className="inline-flex items-center text-[rgb(107,114,128)] hover:text-[rgb(10,22,40)] transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Service Offerings
        </Link>
      </div>

      {/* Main Service Content - Using new case study style layout */}
      <ServiceIntro service={service} />

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="bg-[rgb(249,250,251)] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-2xl font-bold text-[rgb(10,22,40)] mb-8">Related Service Offerings</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {relatedServices.map(related => {
                const firstSentence = related.unified.split('.')[0] + '.';
                const firstMetric = related.proofMetrics?.split('|')[0].trim();
                
                return (
                  <Link 
                    to={`/services/${related.slug}`} 
                    key={related.slug} 
                    className="bg-white border border-[rgb(229,231,235)] rounded-lg p-6 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-[rgb(10,22,40)] group-hover:text-[rgb(59,130,246)] transition-colors">
                        {related.title}
                      </h3>
                      <svg className="w-5 h-5 text-[rgb(212,175,55)] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-[rgb(107,114,128)] text-sm leading-relaxed mb-3">
                      {firstSentence}
                    </p>
                    {firstMetric && (
                      <div className="text-xs font-semibold text-[rgb(212,175,55)] uppercase tracking-wide">
                        {firstMetric}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
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

export default ServiceDetailPage;
