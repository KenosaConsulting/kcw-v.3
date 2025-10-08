import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  className?: string;
  title?: string;
  height?: number;
}

// Growth Metrics Chart
export const GrowthChart: React.FC<ChartProps & { data?: any }> = ({ 
  className = '', 
  title = 'Growth Metrics',
  height = 300,
  data
}) => {
  const defaultData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue Growth',
        data: [65, 78, 90, 110],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Client Acquisition',
        data: [45, 55, 70, 85],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: title,
        color: '#fff',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ height }}>
        <Line data={data || defaultData} options={options} />
      </div>
    </motion.div>
  );
};

// Performance Metrics Bar Chart
export const PerformanceChart: React.FC<ChartProps & { data?: any }> = ({ 
  className = '', 
  title = 'Performance Metrics',
  height = 300,
  data
}) => {
  const defaultData = {
    labels: ['Strategy', 'Implementation', 'Analysis', 'ROI', 'Satisfaction'],
    datasets: [
      {
        label: 'Current Quarter',
        data: [95, 88, 92, 85, 98],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
      {
        label: 'Previous Quarter',
        data: [85, 75, 88, 78, 92],
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
        borderColor: 'rgb(147, 51, 234)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: title,
        color: '#fff',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
        max: 100,
      },
    },
  };

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ height }}>
        <Bar data={data || defaultData} options={options} />
      </div>
    </motion.div>
  );
};

// Success Rate Doughnut Chart
export const SuccessRateChart: React.FC<ChartProps & { successRate?: number }> = ({ 
  className = '', 
  title = 'Project Success Rate',
  height = 300,
  successRate = 95
}) => {
  const data = {
    labels: ['Success', 'In Progress'],
    datasets: [
      {
        data: [successRate, 100 - successRate],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(255, 255, 255, 0.1)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgba(255, 255, 255, 0.2)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: title,
        color: '#fff',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 ${className}`}
      initial={{ opacity: 0, rotate: -180 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ height }}>
        <Doughnut data={data} options={options} />
      </div>
      <div className="text-center mt-4">
        <p className="text-3xl font-bold text-accent-blue">{successRate}%</p>
        <p className="text-sm text-gray-400">Success Rate</p>
      </div>
    </motion.div>
  );
};

// Skills Radar Chart
export const SkillsChart: React.FC<ChartProps> = ({ 
  className = '', 
  title = 'Core Competencies',
  height = 300 
}) => {
  const data = {
    labels: [
      'Strategy',
      'Market Research',
      'Data Analysis',
      'Implementation',
      'Innovation',
      'Leadership',
    ],
    datasets: [
      {
        label: 'Kenosa Consulting',
        data: [95, 90, 88, 92, 85, 94],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        color: '#fff',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#fff',
        },
        ticks: {
          color: '#fff',
          backdropColor: 'transparent',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ height }}>
        <Radar data={data} options={options} />
      </div>
    </motion.div>
  );
};