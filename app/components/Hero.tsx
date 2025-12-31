'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, Github, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { OrbitalClock } from '@/components/ui/orbital-clock'
import { MatrixText } from '@/components/ui/matrix-text'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  // Magnetic button effect
  const MagneticButton = ({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) => {
    const ref = useRef<HTMLAnchorElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 300, damping: 20 })
    const springY = useSpring(y, { stiffness: 300, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * 0.2)
      y.set((e.clientY - centerY) * 0.2)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <motion.a
        ref={ref}
        href={href}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {children}
      </motion.a>
    )
  }

  const skills = [
    { text: 'AI/ML Engineering', icon: '◈' },
    { text: 'Embedded Systems', icon: '◇' },
    { text: 'Full-Stack Development', icon: '○' },
    { text: 'Team Leadership', icon: '△' },
    { text: 'IoT Systems', icon: '□' },
    { text: 'Algorithm Design', icon: '◎' }
  ]

  const stats = [
    { number: "3+", label: "Years Experience", icon: "◆" },
    { number: "1", label: "Research Paper", icon: "◇" },
    { number: "20+", label: "Technologies", icon: "○" },
    { number: "6", label: "Team Size Led", icon: "△" }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom section-padding relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          {/* Profile Photo with Pulse Ring */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative pulse-ring"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-[2px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/20">
                  <Image
                    src="/profile/profile-picture.jpeg"
                    alt="Talha Bilal Varlık - AI/ML Software Engineer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="absolute -top-2 -right-2 text-white/60 w-5 h-5" />
                <Sparkles className="absolute -bottom-2 -left-2 text-white/40 w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Name with Matrix Effect */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1>
              <MatrixText 
                text="Talha Bilal"
                textClassName="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text glow-text"
                initialDelay={300}
                letterAnimationDuration={400}
                letterInterval={80}
              />
              <MatrixText 
                text="Varlık"
                textClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90"
                initialDelay={1200}
                letterAnimationDuration={400}
                letterInterval={100}
              />
            </h1>
            
            {/* Title with animated line */}
            <motion.div
              className="flex justify-center items-center gap-2 sm:gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="hidden sm:block h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light tracking-wide text-center">
                AI/ML Software Engineer
              </p>
              <motion.div 
                className="hidden sm:block h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Description Card with Spotlight Effect */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto px-2 sm:px-4">
            <div className="trust-card spotlight-card p-4 sm:p-6 lg:p-8 rounded-2xl">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Recent Software Engineering graduate with expertise in{' '}
                <span className="text-white font-medium">AI/ML</span>,{' '}
                <span className="text-white font-medium">embedded systems</span>, and{' '}
                <span className="text-white font-medium">full-stack development</span>. 
                Proven track record in leading cross-functional teams and developing intelligent systems.
              </p>
            </div>
          </motion.div>

          {/* Skills with Hover Effect */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-2 sm:px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="skill-badge flex items-center space-x-1 sm:space-x-2 cursor-default text-xs sm:text-sm"
              >
                <span className="text-white/60">{skill.icon}</span>
                <span>{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            {/* Primary Button with Shine Effect */}
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-3 min-w-[220px] justify-center text-lg"
            >
              <span>View My Experience</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.a>
            
            {/* Social Buttons with Magnetic Effect */}
            <div className="flex items-center space-x-4">
              <MagneticButton
                href="https://github.com/varlikb"
                className="magnetic-button flex items-center justify-center w-14 h-14 rounded-full"
              >
                <Github size={22} />
              </MagneticButton>
              
              <MagneticButton
                href="#contact"
                className="magnetic-button flex items-center justify-center w-14 h-14 rounded-full"
              >
                <Mail size={22} />
              </MagneticButton>
            </div>
          </motion.div>

          {/* Stats with Float Animation */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto px-2 sm:px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="trust-card text-center p-4 sm:p-6 rounded-2xl group cursor-default"
              >
                <motion.div
                  className="text-xl sm:text-2xl mb-2 sm:mb-3 text-white/40 group-hover:text-white/60 transition-colors"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Orbital Clock - Turkey Local Time */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 pt-8"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-mono">
              Local Time in Turkey
            </p>
            <OrbitalClock />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
