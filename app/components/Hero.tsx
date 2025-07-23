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
      {/* Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Professional Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-2xl opacity-20"
        >
          💼
        </motion.div>
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 text-2xl opacity-25"
        >
          🎯
        </motion.div>
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/6 text-2xl opacity-20"
        >
          ⚡
        </motion.div>
        <motion.div
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/4 right-1/3 text-2xl opacity-25"
        >
          🌟
        </motion.div>
      </div>

      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto"
        >
          {/* Professional Profile Photo */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 sm:mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-600">
                  <Image
                    src="/profile/profile-picture.jpeg"
                    alt="Talha Bilal Varlık - AI/ML Software Engineer"
                    width={140}
                    height={140}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Professional sparkles */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="absolute -top-2 -right-2 text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                <Sparkles className="absolute -bottom-2 -left-2 text-cyan-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Sparkles className="absolute top-1/2 -left-4 text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Professional Title with Better Spacing */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 relative">
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
                  filter: "brightness(1.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                Talha Bilal
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-lg sm:text-2xl"
                >
                  ✨
                </motion.div>
              </motion.span>
              <br />
              <motion.span 
                className="text-slate-200 relative inline-block"
                whileHover={{ 
                  scale: 1.05,
                  color: "#60a5fa" 
                }}
                transition={{ duration: 0.3 }}
              >
                Varlık
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 text-lg sm:text-2xl"
                >
                  🎯
                </motion.div>
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="flex justify-center items-center space-x-4"
              variants={itemVariants}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-12 sm:w-20" />
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium px-2 sm:px-4 text-center"
                whileHover={{ scale: 1.05 }}
              >
                AI/ML Software Engineer
              </motion.p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-12 sm:w-20" />
            </motion.div>
          </motion.div>

          {/* Professional Description */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto relative px-4 sm:px-0">
            <div className="absolute -top-6 left-1/4 text-2xl opacity-20 hidden sm:block">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                🎯
              </motion.span>
            </div>
            <div className="absolute -bottom-4 right-1/3 text-2xl opacity-20 hidden sm:block">
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                ⚡
              </motion.span>
            </div>
            <div className="trust-card p-6 sm:p-8 text-center rounded-2xl">
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                Recent Software Engineering graduate with expertise in <strong className="text-blue-400">AI/ML</strong>, <strong className="text-cyan-400">embedded systems</strong>, and <strong className="text-green-400">full-stack development</strong>. 
                Proven track record in leading cross-functional teams and developing intelligent systems from IoT applications 
                to machine learning solutions. Passionate about bridging theory and practical implementation.
              </p>
            </div>
          </motion.div>

          {/* Professional Skills Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 max-w-5xl mx-auto px-4 sm:px-0">
            {[
              { text: 'AI/ML Engineering', emoji: '🤖', color: 'accent-blue' },
              { text: 'Embedded Systems', emoji: '⚙️', color: 'accent-cyan' },
              { text: 'Full-Stack Development', emoji: '💻', color: 'accent-green' },
              { text: 'Team Leadership', emoji: '👥', color: 'accent-blue' },
              { text: 'IoT Systems', emoji: '📡', color: 'accent-cyan' },
              { text: 'Algorithm Design', emoji: '🧮', color: 'accent-yellow' }
            ].map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5
                }}
                className={`${skill.color} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold cursor-default relative overflow-hidden group transition-all duration-300 border`}
              >
                <div className="flex items-center space-x-1 sm:space-x-2 relative z-10">
                  <motion.span
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    className="text-sm sm:text-base"
                  >
                    {skill.emoji}
                  </motion.span>
                  <span className="whitespace-nowrap">{skill.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Call to Action Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0"
          >
            <motion.a
              href="#experience"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2 min-w-[220px] justify-center text-lg font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">View My Experience</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
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
                  rotate: 3,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-700/80 border-2 border-slate-600 text-blue-400 hover:bg-slate-600/80 hover:border-blue-400 transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                <Github size={22} className="relative z-10" />
                <motion.div
                  className="absolute -top-1 -right-1 text-blue-400"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ⭐
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -3,
                  boxShadow: "0 10px 25px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-700/80 border-2 border-slate-600 text-cyan-400 hover:bg-slate-600/80 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                <Mail size={22} className="relative z-10" />
                <motion.div
                  className="absolute -top-1 -right-1 text-cyan-400"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  💌
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Professional Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto px-4 sm:px-0"
          >
            {[
              { number: "2+", label: "Years Experience", emoji: "💼", color: "from-blue-400 to-blue-500" },
              { number: "1", label: "Research Paper", emoji: "📄", color: "from-cyan-400 to-cyan-500" },
              { number: "20+", label: "Technologies", emoji: "⚡", color: "from-green-400 to-green-500" },
              { number: "6", label: "Team Size Led", emoji: "👥", color: "from-yellow-400 to-yellow-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="trust-card text-center p-4 sm:p-6 group cursor-default rounded-2xl"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform"
                >
                  {stat.emoji}
                </motion.div>
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
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