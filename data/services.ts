// =============================================
// Services Data — Unified Narratives
// Repo: kcw-v.3-main
// =============================================

export type Service = {
  slug: string;
  title: string;
  signatureVisual?: string;
  proofMetrics?: string; // short pipe-delimited string for badges
  unified: string;       // ✅ merged Hero + Expanded copy (single source of truth)
  features?: { title: string; detail: string }[];
  deliverables?: { title: string; detail: string; sample?: boolean }[];
  related?: string[];    // slugs for cross-sell
};

export const SERVICES: Service[] = [
  {
    slug: "market-intelligence",
    title: "Market Intelligence",
    signatureVisual: "Agency Heatmap",
    proofMetrics: "677+ artifacts | 12+ agency roadmaps | 300%+ adoption lift",
    unified:
      "Stop guessing which accounts to chase. We build a defendable, cross-segment system that ranks where you can actually win - then back it with evidence your board will sign off on. We fuse transaction-level spend, market forecasts, public filings, analyst notes, org charts, and buyer interviews into a single source of truth, codifying demand drivers, budget intent, buyer-unit priorities, and partner pathways. The output is a prioritized pipeline and account plans that make go/no-go calls explainable, align channels and partners early, and position you for future cycles. Recent programs include 677+ standardized artifacts and four-year roadmaps across 12+ markets (forecasting through 2029) and behavioral research that drove a 300%+ SMB program-adoption lift. Result: leaders operate with foresight instead of one-off intel, and capture becomes systematic rather than reactive.",
    features: [
      { title: "Agency Roadmap Engine", detail: "4‑year plans per bureau with FY2026–FY2029 budget linkages." },
      { title: "Evidence Graph", detail: "147+ org charts + IG/GAO/OMB citations mapped to pursuits." },
      { title: "Opportunity Genome", detail: "Live clustering of 21,000+ federal opportunities for fit scoring." }
    ],
    deliverables: [
      { title: "Agency Dossier (per target)", detail: "50‑page budgets, orgs, priorities to FY2029", sample: true },
      { title: "Prioritized Capture Heatmap", detail: "Now / Next / Nurture with vehicle pathways", sample: true },
      { title: "Executive Portfolio Brief", detail: "10‑slide monthly BD review pack", sample: true }
    ],
    related: ["competitive-analysis", "go-to-market-strategy"]
  },
  {
    slug: "competitive-analysis",
    title: "Competitive Analysis",
    signatureVisual: "Head‑to‑Head Matrix",
    proofMetrics: "500+ profiles | 600% pricing variance | 35% cycle reduction",
    unified:
      "Your rivals don't beat you only on proposals - they beat you on process and positioning. We answer \"who are we really up against?\" with proof, not vibes. Beyond surface SWOTs, we deconstruct operating models: sales motions, deal-review discipline, ecosystem partnerships, pricing bands, delivery models, and regulatory/quality posture. We benchmark execution maturity, expose exploitable gaps, and arm teams with battlecards and position lines that win internal reviews. For one client we built 500+ competitor profiles and 200+ executive contacts, quantifying a 6× price spread that reset bids; for a scaling portfolio we installed enterprise SOPs that cut cycle time 35% and halved rework. Net: you know where to flank, when to lead vs. partner, and how to price to win without racing to the bottom.",
    features: [
      { title: "Rate & Pricing Telescope", detail: "Normalize and compare list/rate‑card/practice pricing across cohorts in 10 days." },
      { title: "Playbook Teardown", detail: "Harvest capture/proposal rituals to reveal chokepoints and loss patterns." },
      { title: "Partner Map Miner", detail: "Graph teaming constellations by NAICS/PSC and office to spot flanking entries." }
    ],
    deliverables: [
      { title: "Head‑to‑Head Battlecards", detail: "5–10 targets with win themes and objection counters", sample: true },
      { title: "Competitive Landscape Matrix", detail: "Rate bands and likely teaming primes/subs", sample: true },
      { title: "Positioning Map", detail: "Gaps translated into evaluator‑ready differentiators", sample: true }
    ],
    related: ["market-intelligence", "go-to-market-strategy"]
  },
  {
    slug: "go-to-market-strategy",
    title: "Go‑to‑Market Strategy",
    signatureVisual: "Funnel + Score Dashboard",
    proofMetrics: "90,000+ leads | <30 days | 40% faster qualification",
    unified:
      "Launch with pipeline, not hope. We connect segmentation, value prop, channels, and partner strategy into an execution OS that revenue teams can actually run. Using our 8-factor Priority Matrix, every intake is scored and routed into Now/Next/Nurture - then we feed the engine with clean data: a normalized prospect/customer lake (1.5M+ records), segment-specific messaging, and outreach kits for rapid campaigns. One portfolio generated 90,000+ qualified leads and 70,000+ outreach-ready contacts in under a month; standardized scoring later cut qualification time by 40%. Outcome: explainable portfolio moves, earlier partnerships, and fewer dead pursuits - because the system makes the right behavior the easy behavior.",
    features: [
      { title: "8‑Factor Pursuit Scoring", detail: "Includes vehicle readiness and evaluability checks." },
      { title: "Data Lake GTM", detail: "1.5M+ contractor records normalized to target 8(a)/WOSB/VOSB/Tribal segments." },
      { title: "21‑Day Activation", detail: "Messaging, outreach cadences, dashboards live in three weeks." }
    ],
    deliverables: [
      { title: "Comprehensive GTM Plan", detail: "Quarterly pipeline and KPI targets", sample: true },
      { title: "Sales Enablement Toolkit", detail: "Battlecards, emails, one‑pagers, objection bank", sample: true },
      { title: "Channel & Partner Playbook", detail: "Teaming targets and co‑sell motions", sample: true }
    ],
    related: ["market-intelligence", "growth-strategy"]
  },
  {
    slug: "technology-scouting",
    title: "Technology Scouting",
    signatureVisual: "TRL Ladder to POR",
    proofMetrics: "72‑hour prototype | 95%+ accuracy | 52+ tech briefs",
    unified:
      "Separate hype from funded reality. We scan industry and research frontiers, then score technologies on maturity, capital flows, fit, and adoption pathways - linking each to credible transition maps. When speed matters, we prototype to prove or pivot: we moved an AI ingestion/matching solution from demo to production in 72 hours with 95%+ extraction accuracy and 5× more relevant opportunities. Our deep-tech portfolios include 52+ briefs across autonomy/AI, advanced manufacturing, energy, space, and cyber with multi-year funding tracking. Net: leaders pick technologies, partners, and pilots with confidence because the evidence is explainable and time-bound to capital.",
    features: [
      { title: "TRL‑to‑Program Pathways", detail: "Milestone and appropriation links through FY2029." },
      { title: "Signal Scanner", detail: "IG/GAO/PPBE cues fused with mission roadmaps to rank adoption likelihood." },
      { title: "72‑Hour Prove‑or‑Pivot", detail: "Rapid prototyping for stakeholder buy‑in." }
    ],
    deliverables: [
      { title: "Technology Watchlist", detail: "Top‑20 with TRL, funding signals, pilot concepts", sample: true },
      { title: "Innovation Opportunity Briefs", detail: "Office‑specific with vehicle pathways", sample: true },
      { title: "Vendor/Partner Scorecards", detail: "Teaming and IP considerations", sample: true }
    ],
    related: ["strategic-due-diligence", "market-intelligence"]
  },
  {
    slug: "strategic-due-diligence",
    title: "Strategic Due Diligence",
    signatureVisual: "Red‑Flag Gauge",
    proofMetrics: "$254.8B runway | 600% pricing spread | 100% verification",
    unified:
      "Deals fail on commercial realities, not legal fine print. We quantify market power, price bands, demand durability, and execution risk so you know what will grow under your ownership. Our approach blends buyer reality checks (e.g., 200+ exec contacts; 226+ validation calls) with forward funding signals and competitor moat analysis. We have mapped 500+ value-chain participants, verified 10 datasets end-to-end, and surfaced a 6× pricing spread alongside a $254.8B runway - evidence that resets assumptions before close. In deep tech, we tie maturity to adoption pathways to show where products will - and won't - absorb capability. Outcome: fewer surprises post-close and a 90-day plan that starts compounding on day one.",
    features: [
      { title: "Buyer Reality Checks", detail: "Primary research in 2–3 weeks across target segments and titles." },
      { title: "Moat & Rate Analysis", detail: "Quantify switching costs, rate bands, and capture pathways." },
      { title: "Integration Risk Grid", detail: "Score SOP and operating‑model fit before close." }
    ],
    deliverables: [
      { title: "Red‑Flag Summary", detail: "10 pages with quantitative thresholds", sample: true },
      { title: "Commercial Diligence Report", detail: "FY2029 scenarios and sensitivity tables", sample: true },
      { title: "90‑Day Integration Plan", detail: "Org, data, and compliance gates", sample: true }
    ],
    related: ["technology-scouting", "growth-strategy"]
  },
  {
    slug: "growth-strategy",
    title: "Growth Strategy",
    signatureVisual: "Operating Rhythm Calendar",
    proofMetrics: "35% faster cycles | 50% less rework | 40% qual reduction",
    unified:
      "Growth is a system, not a sprint. We install the operating model that connects intel → scoring → pipeline → delivery - so the business compounds. Standardized stage gates, 8-factor pursuit scoring, deal-review discipline, dashboards, and weekly/monthly rhythms replace random acts of selling. One client shifted resources to channel-enabled pursuits, cut qualification time by 40%, and halved rework - while enterprise SOPs removed key-person risk and trimmed cycle times 35%. The outcome is predictable momentum: fewer dead pursuits, earlier partnerships, faster decisions - and a culture that improves because the learning loop is built in.",
    features: [
      { title: "Growth Operating System", detail: "Governed SOPs spanning BD → Capture → Proposal → Delivery." },
      { title: "Win‑Rate Uplift Loop", detail: "Instrumented color‑teams + post‑mortems feed playbooks automatically." },
      { title: "Partner Velocity", detail: "Proactive teaming calendar aligned to forecast windows." }
    ],
    deliverables: [
      { title: "Strategic Growth Roadmap", detail: "Quarterly targets and owner/accountability grid", sample: true },
      { title: "Financial Model & Capacity Plan", detail: "Calibrated to pipeline reality", sample: true },
      { title: "Implementation Playbook", detail: "Rituals, dashboards, SLA definitions", sample: true }
    ],
    related: ["go-to-market-strategy", "market-intelligence"]
  }
];
