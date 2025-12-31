'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Brain, Cpu, BarChart3, Gamepad2, Star } from 'lucide-react'
import Image from 'next/image'
import { getSecureExternalLinkProps } from '../utils/security'
import CardSwap, { Card } from '../../components/ui/card-swap'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeProject, setActiveProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Validation-Guided Heuristics",
      subtitle: "Research Paper on NP Problems",
      category: "Research & Algorithms",
      description: "Independent research proposing a novel framework called Validation-Guided Heuristics (VGH) to tackle NP-complete problems with improved efficiency.",
      longDescription: "This research introduces a new approach to solving computationally hard problems by leveraging validation mechanisms to guide heuristic search. The framework demonstrates significant improvements in solution quality across multiple NP-complete problem domains.",
      image: "/projects/Research-Paper-IMG.png",
      technologies: ["Python", "NumPy", "Jupyter", "Algorithm Design"],
      icon: Brain,
      results: ["95-97% optimal for Knapsack", "90%+ valid solutions for 3-SAT", "70% fewer backtracking steps", "12%+ overall improvement"],
      links: { paper: "https://drive.google.com/file/d/1rEbVvy9igL6suGhn8FZZYGWe9q0u5ROJ/view?usp=sharing" },
      featured: true,
      color: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Automatic Pet Feeding System",
      subtitle: "IoT & Mobile Application",
      category: "IoT & Full-Stack",
      description: "Led a team of 6 to design and implement an automated pet feeding system integrating embedded hardware with a mobile application.",
      longDescription: "A comprehensive IoT solution featuring ESP32 microcontroller, real-time Wi-Fi connectivity, and a Flutter mobile app. The system allows pet owners to schedule and monitor feeding remotely with live status updates.",
      image: "/projects/Pet-Feeding-Project-IMG.jpeg",
      technologies: ["ESP32", "Flutter", "C++", "PostgreSQL", "REST API"],
      icon: Cpu,
      results: ["Fully functional IoT device", "Real-time Wi-Fi pairing", "Mobile app with live updates", "Team of 6 developers"],
      links: { github: "https://github.com/varlikb/pet-feeding-project" },
      featured: true,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "Education & Happiness Analysis",
      subtitle: "Statistical Data Analysis",
      category: "Data Science",
      description: "Comprehensive data analysis investigating the relationship between education level, economic indicators, and happiness in Turkey.",
      longDescription: "Using TUIK (Turkish Statistical Institute) datasets, this project applies multivariate regression analysis to understand how education and economic factors influence happiness metrics. The analysis provides actionable policy insights.",
      image: "/projects/Education-Happiness-Analysis-IMG.png",
      technologies: ["R", "RStudio", "Statistical Modeling", "Data Visualization"],
      icon: BarChart3,
      results: ["5-fold cross-validation (R²: 0.85)", "Multivariate regression analysis", "Policy recommendations", "TUIK dataset analysis"],
      links: { github: "https://github.com/varlikb/education-analysis" },
      featured: false,
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      id: 4,
      title: "AI Algorithms Implementation",
      subtitle: "From Scratch ML & Search",
      category: "Machine Learning",
      description: "Comprehensive implementation of fundamental AI algorithms including search strategies and neural networks built from scratch.",
      longDescription: "Educational project implementing core AI concepts without external ML libraries. Includes pathfinding algorithms, reinforcement learning agents, and probabilistic classifiers.",
      image: "/projects/AI-Project-IMG.png",
      technologies: ["Python", "NumPy", "Algorithm Design"],
      icon: Brain,
      results: ["A*, BFS, DFS, UCS implementations", "Q-Learning GridWorld agent", "Naive Bayes classifier", "10+ algorithms"],
      links: { github: "https://github.com/varlikb/introduction-to-ai" },
      featured: false,
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      id: 5,
      title: "Tetris with Crazy Mode",
      subtitle: "Enhanced Game Development",
      category: "Game Development",
      description: "Enhanced Tetris game featuring both classic gameplay and innovative 'Crazy Mode' with dynamic difficulty adjustment.",
      longDescription: "A Python-based game that extends classic Tetris with new mechanics. Crazy Mode introduces unpredictable piece behaviors and escalating difficulty, creating a unique gaming experience.",
      image: "/projects/Tetris-Like-Game-IMG.png",
      technologies: ["Python", "Pygame", "Game Design"],
      icon: Gamepad2,
      results: ["Classic + Crazy modes", "Dynamic difficulty scaling", "Leaderboard system", "Custom game mechanics"],
      links: { github: "https://github.com/varlikb/tetris-like-pygame" },
      featured: false,
      color: "from-pink-500/20 to-rose-500/20"
    }
  ]

  const currentProject = projects[activeProject]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  // Mobile Project Card Component
  const MobileProjectCard = ({ project, isActive, onClick }: { project: typeof projects[0], isActive: boolean, onClick: () => void }) => (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex-shrink-0 w-[200px] snap-center cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-60'}`}
    >
      <div className={`rounded-xl overflow-hidden border ${isActive ? 'border-white/30' : 'border-white/10'} bg-gradient-to-br ${project.color}`}>
        {/* Image */}
        <div className="relative h-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          {project.featured && (
            <div className="absolute top-2 right-2 z-20">
              <span className="bg-white text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <Star size={6} />
                FEATURED
              </span>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <project.icon size={10} className="text-white/60" />
            <span className="text-[8px] text-gray-500 uppercase">{project.category}</span>
          </div>
          <h4 className="text-xs font-bold text-white leading-tight line-clamp-2">{project.title}</h4>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="section-padding overflow-x-hidden">
      <div className="container-custom overflow-hidden">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-8 md:mb-20">
            <div className="text-3xl md:text-4xl mb-4 md:mb-6 text-white/20">◎</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 gradient-text">Featured Projects</h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              A showcase of my technical expertise spanning research, full-stack development, and data science.
            </p>
          </motion.div>

          {/* Mobile Layout */}
          {isMobile ? (
            <motion.div variants={cardVariants} className="space-y-6">
              {/* Horizontal Scroll Cards */}
              <div className="overflow-hidden">
                <div className="flex gap-3 overflow-x-scroll overflow-y-hidden pb-4 snap-x snap-mandatory scrollbar-hide touch-pan-x">
                  {projects.map((project, idx) => (
                    <MobileProjectCard
                      key={project.id}
                      project={project}
                      isActive={activeProject === idx}
                      onClick={() => setActiveProject(idx)}
                    />
                  ))}
                  <div className="flex-shrink-0 w-4" aria-hidden="true" />
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${activeProject === idx ? 'bg-white w-6' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              {/* Project Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="trust-card rounded-xl p-4 space-y-4"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={currentProject.image} alt={currentProject.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                          {currentProject.category}
                        </span>
                        {currentProject.featured && (
                          <span className="text-[9px] font-bold text-black bg-white px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <Star size={7} />
                            FEATURED
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white leading-tight">{currentProject.title}</h3>
                      <p className="text-xs text-gray-400">{currentProject.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {currentProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] bg-white/5 rounded-md border border-white/10 text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-[10px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Key Results</h4>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {currentProject.results.map((result, idx) => (
                        <li key={idx} className="text-[10px] text-gray-400 flex items-start gap-1">
                          <span className="text-white/40 mt-0.5">◇</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    {currentProject.links.github && (
                      <a
                        href={currentProject.links.github}
                        {...getSecureExternalLinkProps(currentProject.links.github)}
                        className="btn-primary inline-flex items-center gap-1.5 py-2 px-4 text-xs"
                      >
                        <Github size={14} />
                        <span>View Code</span>
                      </a>
                    )}
                    {currentProject.links.paper && (
                      <a
                        href={currentProject.links.paper}
                        {...getSecureExternalLinkProps(currentProject.links.paper)}
                        className="btn-primary inline-flex items-center gap-1.5 py-2 px-4 text-xs"
                      >
                        <ExternalLink size={14} />
                        <span>Read Paper</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Desktop Layout - CardSwap */
            <motion.div variants={cardVariants} className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
              {/* Left side - Project Details */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {currentProject.category}
                      </span>
                      {currentProject.featured && (
                        <span className="text-xs font-bold text-black bg-white px-3 py-1 rounded-full flex items-center gap-1">
                          <Star size={10} />
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">{currentProject.title}</h3>
                      <p className="text-lg text-gray-400">{currentProject.subtitle}</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{currentProject.longDescription}</p>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 rounded-lg border border-white/10 text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Key Results</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {currentProject.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-white/40 mt-0.5">◇</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
                      {currentProject.links.github && (
                        <motion.a
                          href={currentProject.links.github}
                          {...getSecureExternalLinkProps(currentProject.links.github)}
                          whileHover={{ scale: 1.05 }}
                          className="btn-primary inline-flex items-center gap-2 py-3 px-6"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </motion.a>
                      )}
                      {currentProject.links.paper && (
                        <motion.a
                          href={currentProject.links.paper}
                          {...getSecureExternalLinkProps(currentProject.links.paper)}
                          whileHover={{ scale: 1.05 }}
                          className="btn-primary inline-flex items-center gap-2 py-3 px-6"
                        >
                          <ExternalLink size={18} />
                          <span>Read Paper</span>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right side - CardSwap */}
              <div className="flex justify-center lg:justify-end">
                <div className="h-[520px] w-full max-w-[420px] relative">
                  <CardSwap
                    width={280}
                    height={360}
                    cardDistance={35}
                    verticalDistance={45}
                    skewAmount={4}
                    easing="elastic"
                    onActiveChange={setActiveProject}
                  >
                    {projects.map((project) => (
                      <Card key={project.id} className={`p-5 bg-gradient-to-br ${project.color} overflow-hidden`}>
                        <div className="relative h-36 -mx-5 -mt-5 mb-4 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                          <Image src={project.image} alt={project.title} fill className="object-cover" />
                          {project.featured && (
                            <div className="absolute top-3 right-3 z-20">
                              <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                <Star size={8} />
                                FEATURED
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2">
                            <project.icon size={16} className="text-white/60" />
                            <span className="text-[10px] text-gray-500 uppercase tracking-wide">{project.category}</span>
                          </div>
                          <h4 className="text-base font-bold text-white leading-tight">{project.title}</h4>
                          <p className="text-xs text-gray-400 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="text-[9px] px-2 py-0.5 bg-white/10 rounded-full text-gray-300">{tech}</span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="text-[9px] px-2 py-0.5 bg-white/10 rounded-full text-gray-400">+{project.technologies.length - 3}</span>
                            )}
                          </div>
                          <div className="pt-2 border-t border-white/10">
                            <ul className="space-y-1">
                              {project.results.slice(0, 2).map((result, idx) => (
                                <li key={idx} className="text-[10px] text-gray-400 flex items-center gap-1.5">
                                  <span className="text-white/30">◇</span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-[9px] text-gray-600 text-center pt-2">Click to view details</div>
                        </div>
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={cardVariants} className="text-center mt-12 md:mt-20">
            <div className="trust-card rounded-xl md:rounded-2xl p-6 md:p-8">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/20">◎</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Explore All Projects</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">View the complete codebase and documentation on GitHub.</p>
              <motion.a
                href="https://github.com/varlikb"
                {...getSecureExternalLinkProps("https://github.com/varlikb")}
                whileHover={{ scale: 1.05 }}
                className="btn-primary inline-flex items-center gap-2 text-sm md:text-base"
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
