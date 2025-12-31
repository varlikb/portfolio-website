'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Users, Target, Award, Rocket, MapPin, GraduationCap, User, FolderOpen, FileText } from 'lucide-react'
import Image from 'next/image'
import { File, Folder, Tree } from '@/components/ui/file-tree'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedItem, setSelectedItem] = useState<string>('overview')

  const contentMap: Record<string, {
    title: string
    icon: React.ElementType
    content: React.ReactNode
  }> = {
    'overview': {
      title: 'Overview',
      icon: User,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I'm a software engineer who bridges theoretical knowledge with practical solutions. 
            From automated learning systems to full-stack IoT applications, I've developed projects across a wide spectrum.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through internships at TongucWorks and Sellmify, I've optimized systems by 30% 
            while leading cross-functional teams of up to 6 developers.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-4">
            {[
              { value: "4+", label: "Years Exp." },
              { value: "10+", label: "Projects" },
              { value: "6", label: "Team Lead" },
              { value: "30%", label: "Performance" },
            ].map((stat) => (
              <div key={stat.label} className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'journey': {
      title: 'My Journey',
      icon: Rocket,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            My journey in software engineering started with a curiosity about how things work. 
            This curiosity led me to explore various domains from AI/ML to embedded systems.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-white/10">
                <Brain size={16} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">AI/ML Development</h4>
                <p className="text-xs text-gray-400">Implementing algorithms from scratch</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-white/10">
                <Code size={16} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Full-Stack Development</h4>
                <p className="text-xs text-gray-400">End-to-end web applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="p-2 rounded-lg bg-white/10">
                <Target size={16} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">IoT & Embedded</h4>
                <p className="text-xs text-gray-400">Hardware-software integration</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'approach': {
      title: 'My Approach',
      icon: Target,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I believe in clean, maintainable code and continuous learning. Every project is an opportunity 
            to push boundaries and deliver exceptional results.
          </p>
          <div className="space-y-2 pt-2">
            {[
              "Write clean, documented code",
              "Focus on performance optimization",
              "Embrace continuous learning",
              "Collaborate effectively with teams",
              "Deliver measurable results"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-white/40">◇</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    'education': {
      title: 'Education',
      icon: GraduationCap,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div>
                <h4 className="text-lg font-semibold text-white">Bahçeşehir University</h4>
                <p className="text-gray-400">B.Sc. in Software Engineering</p>
              </div>
              <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">2021 - 2025</span>
            </div>
            <p className="text-sm text-gray-400">
              Comprehensive curriculum covering algorithms, data structures, software architecture, 
              and modern development practices.
            </p>
          </div>
        </div>
      )
    },
    'ux-cert': {
      title: 'UX Design Certificate',
      icon: Award,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Award size={20} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">UX Design</h4>
                <p className="text-sm text-gray-400">Google via Coursera</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Comprehensive training in user experience design principles, user research, 
              wireframing, prototyping, and usability testing.
            </p>
          </div>
        </div>
      )
    },
    'pm-cert': {
      title: 'Project Management Certificate',
      icon: Award,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Award size={20} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Project Management</h4>
                <p className="text-sm text-gray-400">Google via Coursera</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Training in project planning, risk management, stakeholder communication, 
              and agile methodologies.
            </p>
          </div>
        </div>
      )
    },
    'azure-cert': {
      title: 'Azure Fundamentals',
      icon: Award,
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Award size={20} className="text-white/60" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Azure Fundamentals</h4>
                <p className="text-sm text-gray-400">Microsoft</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Foundation in cloud concepts, Azure services, security, privacy, 
              compliance, and pricing models.
            </p>
          </div>
        </div>
      )
    },
    'ai-ml': {
      title: 'AI/ML Development',
      icon: Brain,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Hands-on experience implementing machine learning algorithms and AI solutions from scratch.
          </p>
          <div className="space-y-2">
            {[
              "Search algorithms (A*, BFS, DFS, UCS)",
              "Reinforcement learning (Q-Learning)",
              "Probabilistic classifiers (Naive Bayes)",
              "Neural network fundamentals",
              "NP-complete problem heuristics"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-white/40">◇</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    'fullstack': {
      title: 'Full-Stack Development',
      icon: Code,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            End-to-end development expertise from frontend interfaces to backend systems.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "Flutter"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 rounded-lg border border-white/10 text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )
    },
    'leadership': {
      title: 'Team Leadership',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Led teams of up to 6 developers, managing projects with measurable impact and delivering results.
          </p>
          <div className="space-y-2">
            {[
              "Cross-functional team coordination",
              "Agile project management",
              "Code review and mentoring",
              "Stakeholder communication",
              "30% system optimization achieved"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-white/40">◇</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    'iot': {
      title: 'IoT & Embedded Systems',
      icon: Target,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Hardware-software integration experience with microcontrollers and IoT platforms.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["ESP32", "Arduino", "C++", "Wi-Fi Integration", "Sensor Systems", "Mobile App Integration"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 rounded-lg border border-white/10 text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )
    },
  }

  const currentContent = contentMap[selectedItem] || contentMap['overview']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
            <div className="text-3xl md:text-4xl mb-4 md:mb-6 text-white/20">◎</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 gradient-text">About Me</h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Explore my background, skills, and experience
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Left - Profile Card & File Tree */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mini Profile */}
              <div className="trust-card rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src="/profile/profile-picture.jpeg"
                        alt="Talha Bilal Varlık"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Talha Bilal Varlık</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Software Engineer</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <MapPin size={10} />
                      <span>Istanbul, Turkey</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Quick Nav - Grid Layout */}
                <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'education', label: 'Education' },
                      { id: 'fullstack', label: 'Full-Stack' },
                      { id: 'ai-ml', label: 'AI/ML' },
                      { id: 'iot', label: 'IoT' },
                      { id: 'leadership', label: 'Leadership' },
                      { id: 'journey', label: 'Journey' },
                      { id: 'approach', label: 'Approach' },
                      { id: 'ux-cert', label: 'UX Cert' },
                      { id: 'pm-cert', label: 'PM Cert' },
                      { id: 'azure-cert', label: 'Azure' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItem(item.id)}
                        className={`px-2 py-1.5 text-[10px] rounded-lg transition-all text-center ${
                          selectedItem === item.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* File Tree - Hidden on mobile */}
              <div className="hidden lg:block trust-card rounded-2xl p-4 h-[400px]">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <FolderOpen size={16} className="text-white/40" />
                  <span className="text-sm text-gray-400">Explorer</span>
                </div>
                <Tree
                  className="h-[340px]"
                  initialSelectedId="overview"
                  initialExpandedItems={["about", "education", "certifications", "skills"]}
                  onSelectChange={(id) => id && setSelectedItem(id)}
                >
                  <Folder element="about_me" value="about">
                    <File value="overview">
                      <p>overview.md</p>
                    </File>
                    <File value="journey">
                      <p>journey.md</p>
                    </File>
                    <File value="approach">
                      <p>approach.md</p>
                    </File>
                  </Folder>
                  <Folder element="education" value="education-folder">
                    <File value="education">
                      <p>university.md</p>
                    </File>
                  </Folder>
                  <Folder element="certifications" value="certifications">
                    <File value="ux-cert">
                      <p>ux_design.md</p>
                    </File>
                    <File value="pm-cert">
                      <p>project_management.md</p>
                    </File>
                    <File value="azure-cert">
                      <p>azure_fundamentals.md</p>
                    </File>
                  </Folder>
                  <Folder element="skills" value="skills">
                    <File value="ai-ml">
                      <p>ai_ml.md</p>
                    </File>
                    <File value="fullstack">
                      <p>fullstack.md</p>
                    </File>
                    <File value="leadership">
                      <p>leadership.md</p>
                    </File>
                    <File value="iot">
                      <p>iot_embedded.md</p>
                    </File>
                  </Folder>
                </Tree>
              </div>
            </div>

            {/* Right - Content Display */}
            <div className="lg:col-span-3">
              <div className="trust-card rounded-2xl p-4 sm:p-6 min-h-[400px] lg:min-h-[500px]">
                {/* File Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                    <FileText size={14} className="text-white/40" />
                    <span className="text-sm text-gray-300">{selectedItem}.md</span>
                  </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/20">
                        <currentContent.icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{currentContent.title}</h3>
                    </div>
                    {currentContent.content}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <motion.a 
                  href="#projects" 
                  whileHover={{ scale: 1.02 }} 
                  className="flex-1 btn-primary text-center py-4"
                >
                  View Projects
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.02 }} 
                  className="flex-1 btn-secondary text-center py-4"
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
