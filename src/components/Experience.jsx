import { experiences, achievements } from '../projects'

export default function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl mb-6 text-green-400">Work Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-purple-600 pl-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{exp.company}</h4>
                <span className="text-sm text-gray-400">{exp.date}</span>
              </div>
              <p className="text-green-400 mb-2">{exp.position}</p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl mb-6 text-green-400">Achievements</h3>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-l-2 border-orange-600 pl-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{achievement.title}</h4>
                <span className="text-sm text-gray-400">{achievement.year}</span>
              </div>
              <p className="text-sm text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
