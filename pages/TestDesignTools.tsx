import React from 'react';
import { GlassCard, AnimatedButton } from '../components/ui/GlassComponents';
import { FadeIn } from '../components/animations/FramerAnimations';
import { MetricChart } from '../components/charts/MetricChart';

const TestDesignTools: React.FC = () => {
  const testData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Test Data',
      data: [12, 19, 3, 5, 2],
    }]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 to-black p-8">
      <FadeIn>
        <h1 className="text-4xl font-bold text-white mb-8">Design Tools Test Page</h1>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="p-6">
          <h2 className="text-2xl text-white mb-4">Glass Card Component</h2>
          <p className="text-white/80 mb-4">This is a glassmorphic card with backdrop blur.</p>
          <AnimatedButton variant="primary">Test Button</AnimatedButton>
        </GlassCard>
        
        <GlassCard className="p-6">
          <h2 className="text-2xl text-white mb-4">Chart Component</h2>
          <MetricChart type="bar" data={testData} className="h-64" />
        </GlassCard>
      </div>
    </div>
  );
};

export default TestDesignTools;