'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: "Expert" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: "Advanced" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", proficiency: "Advanced" },
        { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", proficiency: "Proficient" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", proficiency: "Proficient" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", proficiency: "Proficient" },
        { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", proficiency: "Proficient" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", proficiency: "Proficient" },
      ]
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: "Advanced" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", proficiency: "Advanced" },
        { name: ".NET Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", proficiency: "Advanced" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", proficiency: "Proficient" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: "Proficient" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: "Proficient" },
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", proficiency: "Advanced" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", proficiency: "Proficient" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", proficiency: "Advanced" },
        { name: "Algorithm Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: "Expert" },
      ]
    },
    {
      title: "Embedded Systems & Cloud",
      skills: [
        { name: "ESP32", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", proficiency: "Advanced" },
        { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", proficiency: "Advanced" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", proficiency: "Fundamentals" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", proficiency: "Expert" },
      ]
    }
  ]

  const achievements = [
    { title: "Years Experience", count: "2+", icon: "💼" },
    { title: "Technologies", count: "20+", icon: "⚡" },
    { title: "Team Leadership", count: "6", icon: "👥" },
    { title: "Projects", count: "15+", icon: "📂" }
  ]

  const interests = [
    "AI/ML & Algorithm Optimization",
    "Embedded Systems & IoT Development",
    "Millennium Problems & Mathematical Theory",
    "Physics & Quantum Computing",
    "Cryptography & Security Systems",
    "Algorithm Complexity Theory"
  ]

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-purple-500/20 text-purple-300 border-purple-400/30"
      case "Advanced":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      case "Proficient":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "Fundamentals":
        return "bg-orange-500/20 text-orange-300 border-orange-400/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-400/30"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              A comprehensive skill set developed through hands-on experience in software engineering,
              research, and team leadership across diverse technical domains.
            </p>
            
            {/* Decorative Divider */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-20"></div>
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    />
                  ))}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
              </div>
            </div>
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
              {[
                { icon: "💼", number: "2+", label: "Years Experience" },
                { icon: "⚡", number: "20+", label: "Technologies" },
                { icon: "👥", number: "6", label: "Team Leadership" },
                { icon: "📂", number: "15+", label: "Projects" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 lg:p-6 rounded-2xl trust-card group cursor-default"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="text-2xl lg:text-3xl mb-2 group-hover:scale-110 transition-transform"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-xl lg:text-2xl font-bold text-slate-200 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                custom={index}
                className="trust-card p-6 lg:p-8 rounded-3xl group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${
                      index === 0 ? 'from-blue-500 to-indigo-600' : 
                      index === 1 ? 'from-green-500 to-teal-600' :
                      index === 2 ? 'from-purple-500 to-pink-600' :
                      'from-orange-500 to-red-600'
                    } text-white shadow-lg`}
                  >
                    <div className="text-2xl">
                      {index === 0 ? '💻' : 
                       index === 1 ? '🛠️' :
                       index === 2 ? '🤖' : '⚡'}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-200 mb-2">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center p-3 lg:p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:bg-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group/skill"
                    >
                      <div className="w-12 h-12 lg:w-16 lg:h-16 mb-3 relative flex items-center justify-center">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-8 h-8 lg:w-12 lg:h-12 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-slate-300 text-center leading-tight mb-2">
                        {skill.name}
                      </span>
                      
                      {/* Proficiency Badge */}
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getProficiencyColor(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning & Growth Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="trust-card rounded-3xl p-8 lg:p-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <div className="flex justify-center space-x-4 text-4xl lg:text-5xl">
                  <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🚀</motion.span>
                  <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}>📚</motion.span>
                  <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}>⭐</motion.span>
                </div>
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-4">
                Continuous Learning
              </h3>
              <p className="text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Passionate about exploring new technologies, frameworks, and methodologies 
                to solve complex problems and create innovative solutions.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
                {[
                  { icon: "🎯", title: "Problem Solving", desc: "Algorithm design & optimization" },
                  { icon: "🔬", title: "Research", desc: "Academic & industry projects" },
                  { icon: "🤝", title: "Collaboration", desc: "Cross-functional team work" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg"
                >
                  <span>View Projects</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mb-16 mt-20">
            <h3 className="text-3xl font-bold text-slate-200 mb-8 text-center">
              Current Interests
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/50 shadow-sm hover:shadow-md hover:bg-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-300 font-medium">
                      {interest}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 