'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { createSecureMailto, getSecureExternalLinkProps } from '../utils/security'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "Contact me",
      href: createSecureMailto('varlikbbusiness@gmail.com', 'Portfolio Inquiry'),
      symbol: "◈"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View projects",
      href: "https://github.com/varlikb",
      external: true,
      symbol: "◇"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect",
      href: "https://linkedin.com/in/talha-bilal-varlık",
      external: true,
      symbol: "○"
    }
  ]

  const opportunities = [
    { title: "AI/ML Projects", description: "Machine learning solutions and algorithm optimization", symbol: "◈" },
    { title: "IoT & Embedded Systems", description: "Smart device development and sensor integration", symbol: "◇" },
    { title: "Full-Stack Development", description: "End-to-end application development", symbol: "○" },
    { title: "Research & Innovation", description: "Academic collaboration and algorithm design", symbol: "△" }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="text-4xl mb-6 text-white/20">◎</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on innovative projects? I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Get In Touch</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    {...(method.external ? getSecureExternalLinkProps(method.href) : {})}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="flex items-center gap-4 p-5 trust-card rounded-xl group"
                  >
                    <div className="relative">
                      <div className="p-3 bg-white/10 text-white rounded-xl group-hover:bg-white/20 transition-all border border-white/10">
                        <method.icon size={20} />
                      </div>
                      <span className="absolute -top-1 -right-1 text-xs text-white/30">{method.symbol}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{method.label}</h4>
                      <p className="text-gray-500 text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Collaboration Opportunities */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Collaboration Opportunities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {opportunities.map((opportunity) => (
                  <motion.div
                    key={opportunity.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 trust-card rounded-xl"
                  >
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="text-white/30">{opportunity.symbol}</span>
                      {opportunity.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{opportunity.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400">
                <MapPin size={16} />
                <span>Based in Istanbul, Turkey</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
