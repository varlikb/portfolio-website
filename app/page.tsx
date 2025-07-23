import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
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
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              © 2024 Talha Bilal Varlık. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-slate-500 text-sm">
              Passionate about bridging theory and practice in computer science.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
} 