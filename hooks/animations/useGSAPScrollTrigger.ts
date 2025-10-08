import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPScrollTrigger = (
  animationCallback: (element: HTMLElement) => gsap.core.Timeline | void,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const timeline = animationCallback(ref.current);
      
      return () => {
        if (timeline && typeof timeline.kill === 'function') {
          timeline.kill();
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, dependencies);

  return ref;
};

export const useStaggerReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const elements = ref.current.children;
      
      gsap.fromTo(elements,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return ref;
};
