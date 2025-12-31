'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Globe, Building2, Calendar } from 'lucide-react'
import Image from 'next/image'
import { getSecureExternalLinkProps } from '../utils/security'

const References = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const references = [
    {
      id: 1,
      title: "SET Garage",
      client: "SET Garage",
      description: "Modern website for a premium used car gallery in Istanbul. A sleek platform offering vehicle sales and consignment services.",
      image: "/referances/set-garage-min.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      url: "https://www.setgarage.net",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      year: "2025",
      category: "Car Gallery",
    },
    {
      id: 2,
      title: "Autohaus Intermobil",
      client: "Autohaus Intermobil",
      description: "Multi-language corporate website for a premium automotive gallery in Germany. BRABUS and luxury vehicle sales with service offerings.",
      image: "/referances/Intermobil-min.png",
      gradient: "from-amber-500/20 to-red-500/20",
      url: "https://www.autohaus-intermobil.de/de",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      year: "2025",
      category: "Automotive",
    },
    {
      id: 3,
      title: "Neyla Maslak",
      client: "Neyla",
      description: "Modern website for a premium entertainment venue in Istanbul Maslak. Features online reservations, interactive menu, and gallery.",
      image: "/referances/neyla-maslak-min.png",
      gradient: "from-pink-500/20 to-violet-500/20",
      url: "https://www.neylamaslak.com",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      year: "2025",
      category: "Entertainment",
    },
    {
      id: 4,
      title: "LIZ Maslak",
      client: "LIZ Maslak",
      description: "Elegant website for a premium restaurant and bar. Menu showcase, gallery, private event reservations, and contact features.",
      image: "/referances/liz-maslak-min.png",
      gradient: "from-emerald-500/20 to-teal-500/20",
      url: "https://www.maslakliz.com",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      year: "2025",
      category: "Restaurant & Bar",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="references" className="section-padding bg-black/20 overflow-x-hidden">
      <div className="container-custom overflow-hidden">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-8 md:mb-16">
            <div className="text-3xl md:text-4xl mb-4 md:mb-6 text-white/20">◎</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 gradient-text">Client Work</h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Websites and digital solutions developed for real businesses.
            </p>
          </motion.div>

          {/* References - Mobile Horizontal Scroll / Desktop Grid */}
          {/* Mobile horizontal scroll */}
          <div className="md:hidden overflow-hidden">
            <div className="flex gap-4 overflow-x-scroll overflow-y-hidden pb-4 snap-x snap-mandatory scrollbar-hide touch-pan-x">
              {references.map((reference) => (
                <motion.div
                  key={reference.id}
                  variants={cardVariants}
                  className="flex-shrink-0 w-[280px] snap-center group relative overflow-hidden rounded-xl trust-card"
                >
                  {/* Image / Preview */}
                  <div className="relative h-36 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                    <Image
                      src={reference.image}
                      alt={reference.title}
                      fill
                      className="object-cover object-top"
                    />
                    {/* Browser mockup frame */}
                    <div className="absolute top-2 left-2 right-2 flex items-center gap-1 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <div className="flex-1 ml-1.5 h-3 rounded bg-black/30 backdrop-blur-sm flex items-center px-1.5">
                        <span className="text-[7px] text-white/50 truncate">{reference.url.replace('https://', '')}</span>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute bottom-2 left-2 z-20">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/20">
                        {reference.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 space-y-2">
                    {/* Client & Year */}
                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                      <div className="flex items-center gap-1">
                        <Building2 size={10} />
                        <span>{reference.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={10} />
                        <span>{reference.year}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-white">{reference.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-[10px] line-clamp-2">{reference.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {reference.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-1.5 py-0.5 text-[9px] text-gray-400 bg-white/[0.03] rounded border border-white/10">
                          {tech}
                        </span>
                      ))}
                      {reference.technologies.length > 2 && (
                        <span className="px-1.5 py-0.5 text-[9px] text-gray-500 bg-white/[0.03] rounded border border-white/10">
                          +{reference.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Visit Button */}
                    <a
                      href={reference.url}
                      {...getSecureExternalLinkProps(reference.url)}
                      className="w-full mt-2 btn-primary inline-flex items-center justify-center gap-1.5 py-2 text-xs"
                    >
                      <Globe size={12} />
                      <span>Visit</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </motion.div>
              ))}
              <div className="flex-shrink-0 w-4" aria-hidden="true" />
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((reference) => (
              <motion.div
                key={reference.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl trust-card"
              >
                {/* Image / Preview */}
                <div className={`relative h-48 overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                  
                  {/* Site Screenshot */}
                  <Image
                    src={reference.image}
                    alt={reference.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Browser mockup frame */}
                  <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5 z-20">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="flex-1 ml-2 h-4 rounded bg-black/30 backdrop-blur-sm flex items-center px-2">
                      <span className="text-[8px] text-white/50 truncate">{reference.url.replace('https://', '')}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      {reference.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Client & Year */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} />
                      <span>{reference.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{reference.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                    {reference.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {reference.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {reference.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-gray-400 bg-white/[0.03] rounded-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <motion.a
                    href={reference.url}
                    {...getSecureExternalLinkProps(reference.url)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 btn-primary inline-flex items-center justify-center gap-2 py-3"
                  >
                    <Globe size={16} />
                    <span>Visit Website</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {references.length === 0 && (
            <motion.div variants={cardVariants} className="text-center py-16">
              <div className="trust-card rounded-2xl p-12 max-w-lg mx-auto">
                <Globe size={48} className="mx-auto mb-6 text-white/20" />
                <h3 className="text-xl font-bold text-white mb-3">Coming Soon</h3>
                <p className="text-gray-400">
                  Client projects will be showcased here soon.
                </p>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={cardVariants} className="text-center mt-10 md:mt-16">
            <div className="trust-card rounded-xl md:rounded-2xl p-6 md:p-8">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/20">◎</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Have a Project?</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">Let's create a modern website for your business.</p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="btn-primary inline-flex items-center gap-2 text-sm md:text-base"
              >
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default References
