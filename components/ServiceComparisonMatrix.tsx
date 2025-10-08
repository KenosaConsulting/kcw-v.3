import React from 'react';
import { SERVICES } from '../constants';

export const ServiceComparisonMatrix: React.FC = () => {
  const allFeatures = Array.from(new Set(SERVICES.flatMap(s => s.features)));

  return (
    <div className="overflow-x-auto border border-[rgba(10,22,40,0.08)] rounded">
      <table className="w-full min-w-[800px] text-sm relative">
        <thead>
          <tr className="bg-[rgba(250,250,249,0.98)]">
            <th 
              scope="col" 
              className="px-6 py-4 text-left font-semibold text-[rgb(10,22,40)] sticky top-20 left-0 z-40 bg-[rgba(250,250,249,0.98)] shadow-[0_1px_3px_rgba(10,22,40,0.08)] border-b border-[rgba(10,22,40,0.08)]"
            >
              Feature
            </th>
            {SERVICES.map(service => (
              <th 
                key={service.id} 
                scope="col" 
                className="px-6 py-4 text-center font-semibold text-[rgb(10,22,40)] sticky top-20 z-30 bg-[rgba(250,250,249,0.98)] shadow-[0_1px_3px_rgba(10,22,40,0.08)] border-b border-[rgba(10,22,40,0.08)]"
              >
                {service.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, index) => (
            <tr key={feature} className={`border-t border-[rgba(10,22,40,0.06)] hover:bg-[rgba(212,175,55,0.03)] group ${index % 2 === 0 ? 'bg-[rgba(250,250,249,0.5)]' : ''}`}>
              <th scope="row" className="px-6 py-4 font-medium text-[rgb(30,58,95)] text-left whitespace-nowrap sticky left-0 bg-inherit z-10">
                {feature}
              </th>
              {SERVICES.map(service => (
                <td key={service.id} className="px-6 py-4 text-center">
                  {service.features.includes(feature) && (
                    <svg className="w-5 h-5 text-[rgb(212,175,55)] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};