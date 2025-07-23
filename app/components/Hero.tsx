'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Download, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { getSecureExternalLinkProps } from '../utils/security'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-4xl opacity-20"
        >
          💻
        </motion.div>
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 text-3xl opacity-25"
        >
          🚀
        </motion.div>
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/6 text-3xl opacity-20"
        >
          🧠
        </motion.div>
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/4 right-1/3 text-4xl opacity-25"
        >
          ⭐
        </motion.div>
      </div>

      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Profile Image with Animation */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                  {/* Profile Photo - Now using your uploaded photo! */}
                  <Image
                    src="/profile/profile-picture.jpeg"
                    alt="Talha Bilal Varlık - Software Engineer"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                  
                  {/* Emoji fallback - no longer needed since you have your photo!
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center text-4xl">
                    👨‍💻
                  </div>
                  */}
                </div>
              </div>
              {/* Floating sparkles around avatar */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="absolute -top-2 -right-2 text-yellow-400 w-6 h-6" />
                <Sparkles className="absolute -bottom-2 -left-2 text-blue-400 w-4 h-4" />
                <Sparkles className="absolute top-1/2 -left-4 text-purple-400 w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4 relative">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.span 
                className="gradient-text relative inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(102, 126, 234, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                Talha Bilal
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-xl sm:text-2xl"
                >
                  ✨
                </motion.div>
              </motion.span>
              <br />
              <motion.span 
                className="text-slate-800 dark:text-slate-200 relative inline-block"
                whileHover={{ 
                  scale: 1.05,
                  color: "#3b82f6" 
                }}
                transition={{ duration: 0.3 }}
              >
                Varlık
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 text-xl sm:text-2xl"
                >
                  🎯
                </motion.div>
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="flex justify-center items-center space-x-4"
              variants={itemVariants}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-16 sm:w-24" />
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-light px-2 sm:px-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                AI/ML Software Engineer
              </motion.p>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16 sm:w-24" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto relative px-4 sm:px-0">
            <div className="absolute -top-8 left-1/4 text-2xl opacity-30 hidden sm:block">
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🔬
              </motion.span>
            </div>
            <div className="absolute -bottom-4 right-1/3 text-2xl opacity-25 hidden sm:block">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                💡
              </motion.span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50">
              Recent Software Engineering graduate with expertise in AI/ML, embedded systems, and full-stack development. 
              Proven track record in leading cross-functional teams and developing intelligent systems from IoT applications 
              to machine learning solutions. Passionate about bridging theory and practical implementation.
            </p>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto px-4 sm:px-0">
            {[
              { text: 'AI/ML Engineering', emoji: '🤖', color: 'from-purple-500 to-indigo-600' },
              { text: 'Embedded Systems', emoji: '🔧', color: 'from-blue-500 to-cyan-600' },
              { text: 'Full-Stack Development', emoji: '💻', color: 'from-green-500 to-teal-600' },
              { text: 'Team Leadership', emoji: '👥', color: 'from-orange-500 to-red-600' },
              { text: 'IoT Systems', emoji: '📡', color: 'from-pink-500 to-rose-600' },
              { text: 'Algorithm Design', emoji: '🧮', color: 'from-yellow-500 to-orange-500' }
            ].map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                className={`glass px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 cursor-default relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="flex items-center space-x-1 sm:space-x-2 relative z-10">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-sm sm:text-base"
                  >
                    {skill.emoji}
                  </motion.span>
                  <span className="whitespace-nowrap">{skill.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#experience"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2 min-w-[200px] justify-center text-lg py-4 px-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View My Experience</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.a>
            
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/varlikb"
                {...getSecureExternalLinkProps("https://github.com/varlikb")}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Github size={22} className="relative z-10" />
                <motion.div
                  className="absolute -top-1 -right-1 text-yellow-400"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⭐
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Mail size={22} className="relative z-10" />
                <motion.div
                  className="absolute -top-1 -right-1 text-green-400"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  💌
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { number: "2+", label: "Years Experience", emoji: "💼" },
              { number: "1", label: "Research Paper", emoji: "📄" },
              { number: "20+", label: "Technologies", emoji: "⚡" },
              { number: "6", label: "Team Size Led", emoji: "👥" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group cursor-default"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl mb-2 group-hover:scale-110 transition-transform"
                >
                  {stat.emoji}
                </motion.div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 