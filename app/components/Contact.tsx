'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, ExternalLink, MapPin, Phone, Linkedin } from 'lucide-react'
import { createSecureMailto, createSecureTel, getSecureExternalLinkProps } from '../utils/security'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "varlikbbusiness@gmail.com",
      link: createSecureMailto("varlikbbusiness@gmail.com", "Portfolio Inquiry"),
      description: "Professional email contact",
      isExternal: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/talha-bilal-varlık",
      link: "https://linkedin.com/in/talha-bilal-varlık",
      description: "Professional networking profile",
      isExternal: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/varlikb",
      link: "https://github.com/varlikb",
      description: "View my code and projects",
      isExternal: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+90 530 173 5286",
      link: createSecureTel("+905301735286"),
      description: "Direct contact number",
      isExternal: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Beşiktaş, Istanbul",
      link: "#location",
      description: "Based in Turkey",
      isExternal: false
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
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Ready to discuss innovative projects, collaboration opportunities, or share insights about 
              AI/ML, embedded systems, and software engineering? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Get In Touch
                </h3>
                
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    {...(item.isExternal ? getSecureExternalLinkProps(item.link) : {})}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white group-hover:from-primary-600 group-hover:to-primary-700 transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {item.label}
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {item.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {item.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Collaboration Areas */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Collaboration Opportunities
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "AI/ML Projects",
                      description: "Machine learning solutions, algorithm optimization, and intelligent system design"
                    },
                    {
                      title: "IoT & Embedded Systems",
                      description: "Smart device development, sensor integration, and real-time data processing"
                    },
                    {
                      title: "Full-Stack Development",
                      description: "End-to-end application development with modern frameworks and technologies"
                    },
                    {
                      title: "Research & Innovation",
                      description: "Academic collaboration, algorithm design, and computational problem solving"
                    },
                    {
                      title: "Team Leadership",
                      description: "Technical project management, mentoring, and cross-functional team coordination"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      <span className="text-primary-500 font-bold mt-1">•</span>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                          {item.title}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    With proven experience in leading teams, optimizing system performance, and delivering 
                    measurable results, I'm ready to contribute to innovative projects that push the boundaries 
                    of technology and create meaningful impact.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={createSecureMailto("varlikbbusiness@gmail.com", "Let's collaborate!")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center space-x-2 justify-center"
                    >
                      <Mail size={20} />
                      <span>Send Email</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/talha-bilal-varlık"
                      {...getSecureExternalLinkProps("https://linkedin.com/in/talha-bilal-varlık")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 justify-center"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 