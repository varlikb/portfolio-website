'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, TrendingUp, ChevronRight, Users, Rocket } from 'lucide-react'
import Image from 'next/image'
import ReflectiveCard from '@/components/ui/reflective-card'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeExp, setActiveExp] = useState(0)

  const experiences = [
    {
      id: 1,
      title: "Software Development & Data Integration Intern",
      company: "TongucWorks",
      location: "Istanbul, Turkey",
      period: "Jan 2025 - Jun 2025",
      type: "Internship",
      description: "Led development of automated learning management systems with focus on SCORM-to-xAPI conversion.",
      achievements: [
        "Engineered automated SCORM-to-xAPI conversion pipeline, reducing processing time by 30%",
        "Developed real-time tracking dashboards for 10,000+ learning sessions",
        "Optimized content management workflows achieving 25% faster upload speeds",
        "Maintained 99.9% uptime for LMS deployments"
      ],
      technologies: ["C#", ".NET", "JavaScript", "SQL Server"],
      companyLogo: "/companies/Tongucworks-logo.jpeg",
      gradient: { from: '#1a1a2e', to: '#16213e' },
      stats: { impact: "30%", sessions: "10K+", uptime: "99.9%" }
    },
    {
      id: 2,
      title: "Social Media Manager / Software Development Intern",
      company: "Sellmify",
      location: "Istanbul, Turkey",
      period: "Mar 2023 - Dec 2023",
      type: "Internship",
      description: "Combined social media management with software development, leading UX/UI improvements.",
      achievements: [
        "Led team of 4 developers implementing UX/UI improvements, increasing engagement by 40%",
        "Conducted competitor analysis and A/B testing informing strategic decisions",
        "Contributed to React Native development with responsive design",
        "Managed agile sprint planning ensuring consistent delivery"
      ],
      technologies: ["React Native", "JavaScript", "Figma", "Node.js"],
      companyLogo: "/companies/sellmify-logo .jpg",
      gradient: { from: '#1e1e2f', to: '#2d1b4e' },
      stats: { engagement: "40%", team: "4 devs", sprints: "Agile" }
    }
  ]

  const leadershipExperience = [
    {
      title: "Team Lead - University AI/IoT Project",
      period: "2023 - 2024",
      description: "Led development of ESP32-based smart sensor systems integrating real-time data with cloud platforms.",
      icon: Rocket
    },
    {
      title: "Research Initiative Leader",
      period: "2022 - Present",
      description: "Independently designed solutions for NP-complete problems including search algorithms and ML models.",
      icon: TrendingUp
    }
  ]

  const currentExp = experiences[activeExp]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="section-padding overflow-x-hidden">
      <div className="container-custom overflow-hidden">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="text-4xl mb-6 text-white/20">◎</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Professional Experience</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From software development internships to leading cross-functional teams.
            </p>
          </motion.div>

          {/* Main Experience Section */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
            {/* Left - Experience Cards - Horizontal scroll on mobile */}
            <div className="lg:col-span-2 overflow-hidden">
              {/* Mobile horizontal scroll */}
              <div className="flex lg:hidden gap-3 overflow-x-scroll overflow-y-hidden pb-4 snap-x snap-mandatory scrollbar-hide touch-pan-x">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveExp(idx)}
                    className={`cursor-pointer transition-all duration-300 flex-shrink-0 w-[260px] snap-center ${activeExp === idx ? 'scale-[1.02]' : 'opacity-70'}`}
                  >
                    <ReflectiveCard
                      gradientFrom={exp.gradient.from}
                      gradientTo={exp.gradient.to}
                      metalness={activeExp === idx ? 0.9 : 0.5}
                      roughness={0.3}
                      className="w-full"
                    >
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 border border-white/20 flex-shrink-0">
                            <Image 
                              src={exp.companyLogo} 
                              alt={exp.company} 
                              width={40} 
                              height={40} 
                              className="object-cover w-full h-full" 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[9px] uppercase tracking-wider text-gray-500">{exp.type}</span>
                            <h3 className="text-sm font-bold text-white truncate">{exp.company}</h3>
                            <p className="text-xs text-gray-400 truncate">{exp.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={10} />
                            <span>{exp.period.split(' - ')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={10} />
                            <span>Istanbul</span>
                          </div>
                        </div>

                        {/* Mini Stats */}
                        <div className="grid grid-cols-3 gap-1.5 mt-3">
                          {Object.entries(exp.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-1.5 bg-white/5 rounded-md">
                              <div className="text-xs font-bold text-white">{value}</div>
                              <div className="text-[8px] text-gray-500 uppercase">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ReflectiveCard>
                  </motion.div>
                ))}
                {/* Spacer for last card visibility */}
                <div className="flex-shrink-0 w-4" aria-hidden="true" />
              </div>

              {/* Desktop vertical layout */}
              <div className="hidden lg:block space-y-4">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    whileHover={{ x: 8 }}
                    onClick={() => setActiveExp(idx)}
                    className={`cursor-pointer transition-all duration-300 ${activeExp === idx ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <ReflectiveCard
                      gradientFrom={exp.gradient.from}
                      gradientTo={exp.gradient.to}
                      metalness={activeExp === idx ? 0.9 : 0.5}
                      roughness={0.3}
                      className="w-full"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0">
                            <Image 
                              src={exp.companyLogo} 
                              alt={exp.company} 
                              width={56} 
                              height={56} 
                              className="object-cover w-full h-full" 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] uppercase tracking-wider text-gray-500">{exp.type}</span>
                            <h3 className="text-lg font-bold text-white truncate">{exp.company}</h3>
                            <p className="text-sm text-gray-400 truncate">{exp.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{exp.period.split(' - ')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            <span>Istanbul</span>
                          </div>
                        </div>

                        {/* Mini Stats */}
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          {Object.entries(exp.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-white/5 rounded-lg">
                              <div className="text-sm font-bold text-white">{value}</div>
                              <div className="text-[9px] text-gray-500 uppercase">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ReflectiveCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Details */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="trust-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0">
                      <Image 
                        src={currentExp.companyLogo} 
                        alt={currentExp.company} 
                        width={64} 
                        height={64} 
                        className="object-cover w-full h-full" 
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-white/10 text-gray-400 text-[10px] sm:text-xs rounded-full border border-white/10">
                          {currentExp.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white">{currentExp.company}</h3>
                      <p className="text-xs sm:text-base text-gray-400 truncate">{currentExp.title}</p>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{currentExp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{currentExp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-base text-gray-300 mb-4 sm:mb-6 p-3 sm:p-4 bg-white/[0.02] rounded-lg sm:rounded-xl border border-white/5">
                    {currentExp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2 sm:mb-3 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentExp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-white/5 rounded-md sm:rounded-lg border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wide flex items-center gap-2">
                      <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" /> Key Achievements
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {currentExp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/20 flex-shrink-0 mt-0.5">
                            <ChevronRight size={8} className="sm:w-2.5 sm:h-2.5 text-white/60 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
              <Users size={20} className="sm:w-6 sm:h-6 text-white/40" />
              Leadership Experience
            </h3>
            {/* Mobile horizontal scroll */}
            <div className="md:hidden overflow-hidden">
              <div className="flex gap-3 overflow-x-scroll overflow-y-hidden pb-4 snap-x snap-mandatory scrollbar-hide touch-pan-x">
                {leadershipExperience.map((leadership, idx) => (
                  <div key={leadership.title} className="flex-shrink-0 w-[240px] snap-center">
                  <ReflectiveCard
                    gradientFrom="#1a1a2e"
                    gradientTo="#0f0f1a"
                    metalness={0.6}
                    roughness={0.4}
                  >
                    <div className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white/10 border border-white/20">
                          <leadership.icon size={16} className="text-white/60" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-white text-sm leading-tight">{leadership.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                            <Calendar size={10} />
                            <span>{leadership.period}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs">{leadership.description}</p>
                    </div>
                  </ReflectiveCard>
                </div>
              ))}
                {/* Spacer for last card visibility */}
                <div className="flex-shrink-0 w-4" aria-hidden="true" />
              </div>
            </div>
            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              {leadershipExperience.map((leadership, idx) => (
                <ReflectiveCard
                  key={leadership.title}
                  gradientFrom="#1a1a2e"
                  gradientTo="#0f0f1a"
                  metalness={0.6}
                  roughness={0.4}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-white/10 border border-white/20">
                        <leadership.icon size={20} className="text-white/60" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{leadership.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar size={12} />
                          <span>{leadership.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{leadership.description}</p>
                  </div>
                </ReflectiveCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
