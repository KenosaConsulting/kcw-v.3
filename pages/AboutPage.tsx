import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section - Standardized Format */}
      <section className="text-center pt-24 md:pt-32 pb-16 overflow-visible">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient-navy font-serif mb-6 leading-tight descender-safe pb-3">
          About Kenosa
        </h1>
        <p className="text-xl md:text-2xl text-[rgb(107,114,128)] max-w-4xl mx-auto leading-[1.6]">
          Strategic intelligence for businesses building sustainable growth systems
        </p>
      </section>

      {/* Main Content Area */}
      <div className="space-y-12">
        {/* Large Photo Section with Name/Title Overlay */}
        <div className="relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded overflow-hidden executive-card">
            <img
              src="/IMG_9329.JPG"
              alt="Nathan Kalosa-Kenyon presenting"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback gradient if image doesn't exist
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = 
                  'linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(30, 58, 95, 0.95) 100%)';
                e.currentTarget.parentElement!.innerHTML += `
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-8xl text-[rgba(212,175,55,0.3)] font-['Playfair_Display']">NK</span>
                  </div>
                `;
              }}
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,22,40)]/80 via-transparent to-transparent" />
            
            {/* Name and Title Overlay - Bottom Left */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(250,250,249)] mb-2 font-['Playfair_Display']">
                Nathan Kalosa-Kenyon
              </h2>
              <p className="text-xl md:text-2xl text-[rgb(212,175,55)] font-medium uppercase tracking-wider">
                Founder & Principal Consultant
              </p>
            </div>
          </div>
        </div>

        {/* About our Founder & Track Record Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* About our Founder Section */}
          <div className="executive-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[rgb(212,175,55)] to-[rgb(184,148,28)]"></div>
              <h3 className="text-3xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
                About Our Founder
              </h3>
            </div>
            <div className="space-y-5">
              <p className="text-lg text-[rgb(107,114,128)] leading-relaxed">
                Nathan Kalosa-Kenyon is the founder of Kenosa Consulting, where he helps small businesses, 
                Tribal enterprises, and federal contractors build explainable, durable growth systems. 
                His work bridges market intelligence, operating discipline, and specialized research to 
                create strategies that not only look good on paper but deliver measurable results.
              </p>
              <p className="text-lg text-[rgb(107,114,128)] leading-relaxed">
                His approach is grounded in humility: listening first, building trust, 
                and ensuring that every recommendation is explainable, verifiable, and usable in real-world pursuits.
              </p>
            </div>
          </div>

          {/* Track Record Section */}
          <div className="executive-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[rgb(212,175,55)] to-[rgb(184,148,28)]"></div>
              <h3 className="text-3xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
                Track Record
              </h3>
            </div>
            <p className="text-lg text-[rgb(107,114,128)] leading-relaxed">
              Nathan combines startup leadership with purpose-driven consulting to turn strategy into execution 
              through data-governed systems. He has led engagements ranging from enterprise operating systems 
              for fast-growing 8(a) contractors to behavioral research that unlocked billions in small-business 
              recovery, and product design for Tribal platforms accelerating procurement and capital access. 
              His teams have delivered hundreds of strategy artifacts, competitive dossiers, and enablement 
              kits that reduce reliance on intuition and enable confident action. The work spans navigating 
              agency procurement, designing SOPs, transforming revenue pipelines, and operationalizing 
              compliance frameworks.
            </p>
          </div>
        </div>


        {/* CTA Section */}
        <div className="premium-gradient rounded-lg p-10 text-center space-y-5">
          <h2 className="text-3xl font-bold text-[rgb(250,250,249)] font-['Playfair_Display']">
            Ready to Build Your Growth System?
          </h2>
          <p className="text-lg text-[rgba(250,250,249,0.85)]">
            Let's discuss how Kenosa Consulting can help you navigate federal markets with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="executive-button-gold"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services"
              className="executive-button-outline !text-[rgb(250,250,249)] !border-[rgba(250,250,249,0.3)] hover:!bg-[rgba(250,250,249,0.1)]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;