import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations with ScrollTrigger
 */
export const useGSAPAnimation = () => {
  useEffect(() => {
    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const fadeInUp = (element: HTMLElement | null, delay: number = 0) => {
    if (!element) return;
    
    gsap.fromTo(element, 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out',
      }
    );
  };

  const parallax = (element: HTMLElement | null, speed: number = 0.5) => {
    if (!element) return;
    
    gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  };

  const staggerReveal = (container: HTMLElement | null, childrenSelector: string) => {
    if (!container) return;
    
    const children = container.querySelectorAll(childrenSelector);
    
    gsap.fromTo(children,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          once: true,
        }
      }
    );
  };

  const timeline = (element: HTMLElement | null) => {
    if (!element) return gsap.timeline();
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      }
    });
    
    return tl;
  };

  return {
    fadeInUp,
    parallax,
    staggerReveal,
    timeline,
  };
};

/**
 * Hook for text animations
 */
export const useTextAnimation = () => {
  const splitTextRef = useRef<HTMLElement | null>(null);

  const animateText = (element: HTMLElement | null) => {
    if (!element) return;
    
    const text = element.innerText;
    const chars = text.split('');
    
    element.innerHTML = chars.map(char => 
      `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
    
    const spans = element.querySelectorAll('span');
    
    gsap.fromTo(spans,
      {
        opacity: 0,
        y: 20,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
        }
      }
    );
  };

  return { splitTextRef, animateText };
};

/**
 * Hook for hero animations
 */
export const useHeroAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.hero-title', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    )
    .fromTo('.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    );
    
    return () => {
      tl.kill();
    };
  }, []);
};

/**
 * Hook for scroll progress indicator
 */
export const useScrollProgress = () => {
  useEffect(() => {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-accent-blue z-50';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
    
    gsap.to(progressBar, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });
    
    return () => {
      progressBar.remove();
    };
  }, []);
};