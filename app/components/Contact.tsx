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
    <section id="contact" className="section-padding bg-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed font-medium">
              Ready to collaborate on innovative projects? I'm always open to discussing new opportunities, 
              technical challenges, and creative solutions in software engineering and AI/ML.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 text-center">
                  Get In Touch
                </h3>
                
                {/* Contact Methods */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <motion.a
                    href={createSecureMailto('varlikbbusiness@gmail.com', 'Portfolio Inquiry')}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-3 p-4 trust-card rounded-2xl hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-1">Email</h4>
                      <p className="text-slate-400 text-sm">Contact me</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/varlikb"
                    {...getSecureExternalLinkProps("https://github.com/varlikb")}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-3 p-4 trust-card rounded-2xl hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-2xl group-hover:scale-110 transition-transform">
                      <Github size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-1">GitHub</h4>
                      <p className="text-slate-400 text-sm">View projects</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/talha-bilal-varlık"
                    {...getSecureExternalLinkProps("https://linkedin.com/in/talha-bilal-varlık")}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-3 p-4 trust-card rounded-2xl hover:border-blue-400/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl group-hover:scale-110 transition-transform">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-1">LinkedIn</h4>
                      <p className="text-slate-400 text-sm">Connect professionally</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 text-center">
                  Collaboration Opportunities
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                  {[
                    {
                      title: "AI/ML Projects",
                      description: "Machine learning solutions and algorithm optimization"
                    },
                    {
                      title: "IoT & Embedded Systems",
                      description: "Smart device development and sensor integration"
                    },
                    {
                      title: "Full-Stack Development",
                      description: "End-to-end application development"
                    },
                    {
                      title: "Research & Innovation",
                      description: "Academic collaboration and algorithm design"
                    }
                  ].map((opportunity, index) => (
                    <motion.div
                      key={opportunity.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-4 trust-card rounded-xl hover:border-blue-400/50 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        <span className="text-blue-400">•</span>
                        {opportunity.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {opportunity.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact 