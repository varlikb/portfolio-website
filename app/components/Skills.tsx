'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { LogoCloud } from '@/components/ui/logo-cloud'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Tech Stack Logos for infinite slider
  const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".NET" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Azure" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", alt: "Arduino" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  ]

  const skillCategories = [
    {
      title: "Programming Languages",
      symbol: "◈",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Expert" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Advanced" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: "Advanced" },
        { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: "Proficient" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: "Proficient" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", level: "Proficient" },
      ]
    },
    {
      title: "Frameworks & Technologies",
      symbol: "◇",
      skills: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Advanced" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: "Advanced" },
        { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", level: "Advanced" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: "Proficient" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "Proficient" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "Proficient" },
      ]
    },
    {
      title: "AI/ML & Data Science",
      symbol: "○",
      skills: [
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", level: "Advanced" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: "Proficient" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", level: "Advanced" },
        { name: "Algorithm Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Expert" },
      ]
    },
    {
      title: "Embedded & Cloud",
      symbol: "△",
      skills: [
        { name: "ESP32", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", level: "Advanced" },
        { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", level: "Advanced" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", level: "Fundamentals" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Expert" },
      ]
    }
  ]

  const getLevelStyle = (level: string) => {
    switch (level) {
      case "Expert": return "bg-white/20 text-white border-white/30"
      case "Advanced": return "bg-white/10 text-gray-200 border-white/20"
      case "Proficient": return "bg-white/5 text-gray-300 border-white/10"
      default: return "bg-white/5 text-gray-400 border-white/10"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="text-4xl mb-6 text-white/20">◎</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A comprehensive skill set developed through hands-on experience across diverse technical domains.
            </p>
          </motion.div>

          {/* Tech Stack Slider */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-sm font-medium text-gray-500 text-center mb-6 uppercase tracking-wider">Tech Stack</h3>
            <LogoCloud logos={techLogos} className="max-w-4xl mx-auto" />
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "◆", number: "2+", label: "Years Experience" },
              { icon: "◇", number: "20+", label: "Technologies" },
              { icon: "○", number: "6", label: "Team Leadership" },
              { icon: "△", number: "15+", label: "Projects" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl trust-card group cursor-default"
              >
                <div className="text-2xl mb-2 text-white/30 group-hover:text-white/50 transition-colors">{stat.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs lg:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} variants={itemVariants} className="trust-card p-6 lg:p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/10 text-white/60 text-2xl border border-white/10">
                    {category.symbol}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group"
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={40}
                          height={40}
                          unoptimized
                          className="group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-300 text-center mb-2">{skill.name}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelStyle(skill.level)}`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Current Interests</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "AI/ML & Algorithm Optimization",
                "Embedded Systems & IoT",
                "Millennium Problems",
                "Physics & Quantum Computing",
                "Cryptography & Security",
                "Algorithm Complexity Theory"
              ].map((interest) => (
                <motion.div
                  key={interest}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl trust-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white/30 rounded-full" />
                    <span className="text-gray-300 font-medium">{interest}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="trust-card rounded-2xl p-8 lg:p-12">
              <div className="text-3xl mb-4 text-white/20">◎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Passionate about exploring new technologies and methodologies to solve complex problems.
              </p>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>View Projects</span>
                <span className="text-black/60">→</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
