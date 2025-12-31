import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import References from './components/References'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <References />
      <Contact />
      
      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white font-semibold mb-1">Talha Bilal Varlık</p>
              <p className="text-gray-500 text-sm">
                © 2025 All rights reserved.
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>Built with</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Next.js</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Tailwind</span>
              <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">Framer</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 