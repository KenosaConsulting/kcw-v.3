import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface MetricChartProps {
  type: 'line' | 'bar' | 'doughnut';
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
      fill?: boolean;
      tension?: number;
    }[];
  };
  options?: any;
  className?: string;
}

export const MetricChart: React.FC<MetricChartProps> = ({
  type,
  data,
  options = {},
  className = '',
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: type === 'doughnut' ? 'percent' : 'decimal',
                minimumFractionDigits: 0,
                maximumFractionDigits: type === 'doughnut' ? 1 : 0,
              }).format(type === 'doughnut' ? context.parsed / 100 : context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: type !== 'doughnut' ? {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 11,
          },
        },
      },
    } : undefined,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // Apply glassmorphic theme to data
  const themedData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: dataset.backgroundColor || 
        (type === 'line' 
          ? 'rgba(59, 130, 246, 0.1)'
          : type === 'doughnut'
          ? ['rgba(59, 130, 246, 0.6)', 'rgba(34, 197, 94, 0.6)', 'rgba(249, 115, 22, 0.6)', 'rgba(168, 85, 247, 0.6)']
          : 'rgba(59, 130, 246, 0.6)'),
      borderColor: dataset.borderColor || 
        (type === 'line'
          ? 'rgba(59, 130, 246, 1)'
          : type === 'doughnut'
          ? ['rgba(59, 130, 246, 1)', 'rgba(34, 197, 94, 1)', 'rgba(249, 115, 22, 1)', 'rgba(168, 85, 247, 1)']
          : 'rgba(59, 130, 246, 1)'),
      borderWidth: dataset.borderWidth || 2,
      tension: dataset.tension || 0.4,
    })),
  };

  const chartComponent = () => {
    switch (type) {
      case 'line':
        return <Line data={themedData} options={mergedOptions} />;
      case 'bar':
        return <Bar data={themedData} options={mergedOptions} />;
      case 'doughnut':
        return <Doughnut data={themedData} options={mergedOptions} />;
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full h-full min-h-[300px] bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/10 ${className}`}>
      {chartComponent()}
    </div>
  );
};