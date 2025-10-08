import React from "react";

export const KPI: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-sm border border-slate-200 p-6 bg-white hover:shadow-lg transition-shadow duration-200">
    <div className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm md:text-base text-slate-600 mt-2 font-medium">
      {label}
    </div>
  </div>
);
