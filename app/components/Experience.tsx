'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Users, TrendingUp, Code, Database, Globe, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: "Software Development & Data Integration Intern",
      company: "TongucWorks",
      location: "Istanbul, Turkey",
      period: "Jan 2025 - Jun 2025",
      type: "Internship",
      description: "Led development of automated learning management systems with focus on SCORM-to-xAPI conversion and real-time tracking dashboards.",
      achievements: [
        "Engineered automated SCORM-to-xAPI conversion pipeline using C# and .NET, reducing processing time by 30%",
        "Developed real-time tracking dashboards with AJAX integration for 10,000+ learning sessions", 
        "Optimized content management workflows achieving 25% faster upload speeds through database optimization",
        "Maintained 99.9% uptime for LMS deployments across multiple client environments"
      ],
      technologies: [
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "AJAX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SCORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
      ],
      color: "from-blue-500 to-indigo-600",
      companyLogo: "/companies/Tongucworks-logo.jpeg"
    },
    {
      id: 2,
      title: "Social Media Manager / Software Development Intern",
      company: "Sellmify",
      location: "Istanbul, Turkey", 
      period: "Mar 2023 - Dec 2023",
      type: "Internship",
      description: "Combined social media management with software development, leading UX/UI improvements and cross-platform optimization initiatives.",
      achievements: [
        "Led multidisciplinary team of 4 developers implementing UX/UI improvements, increasing engagement by 40%",
        "Conducted competitor analysis and A/B testing informing strategic product roadmap decisions",
        "Contributed to React Native development cycles with responsive design and cross-platform optimization", 
        "Managed agile sprint planning ensuring consistent delivery of high-quality features"
      ],
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ],
      color: "from-green-500 to-teal-600",
      companyLogo: "/companies/sellmify-logo .jpg"
    }
  ]

  const leadershipExperience = [
    {
      title: "Team Lead - University AI/IoT Project",
      period: "2023 - 2024",
      description: "Led development of ESP32-based smart sensor systems integrating real-time data with cloud platforms. Coordinated 3-person team implementing Q-learning algorithms and custom hardware interfaces.",
      technologies: [
        { name: "ESP32", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "IoT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
        { name: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
      ],
      icon: "🔧"
    },
    {
      title: "Research Initiative Leader - Algorithm Design Projects", 
      period: "2022 - Present",
      description: "Independently designed and implemented from-scratch solutions for NP-complete problems including search algorithms (A*, UCS) and machine learning models (Naive Bayes, Decision Trees, Perceptron).",
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Research", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ],
      icon: "🧠"
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

  const itemVariants = {
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
    <section id="experience" className="section-padding bg-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Professional Experience</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From software development internships to leading cross-functional teams, 
              here's my journey in building innovative solutions and driving technical excellence.
            </p>
          </motion.div>

          {/* Professional Experience */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl trust-card hover:border-blue-400/50 transition-all duration-500"
              >
                {/* Background Gradient - More subtle */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Company Info */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-2 rounded-2xl bg-slate-700/50 shadow-lg border border-slate-600/50"
                        >
                          <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                            <Image
                              src={exp.companyLogo}
                              alt={`${exp.company} logo`}
                              width={48}
                              height={48}
                              className="object-contain w-full h-full p-1"
                            />
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full font-medium border border-slate-600/50">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-200 mb-2 leading-tight">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-bold text-slate-300 mb-3">
                            {exp.company}
                          </h4>
                          <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2 text-slate-400">
                              <Calendar size={16} />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <MapPin size={16} />
                              <span className="font-medium">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50">
                        <p className="text-slate-300 leading-relaxed font-medium">
                          {exp.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-bold text-slate-200 mb-4 uppercase tracking-wide">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech) => (
                            <motion.div
                              key={tech.name}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="flex items-center space-x-2 px-3 py-2 bg-slate-700/50 text-slate-300 text-sm font-medium rounded-xl border border-slate-600/50 shadow-sm hover:shadow-md hover:bg-slate-600/50 transition-all duration-300"
                            >
                              <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={18}
                                height={18}
                                className="flex-shrink-0"
                              />
                              <span>{tech.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Achievements */}
                    <div className="lg:col-span-2">
                      <h5 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-green-400" />
                        Key Achievements & Impact
                      </h5>
                      
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                            className="flex items-start gap-4 p-5 rounded-xl bg-slate-700/30 border border-slate-600/50 hover:bg-slate-600/30 hover:border-slate-500/50 transition-all duration-300 group/item"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
                                <ChevronRight size={12} className="text-green-400 group-hover/item:translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed font-medium">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-200 mb-4">
                Leadership Experience
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Leading technical teams and research initiatives to deliver innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadershipExperience.map((leadership, index) => (
                <motion.div
                  key={leadership.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl trust-card hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{leadership.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-1">
                        {leadership.title}
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-slate-400 mb-3">
                        <Calendar size={16} />
                        <span>{leadership.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4 font-medium">
                    {leadership.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {leadership.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center space-x-2 px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 font-medium"
                      >
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={14}
                          height={14}
                          className="flex-shrink-0"
                        />
                        <span>{tech.name}</span>
                      </div>
                    ))}
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

export default Experience 