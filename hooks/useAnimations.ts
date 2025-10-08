import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const useAnimations = () => {
  const fadeInUp = (element: HTMLElement | null) => {
    if (!element) return;
    
    gsap.fromTo(element,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power3.out"
      }
    );
  };

  const parallaxScroll = useRef<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      parallaxScroll.current = window.scrollY * 0.5;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staggerChildren = (container: HTMLElement | null, children: string) => {
    if (!container) return;
    
    gsap.fromTo(
      container.querySelectorAll(children),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  };

  const scrollTriggerFade = (element: HTMLElement | null) => {
    if (!element) return;
    
    gsap.fromTo(element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  // New advanced animations
  const textReveal = (element: HTMLElement | null) => {
    if (!element) return;
    
    const splitText = element.innerText.split('');
    element.innerHTML = splitText.map(char => 
      `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
    
    gsap.fromTo(
      element.querySelectorAll('span'),
      { 
        opacity: 0, 
        y: 50,
        rotateX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const morphingShape = (element: SVGElement | null) => {
    if (!element) return;
    
    gsap.to(element, {
      morphSVG: element.dataset.morph,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  };

  const magneticHover = (element: HTMLElement | null) => {
    if (!element) return;
    
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  };

  const scrollProgress = (element: HTMLElement | null, callback?: (progress: number) => void) => {
    if (!element) return;
    
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (callback) callback(self.progress);
      }
    });
  };

  const pinSection = (element: HTMLElement | null, endTrigger?: string) => {
    if (!element) return;
    
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: endTrigger || "bottom top",
      pin: true,
      pinSpacing: false
    });
  };

  const drawSVGPath = (path: SVGPathElement | null) => {
    if (!path) return;
    
    const pathLength = path.getTotalLength();
    
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });
    
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  };

  const countUp = (element: HTMLElement | null, target: number, duration: number = 2) => {
    if (!element) return;
    
    const obj = { value: 0 };
    
    gsap.to(obj, {
      value: target,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      onUpdate: () => {
        element.innerText = Math.round(obj.value).toString();
      }
    });
  };

  const elasticHover = (element: HTMLElement | null) => {
    if (!element) return;
    
    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale: 1.1,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)"
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)"
      });
    });
  };

  const glitchEffect = (element: HTMLElement | null) => {
    if (!element) return;
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    
    tl.to(element, {
      skewX: 2,
      duration: 0.05,
      ease: "power2.inOut"
    })
    .to(element, {
      skewX: -2,
      duration: 0.05,
      ease: "power2.inOut"
    })
    .to(element, {
      skewX: 0,
      duration: 0.05,
      ease: "power2.inOut"
    })
    .to(element, {
      opacity: 0.8,
      duration: 0.02
    })
    .to(element, {
      opacity: 1,
      duration: 0.02
    })
    .to(element, {
      x: -2,
      duration: 0.02
    })
    .to(element, {
      x: 2,
      duration: 0.02
    })
    .to(element, {
      x: 0,
      duration: 0.02
    });
  };

  const typewriter = (element: HTMLElement | null, text: string, speed: number = 0.05) => {
    if (!element) return;
    
    element.innerText = '';
    
    gsap.to(element, {
      text: {
        value: text,
      },
      duration: text.length * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  };

  const floatingAnimation = (element: HTMLElement | null) => {
    if (!element) return;
    
    gsap.to(element, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  };

  const batchAnimation = (elements: string, animation: gsap.TweenVars) => {
    ScrollTrigger.batch(elements, {
      onEnter: (batch) => gsap.to(batch, animation),
      onLeave: (batch) => gsap.to(batch, { ...animation, ...{ opacity: 0, y: 100 } }),
      onEnterBack: (batch) => gsap.to(batch, animation),
      onLeaveBack: (batch) => gsap.to(batch, { ...animation, ...{ opacity: 0, y: -100 } }),
      start: "top bottom-=100",
      end: "bottom top+=100"
    });
  };

  const smoothScrollTo = (target: string | HTMLElement, duration: number = 1) => {
    gsap.to(window, {
      duration,
      scrollTo: target,
      ease: "power2.inOut"
    });
  };

  return {
    fadeInUp,
    parallaxScroll: parallaxScroll.current,
    staggerChildren,
    scrollTriggerFade,
    textReveal,
    morphingShape,
    magneticHover,
    scrollProgress,
    pinSection,
    drawSVGPath,
    countUp,
    elasticHover,
    glitchEffect,
    typewriter,
    floatingAnimation,
    batchAnimation,
    smoothScrollTo
  };
};