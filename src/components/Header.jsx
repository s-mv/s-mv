export default function Header() {
  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-10 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <div className="text-lg font-semibold">{'<smv />'}</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#projects" 
                className="hover:text-orange-800 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="hover:text-orange-800 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="hover:text-orange-800 transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="hover:text-orange-800 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
