import { useEffect, useState } from 'react';

export const useScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const observeElement = (elementId: string) => {
    useEffect(() => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({
            ...prev,
            [elementId]: entry.isIntersecting
          }));
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [elementId]);
  };

  return {
    scrollY,
    isVisible,
    observeElement
  };
};

export default useScrollAnimations;