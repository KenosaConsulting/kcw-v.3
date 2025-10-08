import React, { useRef, useEffect } from 'react';

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;
    }

    const particles: Particle[] = [];
    const particleCount = 200;
    const maxDepth = 3;
    const speed = 0.5;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * maxDepth,
        px: 0,
        py: 0
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Move particle
        particle.z -= speed * 0.01;
        
        // Reset if too close
        if (particle.z <= 0) {
          particle.x = Math.random() * canvas.width - canvas.width / 2;
          particle.y = Math.random() * canvas.height - canvas.height / 2;
          particle.z = maxDepth;
        }

        // Project 3D to 2D
        const scale = 1 / particle.z;
        const x2d = particle.x * scale + canvas.width / 2;
        const y2d = particle.y * scale + canvas.height / 2;

        // Draw line from previous position
        if (particle.px !== 0 && particle.py !== 0) {
          ctx.beginPath();
          ctx.moveTo(particle.px, particle.py);
          ctx.lineTo(x2d, y2d);
          const gradient = ctx.createLinearGradient(particle.px, particle.py, x2d, y2d);
          gradient.addColorStop(0, 'rgba(147, 51, 234, 0)');
          gradient.addColorStop(1, `rgba(147, 51, 234, ${0.3 * (1 - particle.z / maxDepth)})`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2 * (1 - particle.z / maxDepth);
          ctx.stroke();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, 2 * (1 - particle.z / maxDepth), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * (1 - particle.z / maxDepth)})`;
        ctx.fill();

        particle.px = x2d;
        particle.py = y2d;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};