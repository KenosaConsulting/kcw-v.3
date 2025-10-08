import React, { useEffect, useRef } from 'react';

export const CosmicCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail elements
    const trailElements: HTMLDivElement[] = [];
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement('div');
      trail.className = 'fixed pointer-events-none z-[9998] rounded-full transition-all duration-300';
      trail.style.width = `${20 - i * 3}px`;
      trail.style.height = `${20 - i * 3}px`;
      trail.style.background = `radial-gradient(circle, rgba(34, 211, 238, ${0.3 - i * 0.05}), transparent)`;
      trail.style.filter = `blur(${i * 2}px)`;
      document.body.appendChild(trail);
      trailElements.push(trail);
    }
    trailRef.current = trailElements;

    const updateCursor = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      const { x, y } = mousePosition.current;
      
      // Main cursor
      cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
      
      // Trail effect
      trailElements.forEach((trail, index) => {
        const delay = (index + 1) * 50;
        setTimeout(() => {
          const size = parseInt(trail.style.width) / 2;
          trail.style.transform = `translate(${x - size}px, ${y - size}px)`;
        }, delay);
      });

      animationFrame.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      trailElements.forEach(trail => trail.style.opacity = '1');
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      trailElements.forEach(trail => trail.style.opacity = '0');
    };

    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrame.current = requestAnimationFrame(animateCursor);

    // Add hover effects for interactive elements
    const addHoverEffect = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.width = '30px';
          cursor.style.height = '30px';
          cursor.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent)';
        });
        element.addEventListener('mouseleave', () => {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          cursor.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)';
        });
      });
    };

    setTimeout(addHoverEffect, 100);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      trailElements.forEach(trail => trail.remove());
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow"
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.3s, height 0.3s, background 0.3s',
        mixBlendMode: 'screen',
        opacity: 0,
      }}
    />
  );
};