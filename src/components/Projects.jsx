import { projects } from '../projects'

export default function Projects() {
  return (
    <div>
      {Object.entries(projects).map(([category, categoryProjects]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl text-purple-400 mb-6">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(categoryProjects).map(([name, project]) => (
              <a
                key={name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-800 rounded-md p-5 hover:border-purple-600 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  <div className="flex">
                    {project.wip && (
                      <span className="text-xs bg-yellow-800 text-yellow-200 px-2 py-1 rounded ml-2">
                        WIP
                      </span>
                    )}
                    {project.hobby && (
                      <span className="text-xs bg-purple-800 text-purple-200 px-2 py-1 rounded ml-2">
                        Hobby
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map(skill => (
                    <span key={skill} className="text-xs bg-gray-900 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-orange-400 hover:text-orange-300 text-sm">
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
