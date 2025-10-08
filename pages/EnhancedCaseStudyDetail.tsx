import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { DETAILED_CASE_STUDIES } from '../data/detailedCaseStudies';
import { CinematicCaseStudy } from '../components/casestudy/CinematicCaseStudy';

const EnhancedCaseStudyDetail: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  
  // Check if we have a detailed version, otherwise fall back to basic
  const detailedStudy = DETAILED_CASE_STUDIES[caseStudyId || ''];
  const basicStudy = CASE_STUDIES.find(cs => cs.id === caseStudyId);
  const caseStudy = detailedStudy || basicStudy;

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const isDetailed = !!detailedStudy;

  // Transform data for cinematic view if detailed
  // DISABLED: Using standard layout for consistency across all case studies
  /*
  if (isDetailed && detailedStudy) {
    const cinematicData = {
      id: caseStudyId || '',
      title: detailedStudy.title,
      tagline: detailedStudy.client,
      client: detailedStudy.client,
      industry: detailedStudy.category,
      duration: detailedStudy.timeline?.duration || 'N/A',
      challenge: detailedStudy.challenge,
      solution: detailedStudy.solution,
      results: detailedStudy.results.join(' '),
      sections: [
        {
          title: 'The Challenge',
          content: detailedStudy.challenge,
          metrics: detailedStudy.performanceMetrics?.[0]?.metrics.map(m => ({
            label: m.label,
            value: parseInt(m.value.replace(/[^0-9]/g, '')) || 0,
            suffix: m.value.includes('%') ? '%' : undefined
          }))
        },
        {
          title: 'Our Solution',
          content: detailedStudy.solution,
          highlights: detailedStudy.features?.map(f => f.title)
        },
        {
          title: 'Implementation',
          content: detailedStudy.timeline?.breakdown?.map(p => p.phase).join(', ') || 'Strategic implementation phases',
          metrics: detailedStudy.businessImpact?.strategic.map(m => ({
            label: m.label,
            value: parseInt(m.value.replace(/[^0-9]/g, '')) || 0,
            suffix: m.value.includes('%') ? '%' : undefined
          }))
        },
        {
          title: 'Results & Impact',
          content: detailedStudy.results.join(' '),
          highlights: detailedStudy.businessImpact?.immediate
        }
      ],
      testimonial: detailedStudy.testimonial ? {
        quote: detailedStudy.testimonial,
        author: 'Client Stakeholder',
        role: detailedStudy.client
      } : undefined
    };

    return <CinematicCaseStudy caseStudy={cinematicData} />;
  }
  */

  // Executive layout for basic case studies
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Back Button */}
      <Link 
        to="/case-studies"
        className="inline-flex items-center text-[rgb(30,58,95)] hover:text-[rgb(10,22,40)] transition-colors font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Case Studies
      </Link>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[rgb(212,175,55)] uppercase tracking-wider">
            {caseStudy.category}
          </p>
          <h1 className="text-5xl font-bold text-gradient-navy font-['Playfair_Display']">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-[rgb(107,114,128)]">{caseStudy.client}</p>
        </div>

        {/* Hero Image */}
        <div className="aspect-video relative overflow-hidden rounded">
          <img 
            src={caseStudy.imageUrl} 
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-[rgba(10,22,40,0.04)] text-[rgb(30,58,95)] rounded border border-[rgba(10,22,40,0.06)] text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline Section (if detailed) */}
      {isDetailed && detailedStudy.timeline && (
        <div className="executive-card p-8">
          <div className="flex items-center mb-6">
            <svg className="w-6 h-6 text-[rgb(212,175,55)] mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <h2 className="text-2xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
              Implementation Timeline: {detailedStudy.timeline.duration}
            </h2>
          </div>
          {detailedStudy.timeline.breakdown && (
            <div className="space-y-6 mt-8">
              {detailedStudy.timeline.breakdown.map((phase, index) => (
                <div key={index} className="border-l-2 border-[rgb(212,175,55)] pl-6">
                  <h3 className="font-semibold text-lg mb-3 text-[rgb(10,22,40)]">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-[rgb(107,114,128)]">• {activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Challenge Section */}
        <div className="executive-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[rgb(212,175,55)] to-[rgb(184,148,28)]"></div>
            <h2 className="text-2xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
              The Challenge
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[rgb(107,114,128)]">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution Section */}
        <div className="executive-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[rgb(212,175,55)] to-[rgb(184,148,28)]"></div>
            <h2 className="text-2xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
              Our Solution
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[rgb(107,114,128)]">
            {caseStudy.solution}
          </p>
        </div>
      </div>

      {/* Technical Stack (if detailed) */}
      {isDetailed && detailedStudy.technicalStack && (
        <div className="executive-card p-8">
          <div className="flex items-center mb-6">
            <svg className="w-6 h-6 text-[rgb(212,175,55)] mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h2 className="text-2xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
              Technical Architecture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {detailedStudy.technicalStack.frontend && (
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[rgb(30,58,95)]">Frontend Stack</h3>
                <ul className="space-y-2">
                  {detailedStudy.technicalStack.frontend.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[rgb(212,175,55)] mr-2">▸</span>
                      <span className="text-[rgb(107,114,128)]">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {detailedStudy.technicalStack.backend && (
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[rgb(30,58,95)]">Backend Stack</h3>
                <ul className="space-y-2">
                  {detailedStudy.technicalStack.backend.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[rgb(212,175,55)] mr-2">▸</span>
                      <span className="text-[rgb(107,114,128)]">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {detailedStudy.technicalStack.keyDecisions && (
            <div className="mt-8 pt-8 border-t border-[rgba(10,22,40,0.08)]">
              <h3 className="font-semibold text-lg mb-4 text-[rgb(30,58,95)]">Key Architectural Decisions</h3>
              <ul className="space-y-3">
                {detailedStudy.technicalStack.keyDecisions.map((decision, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[rgb(212,175,55)] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[rgb(107,114,128)]">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Features Grid (if detailed) */}
      {isDetailed && detailedStudy.features && (
        <div>
          <h2 className="text-2xl font-bold mb-8 text-[rgb(10,22,40)] font-['Playfair_Display']">
            Key Features Delivered
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {detailedStudy.features.map((feature, index) => (
              <div key={index} className="executive-card p-6">
                <h3 className="font-semibold text-lg mb-3 text-[rgb(30,58,95)]">{feature.title}</h3>
                <p className="text-[rgb(107,114,128)] mb-4 leading-relaxed">{feature.description}</p>
                {feature.metrics && (
                  <ul className="space-y-2">
                    {feature.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-[rgb(107,114,128)]">
                        • {metric}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Metrics (if detailed) */}
      {isDetailed && detailedStudy.performanceMetrics && (
        <div>
          <h2 className="text-2xl font-bold mb-8 text-[rgb(10,22,40)] font-['Playfair_Display']">
            Performance Metrics
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {detailedStudy.performanceMetrics.map((category, index) => (
              <div key={index} className="executive-card p-6">
                <h3 className="font-semibold text-lg mb-5 text-[rgb(10,22,40)]">{category.category}</h3>
                <div className="space-y-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-sm text-[rgb(107,114,128)] mb-1">{metric.label}</p>
                      <p className="font-semibold text-[rgb(30,58,95)] text-2xl">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Section */}
      <div className="executive-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-[rgb(212,175,55)] to-[rgb(184,148,28)]"></div>
          <h2 className="text-2xl font-bold text-[rgb(10,22,40)] font-['Playfair_Display']">
            The Results
          </h2>
        </div>
        <div className="space-y-4">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-[rgba(212,175,55,0.03)] rounded">
              <svg className="w-6 h-6 text-[rgb(212,175,55)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg text-[rgb(31,41,55)]">{result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Impact (if detailed) */}
      {isDetailed && detailedStudy.businessImpact && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="executive-card p-8">
            <h3 className="text-xl font-bold mb-5 text-[rgb(10,22,40)] font-['Playfair_Display']">
              Immediate Results
            </h3>
            <ul className="space-y-3">
              {detailedStudy.businessImpact.immediate.map((impact, index) => (
                <li key={index} className="text-[rgb(107,114,128)] flex items-start">
                  <span className="text-[rgb(212,175,55)] mr-3">✓</span>
                  {impact}
                </li>
              ))}
            </ul>
          </div>
          <div className="executive-card p-8">
            <h3 className="text-xl font-bold mb-5 text-[rgb(10,22,40)] font-['Playfair_Display']">
              Strategic Value
            </h3>
            <div className="space-y-4">
              {detailedStudy.businessImpact.strategic.map((metric, index) => (
                <div key={index}>
                  <p className="text-sm text-[rgb(107,114,128)] mb-1">{metric.label}</p>
                  <p className="font-semibold text-[rgb(30,58,95)] text-lg">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonial (if detailed) */}
      {isDetailed && detailedStudy.testimonial && (
        <div className="premium-gradient rounded-lg p-10">
          <blockquote className="text-center">
            <p className="text-2xl italic mb-6 text-[rgb(250,250,249)] font-['Playfair_Display'] leading-relaxed">
              "{detailedStudy.testimonial}"
            </p>
            <cite className="text-[rgba(250,250,249,0.85)]">— Client Stakeholder</cite>
          </blockquote>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 premium-gradient rounded-lg p-10 text-center space-y-5">
        <h3 className="text-3xl font-bold text-[rgb(250,250,249)] font-['Playfair_Display']">
          Ready to Achieve Similar Results?
        </h3>
        <p className="text-[rgba(250,250,249,0.85)] text-lg">
          Let's discuss how we can help transform your business with rapid, sophisticated solutions.
        </p>
        <Link 
          to="/contact"
          className="executive-button-gold inline-block"
        >
          Start Your 72-Hour Sprint
        </Link>
      </div>
    </div>
  );
};

export default EnhancedCaseStudyDetail;