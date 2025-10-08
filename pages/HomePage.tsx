import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { SERVICES } from '../constants';
import { ArrowRightIcon } from '../components/icons';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [options]);
  return ref;
};

const AnimatedKPIBar: React.FC = () => {
  const [counts, setCounts] = useState({ leads: 0, artifacts: 0, retention: 0, impact: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2000;
            const steps = 50;
            const increments = {
              leads: 90000 / steps,
              artifacts: 677 / steps,
              retention: 100 / steps,
              impact: 6.7 / steps
            };
            let currentStep = 0;
            
            const timer = setInterval(() => {
              currentStep++;
              if (currentStep === steps) {
                setCounts({ leads: 90000, artifacts: 677, retention: 100, impact: 6.7 });
                clearInterval(timer);
              } else {
                setCounts({
                  leads: Math.floor(currentStep * increments.leads),
                  artifacts: Math.floor(currentStep * increments.artifacts),
                  retention: Math.floor(currentStep * increments.retention),
                  impact: currentStep * increments.impact
                });
              }
            }, duration / steps);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mb-6"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* KPI 1 - Leads */}
        <div className="group">
          <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 leading-[1.3]">
            {counts.leads.toLocaleString()}+
          </p>
          <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">
            Leads in &lt;30 Days
          </p>
        </div>

        {/* KPI 2 - Strategic Artifacts */}
        <div className="group">
          <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 leading-[1.3]">
            {counts.artifacts}+
          </p>
          <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">
            Strategic Artifacts
          </p>
        </div>

        {/* KPI 3 - Client Retention */}
        <div className="group">
          <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 leading-[1.3]">
            {counts.retention}%
          </p>
          <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">
            Client Retention
          </p>
        </div>

        {/* KPI 4 - Client Impact */}
        <div className="group">
          <p className="text-3xl font-bold text-gradient-gold font-['Playfair_Display'] mb-2 leading-[1.3]">
            ${counts.impact.toFixed(1)} Billion+
          </p>
          <p className="text-xs text-[rgb(107,114,128)] uppercase tracking-wider font-semibold">
            Client Impact
          </p>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mt-6"></div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const heroRef = useIntersectionObserver({ threshold: 0.1 });
  const ctaRef = useIntersectionObserver({ threshold: 0.1 });
  const kpiRef = useIntersectionObserver({ threshold: 0.1 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes hero-fade-in {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes hero-fade-up {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero-animate-fade-in {
        animation: hero-fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .hero-animate-fade-up {
        animation: hero-fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .hero-delay-200 {
        animation-delay: 200ms;
      }

      .hero-delay-400 {
        animation-delay: 400ms;
      }
      
      .hero-delay-600 {
        animation-delay: 600ms;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-neutral-cream min-h-screen">
      {/* Clean Hero Section - Reduced Spacing */}
      <section 
        className="relative pt-16 pb-12 px-6 md:px-8
        bg-gradient-to-b from-[rgb(250,250,249)] to-[rgb(250,250,249)]"
      >
        {/* Subtle Grid Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.1) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 20%, transparent 70%)',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <Link to="/services" className="group inline-block mb-4 hero-animate-fade-in">
            <span
              className="text-xs text-[rgb(107,114,128)] font-medium px-4 py-1.5 
              bg-gradient-to-tr from-[rgba(212,175,55,0.08)] to-transparent  
              border border-[rgba(212,175,55,0.25)] 
              rounded-full tracking-wider uppercase flex items-center justify-center
              hover:border-[rgba(212,175,55,0.4)] hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300"
            >
              Public and Commercial Markets
              <ArrowRightIcon className="inline w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Title */}
          <h1
            className="hero-animate-fade-in hero-delay-200 text-balance 
            font-['Playfair_Display'] py-2 text-5xl font-bold leading-[1.2] tracking-tight
            sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block text-[rgb(10,22,40)]">
              New Horizons?
            </span>
            <span className="block text-gradient-gold mt-2">
              We've Been There.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-animate-fade-in hero-delay-400 mb-8 text-balance 
            text-lg tracking-tight text-[rgb(107,114,128)] 
            md:text-xl max-w-3xl mx-auto leading-[1.8]"
          >
            Kenosa helps businesses accelerate growth and outperform competitors. 
            We deliver market research, strategic planning, and operational systems that work.
          </p>

          {/* CTA */}
          <div className="flex justify-center hero-animate-fade-in hero-delay-600">
            <Link
              to="/services"
              className="executive-button-gold px-10 py-3 text-lg font-medium
              hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* KPI Bar Section */}
      <section ref={kpiRef} className="py-8 opacity-0 relative z-10 bg-[rgb(250,250,249)]">
        <div className="px-8">
          <AnimatedKPIBar />
        </div>
      </section>

      {/* CTA Section - Blue Panel, No Grey Box */}
      <section className="relative isolate w-full overflow-x-clip bg-transparent pt-8 pb-12">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Blue CTA Panel */}
          <div ref={ctaRef} className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 sm:py-20 opacity-0">
            {/* Panel background - creates the blue bubble */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(140% 120% at 50% 0%, #163357 0%, #0E2443 55%, #0A1E39 100%)'
              }}
            />
            
            {/* Content */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif text-center font-bold leading-[1.2]">
              Ready to Unlock Your Potential?
            </h2>
            <p className="mt-4 text-center text-white/80 max-w-2xl mx-auto text-lg">
              Let's discuss how our intelligence solutions can drive your business forward.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="executive-button-gold transform hover:scale-105 transition-transform duration-300">
                <Link to="/contact">Schedule a Consultation</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;