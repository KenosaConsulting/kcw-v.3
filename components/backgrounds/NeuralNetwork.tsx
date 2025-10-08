import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const NeuralNetwork: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const animationRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize nodes
    const initialNodes: Node[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));
    setNodes(initialNodes);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions
      const updatedNodes = nodes.map(node => {
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        let newVx = node.vx;
        let newVy = node.vy;

        // Bounce off walls
        if (newX <= 0 || newX >= canvas.width) {
          newVx = -newVx;
          newX = Math.max(0, Math.min(canvas.width, newX));
        }
        if (newY <= 0 || newY >= canvas.height) {
          newVy = -newVy;
          newY = Math.max(0, Math.min(canvas.height, newY));
        }

        return { ...node, x: newX, y: newY, vx: newVx, vy: newVy };
      });

      // Draw connections
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.1)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');

      updatedNodes.forEach((node, i) => {
        // Draw connections to nearby nodes
        updatedNodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 0.2 * (1 - distance / 150);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.globalAlpha = 0.5;
        ctx.fill();
      });

      setNodes(updatedNodes);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};