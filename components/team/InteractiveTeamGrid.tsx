import React, { useState } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassComponents';
import { MetricChart } from '../charts/MetricChart';
import { 
  Linkedin, 
  Mail, 
  Award,
  Briefcase,
  GraduationCap,
  Star,
  X
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  expertise: string[];
  skills: Array<{
    name: string;
    level: number;
  }>;
  achievements: string[];
  education: string;
  experience: string;
  linkedin?: string;
  email?: string;
}

const initialTeamData: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Chief Executive Officer',
    department: 'Executive',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    bio: 'Visionary leader with 20+ years driving digital transformation and strategic growth for Fortune 500 companies.',
    expertise: ['Strategic Planning', 'Digital Transformation', 'M&A', 'Leadership'],
    skills: [
      { name: 'Leadership', level: 98 },
      { name: 'Strategy', level: 95 },
      { name: 'Innovation', level: 92 },
      { name: 'Communication', level: 94 }
    ],
    achievements: [
      'Led $2B+ digital transformation initiative',
      'Forbes 40 Under 40 recipient',
      'Published author on strategic leadership'
    ],
    education: 'MBA, Harvard Business School',
    experience: '20+ years',
    linkedin: '#',
    email: 'john@kenosa.com'
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    department: 'Technology',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    bio: 'Technology innovator specializing in AI/ML implementation and cloud architecture for enterprise solutions.',
    expertise: ['AI/ML', 'Cloud Architecture', 'DevOps', 'Cybersecurity'],
    skills: [
      { name: 'Technical Architecture', level: 96 },
      { name: 'AI/ML', level: 94 },
      { name: 'Cloud Systems', level: 97 },
      { name: 'Team Building', level: 90 }
    ],
    achievements: [
      'Architected multi-cloud platform serving 10M+ users',
      'Patent holder for ML algorithms',
      'TEDx speaker on AI ethics'
    ],
    education: 'PhD Computer Science, MIT',
    experience: '15+ years',
    linkedin: '#',
    email: 'jane@kenosa.com'
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'VP of Federal Services',
    department: 'Federal',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    bio: 'Federal contracting expert with deep relationships across defense and civilian agencies.',
    expertise: ['Federal Acquisition', 'GSA Schedules', 'Security Clearance', 'Compliance'],
    skills: [
      { name: 'Federal Contracting', level: 98 },
      { name: 'Compliance', level: 95 },
      { name: 'Relationship Building', level: 93 },
      { name: 'Negotiation', level: 91 }
    ],
    achievements: [
      'Secured $500M+ in federal contracts',
      'Former DoD senior advisor',
      'Top Secret clearance holder'
    ],
    education: 'JD, Georgetown Law',
    experience: '18+ years',
    linkedin: '#',
    email: 'michael@kenosa.com'
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Head of Strategic Intelligence',
    department: 'Intelligence',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Data scientist and intelligence analyst turning complex data into actionable business insights.',
    expertise: ['Data Analytics', 'Market Intelligence', 'Risk Assessment', 'Predictive Modeling'],
    skills: [
      { name: 'Data Science', level: 95 },
      { name: 'Intelligence Analysis', level: 97 },
      { name: 'Visualization', level: 92 },
      { name: 'Research', level: 94 }
    ],
    achievements: [
      'Built predictive models with 94% accuracy',
      'Former CIA intelligence analyst',
      'Published 20+ research papers'
    ],
    education: 'MS Data Science, Stanford',
    experience: '12+ years',
    linkedin: '#',
    email: 'sarah@kenosa.com'
  },
  {
    id: 'david-wilson',
    name: 'David Wilson',
    role: 'Director of Innovation',
    department: 'Innovation',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    bio: 'Innovation catalyst helping organizations embrace emerging technologies and disruptive business models.',
    expertise: ['Innovation Strategy', 'Design Thinking', 'Blockchain', 'IoT'],
    skills: [
      { name: 'Innovation', level: 96 },
      { name: 'Design Thinking', level: 93 },
      { name: 'Emerging Tech', level: 94 },
      { name: 'Workshop Facilitation', level: 91 }
    ],
    achievements: [
      'Launched 5 successful startups',
      'Innovation award winner 2023',
      'Mentor at Techstars accelerator'
    ],
    education: 'MBA, Wharton',
    experience: '14+ years',
    linkedin: '#',
    email: 'david@kenosa.com'
  },
  {
    id: 'emily-brown',
    name: 'Emily Brown',
    role: 'VP of Client Success',
    department: 'Client Services',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    bio: 'Client advocate ensuring exceptional delivery and building lasting strategic partnerships.',
    expertise: ['Client Relations', 'Project Management', 'Account Growth', 'Service Delivery'],
    skills: [
      { name: 'Client Management', level: 97 },
      { name: 'Communication', level: 95 },
      { name: 'Problem Solving', level: 93 },
      { name: 'Strategic Planning', level: 90 }
    ],
    achievements: [
      'Maintained 98% client retention rate',
      'Grew key accounts by 200%',
      'Customer Success Leader of the Year'
    ],
    education: 'BA Business, Northwestern',
    experience: '11+ years',
    linkedin: '#',
    email: 'emily@kenosa.com'
  }
];

const generateSkillRadar = (skills: Array<{ name: string; level: number }>) => ({
  labels: skills.map(s => s.name),
  datasets: [{
    label: 'Expertise Level',
    data: skills.map(s => s.level),
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderColor: 'rgba(59, 130, 246, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
  }]
});

const TeamMemberCard: React.FC<{
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}> = ({ member, onSelect }) => {
  return (
    <motion.div
      layoutId={`member-${member.id}`}
      onClick={() => onSelect(member)}
      whileHover={{ 
        rotateY: 5,
        rotateX: -5,
        scale: 1.05,
        z: 50,
      }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer preserve-3d"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <GlassCard className="p-6 h-full group" blur="md" opacity={20} hover={false}>
        {/* Profile Image with Hover Effect */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating Badge */}
          <motion.div
            className="absolute top-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Star className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Name and Role */}
        <h3 className="text-xl font-bold text-white text-center mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-blue-400 text-center mb-2">
          {member.role}
        </p>
        <p className="text-xs text-white/60 text-center mb-4">
          {member.department}
        </p>
        
        {/* Skill Meters */}
        <div className="space-y-2">
          {member.skills.slice(0, 3).map((skill, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-white/60">{skill.name}</span>
                <span className="text-white/80">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-xs text-white/60">View Profile →</span>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};

const MemberDetailModal: React.FC<{
  member: TeamMember | null;
  onClose: () => void;
}> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            layoutId={`member-${member.id}`}
            className="max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassCard className="p-8 md:p-12 relative" blur="xl" opacity={30}>
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Profile Info */}
                <div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-6"
                  >
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xl text-blue-400 mb-1">
                      {member.role}
                    </p>
                    <p className="text-white/60">
                      {member.department} Division
                    </p>
                  </motion.div>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 mb-6 leading-relaxed"
                  >
                    {member.bio}
                  </motion.p>
                  
                  {/* Contact & Social */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-4 mb-6"
                  >
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                    {member.email && (
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </motion.a>
                    )}
                  </motion.div>
                  
                  {/* Credentials */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-blue-400" />
                      <span className="text-white/80">{member.education}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <span className="text-white/80">{member.experience}</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column - Skills & Achievements */}
                <div>
                  {/* Skills Radar Chart */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Skills Profile</h3>
                    <MetricChart
                      type="radar"
                      data={generateSkillRadar(member.skills)}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: { display: false }
                        },
                        scales: {
                          r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.6)'
                            },
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            pointLabels: {
                              color: 'rgba(255, 255, 255, 0.8)',
                              font: {
                                size: 12
                              }
                            }
                          }
                        }
                      }}
                      className="h-64"
                    />
                  </motion.div>
                  
                  {/* Core Expertise */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Core Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-sm text-white/80"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Key Achievements */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                    <div className="space-y-3">
                      {member.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/80">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const InteractiveTeamGrid: React.FC = () => {
  const [team, setTeam] = useState(initialTeamData);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const departments = ['all', ...new Set(team.map(m => m.department))];
  
  const filteredTeam = filter === 'all' 
    ? team 
    : team.filter(m => m.department === filter);

  return (
    <div className="py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Meet Our Leadership Team
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          World-class experts driving innovation and delivering exceptional results for our clients
        </p>
      </motion.div>

      {/* Department Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-3 mb-8 flex-wrap"
      >
        {departments.map((dept) => (
          <motion.button
            key={dept}
            onClick={() => setFilter(dept)}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === dept
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {dept.charAt(0).toUpperCase() + dept.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Team Grid - Reorderable */}
      <Reorder.Group 
        axis="y" 
        values={filteredTeam} 
        onReorder={setTeam}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {filteredTeam.map((member) => (
          <Reorder.Item 
            key={member.id} 
            value={member}
            whileDrag={{ scale: 1.02, zIndex: 1 }}
            dragElastic={0.2}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <TeamMemberCard
              member={member}
              onSelect={setSelectedMember}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Member Detail Modal */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};