import { useEffect, useState } from 'preact/hooks';
import { commonData, systemsResumeConfig, sdeResumeConfig, mlResumeConfig } from '../data/resumeData';

export default function Resume() {
  const [resumeType, setResumeType] = useState('systems');
  const [config, setConfig] = useState(systemsResumeConfig);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'systems';
    setResumeType(type);

    switch (type) {
      case 'sde':
        setConfig(sdeResumeConfig);
        break;
      case 'ml':
        setConfig(mlResumeConfig);
        break;
      default:
        setConfig(systemsResumeConfig);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const filteredExperiences = commonData.experiences.filter(exp => {
    return config.includeExperiences && config.includeExperiences.includes(exp.company);
  });

  const filteredProjects = config.projectSelection || 
    commonData.projects.filter(project => {
      return project.tags.some(tag => config.projectTags.includes(tag));
    }).slice(0, 4);

  return (
    <div className="relative bg-white text-black min-h-screen">
      <div className="fixed top-4 right-4 print:hidden z-10 flex gap-2">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Download as PDF
        </button>
        <a
          href="/"
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-500 transition-colors"
        >
          Back to Site
        </a>
      </div>

      <div className="a4">
        <header>
          <h1>{commonData.name}</h1>
          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-item">
                <img className="icon" src="/github.svg" alt="GitHub" />
                <a target="_blank" href={commonData.contact.github}>{commonData.contact.github}</a>
              </span>
              <span className="contact-item">
                <img className="icon" src="/linkedin.svg" alt="LinkedIn" />
                <a target="_blank" href={commonData.contact.linkedin}>{commonData.contact.linkedin}</a>
              </span>
            </div>
            <div className="contact-row">
              {commonData.contact.email.map((email, index) => (
                <span key={index} className="contact-item">
                  <img className="icon" src="/email.svg" alt="Email" />
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
              ))}
            </div>
            <span className="contact-item">
              <img className="icon" src="/blog.svg" alt="Blog" />
              <a target="_blank" href={commonData.contact.blog}>{commonData.contact.blog}</a>
            </span>
          </div>
        </header>

        <main>
          <p className="intro">{commonData.intro}</p>

          <h2>Education</h2>
          <p>
            <strong>{commonData.education.institution}</strong>
            <span className="date-range">{commonData.education.period}</span><br />
            <em>{commonData.education.degree}</em> — <em>Aggregate GPA:</em> {commonData.education.gpa}<em><br />
              Relevant courses:</em> {commonData.education.courses}
            <ul>
              {commonData.education.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </p>

          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages:</strong> {commonData.skills.languages}</li>
            <li><strong>Technologies:</strong> {commonData.skills.technologies}</li>
            <li><strong>Tools:</strong> {commonData.skills.tools}</li>
            <li><strong>Concepts:</strong> {commonData.skills.concepts}</li>
          </ul>

          <h2>Experience</h2>
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <strong>{exp.company}</strong> <span className="date-range">{exp.period}</span><br />
              <span className="job-title">{exp.title}</span>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2>Notable Projects</h2>
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <span className="project-title">
                {project.title} |
                <a target="_blank" href={project.url}>
                  <img src="/github.svg" /> — {project.url}
                </a>
                {project.liveUrl && (
                  <span> (<a href={project.liveUrl}>run it here</a>)</span>
                )}
              </span>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2>Achievements</h2>
          <ul>
            {commonData.achievements.map((achievement, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: achievement }} />
            ))}
          </ul>
        </main>
      </div>

      <style jsx>{`
        @page {
          size: A4;
          margin: 0;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .a4 {
          width: 210mm;
          height: 297mm;
          margin: 0 auto;
          background: white;
          padding: 6mm;
          font-family: "Times New Roman", Times, serif;
          font-size: 10pt;
          line-height: 1.2;
          box-sizing: border-box;
        }

        @media print {
          .a4 {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
          }
        }

        h1 {
          text-align: center;
          font-size: 16pt;
          margin-bottom: 3pt;
        }

        .contact-info {
          text-align: center;
          margin-bottom: 4pt;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1pt;
          width: 100%;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin: 0 4pt;
          white-space: nowrap;
          font-size: 8pt;
        }

        .icon {
          width: 12pt;
          height: 12pt;
          margin-right: 3pt;
        }

        .contact-info a {
          text-decoration: none;
          color: #000;
        }

        h2 {
          border-bottom: 1pt solid #000;
          font-size: 12pt;
          margin-top: 6pt;
          margin-bottom: 2pt;
        }

        ul {
          padding-left: 10pt;
          margin-top: 1pt;
          margin-bottom: 3pt;
        }

        li {
          margin-left: 2px;
          margin-bottom: 1pt;
        }

        .experience-item {
          margin-bottom: 6pt;
        }

        .job-title {
          font-style: italic;
        }

        .date-range {
          float: right;
        }

        .project-title {
          font-weight: bold;
          margin-bottom: 1pt;
        }

        p {
          margin: 3pt 0;
        }

        a, a:visited {
          text-decoration: inherit;
          color: black;
          border-bottom: 1px solid black;
        }

        .intro {
          margin-bottom: 6pt;
          font-size: 9pt;
        }

        .compact-list {
          margin-bottom: 2pt;
        }

        .compact-list li {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
