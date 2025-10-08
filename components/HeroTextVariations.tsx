import React, { useState, useEffect } from 'react';

// Version 1: Direct Problem/Solution
const HeroTextV1: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Facing Complexity?</span>
    <br />
    <span className="text-executive-navy">We Bring Clarity.</span>
  </h1>
);

// Version 2: Market Focused
const HeroTextV2: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Markets Shifting?</span>
    <br />
    <span className="text-executive-navy">We See Opportunity.</span>
  </h1>
);

// Version 3: Decision Focused
const HeroTextV3: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Tough Decisions?</span>
    <br />
    <span className="text-executive-navy">Data-Driven Answers.</span>
  </h1>
);

// Version 4: Growth Oriented
const HeroTextV4: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Ready to Scale?</span>
    <br />
    <span className="text-executive-navy">Strategic Intelligence Inside.</span>
  </h1>
);

// Version 5: Uncertainty Focus
const HeroTextV5: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Navigating Uncertainty?</span>
    <br />
    <span className="text-executive-navy">Intelligence That Guides.</span>
  </h1>
);

// Version 6: Competition Angle
const HeroTextV6: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Competition Intensifying?</span>
    <br />
    <span className="text-executive-navy">Get The Edge.</span>
  </h1>
);

// Version 7: Federal/Gov Focus
const HeroTextV7: React.FC = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-slate-600">Pursuing Federal Contracts?</span>
    <br />
    <span className="text-executive-navy">Win With Intelligence.</span>
  </h1>
);

// Version 8: Animated Question with Static Answer
const HeroTextAnimated: React.FC = () => {
  const questions = [
    "Facing Complexity?",
    "Markets Shifting?", 
    "Need Direction?",
    "Seeking Growth?"
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
      <span className="text-slate-600">
        <span key={currentQuestion} className="inline-block animate-fade-in">
          {questions[currentQuestion]}
        </span>
      </span>
      <br />
      <span className="text-executive-navy">We Have Answers.</span>
    </h1>
  );
};

export { 
  HeroTextV1, 
  HeroTextV2, 
  HeroTextV3, 
  HeroTextV4, 
  HeroTextV5, 
  HeroTextV6, 
  HeroTextV7,
  HeroTextAnimated 
};