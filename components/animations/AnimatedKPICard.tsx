import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface KPICardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const AnimatedKPICard: React.FC<KPICardProps> = ({
  value,
  label,
  prefix = '',
  suffix = '',
  decimals = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(value, (value * step) / steps);
        
        if (step >= steps) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(parseFloat(current.toFixed(decimals)));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glassmorphic-card p-6 text-center rounded-lg"
    >
      <motion.div 
        className="text-3xl md:text-4xl font-bold text-accent-blue"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {prefix}{displayValue.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </motion.div>
  );
};
