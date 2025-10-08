import React from 'react';

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          <div className="text-center group cursor-default">
            <div className="text-3xl md:text-4xl font-bold cosmic-text mb-1 group-hover:stellar-glow transition-all">12+</div>
            <div className="text-sm text-chrome-silver uppercase tracking-stellar">Federal Agencies</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl md:text-4xl font-bold cosmic-text mb-1 group-hover:stellar-glow transition-all">677+</div>
            <div className="text-sm text-chrome-silver uppercase tracking-stellar">Strategic Artifacts</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl md:text-4xl font-bold cosmic-text mb-1 group-hover:stellar-glow transition-all">$7B+</div>
            <div className="text-sm text-chrome-silver uppercase tracking-stellar">Client Impact</div>
          </div>
          <div className="text-center group cursor-default">
            <div className="text-3xl md:text-4xl font-bold cosmic-text mb-1 group-hover:stellar-glow transition-all">300%+</div>
            <div className="text-sm text-chrome-silver uppercase tracking-stellar">Adoption Lift</div>
          </div>
        </div>
        
        {/* Constellation connector effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <line x1="20%" y1="50%" x2="35%" y2="50%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse-line" />
            <line x1="45%" y1="50%" x2="55%" y2="50%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '1s' }} />
            <line x1="65%" y1="50%" x2="80%" y2="50%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>
    </section>
  );
};