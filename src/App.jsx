import Header from './components/Header'
import Hero from './components/Hero'
import Socials from './components/Socials'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Footer from './components/Footer'
import ResumeSection from './components/ResumeSection'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div id="hero">
          <Hero />
        </div>

        <section id="resumes" className="my-16 pt-16 -mt-16">
          <ResumeSection />
        </section>

        <section id="socials" className="my-16 pt-16 -mt-16">
          <Socials />
        </section>

        <section id="skills" className="my-16 pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-8">Tech Stack & Tools</h2>
          <Skills />
        </section>

        <section id="projects" className="my-16 pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <Projects />
        </section>

        <section id="experience" className="my-16 pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <Experience />
        </section>

        <section id="about" className="my-16 pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-8">About Me</h2>
          <About />
        </section>
      </div>

      <Footer />
    </div>
  )
}
