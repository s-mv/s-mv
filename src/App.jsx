import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Socials from './components/Socials'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Footer from './components/Footer'
import ResumeSection from './components/ResumeSection'

const CollapsibleSection = ({ id, title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id={id} className="my-16 pt-16 -mt-16">
      <div
        className="flex items-center cursor-pointer mb-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="ml-2">{isOpen ? '▼' : '►'}</span>
      </div>
      {isOpen && children}
    </section>
  );
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center shadow-lg transition-all z-50"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div id="hero">
          <Hero />
        </div>

        <section id="about" className="my-16 pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-8">About Me</h2>
          <About />
        </section>

        <CollapsibleSection id="resumes" title="Resume">
          <ResumeSection />
        </CollapsibleSection>

        <CollapsibleSection id="experience" title="Experience">
          <Experience />
        </CollapsibleSection>

        <CollapsibleSection id="projects" title="Projects">
          <Projects />
        </CollapsibleSection>

        <CollapsibleSection id="skills" title="Tech Stack & Tools">
          <Skills />
        </CollapsibleSection>

        <section id="socials" className="my-16 pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-8">Socials</h2>
          <Socials />
        </section>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  )
}
