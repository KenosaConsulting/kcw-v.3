import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { GlassCard, ProgressBar } from '../ui/GlassComponents';
import { ParticleNetwork } from '../animations/ParticleNetwork';
import { 
  ChevronDown, 
  Play, 
  Pause,
  Award,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

interface CaseStudySection {
  title: string;
  content: string;
  metrics?: Array<{
    label: string;
    value: number;
    suffix?: string;
  }>;
  highlights?: string[];
  image?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string;
  sections: CaseStudySection[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const ChapterNavigation: React.FC<{
  chapters: Array<{ title: string; progress: number }>;
  currentProgress: number;
  onChapterClick: (progress: number) => void;
}> = ({ chapters, currentProgress, onChapterClick }) => {
  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      {chapters.map((chapter, i) => (
        <motion.div
          key={i}
          className="mb-4"
          whileHover={{ scale: 1.2 }}
        >
          <button 
            className="group flex items-center gap-3"
            onClick={() => onChapterClick(chapter.progress)}
          >
            <span className="text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {chapter.title}
            </span>
            <motion.div
              className="w-3 h-3 rounded-full border border-white/40"
              animate={{
                backgroundColor: currentProgress >= chapter.progress 
                  ? 'rgba(59, 130, 246, 1)' 
                  : 'rgba(255, 255, 255, 0)',
                scale: currentProgress >= chapter.progress ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SectionContent: React.FC<{
  section: CaseStudySection;
  index: number;
}> = ({ section, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className="min-h-screen flex items-center py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ x: isEven ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <GlassCard className="p-8 md:p-12" blur="lg" opacity={20}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {section.title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-white/80 leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {section.content}
                </motion.p>
                
                {section.highlights && (
                  <div className="space-y-3 mb-8">
                    {section.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                        <span className="text-white/80">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                {section.metrics && (
                  <div className="space-y-4">
                    {section.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <div className="mb-2 flex justify-between items-baseline">
                          <span className="text-white/70">{metric.label}</span>
                          <span className="text-2xl font-bold text-white">
                            {metric.value}{metric.suffix || '%'}
                          </span>
                        </div>
                        <ProgressBar
                          progress={metric.suffix === '%' ? metric.value : Math.min(metric.value / 10, 100)}
                          color={i % 2 === 0 ? 'blue' : 'purple'}
                          animated
                          showPercentage={false}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {section.image && (
                  <motion.div
                    className="relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export const CinematicCaseStudy: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '30%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const chapters = [
    { title: 'Introduction', progress: 0 },
    { title: 'The Challenge', progress: 0.25 },
    { title: 'Our Approach', progress: 0.5 },
    { title: 'Implementation', progress: 0.7 },
    { title: 'Results', progress: 0.9 }
  ];

  const scrollToProgress = (progress: number) => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: scrollHeight * progress,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        window.scrollBy({
          top: 1,
          behavior: 'smooth'
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-black">
      {/* Cinematic Hero Section */}
      <motion.div 
        className="h-screen relative overflow-hidden"
        style={{ y: heroY }}
      >
        {/* Animated Background */}
        <ParticleNetwork className="absolute inset-0" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/50 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="text-center max-w-5xl mx-auto px-8">
            {/* Case Study Badge */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Featured Case Study</span>
            </motion.div>
            
            {/* Title Animation */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {caseStudy.title}
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              {caseStudy.tagline}
            </motion.p>
            
            {/* Meta Information */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 text-white/60"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{caseStudy.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{caseStudy.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>{caseStudy.duration}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
        
        {/* Play/Pause Control */}
        <motion.button
          className="absolute bottom-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </motion.div>

      {/* Chapter Navigation */}
      <ChapterNavigation
        chapters={chapters}
        currentProgress={scrollYProgress.get()}
        onChapterClick={scrollToProgress}
      />

      {/* Executive Summary */}
      <motion.section
        className="min-h-screen flex items-center py-20 px-4 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <GlassCard className="p-8 md:p-12" blur="xl" opacity={25}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Executive Summary
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">The Challenge</h3>
                <p className="text-white/80 leading-relaxed">{caseStudy.challenge}</p>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Our Solution</h3>
                <p className="text-white/80 leading-relaxed">{caseStudy.solution}</p>
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-green-400 mb-3">The Results</h3>
                <p className="text-white/80 leading-relaxed">{caseStudy.results}</p>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* Content Sections */}
      {caseStudy.sections.map((section, index) => (
        <SectionContent key={index} section={section} index={index} />
      ))}

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <motion.section
          className="min-h-screen flex items-center py-20 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-4xl text-white">"</span>
              </div>
            </motion.div>
            
            <motion.blockquote
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-white/90 leading-relaxed mb-8 italic"
            >
              "{caseStudy.testimonial.quote}"
            </motion.blockquote>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-xl font-semibold text-white">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-white/60">
                {caseStudy.testimonial.role}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
};