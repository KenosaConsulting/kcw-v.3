import React from 'react';

export const CaseStudySkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="bg-navy-light h-48 rounded-t-lg"/>
    <div className="p-6 space-y-3">
      <div className="h-4 bg-navy-light rounded w-1/3"/>
      <div className="h-6 bg-navy-light rounded w-3/4"/>
      <div className="space-y-2">
        <div className="h-3 bg-navy-light rounded"/>
        <div className="h-3 bg-navy-light rounded w-5/6"/>
      </div>
    </div>
  </div>
);