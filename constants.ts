import { Service, CaseStudy, CaseStudyCategory, PricingTier } from './types';
import { TargetIcon, UsersIcon, BriefcaseIcon, LightbulbIcon, ShieldCheckIcon, TrendingUpIcon } from './components/icons';

// FIX: Added full content for constants.ts
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/clients', label: 'Clients' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
];

export const SERVICES: Service[] = [
  {
    id: 'market-intelligence',
    title: 'Market Intelligence',
    heroMessaging: 'Stop guessing which agencies to chase. We deliver four-year, agency-level roadmaps with evidence you can defend in the boardroom—built from 677+ strategic artifacts across 12+ agencies and forecasting through FY2029. Clients use this to systematize capture and stop reactive pursuits.',
    expandedDescription: 'Federal markets reward foresight. Most firms stitch ad-hoc intel and miss the signal. We fuse FPDS/USAspending, agency forecasts, congressional language, org charts, and oversight reports into a single source of truth that ranks where you can actually win. Our method codifies demand drivers, budget intent, office-level priorities, and teaming pathways, then converts them into a prioritized opportunity pipeline and account plans. Result: leaders make explainable go/no-go calls, align vehicles and partners early, and pre-position for out-year awards. In one engagement we produced 677+ artifacts and 4-year roadmaps across 12+ agencies; in another, we validated fragmented SMB behavior to drive a 300%+ program adoption lift.',
    icon: TargetIcon,
    features: [
      { title: 'Agency Roadmap Engine', description: '4-year plans per bureau with FY2026–FY2029 budget linkages.' },
      { title: 'Evidence Graph', description: '147+ org charts + IG/GAO/OMB citations mapped to pursuits.' },
      { title: 'Opportunity Genome', description: 'Live clustering of 21,000+ federal opportunities for fit scoring.' }
    ],
    deliverables: [
      { title: '50-page Agency Dossier per target', description: '(budgets, orgs, priorities) to FY2029', sampleAvailable: true },
      { title: 'Prioritized Capture Heatmap', description: '(Now / Next / Nurture) with vehicle pathways', sampleAvailable: true },
      { title: 'Executive Portfolio Brief', description: '(10 slides) for monthly BD reviews', sampleAvailable: true }
    ],
    caseStudyIntegration: 'Like we did for a Native-owned 8(a) SDB—677+ artifacts and 12+ agency roadmaps—enabling systematic, multi-agency targeting. Like we did for a national SMB organization—behavioral research that drove 300%+ adoption.',
    proofMetrics: ['677+ artifacts', '12+ agency roadmaps', '300%+ adoption lift'],
    signatureVisual: 'Agency Heatmap',
    crossSellServices: ['competitive-analysis', 'g2m-strategy']
  },
  {
    id: 'competitive-analysis',
    title: 'Competitive Analysis',
    heroMessaging: 'Your competitors aren\'t beating you on proposals—they\'re beating you on process and positioning. We expose how they price, partner, and prime, using proof: 500+ competitor profiles mapped and 600% pricing variance quantified across a fragmented market.',
    expandedDescription: '"Who are we really up against?" We answer with evidence. Beyond surface SWOTs, we deconstruct rival operating models: capture rituals, color-team discipline, teaming patterns, rates, subcontracting recipes, and compliance posture. We benchmark execution maturity and identify exploitable gaps—then arm your teams with battlecards and position lines that win color-team rooms. For one client we built 500+ profiles and 200+ exec contacts, quantifying 600% price spread to reset bids. For a scaling 8(a) we installed enterprise SOPs that cut cycle time 35% and halved proposal rework—turning intel into repeatable advantage.',
    icon: UsersIcon,
    features: [
      { title: 'Rate & Pricing Telescope', description: 'Normalize and compare list/rate-card/practice-level pricing across cohorts in 10 days.' },
      { title: 'Playbook Teardown', description: 'Harvesting capture/proposal rituals to reveal chokepoints (e.g., where they habitually lose).' },
      { title: 'Partner Map Miner', description: 'Graph teaming constellations by NAICS/PSC and office to spot flanking entries.' }
    ],
    deliverables: [
      { title: 'Head-to-Head Battlecards', description: '(5–10 targets) with win themes and objection counters', sampleAvailable: true },
      { title: 'Competitive Landscape Matrix', description: 'With rate bands and likely teaming primes/subs', sampleAvailable: true },
      { title: 'Positioning Map', description: 'That translates gaps into differentiators for evaluators', sampleAvailable: true }
    ],
    caseStudyIntegration: 'Like we did for an ERC entrant—500+ profiles and 600% pricing variance surfaced. Like we did for a rapidly scaling 8(a)—SOP system reduced cycle time 35% and proposal rework 50%.',
    proofMetrics: ['500+ profiles', '600% pricing variance', '35% cycle reduction'],
    signatureVisual: 'Head-to-Head Matrix',
    crossSellServices: ['market-intelligence', 'g2m-strategy']
  },
  {
    id: 'g2m-strategy',
    title: 'Go-to-Market Strategy',
    heroMessaging: 'Launch with pipeline, not hope. We\'ve generated 90,000+ qualified leads in <30 days and operationalized an 8-factor scoring model that cut qualification time 40%—so BD chases only what can actually close.',
    expandedDescription: 'GTM fails when data, messaging, and governance don\'t talk. We unify market segmentation, value proposition, channels, vehicles, and partner strategy into an execution OS. Using our Procurement Priority Matrix (8 scoring factors), we rank pursuits and hard-wire Now/Next/Nurture rituals across BD, capture, and proposal. Then we feed the engine: normalized contractor data lakes (1.5M+ records), segment-specific messaging, and outreach kits for rapid campaigns. The result is explainable portfolio moves, earlier teaming, and fewer dead pursuits. One 8(a) client received 90,000+ leads and 7,000+ outreach-ready contacts in under a month; standardized scoring later reduced qual cycle time by 40%.',
    icon: BriefcaseIcon,
    features: [
      { title: '8-Factor Pursuit Scoring', description: 'With vehicle readiness and evaluability checks.' },
      { title: 'Data Lake GTM', description: '1.5M+ contractor records normalized to target 8(a)/WOSB/VOSB/Tribal segments.' },
      { title: '21-Day Activation', description: 'Messaging, outreach cadences, and dashboards live in three weeks.' }
    ],
    deliverables: [
      { title: 'Comprehensive GTM Plan', description: 'With quarterly pipeline and KPI targets', sampleAvailable: true },
      { title: 'Sales Enablement Toolkit', description: '(battlecards, emails, one-pagers, objection bank)', sampleAvailable: true },
      { title: 'Channel & Partner Playbook', description: 'With teaming targets and co-sell motions', sampleAvailable: true }
    ],
    caseStudyIntegration: 'Like we did for an AI proposal platform—90,000+ leads in <30 days and 1.5M+ records governed. Like we did for an 8(a) portfolio—scoring system and operating rhythms that rebalanced pursuits.',
    proofMetrics: ['90,000+ leads', '<30 days', '40% faster qualification'],
    signatureVisual: 'Funnel + Score Dashboard',
    crossSellServices: ['market-intelligence', 'tech-scouting']
  },
  {
    id: 'tech-scouting',
    title: 'Technology Scouting',
    heroMessaging: 'Separate hype from funded programs of record. We deliver TRL-grounded briefs with budgeted transition paths—and we\'ve moved an AI solution from demo to production in 72 hours with 95%+ extraction accuracy and 5× more relevant opportunities.',
    expandedDescription: 'Innovation only matters when it aligns with money, missions, and maturity. Our scouting scans defense and civilian tech frontiers, then scores candidates on TRL, budget signals, mission fit, and acquisition pathways. We pair deep-tech research (directed energy, hypersonics, autonomy/AI, space) with rapid prototyping to prove value early. Clients get explainable evidence to pick technologies, partners, and pilots confidently. Results include 52+ research briefs with FY2023–FY2029 budget tracking and transition maps; and a 72-hour AI ingestion/matching prototype that unlocked board approval and production within a week.',
    icon: LightbulbIcon,
    features: [
      { title: 'TRL-to-Program Pathway Maps', description: 'With milestone and appropriation links through FY2029.' },
      { title: 'Signal Scanner', description: 'IG/GAO/PPBE cues fused with mission roadmaps to rank adoption likelihood.' },
      { title: '72-Hour Prove-or-Pivot Prototyping', description: 'For stakeholder buy-in.' }
    ],
    deliverables: [
      { title: 'Technology Watchlist', description: '(top 20) with TRL, funding signals, and pilot concepts', sampleAvailable: true },
      { title: 'Innovation Opportunity Briefs', description: 'Tied to specific offices and vehicles', sampleAvailable: true },
      { title: 'Vendor/Partner Scorecards', description: 'With teaming and IP considerations', sampleAvailable: true }
    ],
    caseStudyIntegration: 'Like we did for an 8(a) SDB—52+ deep-tech briefs with FY2029 budget tracking. Like we did for a GC intelligence startup—72-hour AI prototype to production; 5× opportunity relevance, 10h→2m analysis.',
    proofMetrics: ['72-hour prototype', '95%+ accuracy', '52+ tech briefs'],
    signatureVisual: 'TRL Ladder to POR',
    crossSellServices: ['g2m-strategy', 'due-diligence']
  },
  {
    id: 'due-diligence',
    title: 'Strategic Due Diligence',
    heroMessaging: 'Deals fail on commercial realities, not legal fine print. We quantify market power, price bands, and execution risk—using methods that uncovered $254.8B runway, 600% pricing spread, and 100%-verified datasets across 10 databases.',
    expandedDescription: 'Financial and legal diligence miss the question: "Will this grow under our ownership?" We deliver a 360° commercial view—market structure, demand durability, win mechanics, compliance posture, and integration risk. We pressure-test growth theses with real buyer behavior, budget signals through FY2029, and competitor moats. Our work has mapped 500+ processors in a fragmented market, called pricing tolerance bands (600% spread), and built 10 verified datasets to de-risk assumptions. For defense tech, we\'ve tied TRL to funded transitions, highlighting where programs of record will (and won\'t) absorb capability.',
    icon: ShieldCheckIcon,
    features: [
      { title: 'Buyer Reality Checks', description: 'Primary research (e.g., 200+ executive contacts, 226+ cold calls) in 2–3 weeks.' },
      { title: 'Moat & Rate Analysis', description: 'Quantify switching costs, rate bands, and capture pathways.' },
      { title: 'Integration Risk Grid', description: 'SOP and operating-model fit scored before close.' }
    ],
    deliverables: [
      { title: 'Red-Flag Summary', description: '(10 pages) with quant thresholds', sampleAvailable: true },
      { title: 'Commercial Diligence Report', description: 'With FY2029 scenarios and sensitivity tables', sampleAvailable: true },
      { title: '90-Day Integration Plan', description: 'Tied to org, data, and compliance gates', sampleAvailable: true }
    ],
    caseStudyIntegration: 'Like we did for a U.S. financial services client—$254.8B runway quantified, 500+ competitors mapped, 10 verified datasets. Like we did in defense tech—52+ briefs with TRL and budget transitions.',
    proofMetrics: ['$254.8B runway', '600% pricing spread', '100% verification'],
    signatureVisual: 'Red-Flag Gauge',
    crossSellServices: ['tech-scouting', 'growth-strategy']
  },
  {
    id: 'growth-strategy',
    title: 'Growth Strategy',
    heroMessaging: 'Growth is a system, not a sprint. We install the operating model that connects intel → scoring → pipeline → delivery—cutting cycle times 35%, halving rework, and shifting resources to vehicle-enabled pursuits.',
    expandedDescription: 'Most firms "do more outreach." We build a growth OS that compounds: standardized stage-gates, pursuit scoring, color-team discipline, dashboards, and weekly/monthly operating rhythms. We align portfolio bets to agency roadmaps and make win/loss learning automatic. One 8(a) client adopted our enterprise growth architecture—resources moved to high-fit pursuits, qualification time fell, earlier partner strategy cut late rework by 50%, and weekly BD triage plus monthly portfolio reviews created momentum. The outcome: fewer random acts of BD, more predictable wins.',
    icon: TrendingUpIcon,
    features: [
      { title: 'Growth Operating System', description: 'SOPs + governance spanning BD → Capture → Proposal → Delivery.' },
      { title: 'Win-Rate Uplift Loop', description: 'Instrumented color-teams and post-mortems feed playbooks automatically.' },
      { title: 'Partner Velocity', description: 'Proactive teaming calendar aligned to forecast windows.' }
    ],
    deliverables: [
      { title: 'Strategic Growth Roadmap', description: 'With quarterly targets and owner/accountability grid', sampleAvailable: true },
      { title: 'Financial Model & Capacity Plan', description: 'Tied to pipeline reality', sampleAvailable: true },
      { title: 'Implementation Playbook', description: 'With rituals, dashboards, and SLA definitions', sampleAvailable: true }
    ],
    caseStudyIntegration: 'Like we did for a fast-scaling 8(a)—operating system that rebalanced pursuits and cut rework 50%. Like we did in pipeline governance—40% reduction in qualification cycle time.',
    proofMetrics: ['35% faster cycles', '50% less rework', '40% qual reduction'],
    signatureVisual: 'Operating Rhythm Calendar',
    crossSellServices: ['market-intelligence', 'due-diligence']
  }
];

export const CASE_STUDY_CATEGORIES: CaseStudyCategory[] = [
    'Market Intelligence',
    'Competitive Analysis',
    'Go-to-Market Strategy',
    'Technology Scouting'
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'cs001',
        title: 'Aerospace Firm Navigates New Market Entry',
        category: 'Market Intelligence',
        imageUrl: 'https://picsum.photos/seed/aerospace/800/600',
        challenge: 'A leading aerospace contractor needed to assess the viability of entering the commercial drone surveillance market. They lacked internal expertise on market size, key players, and regulatory hurdles.',
        solution: 'Kenosa conducted a comprehensive market intelligence study, including market sizing, competitive landscape analysis, and a deep dive into FAA regulations. We identified a niche opportunity in infrastructure inspection and profiled key acquisition targets.',
        results: [
            'Client successfully entered the market within 12 months, 6 months ahead of schedule.',
            'Secured a $50M pilot project with a major utility company.',
            'Avoided a costly misstep into the highly saturated consumer drone market.'
        ],
        client: 'Global Aerospace & Defense Firm',
        tags: ['Market Entry', 'Aerospace', 'Drones', 'Regulatory Analysis']
    },
    {
        id: 'cs002',
        title: 'SaaS Startup Outmaneuvers Incumbent',
        category: 'Competitive Analysis',
        imageUrl: 'https://picsum.photos/seed/saas/800/600',
        challenge: 'A B2B SaaS startup was struggling to differentiate itself from a well-established market leader. Their sales cycle was long, and conversion rates were low.',
        solution: 'Our team performed a "war game" competitive analysis, simulating the incumbent\'s likely reactions to various strategic moves. This analysis revealed a critical gap in the competitor\'s mobile offering and customer support.',
        results: [
            'Redeveloped marketing messaging to highlight mobile-first approach, leading to a 40% increase in qualified leads.',
            'Reduced average sales cycle by 30 days.',
            'Increased win rate against the primary competitor by 25%.'
        ],
        client: 'Venture-Backed SaaS Company',
        tags: ['SaaS', 'Competitive Strategy', 'Positioning', 'Sales Enablement']
    },
    {
        id: 'cs003',
        title: 'Launching a MedTech Device in the EU',
        category: 'Go-to-Market Strategy',
        imageUrl: 'https://picsum.photos/seed/medtech/800/600',
        challenge: 'A medical device company had a breakthrough product but was unsure how to navigate the complex EU regulatory and reimbursement landscape for a successful launch.',
        solution: 'Kenosa developed a phased go-to-market strategy, starting with Germany and the UK. The plan included pricing strategy, clinical stakeholder mapping, and a digital marketing campaign targeting key opinion leaders.',
        results: [
            'Achieved CE marking and national reimbursement approval 4 months faster than projected.',
            'Exceeded year-one sales targets by 150%.',
            'Established a strong reference base for expansion into other EU countries.'
        ],
        client: 'Innovative Medical Technology Firm',
        tags: ['Go-to-Market', 'Medical Devices', 'EU Market', 'Product Launch']
    },
    {
        id: 'cs004',
        title: 'Fortune 500 Finds AI Innovation Partner',
        category: 'Technology Scouting',
        imageUrl: 'https://picsum.photos/seed/ai/800/600',
        challenge: 'A Fortune 500 consumer goods company wanted to leverage AI to optimize its supply chain but didn\'t know where to start or which technology partners to trust.',
        solution: 'We conducted a global technology scouting initiative, identifying and vetting over 50 AI logistics startups. We created a shortlist of 5 potential partners and facilitated a proof-of-concept bake-off.',
        results: [
            'Identified a previously unknown startup whose technology reduced inventory costs by 18% in the pilot.',
            'Forged a strategic partnership, leading to a company-wide rollout.',
            'Saved an estimated $200M annually through supply chain optimization.'
        ],
        client: 'Fortune 500 CPG Company',
        tags: ['Technology Scouting', 'AI', 'Supply Chain', 'Innovation', 'Partnerships']
    },
    {
        id: 'cs005',
        title: 'Federal Contractor Wins $250M IDIQ',
        category: 'Market Intelligence',
        imageUrl: 'https://picsum.photos/seed/federal/800/600',
        challenge: 'A mid-tier federal contractor wanted to break into a new agency but lacked insight into the agency\'s procurement patterns, key decision-makers, and incumbent performance.',
        solution: 'Kenosa provided a detailed "agency dossier," including budget analysis, strategic priorities, and an influencer map. We also conducted a "black hat" review of the incumbent, identifying their weaknesses.',
        results: [
            'Successfully positioned as a prime contractor on a $250M IDIQ vehicle.',
            'Won first task order valued at $15M within 3 months of the award.',
            'Built a multi-year pipeline of opportunities at the target agency.'
        ],
        client: '8(a) Federal Government Contractor',
        tags: ['Federal Contracting', 'Capture Strategy', 'Agency Analysis', 'IDIQ']
    },
    {
        id: 'cs006',
        title: 'Private Equity Firm Validates Investment Thesis',
        category: 'Competitive Analysis',
        imageUrl: 'https://picsum.photos/seed/equity/800/600',
        challenge: 'A private equity firm was considering a major investment in the cybersecurity training sector but needed to validate its thesis about the target company\'s competitive moat.',
        solution: 'Our commercial due diligence involved in-depth interviews with customers, former employees, and competitors. This primary research confirmed the target\'s technological superiority and high customer switching costs.',
        results: [
            'Provided the confidence to proceed with a $500M acquisition.',
            'The investment thesis was proven correct, with the portfolio company doubling its revenue in 2 years.',
            'Our report was cited as a key factor in the investment committee\'s decision.'
        ],
        client: 'Mid-Market Private Equity Firm',
        tags: ['Due Diligence', 'Private Equity', 'Cybersecurity', 'Investment Thesis']
    }
];

export const PRICING_TIERS: PricingTier[] = [
    {
      name: 'Essential',
      description: 'For foundational market awareness.',
      price: '$5,000',
      features: [
        'Quarterly Market Briefings',
        'Competitor Monitoring (up to 5)',
        'Monthly Analyst Inquiry (1 hour)',
        'Access to Research Portal',
      ],
      isFeatured: false,
    },
    {
      name: 'Professional',
      description: 'For ongoing strategic decision-making.',
      price: '$15,000',
      features: [
        'All Essential features, plus:',
        'Deep-Dive Project (1 per quarter)',
        'Monthly Analyst Inquiry (4 hours)',
        'On-demand Data Requests',
        'Dedicated Account Manager',
      ],
      isFeatured: true,
    },
    {
      name: 'Enterprise',
      description: 'For full strategic partnership.',
      price: 'Custom',
      features: [
        'All Professional features, plus:',
        'Unlimited Deep-Dive Projects',
        'Embedded Analyst Option',
        'Executive Workshops & War Gaming',
        'Custom Intelligence Dashboards',
      ],
      isFeatured: false,
    },
  ];
