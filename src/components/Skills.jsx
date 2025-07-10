import { teststack } from '../projects'

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl mb-4 text-purple-400">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {teststack.languages.map(lang => (
            <span key={lang} className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl mb-4 text-purple-400">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {teststack.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl mb-4 text-purple-400">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {teststack.tools.map(tool => (
            <span key={tool} className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl mb-4 text-purple-400">Concepts</h3>
        <div className="flex flex-wrap gap-2">
          {teststack.concepts.map(concept => (
            <span key={concept} className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              {concept}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
