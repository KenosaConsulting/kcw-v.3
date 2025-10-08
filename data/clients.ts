import { Client } from '../types/client';

export const CLIENTS: Client[] = [
  {
    slug: "navancio",
    name: "Navancio",
    logoSrc: "/client-logos/navancio.png",
    description:
      "Federal digital-services firm delivering secure cloud, data/AI, and cybersecurity solutions for mission programs.",
    industry: "Federal IT & Cybersecurity",
    services: [
      "Market intelligence",
      "Competitive analysis",
      "Capture & BD strategy",
      "Campaign planning"
    ],
    tags: ["Federal", "Technology", "Cybersecurity"]
  },
  {
    slug: "innovation-refunds",
    name: "Innovation Refunds",
    logoSrc: "/client-logos/innovation-refunds.png",
    description:
      "Financial/tax services company helping SMBs assess ERC eligibility and file via a network of CPAs and tax attorneys.",
    industry: "Financial Services – Incentives & Tax Credits",
    services: [
      "Executive Advisory",
      "Competitive Analysis",
      "Market Expansion Justification Studies",
      "Product Roadmapping and Development"
    ],
    tags: ["Financial Services", "Tax", "SMB"]
  },
  {
    slug: "proposalgpt",
    name: "ProposalGPT",
    logoSrc: "/client-logos/proposalgpt.png",
    description:
      "AI proposal-automation platform for federal and SLED contractors—compliance matrices, outlines, drafting, and PP integration.",
    industry: "GovTech / AI SaaS",
    services: [
      "Product strategy",
      "Federal market-entry",
      "GTM & partnerships",
      "Capture enablement"
    ],
    tags: ["AI", "GovTech", "SaaS", "Federal"]
  },
  {
    slug: "anchor-accounting",
    name: "Anchor Accounting Services",
    logoSrc: "/client-logos/anchor.png",
    description:
      "Accounting and CFO advisory firm providing bookkeeping, tax prep, and financial ops support to SMBs and GovCons.",
    industry: "Accounting & Professional Services",
    services: [
      "GTM Roadmapping",
      "Competitive Intelligence",
      "Executive Briefing"
    ],
    tags: ["Accounting", "GovCon", "Professional Services"]
  },
  {
    slug: "promotone",
    name: "Promotone",
    logoSrc: "/client-logos/partner-p.jpeg",
    description:
      "Student-creator marketplace connecting brands with campus orgs and micro-influencers for activations and content.",
    industry: "Marketing / Creator Economy",
    services: [
      "Growth strategy",
      "Partnerships",
      "Sales enablement",
      "Product narrative"
    ],
    tags: ["Marketing", "Creator Economy", "EdTech"]
  }
];