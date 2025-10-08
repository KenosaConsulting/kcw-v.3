import React, { useState, useEffect } from 'react';
import { MetricChart } from '../components/charts/MetricChart';
import { GlassCard, ProgressBar } from '../components/ui/GlassComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Target,
  Activity,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

// Data generation functions
const generateInitialData = () => ({
  revenue: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 100),
  clients: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 40),
  projects: Array.from({ length: 30 }, () => Math.floor(Math.random() * 15) + 25),
  satisfaction: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 85)
});

const updateDataWithTrend = (data: any) => {
  const trend = 1 + (Math.random() - 0.45) * 0.1; // Slight upward trend
  return {
    revenue: [...data.revenue.slice(1), Math.floor(data.revenue[data.revenue.length - 1] * trend)],
    clients: [...data.clients.slice(1), Math.floor(data.clients[data.clients.length - 1] * (1 + (Math.random() - 0.4) * 0.05))],
    projects: [...data.projects.slice(1), Math.floor(data.projects[data.projects.length - 1] * (1 + (Math.random() - 0.45) * 0.08))],
    satisfaction: [...data.satisfaction.slice(1), Math.min(100, Math.floor(data.satisfaction[data.satisfaction.length - 1] * (1 + (Math.random() - 0.45) * 0.02)))]
  };
};

const calculateChange = (arr: number[]) => {
  if (arr.length < 2) return 0;
  const current = arr[arr.length - 1];
  const previous = arr[arr.length - 2];
  return ((current - previous) / previous) * 100;
};

const formatValue = (value: number, type: string) => {
  switch (type) {
    case 'revenue':
      return `$${(value / 100).toFixed(1)}M`;
    case 'clients':
      return value.toString();
    case 'projects':
      return value.toString();
    case 'satisfaction':
      return `${value}%`;
    default:
      return value.toString();
  }
};

const generateSparklinePoints = (data: number[]) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  return data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 40 - ((value - min) / range) * 35;
    return `${x},${y}`;
  }).join(' ');
};

const generateChartData = (liveData: any, metric: string) => {
  const labels = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString('en', { month: 'short', day: 'numeric' });
  });

  return {
    labels,
    datasets: [{
      label: metric.charAt(0).toUpperCase() + metric.slice(1),
      data: liveData[metric],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };
};

const MetricCard: React.FC<{
  icon: React.ElementType;
  title: string;
  value: string | number;
  change: number;
  sparkline: number[];
  color: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ icon: Icon, title, value, change, sparkline, color, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <GlassCard 
        className={`p-6 transition-all ${
          isSelected ? 'ring-2 ring-blue-500' : ''
        }`}
        blur="md"
        opacity={25}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${color}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-white/60">
                {title}
              </h3>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-3xl font-bold text-white"
              >
                {value}
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            animate={{ 
              color: change > 0 ? '#10b981' : '#ef4444',
              rotate: change > 0 ? 0 : 180
            }}
            className="flex items-center gap-1"
          >
            {change > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
            <span className="text-sm font-medium">
              {Math.abs(change).toFixed(1)}%
            </span>
          </motion.div>
        </div>
        
        {/* Mini sparkline */}
        <svg className="w-full h-12">
          <defs>
            <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          <motion.polyline
            fill="none"
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth="2"
            points={generateSparklinePoints(sparkline)}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.polygon
            fill={`url(#gradient-${title})`}
            points={`${generateSparklinePoints(sparkline)} 100,40 0,40`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </svg>
      </GlassCard>
    </motion.div>
  );
};

const AnalyticsDashboard: React.FC = () => {
  const [liveData, setLiveData] = useState(generateInitialData());
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [isPaused, setIsPaused] = useState(false);
  
  // Simulate real-time updates
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setLiveData(prev => updateDataWithTrend(prev));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const metrics = {
    revenue: {
      icon: DollarSign,
      title: 'Revenue',
      current: liveData.revenue[liveData.revenue.length - 1],
      change: calculateChange(liveData.revenue),
      sparkline: liveData.revenue.slice(-20),
      color: 'from-green-500 to-emerald-500'
    },
    clients: {
      icon: Users,
      title: 'Active Clients',
      current: liveData.clients[liveData.clients.length - 1],
      change: calculateChange(liveData.clients),
      sparkline: liveData.clients.slice(-20),
      color: 'from-blue-500 to-cyan-500'
    },
    projects: {
      icon: Target,
      title: 'Projects',
      current: liveData.projects[liveData.projects.length - 1],
      change: calculateChange(liveData.projects),
      sparkline: liveData.projects.slice(-20),
      color: 'from-purple-500 to-pink-500'
    },
    satisfaction: {
      icon: Activity,
      title: 'Satisfaction',
      current: liveData.satisfaction[liveData.satisfaction.length - 1],
      change: calculateChange(liveData.satisfaction),
      sparkline: liveData.satisfaction.slice(-20),
      color: 'from-yellow-500 to-orange-500'
    }
  };

  // Additional chart data
  const distributionData = {
    labels: ['Federal', 'State', 'Commercial', 'Non-Profit'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(34, 197, 94, 0.8)'
      ],
      borderWidth: 0
    }]
  };

  const performanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Target',
        data: [65, 70, 75, 80],
        backgroundColor: 'rgba(156, 163, 175, 0.3)',
        borderColor: 'rgba(156, 163, 175, 1)',
        borderWidth: 2
      },
      {
        label: 'Actual',
        data: [68, 74, 82, 91],
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-navy-950 via-navy-900 to-black">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
                animate={{
                  strokeDasharray: ['0 160', '140 160', '140 160', '0 160'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Analytics Dashboard</h1>
              <p className="text-white/60">Real-time business intelligence and performance metrics</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            >
              {isPaused ? 'Resume Updates' : 'Pause Updates'}
            </motion.button>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(metrics).map(([key, metric]) => (
            <MetricCard
              key={key}
              icon={metric.icon}
              title={metric.title}
              value={formatValue(metric.current, key)}
              change={metric.change}
              sparkline={metric.sparkline}
              color={metric.color}
              isSelected={selectedMetric === key}
              onClick={() => setSelectedMetric(key)}
            />
          ))}
        </div>

        {/* Main Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Trend Chart */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6" blur="md" opacity={20}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)} Trend
                </h3>
                <LineChart className="w-5 h-5 text-white/60" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMetric}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <MetricChart
                    type="line"
                    data={generateChartData(liveData, selectedMetric)}
                    options={{
                      responsive: true,
                      animation: {
                        duration: 750,
                        easing: 'easeInOutQuart'
                      },
                      plugins: {
                        legend: { display: false },
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
                          grid: { color: 'rgba(255, 255, 255, 0.1)' },
                          ticks: { color: 'rgba(255, 255, 255, 0.6)' }
                        },
                        y: {
                          grid: { color: 'rgba(255, 255, 255, 0.1)' },
                          ticks: { 
                            color: 'rgba(255, 255, 255, 0.6)',
                            callback: function(value: any) {
                              return formatValue(value, selectedMetric);
                            }
                          }
                        }
                      }
                    }}
                    className="h-64"
                  />
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* Client Distribution */}
          <div>
            <GlassCard className="p-6" blur="md" opacity={20}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Client Mix</h3>
                <PieChart className="w-5 h-5 text-white/60" />
              </div>
              <MetricChart
                type="doughnut"
                data={distributionData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'bottom' as const,
                      labels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: 15,
                        font: { size: 11 }
                      }
                    }
                  }
                }}
                className="h-56"
              />
            </GlassCard>
          </div>
        </div>

        {/* Performance Comparison */}
        <GlassCard className="p-6 mb-8" blur="md" opacity={20}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Quarterly Performance</h3>
            <BarChart3 className="w-5 h-5 text-white/60" />
          </div>
          <MetricChart
            type="bar"
            data={performanceData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    font: { size: 12 }
                  }
                },
                tooltip: {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  titleColor: '#fff',
                  bodyColor: '#fff'
                }
              },
              scales: {
                x: {
                  grid: { color: 'rgba(255, 255, 255, 0.1)' },
                  ticks: { color: 'rgba(255, 255, 255, 0.6)' }
                },
                y: {
                  grid: { color: 'rgba(255, 255, 255, 0.1)' },
                  ticks: { 
                    color: 'rgba(255, 255, 255, 0.6)',
                    callback: function(value: any) {
                      return '$' + value + 'M';
                    }
                  }
                }
              }
            }}
            className="h-64"
          />
        </GlassCard>

        {/* Project Status Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Projects On Track', value: 94, color: 'green' },
            { label: 'Client Satisfaction', value: 98, color: 'blue' },
            { label: 'Team Utilization', value: 87, color: 'purple' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6" blur="md" opacity={20}>
                <h4 className="text-white/80 mb-4">{item.label}</h4>
                <div className="text-3xl font-bold text-white mb-4">{item.value}%</div>
                <ProgressBar
                  progress={item.value}
                  color={item.color as any}
                  animated
                  showPercentage={false}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;