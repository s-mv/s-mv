export default function Hero({ setRef, scrollToSection }) {
  return (
    <section ref={setRef} className="py-20">
      <h1 className="text-4xl font-bold mb-2">Hello there!</h1>
      <h2 className="text-2xl text-green-400 mb-4">It's smv, also known as Shreerang Vaidya.</h2>
      <p className="text-gray-300 mb-8 max-w-2xl">
        I love to tinker around with compilers and systems, but I'm interested in all things tech.
      </p>
      
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={() => scrollToSection('resume')}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-600 transition-colors rounded"
        >
          View My Resume
        </button>
        <button 
          onClick={() => scrollToSection('socials')}
          className="px-4 py-2 bg-transparent border border-purple-700 hover:bg-purple-900 transition-colors rounded"
        >
          Connect
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="px-4 py-2 bg-transparent border border-purple-700 hover:bg-purple-900 transition-colors rounded"
        >
          See My Work
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="px-4 py-2 bg-transparent border border-purple-700 hover:bg-purple-900 transition-colors rounded"
        >
          My Skills
        </button>
      </div>
    </section>
  )
}
