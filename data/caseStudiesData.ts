import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'capturegpt',
    title: 'CaptureGPT: 72-Hour AI Demo to Production',
    category: 'Technology Scouting',
    imageUrl: 'https://picsum.photos/seed/capturegpt/800/600',
    challenge: 'A government contracting intelligence firm needed to demonstrate AI-powered opportunity matching capabilities in 72 hours for a critical board presentation. They required processing of unstructured PDF capability statements and intelligent matching against 21,000+ federal opportunities.',
    solution: 'Kenosa architected a modern solution using React 18, Node.js, and Google Gemini AI. We built an intelligent data ingestion pipeline processing multiple data sources, AI-powered capability extraction with 95%+ accuracy, and a three-tier matching algorithm with thematic synthesis.',
    results: [
      'Board approval secured with immediate funding',
      'Moved to production within 1 week with full dev team assigned',
      'Reduced opportunity analysis time from 10 hours to 2 minutes',
      '5x increase in relevant opportunities identified',
      'Projected 30% improvement in proposal success rate'
    ],
    client: 'High-growth Government Contracting Startup',
    tags: ['AI/ML', 'Rapid Prototyping', 'Federal Contracting', 'React', 'Node.js']
  },
  {
    id: 'agency-plans',
    title: 'Federal Agency Strategic Planning & Market Intelligence',
    category: 'Market Intelligence',
    imageUrl: 'https://picsum.photos/seed/agencyplans/800/600',
    challenge: 'An 8(a) SDB needed to build a durable, cross-agency strategy to scale federal revenues. Their growth had outpaced structured market intelligence, requiring agency-specific roadmaps and executive-ready portfolios.',
    solution: 'Kenosa delivered 677+ strategic artifacts including 4-year plans for 12+ federal agencies, 147+ organizational charts, competitive dossiers on 15+ competitors, and integrated market intelligence from FPDS, USAspending, and Congressional appropriations.',
    results: [
      'Comprehensive coverage across 12+ agencies with 4-year roadmaps',
      '677+ supporting documents standardized into single knowledge base',
      'Multi-year forecasting through FY2029 enabled proactive targeting',
      'Systematic opportunity identification across all target agencies',
      'Clear prioritization logic for pursuit decisions'
    ],
    client: 'Native American-owned 8(a) SDB',
    tags: ['Strategic Planning', 'Market Intelligence', 'Federal Agencies', 'Competitive Analysis']
  },
  {
    id: 'erc-market',
    title: 'ERC Market Intelligence & Growth Strategy',
    category: 'Market Intelligence',
    imageUrl: 'https://picsum.photos/seed/ercmarket/800/600',
    challenge: 'A company entering the Employee Retention Credit (ERC) processing market needed rapid competitive intelligence. The fragmented market with aggressive marketing masked true structure and economics.',
    solution: 'Kenosa mapped 500+ ERC processors, quantified $250B+ in unclaimed credits, documented 600% pricing variation, and cold-called 226+ businesses across 10 sectors. We built 10 structured databases with ~100% verification rate.',
    results: [
      '$50M+ in immediate client value identified and captured',
      'Average 8% fee savings via pricing optimization',
      'Quantified $254.8B runway in unclaimed credits',
      'Identified that only 15-20% of eligible businesses had filed',
      'Built 500+ competitor profiles and 200+ executive contacts'
    ],
    client: 'U.S. Financial Services Company',
    tags: ['Market Sizing', 'Competitive Intelligence', 'ERC', 'Pricing Analysis']
  },
  {
    id: 'proposalgpt',
    title: 'ProposalGPT Lead Generation & Marketing Intelligence',
    category: 'Go-to-Market Strategy',
    imageUrl: 'https://picsum.photos/seed/proposalgpt/800/600',
    challenge: 'An 8(a) SDB launching an AI-enabled proposal platform needed enterprise-scale lead generation and marketing intelligence. Existing contractor data was fragmented with quality issues.',
    solution: 'Kenosa delivered 90,000+ qualified leads in under 30 days, built a normalized data lake spanning 1.5M+ federal contractor records, and produced competitive intelligence on 4+ AI-proposal competitors with 15+ Python automations.',
    results: [
      '90,000+ qualified leads generated in <30 days',
      '1.5M+ contractor records processed and governed',
      '7,000+ outreach-ready contacts for immediate campaigns',
      'Complete competitive battlecards for market positioning',
      'Segmentation across 8(a), WOSB, VOSB/SDVOSB, and Tribal classifications'
    ],
    client: 'Native American-owned 8(a) SDB',
    tags: ['Lead Generation', 'Data Engineering', 'AI Platform', 'Marketing Intelligence']
  },
  {
    id: 'sales-pipeline',
    title: 'Sales Pipeline Transformation & Opportunity Management',
    category: 'Go-to-Market Strategy',
    imageUrl: 'https://picsum.photos/seed/pipeline/800/600',
    challenge: 'A high-growth 8(a) SDB needed to replace reactive pursuit with a disciplined, data-driven sales pipeline spanning 12+ federal agencies. Pipeline decisions were ad hoc with limited explainability.',
    solution: 'Kenosa implemented a proprietary Procurement Priority Matrix with 8 scoring factors, integrated multi-agency forecasts, and stood up governance with weekly BD triage and monthly portfolio reviews.',
    results: [
      'Pursuits rebalanced toward high-fit, vehicle-enabled paths',
      'Standardized scoring reduced qualification cycle time by 40%',
      'Unified views across agencies improved portfolio planning',
      'Early partner strategy improved teaming and bid competitiveness',
      'Clear Now/Next/Nurture buckets with explicit criteria'
    ],
    client: 'Native American-owned 8(a) SDB',
    tags: ['Pipeline Management', 'Scoring Models', 'BD Operations', 'Federal Sales']
  },
  {
    id: 'smb-behavioral',
    title: 'SMB Behavioral Research & Market Intelligence',
    category: 'Market Intelligence',
    imageUrl: 'https://picsum.photos/seed/smbbehavior/800/600',
    challenge: 'A national SMB-serving organization needed evidence-based insight into how SMB owners make decisions post-COVID. Existing data lacked behavioral depth and trust-channel clarity.',
    solution: 'Kenosa developed persona architectures for SMB owners, mapped multi-layer trust networks, executed mixed-method studies, and created predictive frameworks linking trust sources to outcomes.',
    results: [
      '300%+ improvement in SMB program adoption',
      '85% reduction in application abandonment',
      '450% increase in peer-to-peer referrals',
      'Contributed to >$7B in SMB recovery value',
      'Identified three primary SMB owner archetypes with distinct behaviors'
    ],
    client: 'U.S. SMB Service Organization',
    tags: ['Behavioral Research', 'SMB Market', 'Trust Networks', 'Qualitative Research']
  },
  {
    id: 'enterprise-sop',
    title: 'Enterprise SOP System for Federal Contractor',
    category: 'Competitive Analysis',
    imageUrl: 'https://picsum.photos/seed/sopsystem/800/600',
    challenge: 'A rapidly scaling 8(a) SDB needed to replace ad-hoc processes with enterprise-grade SOPs spanning BD, capture, proposal, delivery, finance, and compliance.',
    solution: 'Kenosa delivered a unified process architecture with modular SOP library, clear RACI matrices, stage gates, and governance covering the full federal contract lifecycle from market intelligence to program delivery.',
    results: [
      'Standardized handoffs reduced cycle times by 35%',
      'Color-team discipline reduced proposal rework by 50%',
      'Clear controls lowered compliance risk significantly',
      'Institutionalized knowledge reduced key-person dependency',
      'Repeatable capture rituals improved win rate'
    ],
    client: 'Native American-owned 8(a) SDB',
    tags: ['Process Design', 'SOPs', 'Compliance', 'GovCon Operations']
  },
  {
    id: 'specialized-research',
    title: 'Specialized Research & Strategic Intelligence',
    category: 'Technology Scouting',
    imageUrl: 'https://picsum.photos/seed/research/800/600',
    challenge: 'An 8(a) SDB needed deep-tech clarity on emerging defense technologies beyond standard market intel—distinguishing hype from funded programs of record.',
    solution: 'Kenosa delivered 52+ research briefs covering directed energy, hypersonics, autonomy/AI, and space enablement, each with TRL assessments, budget tracking through FY2029, and transition pathway analysis.',
    results: [
      '52+ specialized research briefs delivered',
      'Coverage of 4 flagship R&D mission portfolios',
      'FY2023-FY2029 budget and milestone tracking',
      '100% evidence-linked recommendations',
      'Faster executive decision cycles with explainable evidence'
    ],
    client: 'Native American-owned 8(a) SDB',
    tags: ['R&D Analysis', 'Defense Tech', 'Emerging Technologies', 'Strategic Intelligence']
  },
  {
    id: 'tribal-dealroom',
    title: 'Tribal Dealroom Platform Design',
    category: 'Go-to-Market Strategy',
    imageUrl: 'https://picsum.photos/seed/dealroom/800/600',
    challenge: 'A Native-owned portfolio needed a platform connecting Tribal enterprises with federal opportunities, partners, and capital. Tribal enterprises faced fragmented visibility and under-utilized set-aside pathways.',
    solution: 'Kenosa designed the Dealroom product blueprint with compliance framework (Buy Indian Act, ISBEE/IEE, IIP), data architecture, matching engine, and GTM motion for opportunities, partners, and capital providers.',
    results: [
      'Accelerated pursuits with pre-qualified opportunities',
      'Increased utilization of Buy Indian Act and ISBEE/IEE',
      'Standardized diligence raised confidence for primes and capital',
      'Measurable community impact tracking for Tribal growth',
      'Repeatable pipeline from discovery to award execution'
    ],
    client: 'Tribal Enterprise / Native-owned 8(a) Portfolio',
    tags: ['Platform Design', 'Tribal Business', 'Set-Aside Programs', 'Capital Access']
  },
  {
    id: 'enterprise-architecture',
    title: 'Enterprise Growth Architecture & Operating System',
    category: 'Go-to-Market Strategy',
    imageUrl: 'https://picsum.photos/seed/enterprise-arch/800/600',
    challenge: 'A fast-scaling 8(a) SDB needed to design and implement a firm-wide growth operating system connecting strategy to execution across BD, capture, proposal, and delivery. Rapid growth created fragmented decision-making and inconsistent qualification.',
    solution: 'Kenosa unified market intelligence, standardized SOPs and stage-gates, deployed a governed data layer, and equipped leaders with portfolios, dashboards, and playbooks. We implemented the Procurement Priority Matrix for explainable scoring and instituted operating rhythms.',
    results: [
      'Resources shifted to high-fit, vehicle-enabled pursuits',
      'Standardized scoring reduced time from intake to go/no-go',
      'Earlier partner strategy and compliance discipline cut late rework',
      'Institutional knowledge reduced key-person dependency',
      'Established weekly BD triage and monthly portfolio reviews'
    ],
    client: 'Native American-owned 8(a) SDB',
    tags: ['Operating Model', 'Portfolio Strategy', 'Data Engineering', 'BD/Capture Governance']
  },
  {
    id: 'project-w',
    title: 'Project W: SMB Behavioral Research & Product Development',
    category: 'Market Intelligence',
    imageUrl: 'https://picsum.photos/seed/wirth/800/600',
    challenge: 'A U.S. organization serving SMBs needed deep behavioral research and product strategy for financial solutions. SMB owners relied mainly on operational software and informal advice, with credit often perceived as failure.',
    solution: 'Kenosa executed 23 structured interviews, built behavioral segments, tested 30+ product concepts, and developed a three-tier engagement model (Education → Advisory → Credit & Lending) that reframes credit as a smart business tool.',
    results: [
      '100% validated demand for advice/insights across segments',
      'Identified two primary archetypes: self-reliant bootstrappers vs growth-minded entrepreneurs',
      'Delivered prioritized feature sets by segment',
      'Created progressive framework to convert credit-resistant users',
      'Contributed to >$7B in small-business recovery value'
    ],
    client: 'U.S. SMB Service Organization',
    tags: ['Product Strategy', 'Behavioral Research', 'SMB Finance', 'Experience Design', 'Qualitative Methods']
  }
];