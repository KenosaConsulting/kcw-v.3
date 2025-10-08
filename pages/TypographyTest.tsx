import React from 'react';

const TypographyTest: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Test Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 font-serif mb-4">
          Typography Descender Test
        </h1>
        <p className="text-lg text-slate-600">
          This page tests for letter clipping issues with descenders (y, p, g, j, q)
        </p>
      </div>

      {/* Gradient Text Tests */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-800 font-serif border-b pb-2">
          Gradient Text Tests (with descender-safe class)
        </h2>
        
        <div className="space-y-6">
          {/* Test 1: Navy Gradient */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h1 className="font-serif text-6xl leading-tight text-gradient-navy descender-safe">
              ypgjq — Market Intelligence
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Navy gradient H1 with descenders - Should NOT be clipped
            </p>
          </div>

          {/* Test 2: Gold Gradient */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="font-serif text-4xl leading-snug text-gradient-gold descender-safe">
              Strategy & Analysis ypgjq
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Gold gradient H2 with descenders - Should NOT be clipped
            </p>
          </div>

          {/* Test 3: Mixed Sizes */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight text-gradient-navy descender-safe">
              Facing Complexity?
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Responsive gradient text - Should scale without clipping
            </p>
          </div>
        </div>
      </section>

      {/* Regular Text Tests */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-800 font-serif border-b pb-2">
          Regular Text Tests (standard line-height)
        </h2>
        
        <div className="space-y-6">
          {/* Test 4: Large Regular Text */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h1 className="font-serif text-6xl leading-tight text-executive-navy">
              Typography ypgjq Test
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Regular H1 with leading-tight (1.25)
            </p>
          </div>

          {/* Test 5: Body Text */}
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <p className="text-xl leading-[1.7]">
              Body check: The letters y, p, g, j, q should never be clipped. 
              This paragraph uses leading-[1.7] for optimal readability.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Body text with proper line height
            </p>
          </div>
        </div>
      </section>

      {/* Line Height Comparison */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-800 font-serif border-b pb-2">
          Before/After Line Height Comparison
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bad Example */}
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4">
              ❌ OLD (leading-[1.05] - Will Clip)
            </h3>
            <h1 className="font-serif text-5xl leading-[1.05] text-gradient-navy">
              Facing Complexity?
            </h1>
            <p className="text-sm text-red-600 mt-2">
              Tight line height causes descender clipping
            </p>
          </div>

          {/* Good Example */}
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              ✅ NEW (leading-tight + descender-safe)
            </h3>
            <h1 className="font-serif text-5xl leading-tight text-gradient-navy descender-safe">
              Facing Complexity?
            </h1>
            <p className="text-sm text-green-600 mt-2">
              Proper line height prevents clipping
            </p>
          </div>
        </div>
      </section>

      {/* All Gradient Variations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-800 font-serif border-b pb-2">
          All Service Page Headings Test
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-navy descender-safe font-serif mb-6 leading-tight">
              Our Services ypgjq
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <p className="text-3xl font-bold text-gradient-gold descender-safe font-serif leading-snug">
                90,000+
              </p>
              <p className="text-3xl font-bold text-gradient-gold descender-safe font-serif leading-snug">
                677+
              </p>
              <p className="text-3xl font-bold text-gradient-gold descender-safe font-serif leading-snug">
                52+
              </p>
              <p className="text-3xl font-bold text-gradient-gold descender-safe font-serif leading-snug">
                600%
              </p>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              All service page gradient elements should display properly
            </p>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="bg-slate-100 rounded-lg p-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Verification Checklist
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>All descenders (y, p, g, j, q) should be fully visible</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Gradient text should not have cut-off bottoms</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Line heights should feel comfortable and not cramped</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>All heading sizes should scale properly on different screens</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TypographyTest;
