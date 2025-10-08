import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { GlassCard, AnimatedButton, ProgressBar } from '../ui/GlassComponents';
import { LottiePlayer } from '../animations/LottiePlayer';
import { 
  Shield, 
  Globe, 
  Brain, 
  TrendingUp,
  Award,
  Users,
  Target,
  Zap,
  Database
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metrics: {
    success: number;
    value: string;
    clients: number;
  };
  features: string[];
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 'federal',
    title: 'Federal Contracting',
    description: 'Navigate complex federal acquisition processes with expert guidance and proven strategies.',
    icon: Shield,
    metrics: { success: 98, value: '$2.3B', clients: 145 },
    features: ['GSA Schedules', 'SEWP Contracts', 'Security Clearance', 'Compliance Management'],
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'intelligence',
    title: 'Strategic Intelligence',
    description: 'Transform data into actionable insights with advanced analytics and market intelligence.',
    icon: Brain,
    metrics: { success: 95, value: '$850M', clients: 89 },
    features: ['Competitive Analysis', 'Market Research', 'Risk Assessment', 'Predictive Modeling'],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    description: 'Modernize operations with cutting-edge technology solutions and innovation strategies.',
    icon: Globe,
    metrics: { success: 92, value: '$1.1B', clients: 203 },
    features: ['Cloud Migration', 'AI Integration', 'Process Automation', 'Digital Strategy'],
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'growth',
    title: 'Growth Strategy',
    description: 'Accelerate business expansion with data-driven strategies and market positioning.',
    icon: TrendingUp,
    metrics: { success: 94, value: '$640M', clients: 167 },
    features: ['Market Entry', 'Partnership Development', 'Revenue Optimization', 'Scaling Operations'],
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'advisory',
    title: 'Executive Advisory',
    description: 'Strategic counsel for C-suite leaders navigating complex business challenges.',
    icon: Award,
    metrics: { success: 97, value: '$920M', clients: 78 },
    features: ['Board Advisory', 'Leadership Coaching', 'Crisis Management', 'Succession Planning'],
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'innovation',
    title: 'Innovation Labs',
    description: 'Incubate breakthrough ideas and transform concepts into market-ready solutions.',
    icon: Zap,
    metrics: { success: 89, value: '$450M', clients: 112 },
    features: ['R&D Strategy', 'Prototype Development', 'Innovation Workshops', 'Tech Scouting'],
    color: 'yellow',
    gradient: 'from-yellow-500 to-amber-500'
  }
];

const ServiceCard3D: React.FC<{ 
  service: Service; 
  onSelect: (service: Service) => void;
  index: number;
}> = ({ service, onSelect, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const Icon = service.icon;

  return (
    <motion.div
      style={{ 
        rotateX, 
        rotateY, 
        z: 100,
        perspective: 1000
      }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
      whileHover={{ scale: 1.05, z: 200 }}
      onMotionValueChange={(latest: any) => {
        x.set(latest.x || 0);
        y.set(latest.y || 0);
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="preserve-3d cursor-grab active:cursor-grabbing"
    >
      <GlassCard 
        className="p-6 h-full transform-gpu"
        blur="md"
        opacity={25}
        hover={false}
      >
        {/* Animated Icon Container */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative"
        >
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${service.gradient} p-0.5`}>
            <div className="w-full h-full bg-navy-primary rounded-full flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          
          {/* Floating particles */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full`}
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: [0, 40 * Math.cos(i * 120 * Math.PI / 180), 0],
                  y: [0, 40 * Math.sin(i * 120 * Math.PI / 180), 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-white text-center">
          {service.title}
        </h3>
        
        <p className="text-sm text-white/70 mb-4 text-center line-clamp-2">
          {service.description}
        </p>
        
        {/* Success Rate Ring */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="6"
              fill="none"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="40"
              stroke={`url(#gradient-${service.id})`}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: service.metrics.success / 100 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 + 0.3 }}
              style={{
                strokeDasharray: '251.2',
              }}
            />
            <defs>
              <linearGradient id={`gradient-${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={`${service.gradient.split(' ')[0].replace('from-', 'text-')}`} />
                <stop offset="100%" className={`${service.gradient.split(' ')[1].replace('to-', 'text-')}`} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">{service.metrics.success}%</span>
            <span className="text-xs text-white/60">Success</span>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex justify-around mb-4 text-center">
          <div>
            <div className="text-lg font-bold text-white">{service.metrics.value}</div>
            <div className="text-xs text-white/60">Value</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{service.metrics.clients}</div>
            <div className="text-xs text-white/60">Clients</div>
          </div>
        </div>
        
        <AnimatedButton
          variant="glass"
          className="w-full"
          onClick={() => onSelect(service)}
        >
          Explore Service →
        </AnimatedButton>
      </GlassCard>
    </motion.div>
  );
};

const ServiceDetailModal: React.FC<{
  service: Service | null;
  onClose: () => void;
}> = ({ service, onClose }) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full"
          >
            <GlassCard className="p-8 md:p-12" blur="xl" opacity={30}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} p-0.5`}>
                  <div className="w-full h-full bg-navy-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  <p className="text-white/70">{service.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{service.metrics.success}%</div>
                  <div className="text-sm text-white/60">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{service.metrics.value}</div>
                  <div className="text-sm text-white/60">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{service.metrics.clients}</div>
                  <div className="text-sm text-white/60">Active Clients</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Core Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                <div className="space-y-3">
                  <ProgressBar
                    progress={service.metrics.success}
                    label="Client Satisfaction"
                    color={service.color as any}
                    animated
                  />
                  <ProgressBar
                    progress={85 + Math.random() * 10}
                    label="On-Time Delivery"
                    color={service.color as any}
                    animated
                  />
                  <ProgressBar
                    progress={90 + Math.random() * 8}
                    label="ROI Generated"
                    color={service.color as any}
                    animated
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <AnimatedButton
                  variant="primary"
                  className="flex-1"
                  onClick={() => window.location.href = `/services/${service.id}`}
                >
                  View Full Details
                </AnimatedButton>
                <AnimatedButton
                  variant="ghost"
                  className="flex-1"
                  onClick={onClose}
                >
                  Close
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Service3DShowcase: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Service Excellence
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Interactive 3D cards showcase our comprehensive service portfolio. 
            Drag, explore, and discover how we drive transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard3D
              key={service.id}
              service={service}
              onSelect={setSelectedService}
              index={index}
            />
          ))}
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};