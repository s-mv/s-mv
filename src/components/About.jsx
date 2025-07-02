export default function About() {
  return (
    <div className="space-y-6">
      <p className="text-gray-300">
        I'm a final year student at VESIT pursuing a BE in Computer Engineering.
        I graduate in 2026 but my love for technology goes back to when I was a 13 year old tinkering with game engines,
        building websites, and eventually making my own compilers.
        Over time, that curiosity evolved into a deeper interest in systems programming, full-stack and machine learning.
        <br />
        Beyond my technical interests, I'm passionate about writing and literature, with an inclination towards
        linguistics and etymology. I'm currently learning Russian out of personal interest and curiosity.
      </p>
      
      <p className="text-gray-300">
        When I'm not coding or reading, I enjoy documenting my thoughts and experiences through writing. 
        I maintain a blog where I share insights on technology, linguistics, and personal growth.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a 
          href="https://s-mv.github.io/blog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
            <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1z"></path>
          </svg>
          Visit My Blog
        </a>
        
        <a 
          href="https://medium.com/@the.smv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
          Read on Medium
        </a>
        
        <a 
          href="https://substack.com/@notsmv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
          Follow on Substack
        </a>
      </div>
    </div>
  )
}
