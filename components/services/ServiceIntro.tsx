import React from "react";
import type { Service } from "../../data/services";

export const ServiceIntro: React.FC<{ service: Service }> = ({ service }) => {
  // Extract first sentence for the tagline
  const firstSentence = service.unified.split('.')[0] + '.';
  
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-4xl">
        {/* Header with blue accent line */}
        <div className="border-l-4 border-[rgb(59,130,246)] pl-8 mb-12">
          <p className="text-sm uppercase tracking-widest text-[rgb(107,114,128)] mb-3">SERVICE OFFERING</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[rgb(10,22,40)] leading-tight">
            {service.title}
          </h1>
          <p className="text-xl italic text-[rgb(107,114,128)] leading-relaxed">
            "{firstSentence}"
          </p>
          {service.signatureVisual && (
            <p className="text-sm text-[rgb(212,175,55)] font-medium mt-4">
              Core Deliverable: {service.signatureVisual}
            </p>
          )}
        </div>

        {/* Challenge Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[rgb(10,22,40)] mb-4">The Challenge</h2>
          <p className="text-[rgb(75,85,99)] leading-relaxed">
            {service.unified}
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[rgb(10,22,40)] mb-4">How It Works</h2>
          <p className="text-[rgb(75,85,99)] leading-relaxed">
            We combine deep domain expertise with systematic methodologies to deliver results. Our approach integrates primary research, data analysis, and strategic frameworks tailored to your specific context and objectives.
          </p>
        </div>

        {/* Impact / Deliverables */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[rgb(10,22,40)] mb-4">Impact</h2>
            <ul className="space-y-4">
              {service.deliverables.map((deliverable, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[rgb(212,175,55)] mt-1 flex-shrink-0">•</span>
                  <div className="flex-1">
                    <span className="font-semibold text-[rgb(10,22,40)]">{deliverable.title}</span>
                    {deliverable.detail && (
                      <>
                        {' '}<span className="text-[rgb(75,85,99)]">— {deliverable.detail}</span>
                      </>
                    )}
                    {deliverable.sample && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-[rgba(212,175,55,0.1)] text-[rgb(184,148,28)] rounded">
                        Sample available
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
