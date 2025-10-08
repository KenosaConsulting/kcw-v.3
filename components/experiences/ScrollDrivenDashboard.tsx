import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MetricChart } from '../charts/MetricChart';
import { LottiePlayer } from '../animations/LottiePlayer';
import { GlassCard } from '../ui/GlassComponents';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const generateGrowthData = () => ({
  labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [{
    label: 'Revenue Growth',
    data: [45, 68, 95, 142, 198, 276],
    borderColor: 'rgba(59, 130, 246, 1)',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    tension: 0.4,
    fill: true
  }]
});

const generateClientData = () => ({
  labels: ['Federal', 'State', 'Commercial', 'Non-Profit', 'International'],
  datasets: [{
    label: 'Client Distribution',
    data: [45, 23, 18, 8, 6],
    backgroundColor: [
      'rgba(59, 130, 246, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
      'rgba(34, 197, 94, 0.8)',
      'rgba(251, 146, 60, 0.8)'
    ],
    borderWidth: 0
  }]
});

export const ScrollDrivenDashboard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    value: 0,
    retention: 0
  });

  useGSAP(() => {
    const sections = gsap.utils.toArray('.data-section');
    
    // Pin and transform each section
    sections.forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          // Trigger chart animations
          const chartContainer = section.querySelector('.chart-container');
          if (chartContainer) {
            gsap.to(chartContainer, {
              scale: 1,
              opacity: 1,
              duration: 1.5,
              ease: 'power3.out'
            });
          }
          
          // Animate value counters
          const counter = section.querySelector('.counter');
          if (counter) {
            const targetValue = parseInt(counter.dataset.value || '0');
            const duration = 2;
            const steps = 60;
            let currentStep = 0;
            
            const interval = setInterval(() => {
              currentStep++;
              if (currentStep === steps) {
                setCounters(prev => ({
                  ...prev,
                  [counter.dataset.type || 'projects']: targetValue
                }));
                clearInterval(interval);
              } else {
                setCounters(prev => ({
                  ...prev,
                  [counter.dataset.type || 'projects']: Math.round((targetValue / steps) * currentStep)
                }));
              }
            }, (duration * 1000) / steps);
          }
        },
        markers: false
      });
    });
    
    // Parallax layers
    gsap.to('.bg-layer-1', {
      yPercent: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top top',
        end: 'bottom top'
      }
    });

    // Floating elements animation
    gsap.to('.floating-element', {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-10, 10)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.2,
        from: 'random'
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative -mx-4 md:-mx-8">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-layer-1 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="floating-element absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="floating-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="floating-element absolute top-3/4 left-3/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Success Metrics Section */}
      <section className="data-section min-h-screen flex items-center py-20 px-4 md:px-8">
        <GlassCard className="p-8 md:p-12 max-w-5xl mx-auto w-full" blur="lg" opacity={10}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              <span className="counter" data-value="500" data-type="projects">{counters.projects}</span>+
            </h2>
            <p className="text-xl md:text-2xl text-white/80">Successful Projects Delivered</p>
          </motion.div>
          
          <div className="chart-container opacity-0 scale-90">
            <MetricChart 
              type="line" 
              data={generateGrowthData()}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    labels: {
                      color: 'rgba(255, 255, 255, 0.8)',
                      font: {
                        size: 14
                      }
                    }
                  },
                  tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    borderWidth: 1
                  }
                },
                scales: {
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: 'rgba(255, 255, 255, 0.6)'
                    }
                  },
                  y: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: 'rgba(255, 255, 255, 0.6)',
                      callback: function(value: any) {
                        return '$' + value + 'M';
                      }
                    }
                  }
                }
              }}
              className="h-64 md:h-96"
            />
          </div>
        </GlassCard>
      </section>

      {/* Client Distribution Section */}
      <section className="data-section min-h-screen flex items-center py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8" blur="md" opacity={15}>
                <h3 className="text-3xl font-bold mb-6 text-white">Client Portfolio</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Client Retention Rate</span>
                    <span className="text-2xl font-bold text-blue-400">
                      <span className="counter" data-value="95" data-type="retention">{counters.retention}</span>%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Active Clients</span>
                    <span className="text-2xl font-bold text-purple-400">
                      <span className="counter" data-value="127" data-type="clients">{counters.clients}</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Total Value Delivered</span>
                    <span className="text-2xl font-bold text-green-400">
                      $<span className="counter" data-value="2" data-type="value">{counters.value}</span>.5B
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="chart-container opacity-0 scale-90"
            >
              <GlassCard className="p-8" blur="md" opacity={15}>
                <MetricChart 
                  type="doughnut" 
                  data={generateClientData()}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom' as const,
                        labels: {
                          color: 'rgba(255, 255, 255, 0.8)',
                          padding: 20,
                          font: {
                            size: 12
                          }
                        }
                      },
                      tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff'
                      }
                    }
                  }}
                  className="h-64"
                />
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Grid */}
      <section className="data-section min-h-screen flex items-center py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            Excellence in Every Metric
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Project Success Rate', value: 98, color: 'from-blue-500 to-cyan-500' },
              { label: 'On-Time Delivery', value: 96, color: 'from-purple-500 to-pink-500' },
              { label: 'Client Satisfaction', value: 99, color: 'from-green-500 to-emerald-500' },
              { label: 'ROI Generated', value: 342, suffix: '%', color: 'from-yellow-500 to-orange-500' },
              { label: 'Team Expertise', value: 94, color: 'from-red-500 to-rose-500' },
              { label: 'Innovation Index', value: 91, color: 'from-indigo-500 to-blue-500' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center group hover:scale-105 transition-transform duration-300" blur="sm" opacity={20}>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        className={`stroke-current`}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: metric.value / (metric.suffix === '%' && metric.value > 100 ? 400 : 100) }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        style={{
                          strokeDasharray: '352',
                          stroke: `url(#gradient-${index})`
                        }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`}>
                          <stop offset="0%" className={`${metric.color.split(' ')[0].replace('from-', 'text-')}`} />
                          <stop offset="100%" className={`${metric.color.split(' ')[1].replace('to-', 'text-')}`} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {metric.value}{metric.suffix || '%'}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-white/90">{metric.label}</h4>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};