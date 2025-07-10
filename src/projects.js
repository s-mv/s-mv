// import github from "./assets/github.svg";
// import linkedin from "./assets/linkedin.svg";
// import email from "./assets/email.svg";
// import smv from "./assets/smv.jpeg";

class Project {
    constructor(name, link, desc, skills, wip = false, hobby = false) {
        this.name = name;
        this.link = link;
        this.desc = desc;
        this.skills = skills;
        this.wip = wip;
        this.hobby = hobby;
    }
}

export const projects = {
    systems: {
        smvm: new Project("smvm", "https://github.com/s-mv/smvm",
            "Bytecode VM under 1500 lines of C code. "
            + "Implements a complex instruction set based on MIPS assembly.",
            ["C", "Assembly", "Virtual Machines", "Compiler Design", "Computer Architecture", "Digital Logic"]),
        smvblock: new Project("smvblock", "https://github.com/s-mv/smvblock",
            "Blockchain implementation in Rust loosely based on the Ethereum white paper. Using PoS consensus.",
            ["Rust", "SQL", "Blockchain", "Cryptography", "Distributed Systems", "Actix"], true),
        "gcode++": new Project("gcode++", "https://github.com/s-mv/gcode-plus-plus",
            "A lightweight G-code interpreter and VM written in C++ inspired by the NIST rs274ngc interpreter.",
            ["C++", "ANTLR4", "Compiler Design", "Virtual Machines", "CNC", "3D Printing"]),
        brainfudge: new Project("brainfudge", "https://github.com/s-mv/brainfudge",
            "12th grade hobby project. A simple Brainfuck interpreter written in C (but PG-13 now).",
            ["C", "Compiler Design", "Interpreters", "Brainfuck"], false, true),
        instafake: new Project("instafake", "https://github.com/s-mv/instafake",
            "A simple instagram-like application for the demonstration of a local/proprietary cloud server system using Raspberry Pi.",
            ["Python", "FastAPI", "Raspberry Pi", "Web Development", "Cloud Computing"]),
    },
    "SDE/ML": {
        "Black-Scholes Visualizer": new Project("Black-Scholes Visualizer", "https://github.com/s-mv/black-scholes-visualizer",
            "Pricing engine for European call/put options using an application of the Black-Scholes (or Black-Scholes-Merton) equation.",
            ["Rust", "WASM", "Quantitative Analysis", "Web Development", "Data Science", "Finance", "React", "Vite", "Tailwind", "ChartJS"],
        ),
        KisanSevak: new Project("KisanSevak", "https://s-mv.github.io/black-scholes-visualizer/",
            "ML powered agricultural tool for the farmer of the future! Recommends crops, predicts farm yield and compares future market prices. "
            + "Co-authored with my SE Project group alongside a research paper.",
            ["Python", "Machine Learning", "Flask", "Web Development", "Data Collection", "Data Science", "SciKit-Lean", "React", "Vite", "SQL", "Research Methodology", "Data Analysis"]),
        "AirBNB Review Analyzer": new Project("AirBNB Review Analyzer",
            "https://github.com/s-mv/airbnb-review-analyzer",
            "Analyze airbnb reviews in seconds! Made using Selenium, Beautiful Soup 4 and NLTK.",
            ["Python", "Web Scraping", "Natural Language Processing", "Data Analysis", "Selenium", "Beautiful Soup 4", "NLTK"],
        ),
        "Smart Fireflies": new Project("Smart Fireflies", "https://codepen.io/s-mv/pen/dyYyWGx",
            "A genetic algorithm written from scratch to simulate the behavior of fireflies. Hobby project from 10th grade.",
            ["JavaScript", "Genetic Algorithms", "Web Development"], false, true),
        "game of life": new Project("game of life", "https://s-mv.github.io/game-of-life/",
            "A simple implementation of Conway's Game of Life in C/WASM with a web interface and custom rules. Hobby project from 11th grade.",
            ["C", "WASM", "Web Development", "Algorithms", "Data Structures"], false, true),
    },
    // timepass: {
    //     "autocomplete": new Project("autocomplete", "https://github.com/s-mv/autocomplete",
    //         "Simple autocomplete in C. Hobby project from first semester of college (2022).",
    //         ["C"], false, true),
    //     "testmv": new Project("testmv", "https://github.com/s-mv/testmv",
    //         "A simple header-only testing library for C/C++. Hobby project made in school.",
    //         ["C"], false, true),

    // }
};

export const teststack = {
    languages: [
        "C", "C++", "Rust", "Go", "x86 Assembly",
        "Python", "Java", "OCaml",
        "JavaScript", "TypeScript"
    ],
    technologies: [
        // systems/low-level
        "LLVM", "WASM", "ANTLR4",
        // ML/data
        "NLTK", "Selenium", "Beautiful Soup 4",
        // backend
        "FastAPI", "Flask", "Django", "Express", "Actix", "Node.js", "SQL", "MongoDB",
        // frontend/Full-stack
        "React", "Tailwind", "ChartJS", "Vite", "Vercel",
        // testing/Others
        "Catch2"
    ],
    tools: ["Linux/UNIX", "Git", "GDB", "Make/CMake", "Docker", "Selenium"],
    concepts: ["Systems Programming", "Compiler Design", "Virtual Machines", "Data Structures", "Algorithms", "ML/DL", "Web Development", "Cloud Computing", "Blockchain", "Distributed Systems", "Computer Architecture", "Digital Logic"]
}

class Experience {
    constructor(company, position, description, skills, date) {
        this.company = company;
        this.position = position;
        this.description = description;
        this.skills = skills;
        this.date = date;
    }
}

export const experiences = [
    new Experience(
        "Accelus Technologies",
        "Intern",
        ["Developing CNC machine G-code bytecode VM in C, extending rs274ngc specification for efficient control.",
            "Extensively applying compiler design, OS, embedded and systems programming concepts."
        ],
        ["C", "Compiler Design", "Virtual Machines", "Systems Programming", "Embedded Systems", "CNC"],
        "Feb 2025 to Present"
    ),
    new Experience(
        "Banao Technologies",
        "Web Scraping Intern",
        ["Learned the applications of web scraping, DBMS, backend development, etc. through various projects.",
            "Gained valuable insights about the internal workings of a startup and team collaboration."],
        ["Python", "Web Scraping", "SQL", "Backend Development", "Data Analysis", "Beautiful Soup 4", "Selenium"],
        "Jan 2024 to Jun 2024"
    ),
    new Experience(
        "Academor",
        "Machine Learning Intern",
        ["Made a classification model to for loan approval prediction. Collaboration with team over Google Colab."],
        ["Python", "Machine Learning", "Data Science", "Classification Models", "Google Colab", "Team Collaboration"],
        "July 2023 to Aug 2023"
    ),
    new Experience(
        "4thventure IoTSpace",
        "Intern",
        ["Worked on a project to develop a user-facing React application."],
        ["React", "JavaScript", "Web Development", "UI/UX", "Frontend Development"],
        "July 2020 to May 2021"
    )
];

class Achievement {
    constructor(title, description, year) {
        this.title = title;
        this.description = description;
        this.year = year;
    }
}

export const achievements = [
    new Achievement(
        "AIR 1627 in GATE CSE 2025",
        "Secured All India Rank 1627 in Graduate Aptitude Test in Engineering for Computer Science, certifying strong fundamentals.",
        2025
    ),
    new Achievement(
        "Co-hosted the 1st Godot India Community Game Jam (GICGJ)",
        "Organized and facilitated the first nationwide game development jam for the Godot game engine community in India.",
        2025
    ),
    new Achievement(
        "Research Paper Publication",
        "Co-authored and published paper \"KisanSevak: Enhancing Crop Management and Market Forecasting through Machine Learning\" in Volume 72 of the Journal of Engineering and Technology Management (JET-M).",
        2024
    ),
    new Achievement(
        "Amazon ML Challenge Participant",
        "Submitted a solution in the Amazon Machine Learning Challenge, applying ML techniques to real-world industry problems.",
        2024
    ),
    new Achievement(
        "GDSC Solution Challenge Participant",
        "Submitted a solution in the Google Developer Student Clubs Solution Challenge, addressing real-world problems using Google technologies.",
        2024
    ),
    new Achievement(
        "Google Code-In Participant",
        "Two-time participant in Google Code-In, contributing to open source projects for high school students.",
        "2017-2018"
    )
];