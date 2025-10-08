// =============================================
// Case Study Data Schema and Content
// =============================================
export type KPI = { label: string; value: string };
export type CaseStudy = {
  slug: string;
  headline: string;           // benefit + metric
  payoff: string;             // one-line payoff
  client: string;
  category: string;
  timeframe?: string;
  tags?: string[];
  heroKPIs: KPI[];            // 3–5 tiles
  challenge: string;          // terse paragraph
  build: string[];            // 3–6 bullets
  impact: string[];           // outcomes with hard numbers only
  narrative: string;          // new: compelling story paragraph
  howItWorks: string[];       // 1–3 bullets (replicable play)
  tech?: string;              // optional one-liner
  seo?: string;               // 120–155 chars meta description
  ctaHref?: string;           // defaults to /contact
  ctaText?: string;           // defaults to Request a Scoping Call
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "capturegpt-72-hour-demo",
    headline: "CaptureGPT — 72-Hour AI Demo to Production",
    payoff: "From board-risk to board-ready in three days.",
    client: "High-growth GovCon intelligence firm",
    category: "Technology Scouting",
    tags: ["AI/ML","Rapid Prototyping","Federal Contracting","React","Node.js"],
    heroKPIs: [
      { label: "Demo", value: "72 hours" },
      { label: "Prod", value: "1 week" },
      { label: "Extraction accuracy", value: "95%+" },
      { label: "Relevant opportunities", value: "5×" }
    ],
    challenge:
      "A mission-critical board meeting demanded a working AI demo that could parse unstructured capability-statement PDFs and match them against 21,000+ federal opportunities - inside 72 hours.",
    build: [
      "Architected a React 18 + Node.js application front-to-back.",
      "Designed an ingestion pipeline spanning multiple data sources.",
      "Implemented AI-based capability extraction at 95%+ accuracy.",
      "Deployed a three-tier matching engine with thematic synthesis."
    ],
    impact: [
      "Board approval secured with immediate funding.",
      "Production within 1 week with a dedicated dev team assigned.",
      "10 hours → 2 minutes per opportunity analysis.",
      "5× increase in relevant opportunities identified.",
      "Projected +30% proposal win-rate lift."
    ],
    narrative:
      "The team entered the week with board risk and exited with board confidence. We carved the thinnest viable slice - accurate extraction and credible matches - then proved it with hard numbers: hours collapsed to minutes, and signal-to-noise flipped in their favor. The demo moved the room, the funding followed, and the work immediately graduated to production. What began as a scramble became a repeatable 'demo-to-prod' motion their executives now trust when speed decides outcomes.",
    howItWorks: [
      "Rapid 'Demo→Pilot→Prod' playbook: scope the smallest verifiable slice, ship the evidence, then harden."
    ],
    tech: "React 18, Node.js, Google Gemini, pipeline orchestration.",
    seo: "72-hour AI demo to production: 95%+ extraction accuracy, 5× relevant opportunities, 10h→2m analysis."
  },
  {
    slug: "federal-agency-strategy-market-intelligence",
    headline: "Federal Agency Strategic Planning & Market Intelligence",
    payoff: "Turn scattered insights into a multi-year, cross-agency growth system.",
    client: "Native American-owned 8(a) SDB",
    category: "Market Intelligence",
    tags: ["Strategic Planning","Market Intelligence","Federal Agencies","Competitive Analysis"],
    heroKPIs: [
      { label: "Agencies", value: "12+" },
      { label: "Artifacts", value: "677+" },
      { label: "Org charts", value: "147+" },
      { label: "Forecasting", value: "to FY2029" }
    ],
    challenge:
      "Rapid growth outpaced market structure. Leadership needed agency-specific roadmaps, competitive clarity, and an executive-ready portfolio to scale federal revenues.",
    build: [
      "677+ standardized artifacts: roadmaps, dossiers, playbooks.",
      "4-year plans across 12+ federal agencies.",
      "147+ org charts; 15+ competitor dossiers.",
      "Integrated FPDS/USAspending/Congressional appropriations into one knowledge base."
    ],
    impact: [
      "Comprehensive, comparable coverage across 12+ agencies.",
      "Single source of truth: 677+ documents made searchable and reusable.",
      "Through FY2029 forecasting enabled proactive targeting.",
      "Repeatable, evidence-backed pursuit prioritization."
    ],
    narrative:
      "Leaders moved from chasing one-off hunches to directing a portfolio. With standardized artifacts and a single knowledge base, they could see across agencies, anticipate budget shifts, and make tradeoffs with evidence. The roadmaps aligned BD, capture, and delivery around the same future view, turning the firm's energy into compounding momentum rather than isolated wins.",
    howItWorks: [
      "Agency heatmaps → 4-year roadmaps → exec portfolio → quarterly refresh."
    ],
    seo: "Cross-agency growth system: 677+ artifacts, 12+ agencies, 147+ org charts, forecasting through FY2029."
  },
  {
    slug: "erc-market-intelligence-growth-strategy",
    headline: "ERC Market Intelligence & Growth Strategy",
    payoff: "See the real market, not the noise—then price and pursue with confidence.",
    client: "U.S. Financial Services Company",
    category: "Market Intelligence",
    tags: ["Market Sizing","Competitive Intelligence","ERC","Pricing Analysis"],
    heroKPIs: [
      { label: "Processors mapped", value: "500+" },
      { label: "Runway", value: "$254.8B" },
      { label: "Verification calls", value: "226+" },
      { label: "Expansion enabled", value: "$250M+" }
    ],
    challenge:
      "A noisy, fragmented ERC market hid real structure, economics, and pricing power.",
    build: [
      "Mapped 500+ ERC processors and 10 structured databases (~100% verification).",
      "Quantified $250B+ unclaimed credits; validated 600% pricing variation.",
      "226+ sector-spanning interviews/calls for ground truth."
    ],
    impact: [
      "$50M+ immediate value identified and captured.",
      "8% average fee savings from pricing optimization.",
      "Verified $254.8B remaining runway; only 15–20% of eligible firms had filed.",
      "500+ competitor profiles and 200+ executive contacts ready for outreach.",
      "Justified $250 Million+ marketing expansion."
    ],
    narrative:
      "We cut through hype with fieldwork and first-party data. The market map exposed where profit pools actually sat, the price ladder explained who pays what and why, and the verification calls removed guesswork. Equipped with defensible numbers, the client shifted spend with conviction - unlocking immediate value and green-lighting a $250M+ expansion that now tracks to a measurable, controllable ROI.",
    howItWorks: [
      "Market map → price ladder → priority segments → outreach kits → conversion rules."
    ],
    seo: "ERC market clarity: 500+ processors, $254.8B runway, 226+ calls; pricing strategy justified $250M+ expansion."
  },
  {
    slug: "proposalgpt-leadgen-marketing-intelligence",
    headline: "ProposalGPT Lead Generation & Marketing Intelligence",
    payoff: "Industrial-grade leadgen and market clarity for an AI proposal platform.",
    client: "High-growth GovCon Intelligence firm",
    category: "Go-to-Market Strategy",
    tags: ["Lead Generation","Data Engineering","AI Platform","Marketing Intelligence"],
    heroKPIs: [
      { label: "Qualified leads", value: "90,000+ (<30d)" },
      { label: "Data lake", value: "1.5M+ records" },
      { label: "Outreach-ready contacts", value: "70,000+" }
    ],
    challenge:
      "Enterprise-scale lead generation with clean, deduplicated data and competitive positioning.",
    build: [
      "Delivered 90,000+ qualified leads in <30 days.",
      "Normalized a 1.5M+ record contractor data lake with governance.",
      "Built competitive intelligence on 4+ AI-proposal competitors.",
      "Automated 15+ Python workflows for enrichment and QA."
    ],
    impact: [
      "90,000+ qualified leads; 70,000+ outreach-ready contacts.",
      "Battlecards and segmentation across 8(a), WOSB, VOSB/SDVOSB, Tribal.",
      "Faster, targeted campaigns with explainable data lineage."
    ],
    narrative:
      "The platform didn't just get leads - it got a growth engine. Clean data fed precise segmentation, automations kept enrichment honest, and battlecards clarified positioning. Marketing and sales finally worked from the same source of truth, converting speed into pipeline and pipeline into proof that the category belongs to them.",
    howItWorks: [
      "Ingest → normalize → score → segment → campaign kits."
    ],
    seo: "ProposalGPT growth engine: 90k+ leads in <30 days, 1.5M+ records governed, 70k+ contacts for targeted outreach."
  },
  {
    slug: "sales-pipeline-transformation-opportunity-management",
    headline: "Sales Pipeline Transformation & Opportunity Management",
    payoff: "Replace hope with an explainable, high-velocity BD engine.",
    client: "Native American-owned 8(a) SDB",
    category: "Go-to-Market Strategy",
    tags: ["Pipeline Management","Scoring Models","BD Operations","Federal Sales"],
    heroKPIs: [
      { label: "Scoring factors", value: "8" },
      { label: "Agencies", value: "12+" },
      { label: "Qualification cycle time", value: "−40%" }
    ],
    challenge:
      "Ad-hoc pursuit decisions, limited explainability, and no portfolio view across 12+ agencies.",
    build: [
      "Implemented a Procurement Priority Matrix (8 scoring factors).",
      "Integrated multi-agency forecasts; established BD governance.",
      "Weekly triage and monthly portfolio reviews."
    ],
    impact: [
      "Pipeline rebalanced to high-fit, vehicle-enabled paths.",
      "40% faster qualification cycle time.",
      "Earlier teaming; higher bid competitiveness; unified visibility."
    ],
    narrative:
      "This shifted culture from 'heroic chasing' to 'managed compounding.' With scoring at intake and governance on cadence, deals either earned focus or exited quickly. Leaders now manage risk and return at the portfolio level—making fewer, better bets and moving faster when the signal is clear.",
    howItWorks: [
      "Score every intake → enforce gates → manage the portfolio, not the deals."
    ],
    seo: "BD engine with explainable scoring: 8-factor matrix, 12+ agencies, 40% faster qualification time."
  },
  {
    slug: "smb-behavioral-research-market-intelligence",
    headline: "SMB Behavioral Research & Market Intelligence",
    payoff: "Build programs the way SMB owners actually decide.",
    client: "U.S. SMB Service Organization",
    category: "Market Intelligence",
    tags: ["Behavioral Research","SMB Market","Trust Networks","Qualitative Research"],
    heroKPIs: [
      { label: "Program adoption", value: "300%+" },
      { label: "Abandonment", value: "−85%" },
      { label: "Peer referrals", value: "+450%" },
      { label: "Recovery value", value: ">$7B" }
    ],
    challenge:
      "Post-COVID SMB decisions were driven by trust networks, not generic funnels.",
    build: [
      "Persona architecture and multi-layer trust-network maps.",
      "Mixed-method research; predictive frameworks linking trust sources to outcomes."
    ],
    impact: [
      "300%+ program adoption lift.",
      "85% reduction in application abandonment.",
      "450% increase in peer-to-peer referrals.",
      "> $7B in SMB recovery value contributed.",
      "Three core SMB archetypes with distinct behaviors."
    ],
    narrative:
      "Programs started resonating once they aligned to how owners really decide - through people and platforms they already trust. Messaging, sequencing, and channel choices were rebuilt around those trust paths, unlocking adoption at scale and turning satisfied users into a referral engine that keeps lowering acquisition costs over time.",
    howItWorks: [
      "Identify the trust spine → design for it → measure referral velocity."
    ],
    seo: "SMB programs that align to trust networks: 300%+ adoption, −85% abandonment, +450% referrals, >$7B impact."
  },
  {
    slug: "enterprise-sop-system-federal-contractor",
    headline: "Enterprise SOP System for a Federal Contractor",
    payoff: "Scale without chaos—codify the firm into a working operating system.",
    client: "Native American-owned 8(a) SDB",
    category: "Competitive Analysis",
    tags: ["Process Design","SOPs","Compliance","GovCon Operations"],
    heroKPIs: [
      { label: "Cycle time", value: "−35%" },
      { label: "Proposal rework", value: "−50%" },
      { label: "Compliance risk", value: "Reduced" }
    ],
    challenge:
      "Fast growth created ad-hoc processes and key-person risk across BD, capture, proposal, delivery, finance, and compliance.",
    build: [
      "Modular SOP library with clear RACI, stage gates, and governance.",
      "End-to-end coverage from market intelligence through program delivery."
    ],
    impact: [
      "35% faster handoffs; 50% less proposal rework.",
      "Material compliance-risk reduction.",
      "Institutional memory; increased win rate."
    ],
    narrative:
      "We translated 'how the work gets done' into a system anyone can run. Clear roles, crisp handoffs, and gated quality removed friction and rework. The firm no longer depends on a few heroes; the operating system makes high performance the default.",
    howItWorks: [
      "Map the value stream → codify → govern → audit."
    ],
    seo: "Enterprise SOP system: −35% cycle time, −50% rework, lower compliance risk; institutionalize performance."
  },
  {
    slug: "specialized-research-strategic-intelligence",
    headline: "Specialized Research & Strategic Intelligence",
    payoff: "Separate hype from funded reality in defense tech.",
    client: "Native American-owned 8(a) SDB",
    category: "Technology Scouting",
    tags: ["R&D Analysis","Defense Tech","Emerging Technologies","Strategic Intelligence"],
    heroKPIs: [
      { label: "Briefs", value: "52+" },
      { label: "Mission portfolios", value: "4" },
      { label: "Tracking", value: "FY2023–FY2029" },
      { label: "Recommendations", value: "100% evidence-linked" }
    ],
    challenge:
      "Leaders needed deep-tech clarity - what's real, funded, and transitioning.",
    build: [
      "52+ briefs on directed energy, hypersonics, autonomy/AI, space enablement.",
      "TRL assessments and FY2023–FY2029 budget/milestone tracking.",
      "Transition-path analysis from R&D to programs of record."
    ],
    impact: [
      "Faster executive decisions with explainable evidence.",
      "Focused R&D positioning across 4 flagship portfolios.",
      "100% evidence-linked recommendations."
    ],
    narrative:
      "Capital and time are scarce; clarity multiplies both. By tying TRL, budgets, and milestones to transition paths, we gave decision-makers a view of what's real and when to act. Investments now land where funding, feasibility, and timing intersect.",
    howItWorks: [
      "Evidence stack → transition map → executive brief."
    ],
    seo: "Defense tech clarity: 52+ briefs, 4 portfolios, FY2023–FY2029 tracking, 100% evidence-linked decisions."
  },
  {
    slug: "tribal-dealroom-platform-design",
    headline: "Tribal Dealroom Platform Design",
    payoff: "A compliant dealroom connecting Tribal enterprises to opportunities, partners, and capital.",
    client: "Tribal Enterprise / Native-owned 8(a) Portfolio",
    category: "Go-to-Market Strategy",
    tags: ["Platform Design","Tribal Business","Set-Aside Programs","Capital Access"],
    heroKPIs: [
      { label: "Set-aside utilization", value: "Buy Indian / ISBEE / IEE" },
      { label: "Opportunities", value: "Pre-qualified" },
      { label: "Impact", value: "Measurable" }
    ],
    challenge:
      "Fragmented visibility and under-used set-aside pathways limited growth.",
    build: [
      "Platform blueprint: data model, matching engine, and GTM motion.",
      "Compliance framework for Buy Indian Act, ISBEE/IEE, IIP."
    ],
    impact: [
      "Accelerated pursuits with pre-qualified opportunities.",
      "Higher utilization of set-aside mechanisms.",
      "Standardized diligence increased prime/capital confidence.",
      "Community impact tracking embedded."
    ],
    narrative:
      "Opportunity exists, but it's often hidden or hard to trust. The dealroom brings order and compliance to the process - pre-qualifying opportunities, surfacing the right partners, and making diligence transparent. Growth becomes predictable, and community impact becomes measurable, not aspirational.",
    howItWorks: [
      "List → qualify → match → diligence → award execution."
    ],
    seo: "Tribal dealroom blueprint: compliant matching of opportunities, partners, capital; measurable community impact."
  },
  {
    slug: "enterprise-growth-architecture-operating-system",
    headline: "Enterprise Growth Architecture & Operating System",
    payoff: "Connect strategy to execution so the business compounds.",
    client: "Native American-owned 8(a) SDB",
    category: "Go-to-Market Strategy",
    tags: ["Operating Model","Portfolio Strategy","Data Engineering","BD/Capture Governance"],
    heroKPIs: [
      { label: "Intake → go/no-go", value: "Faster" },
      { label: "Partner strategy", value: "Earlier" },
      { label: "Institutional memory", value: "Stronger" }
    ],
    challenge:
      "Fragmented decision-making and inconsistent qualification slowed scale.",
    build: [
      "Unified market intelligence; standardized SOPs and stage gates.",
      "Governed data layer; executive portfolios, dashboards, playbooks.",
      "Procurement Priority Matrix for explainable scoring; operating rhythms."
    ],
    impact: [
      "Resources shifted to high-fit, vehicle-enabled pursuits.",
      "Shorter time from intake to go/no-go.",
      "Earlier teaming and stronger compliance; less late rework.",
      "Reduced key-person dependency via institutional knowledge.",
      "Weekly BD triage; monthly portfolio reviews."
    ],
    narrative:
      "The organization now runs on cadence, not chaos. Shared data and explicit gates align leaders on what to chase and why, while operating rhythms convert strategy into repeatable execution. The outcome is compounding speed - decisions happen faster, and they stick.",
    howItWorks: [
      "Sense → decide → govern → learn (closed-loop operating cadence)."
    ],
    seo: "Enterprise growth OS: connect strategy to execution with governed data and operating rhythms that compound speed."
  },
  {
    slug: "project-w-smb-behavioral-research-product-development",
    headline: "Project W — SMB Behavioral Research & Product Development",
    payoff: "Reframe credit from 'failure' to a smart tool with a staged product strategy.",
    client: "U.S. SMB Service Organization",
    category: "Market Intelligence",
    tags: ["Product Strategy","Behavioral Research","SMB Finance","Experience Design","Qualitative Methods"],
    heroKPIs: [
      { label: "Validated demand", value: "100%" },
      { label: "Concepts tested", value: "30+" },
      { label: "Recovery value contribution", value: "$6.7 Billion+" }
    ],
    challenge:
      "SMB owners relied on software and informal advice; credit was perceived as failure.",
    build: [
      "23 structured interviews; behavioral segments and archetypes.",
      "30+ product concepts tested; three-tier engagement model: Education → Advisory → Credit & Lending."
    ],
    impact: [
      "100% validated demand for advice/insights.",
      "Two primary archetypes identified (self-reliant vs growth-minded).",
      "Prioritized feature sets by segment.",
      "Converted credit-resistant users; contributed to >$7B in SMB recovery value."
    ],
    narrative:
      "We met owners where they were - then moved them. Education reset beliefs, advisory reframed decisions, and right-sized credit closed the loop. The product now builds trust first, value second, and credit third - unlocking growth without violating how entrepreneurs think.",
    howItWorks: [
      "Educate to change beliefs → advise to shape choices → offer right-sized credit."
    ],
    seo: "Project W: staged SMB product strategy that converts credit-resistant users; 100% validated demand, >$7B impact."
  }
];
