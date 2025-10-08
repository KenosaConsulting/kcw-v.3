import React from 'react';
import { Link } from 'react-router-dom';
import { CLIENTS } from '../data/clients';

const ClientsPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section - Standardized Format */}
      <section className="text-center pt-24 md:pt-32 pb-16 overflow-visible">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient-navy font-serif mb-6 leading-tight descender-safe pb-3">
          Our Clients
        </h1>
        <p className="text-xl md:text-2xl text-[rgb(107,114,128)] max-w-4xl mx-auto leading-[1.6]">
          Trusted partners building competitive advantage through strategic intelligence
        </p>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">
                $6.7B+
              </p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">
                Client Impact
              </p>
            </div>
            
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">
                677+
              </p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">
                Strategic Reports
              </p>
            </div>
            
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient-gold font-serif mb-3 leading-tight descender-safe pb-2">
                100%
              </p>
              <p className="text-sm text-[rgb(107,114,128)] uppercase tracking-wide">
                Client Retention
              </p>
            </div>
          </div>
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mt-12"></div>
        </div>
      </section>

      {/* Client Cards Grid - Data Driven */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(10,22,40)] mb-12 text-center font-['Playfair_Display']">
          Featured Clients & Partners
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENTS.map((client) => (
            <div 
              key={client.slug}
              className="executive-card group hover:shadow-premium transition-all duration-300"
            >
              {/* Logo Section */}
              <div className="h-48 bg-gradient-to-br from-[rgba(250,250,249,1)] to-[rgba(247,246,243,1)] flex items-center justify-center p-8 border-b border-[rgba(10,22,40,0.08)]">
                <img 
                  src={client.logoSrc} 
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '100px' }}
                  onError={(e) => {
                    // Fallback for missing logos
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="text-center">
                          <div class="text-4xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2">
                            ${client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </div>
                          <div class="text-xs text-[rgb(107,114,128)] uppercase tracking-wider">
                            Logo Coming Soon
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[rgb(10,22,40)] font-['Playfair_Display']">
                  {client.name}
                </h3>
                
                <p className="text-[rgb(107,114,128)] text-sm leading-relaxed">
                  {client.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-[rgb(10,22,40)] uppercase tracking-wider">
                      Industry:
                    </span>
                    <p className="text-xs text-[rgb(107,114,128)] mt-1">
                      {client.industry}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-[rgb(10,22,40)] uppercase tracking-wider">
                      Services:
                    </span>
                    <p className="text-xs text-[rgb(107,114,128)] mt-1">
                      {client.services.join(", ")}
                    </p>
                  </div>
                </div>
                
                {/* Gold accent line */}
                <div className="pt-4">
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-4xl mx-auto">
        <div className="premium-gradient rounded-lg p-10 relative overflow-hidden">
          {/* Decorative quote marks */}
          <div className="absolute top-4 left-6 text-6xl text-[rgba(212,175,55,0.2)] font-['Playfair_Display']">
            "
          </div>
          
          <div className="relative z-10 space-y-6">
            <p className="text-xl md:text-2xl text-[rgb(250,250,249)] leading-relaxed text-center italic font-['Playfair_Display']">
              Kenosa Consulting's strategic insights transformed our federal capture strategy. 
              Their deep understanding of the market and ability to identify opportunities we 
              hadn't considered led directly to our largest contract win to date.
            </p>
            
            <div className="text-center">
              <p className="text-[rgb(212,175,55)] font-semibold">
                — Senior Executive
              </p>
              <p className="text-[rgba(250,250,249,0.7)] text-sm">
                Fortune 500 Defense Contractor
              </p>
            </div>
          </div>
          
          {/* Decorative closing quote */}
          <div className="absolute bottom-4 right-6 text-6xl text-[rgba(212,175,55,0.2)] font-['Playfair_Display'] rotate-180">
            "
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="executive-card-premium p-10 text-center space-y-5">
        <h2 className="text-3xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
          Join Our Growing Client Portfolio
        </h2>
        <p className="text-lg text-[rgb(107,114,128)] max-w-2xl mx-auto">
          Partner with Kenosa Consulting to unlock strategic opportunities and accelerate 
          your growth in federal and commercial markets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/contact"
            className="executive-button-gold"
          >
            Become a Client
          </Link>
          <Link 
            to="/case-studies"
            className="executive-button-outline"
          >
            View Case Studies
          </Link>
        </div>
      </div>

      {/* Note for Client Logo Updates */}
      <div className="text-center text-sm text-[rgb(107,114,128)] italic">
        <p>* Additional client information and case studies available upon request.</p>
      </div>
    </div>
  );
};

export default ClientsPage;