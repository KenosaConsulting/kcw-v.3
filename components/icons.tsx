import React, { SVGProps } from 'react';
import {
  // UI Icons
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Menu,
  ArrowRight,
  ArrowLeft,
  Clock,
  Code,
  Sparkles,
  AlertCircle,
  FileText,
  BarChart3,
  Mail,
  User,
  MessageSquare,
  // Professional Service Icons - Carefully chosen for maximum impact
  LineChart,        // Market Intelligence - Shows data trends and analysis
  Crosshair,        // Competitive Analysis - Precision targeting of competition
  Rocket,           // Go-to-Market - Launch and acceleration
  Radar,            // Technology Scouting - Scanning for opportunities
  Microscope,       // Due Diligence - Deep examination and scrutiny
  TrendingUp,       // Growth Strategy - Upward trajectory
  // Keep original icons for backward compatibility
  Target,
  Users,
  Briefcase,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';

// Wrapper function to maintain consistency with your existing implementation
const createIcon = (LucideIcon: any) => {
  return (props: SVGProps<SVGSVGElement>) => (
    <LucideIcon {...props} />
  );
};

// UI Icons
export const XIcon = createIcon(X);
export const ChevronDownIcon = createIcon(ChevronDown);
export const ChevronUpIcon = createIcon(ChevronUp);
export const CheckCircleIcon = createIcon(CheckCircle);
export const MenuIcon = createIcon(Menu);
export const ArrowRightIcon = createIcon(ArrowRight);

// Service Icons - Professional and Compelling
export const TargetIcon = createIcon(LineChart);      // Changed to LineChart for Market Intelligence
export const UsersIcon = createIcon(Crosshair);       // Changed to Crosshair for Competitive Analysis
export const BriefcaseIcon = createIcon(Rocket);      // Changed to Rocket for Go-to-Market
export const LightbulbIcon = createIcon(Radar);       // Changed to Radar for Tech Scouting
export const ShieldCheckIcon = createIcon(Microscope); // Changed to Microscope for Due Diligence
export const TrendingUpIcon = createIcon(TrendingUp);  // Keep TrendingUp for Growth Strategy

// Additional UI Icons
export const ArrowLeftIcon = createIcon(ArrowLeft);
export const ClockIcon = createIcon(Clock);
export const CodeIcon = createIcon(Code);
export const SparklesIcon = createIcon(Sparkles);
export const AlertCircleIcon = createIcon(AlertCircle);
export const FileTextIcon = createIcon(FileText);
export const BarChartIcon = createIcon(BarChart3);

// Contact Form Icons
export const MailIcon = createIcon(Mail);
export const UserIcon = createIcon(User);
export const MessageSquareIcon = createIcon(MessageSquare);