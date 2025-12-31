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
    { title: "IoT & Embedded", description: "Smart device development", symbol: "◇" },
    { title: "Full-Stack Dev", description: "End-to-end applications", symbol: "○" },
    { title: "Research", description: "Academic collaboration", symbol: "△" }
  ]

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
            <div className="text-2xl md:text-4xl mb-3 md:mb-6 text-white/20">◎</div>
            <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 gradient-text">Let's Connect</h2>
            <p className="text-xs md:text-lg text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on innovative projects?
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods - Horizontal on mobile */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-12">
              <h3 className="text-sm md:text-xl font-bold text-white mb-3 md:mb-6 text-center">Get In Touch</h3>
              
              {/* Mobile: Compact horizontal layout */}
              <div className="flex md:hidden gap-2 justify-center">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    {...(method.external ? getSecureExternalLinkProps(method.href) : {})}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-1.5 p-3 trust-card rounded-xl flex-1 max-w-[100px]"
                  >
                    <div className="p-2 bg-white/10 text-white rounded-lg border border-white/10">
                      <method.icon size={16} />
                    </div>
                    <span className="text-[10px] text-gray-400">{method.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Desktop: Original layout */}
              <div className="hidden md:grid md:grid-cols-3 gap-4">
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
              <h3 className="text-sm md:text-xl font-bold text-white mb-3 md:mb-6 text-center">Collaboration</h3>
              
              {/* Mobile: 2x2 compact grid */}
              <div className="grid grid-cols-2 gap-2 md:hidden">
                {opportunities.map((opportunity) => (
                  <div
                    key={opportunity.title}
                    className="p-3 trust-card rounded-lg"
                  >
                    <h4 className="font-semibold text-white text-[11px] mb-1 flex items-center gap-1">
                      <span className="text-white/30 text-[10px]">{opportunity.symbol}</span>
                      {opportunity.title}
                    </h4>
                    <p className="text-gray-500 text-[9px] leading-tight">{opportunity.description}</p>
                  </div>
                ))}
              </div>

              {/* Desktop: Original layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-4">
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
            <motion.div variants={itemVariants} className="mt-6 md:mt-12 text-center">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-xs md:text-base">
                <MapPin size={12} className="md:w-4 md:h-4" />
                <span>Istanbul, Turkey</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
