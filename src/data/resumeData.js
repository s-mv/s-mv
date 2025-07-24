import { projects, experiences, teststack, achievements } from '../projects';

const convertProjects = () => {
  const allProjects = [];

  Object.keys(projects).forEach(category => {
    Object.keys(projects[category]).forEach(projectName => {
      const project = projects[category][projectName];

      const tags = [];

      if (category === "systems") tags.push("systems");
      if (category === "SDE/ML") {
        const mlKeywords = ["Machine Learning", "Data Science", "Natural Language Processing", "Data Analysis"];
        const isML = project.skills.some(skill => mlKeywords.includes(skill));

        tags.push("sde");
        if (isML) tags.push("ml");
      }

      if (project.skills.some(skill =>
        ["Compiler Design", "Interpreters", "Virtual Machines"].includes(skill))) {
        tags.push("compilers");
      }

      let description = [project.desc];
      if (project.skills.length > 0) {
        description.push(`Technologies: ${project.skills.slice(0, 4).join(", ")}${project.skills.length > 4 ? ", etc." : ""}`);
      }

      allProjects.push({
        title: project.name,
        url: project.link,
        liveUrl: project.liveLink || null,
        description,
        tags,
        skills: project.skills,
        wip: project.wip,
        hobby: project.hobby
      });
    });
  });

  return allProjects;
};

const convertExperiences = () => {
  return experiences.map(exp => ({
    company: exp.company,
    period: exp.date,
    title: exp.position,
    responsibilities: exp.description,
    skills: exp.skills
  }));
};

const generateAchievements = () => {
  return achievements.map(achievement =>
    `${achievement.title} (${achievement.year}).`
  );
};

const generateSkills = () => {
  return {
    languages: teststack.languages.join(", "),
    technologies: teststack.technologies.join(", "),
    tools: teststack.tools.join(", "),
    concepts: teststack.concepts.join(", ")
  };
};

// Generate common data for all resumes
export const commonData = {
  name: "Shreerang Vaidya",
  contact: {
    github: "https://github.com/s-mv/",
    linkedin: "https://linkedin.com/in/shreerang-vaidya/",
    email: ["shreerangvaidya28@gmail.com", "2022.shreerang.vaidya@ves.ac.in"],
    blog: "https://s-mv.github.io/blog/"
  },
  intro: "Computer Science undergraduate interested in compiler design, machine learning, embedded systems and distributed systems.",
  education: {
    institution: "Vivekanand Education Society's Institute of Technology",
    degree: "B. E. in Computer Engineering",
    period: "2022 – 2026",
    gpa: "9.09",
    courses: "Systems Programming and Compiler Construction, Theoretical Computer Science, DSA, Microprocessors, Digital Logic and Computer Architecture, Operating Systems, OOPM, DBMS, Probabilistic Graphical Models, Quantitative Analysis, Discrete Structures and Graph Theory, etc.",
    achievements: [
      "2nd runner up in BuzzPro, 2024.",
      "Special mention in Hack-AI-thon 2.0, 2024.",
      "3rd runner up in Awakening The Scientist, 2022."
    ]
  },
  experiences: convertExperiences(),
  projects: convertProjects(),
  achievements: generateAchievements(),
  skills: generateSkills()
};

// Systems Resume Configuration
export const systemsResumeConfig = {
  title: "Systems Engineering Resume",
  projectTags: ["systems", "compilers"],
  includeExperiences: ["Accelus Robotics", "Banao Technologies", "4thventure IoTSpace"],
  projectSelection: commonData.projects
    .filter(p => p.tags.includes("systems") || p.tags.includes("compilers"))
    .filter(p => !p.hobby && !p.wip)
    .slice(0, 4),
  highlightedSkills: ["C", "C++", "Rust", "Assembly", "Systems Programming", "Compiler Design", "Virtual Machines"]
};

// SDE Resume Configuration
export const sdeResumeConfig = {
  title: "Software Development Engineer Resume",
  projectTags: ["sde"],
  includeExperiences: ["Accelus Robotics", "Banao Technologies", "4thventure IoTSpace"],
  projectSelection: commonData.projects
    .filter(p => p.tags.includes("sde"))
    .filter(p => !p.hobby)
    .slice(0, 4),
  highlightedSkills: ["Rust", "JavaScript", "TypeScript", "React", "Web Development", "DSA", "CI/CD"]
};

// ML Resume Configuration
export const mlResumeConfig = {
  title: "Machine Learning Engineer Resume",
  projectTags: ["ml"],
  includeExperiences: ["Banao Technologies", "Accelus Robotics", "4thventure IoTSpace"],
  projectSelection: commonData.projects
    .filter(p => p.tags.includes("ml"))
    .slice(0, 4),
  highlightedSkills: ["Python", "Machine Learning", "Data Science", "Data Analysis", "Natural Language Processing"]
};
