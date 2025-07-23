'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Users, Target, BookOpen, Award, Heart, Rocket } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const strengths = [
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Hands-on experience implementing machine learning algorithms and AI solutions for real-world applications.",
      color: "from-purple-500 to-indigo-600",
      emoji: "🤖"
    },
    {
      icon: Users,
      title: "Team Leadership", 
      description: "Led teams of up to 6 developers, managing projects and delivering features with measurable impact.",
      color: "from-blue-500 to-cyan-600",
      emoji: "👥"
    },
    {
      icon: Code,
      title: "Full-Stack Engineering",
      description: "Proficient in end-to-end development from mobile apps to embedded systems and cloud solutions.",
      color: "from-green-500 to-teal-600",
      emoji: "💻"
    },
    {
      icon: Target,
      title: "Performance Focus",
      description: "Delivered 30% faster processing, 40% increased engagement, and 99.9% system uptime.",
      color: "from-orange-500 to-red-600",
      emoji: "⚡"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-6"
            >
              👨‍💻
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Software engineer specializing in AI/ML, mobile development, and embedded systems. 
              Passionate about building innovative solutions that make a real impact.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Journey & Philosophy */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    My Journey
                  </h3>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p className="leading-relaxed">
                    I bridge theoretical knowledge with practical solutions - from automated learning systems 
                    to full-stack IoT applications with real-time data processing.
                  </p>
                  <p className="leading-relaxed">
                    Through internships at TongucWorks and Sellmify, I've optimized systems by 30% and 
                    delivered solutions serving thousands of users while leading cross-functional teams.
                  </p>
                </div>
              </div>

              {/* Core Strengths */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 text-white">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Core Strengths
                  </h3>
                </div>
                <div className="grid gap-4">
                  {strengths.map((strength) => (
                    <motion.div
                      key={strength.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group flex items-start gap-4 p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${strength.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <strength.icon size={20} />
                        </div>
                        <div className="absolute -top-1 -right-1 text-sm opacity-80 group-hover:animate-bounce">
                          {strength.emoji}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                          {strength.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Approach & Values */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    My Approach
                  </h3>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p className="leading-relaxed">
                    I believe in clean, maintainable code and continuous learning. My focus is on 
                    bridging complex technical concepts with practical user needs.
                  </p>
                  <p className="leading-relaxed">
                    Every project is an opportunity to push boundaries - whether optimizing algorithms 
                    or exploring new applications of AI/ML in embedded systems.
                  </p>
                  <p className="leading-relaxed">
                    I combine technical expertise with user-centered design principles to create 
                    solutions that are both powerful and intuitive.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Education & Learning
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      Bahçeşehir University
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">B.Sc. in Software Engineering</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">2021 - 2025</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <strong>Certifications:</strong>
                    </p>
                    <div className="grid gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span>• UX Design (Coursera)</span>
                      <span>• Project Management (Coursera)</span>
                      <span>• Azure Fundamentals</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white overflow-hidden relative">
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-4xl mb-4"
                >
                  🚀
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Explore More</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Discover my technical skills and project portfolio.
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href="#skills"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  >
                    <span>View Skills</span>
                    <span>💻</span>
                  </motion.a>
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center space-x-2 bg-white/10 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <span>View Projects</span>
                    <span>📂</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 