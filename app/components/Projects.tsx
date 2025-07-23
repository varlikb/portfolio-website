'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code, Brain, Database, Gamepad2, BarChart3, Cpu, Star, Calendar, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { getSecureExternalLinkProps } from '../utils/security'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "Validation-Guided Heuristics for NP Problems",
      category: "Research & Algorithms",
      description: "Independent research proposing a novel framework called Validation-Guided Heuristics (VGH) to tackle NP-complete problems. Applied to Knapsack, 3-SAT, Sudoku, and Hamiltonian Path problems with improved performance.",
      image: "/projects/Research-Paper-IMG.png",
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      results: [
        "95-97% optimal for Knapsack with 12%+ improvement",
        "90%+ valid solutions for 3-SAT",
        "70% fewer backtracking steps for Sudoku"
      ],
      links: {
        paper: "https://drive.google.com/file/d/1rEbVvy9igL6suGhn8FZZYGWe9q0u5ROJ/view?usp=sharing"
      },
      featured: true,
      stats: {
        complexity: "NP-Complete",
        algorithms: "4",
        improvement: "12%+",
        status: "Published"
      }
    },
    {
      id: 2,
      title: "Automatic Pet Feeding System",
      category: "IoT & Full-Stack",
      description: "Led a team of 6 to design and implement an automated pet feeding system integrating embedded hardware with mobile app and cloud database. Full IoT solution with real-time monitoring.",
      image: "/projects/Pet-Feeding-Project-IMG.jpeg",
      technologies: [
        { name: "ESP32", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
      ],
      icon: Cpu,
      color: "from-green-500 to-teal-600",
      results: [
        "Fully functional IoT device",
        "Real-time Wi-Fi pairing via AP mode",
        "Mobile app with live updates"
      ],
      links: {
        github: "https://github.com/varlikb/pet-feeding-project"
      },
      featured: true,
      stats: {
        team: "6 Members",
        duration: "4 Months",
        platforms: "3",
        status: "Completed"
      }
    },
    {
      id: 3,
      title: "Education, Economy and Happiness in Turkey",
      category: "Data Science",
      description: "Comprehensive data analysis investigating the relationship between education level, economic indicators, and social factors impacting happiness in Turkey using TÜİK datasets.",
      image: "/projects/Education-Happiness-Analysis-IMG.png",
      technologies: [
        { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { name: "RStudio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      results: [
        "5-fold cross-validation (RMSE: ~2.3, R²: 0.85)",
        "Multivariate regression with interactions",
        "Policy insights for education vs happiness"
      ],
      links: {
        github: "https://github.com/varlikb/education-analysis"
      },
      stats: {
        dataset: "TÜİK",
        accuracy: "85%",
        features: "Multiple",
        status: "Analyzed"
      }
    },
    {
      id: 4,
      title: "AI Algorithms Implementation",
      category: "Machine Learning",
      description: "Comprehensive implementation of fundamental AI algorithms including search strategies, reinforcement learning, probabilistic classification, and neural networks from scratch.",
      image: "/projects/AI-Project-IMG.png",
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      icon: Brain,
      color: "from-orange-500 to-red-600",
      results: [
        "A*, BFS, DFS, UCS implementations",
        "Q-Learning GridWorld agent",
        "Naive Bayes and Perceptron from scratch"
      ],
      links: {
        github: "https://github.com/varlikb/introduction-to-ai"
      },
      stats: {
        algorithms: "10+",
        methods: "From Scratch",
        domains: "Multiple",
        status: "Complete"
      }
    },
    {
      id: 5,
      title: "Tetris with Crazy Mode",
      category: "Game Development",
      description: "Enhanced Tetris game featuring both classic gameplay and innovative 'Crazy Mode' with dynamic difficulty adaptation, special blocks, and unique mechanics.",
      image: "/projects/Tetris-Like-Game-IMG.png",
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Pygame", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      icon: Gamepad2,
      color: "from-pink-500 to-rose-600",
      results: [
        "Classic Tetris with enhancements",
        "Dynamic difficulty with random events",
        "Leaderboard and state management"
      ],
      links: {
        github: "https://github.com/varlikb/tetris-like-pygame"
      },
      stats: {
        modes: "2",
        features: "Enhanced",
        difficulty: "Dynamic",
        status: "Playable"
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A showcase of my technical expertise spanning research, full-stack development, 
              data science, and innovative problem-solving across various domains.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 z-10">
                    <motion.span 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center space-x-1"
                    >
                      <Star size={12} />
                      <span>FEATURED</span>
                    </motion.span>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 p-8 relative z-10`}>
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-lg`}
                      >
                        <project.icon size={28} />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            {project.category}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color}`} />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {value}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <motion.div
                            key={tech.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <Image
                              src={tech.logo}
                              alt={tech.name}
                              width={20}
                              height={20}
                              className="flex-shrink-0"
                            />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide flex items-center gap-2">
                        <TrendingUp size={16} />
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                          >
                            <span className="text-green-500 font-bold mt-0.5 text-lg">✓</span>
                            <span className="flex-1">{result}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          {...getSecureExternalLinkProps(project.links.github)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </motion.a>
                      )}
                      {project.links.paper && (
                        <motion.a
                          href={project.links.paper}
                          {...getSecureExternalLinkProps(project.links.paper)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <ExternalLink size={18} />
                          <span>Read Paper</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Visual Element for ALL Projects */}
                  {project.image && (
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className="relative w-full h-[500px] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain hover:scale-105 transition-transform duration-500 rounded-2xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 hover:opacity-2 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
                      </div>
                    </div>
                  )}

                  {/* Fallback Visual Element for Projects without Images */}
                  {!project.image && (
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className={`w-80 h-80 rounded-3xl bg-gradient-to-br ${project.color} opacity-10 flex items-center justify-center relative overflow-hidden`}>
                        {/* Animated circles */}
                        <motion.div
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="absolute inset-4 border-2 border-white/20 rounded-full"
                        />
                        <motion.div
                          animate={{ 
                            rotate: -360,
                            scale: [1, 0.9, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="absolute inset-8 border border-white/30 rounded-full"
                        />
                        <project.icon size={120} className="opacity-30 relative z-10" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={cardVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <div className="flex justify-center space-x-4 text-4xl">
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🚀</motion.span>
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}>💡</motion.span>
                  <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}>⭐</motion.span>
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Interested in My Work?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Explore the complete codebase, documentation, and implementation details for all projects.
              </p>
              <motion.a
                href="https://github.com/varlikb"
                {...getSecureExternalLinkProps("https://github.com/varlikb")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Github size={24} />
                <span>View All Projects on GitHub</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 