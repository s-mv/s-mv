import React from 'react';
import { useEffect, useState } from 'preact/hooks';
import { resumeProjects } from './resumeProjects.jsx';

export default function Resume() {
  const [resumeType, setResumeType] = useState('systems');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'systems';
    setResumeType(type);
  }, []);

  return (
    <div className="a4 w-[210mm] h-[297mm] m-auto bg-white p-[6mm] font-[Times New Roman] text-[10pt] leading-[1.2] box-border">
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-8 py-4 text-[10pt] border border-black rounded bg-white shadow hover:bg-gray-100"
        >
          Print
        </button>
      </div>
      <header>
        <h1 className="text-center text-[16pt] mb-[3pt]">Shreerang Vaidya</h1>
        <div className="contact-info text-center mb-[4pt] flex flex-col items-center">
          <div className="contact-row flex justify-center flex-wrap mb-[1pt] w-full">
            <span className="contact-item flex items-center mx-[4pt] whitespace-nowrap text-[8pt]">
              <img className="icon w-[12pt] h-[12pt] mr-[3pt]" src="/github.svg" alt="GitHub" />
              <a target="_blank" href="https://github.com/s-mv/" className="no-underline text-black border-b border-black">https://github.com/s-mv/</a>
            </span>
            <span className="contact-item flex items-center mx-[4pt] whitespace-nowrap text-[8pt]">
              <img className="icon w-[12pt] h-[12pt] mr-[3pt]" src="/linkedin.svg" alt="LinkedIn" />
              <a target="_blank" href="https://linkedin.com/in/shreerang-vaidya/" className="no-underline text-black border-b border-black">https://linkedin.com/in/shreerang-vaidya/</a>
            </span>
          </div>
          <div className="contact-row flex justify-center flex-wrap mb-[1pt] w-full">
            <span className="contact-item flex items-center mx-[4pt] whitespace-nowrap text-[8pt]">
              <img className="icon w-[12pt] h-[12pt] mr-[3pt]" src="/email.svg" alt="Email" />
              <a href="mailto:shreerangvaidya28@gmail.com" className="no-underline text-black border-b border-black">shreerangvaidya28@gmail.com</a>
            </span>
            <span className="contact-item flex items-center mx-[4pt] whitespace-nowrap text-[8pt]">
              <img className="icon w-[12pt] h-[12pt] mr-[3pt]" src="/email.svg" alt="Email" />
              <a href="mailto:2022.shreerang.vaidya@ves.ac.in" className="no-underline text-black border-b border-black">2022.shreerang.vaidya@ves.ac.in</a>
            </span>
          </div>
          <span className="contact-item flex items-center mx-[4pt] whitespace-nowrap text-[8pt]">
            <img className="icon w-[12pt] h-[12pt] mr-[3pt]" src="/blog.svg" alt="Blog" />
            <a target="_blank" href="https://s-mv.vercel.app/" className="no-underline text-black border-b border-black">https://s-mv.vercel.app/</a>
          </span>
        </div>
      </header>

      <main>
        <p className="intro mb-[6pt] text-[9pt]">
          Computer Science undergraduate interested in compiler design, machine learning, embedded systems and distributed systems.
        </p>

        <h2 className="border-b border-black text-[12pt] mt-[6pt] mb-[2pt]">Education</h2>
        <p>
          <strong>Vivekanand Education Society's Institute of Technology</strong>
          <span className="float-right">2022 – 2026</span><br />
          <em>B. E. in Computer Engineering</em> — <em>Aggregate GPA:</em> 9.09<br />
          <em>Relevant courses:</em> Systems Programming and Compiler Construction, Theoretical Computer Science, DSA, Microprocessors, Digital Logic and Computer Architecture, Operating Systems, OOPM, DBMS, Probabilistic Graphical Models, Quantitative Analysis, Discrete Structures and Graph Theory, etc.
        </p>
        <ul className="pl-[10pt] mt-[1pt] mb-[3pt] list-disc">
          <li>2nd runner up in BuzzPro, 2024.</li>
          <li>Special mention in Hack-AI-thon 2.0, 2024.</li>
          <li>3rd runner up in Awakening The Scientist, 2022.</li>
        </ul>

        <h2 className="border-b border-black text-[12pt] mt-[6pt] mb-[2pt]">Technical Skills</h2>
        <ul className="pl-[10pt] mt-[1pt] mb-[3pt] list-disc">
          <li><strong>Languages:</strong> C, C++, Rust, Python, Go, Java, JavaScript</li>
          <li><strong>Technologies:</strong> MERN Stack, PyTorch, TensorFlow, FastAPI, LLVM, WebAssembly</li>
          <li><strong>Tools:</strong> Unix/Linux, Git, GDB, Valgrind, Make/CMake, Docker, Selenium</li>
          <li><strong>Concepts:</strong> Systems Programming, Compiler Design, DSA, OS, Embedded Systems, ML/DL, Web Development, CI/CD</li>
        </ul>

        <h2 className="border-b border-black text-[12pt] mt-[6pt] mb-[2pt]">Experience</h2>
        <div className="mb-[6pt]">
          <strong>Accelus Technologies</strong> <span className="float-right">Feb 2025– Present</span><br />
          <span className="italic">Intern</span>
          <ul className="pl-[10pt] mt-[1pt] mb-[3pt] list-disc">
            <li>Developing CNC machine G-code bytecode VM in C, extending rs274ngc specification for efficient control.</li>
            <li>Extensively applying compiler design, OS, embedded and systems programming concepts.</li>
          </ul>
        </div>
        <div className="mb-[6pt]">
          <strong>Banao Technologies</strong> <span className="float-right">Jan 2024– Jun 2024</span><br />
          <span className="italic">Web Scraping Intern</span>
          <ul className="pl-[10pt] mt-[1pt] mb-[3pt] list-disc">
            <li>Learned the applications of web scraping, DBMS, backend development, etc. through various projects.</li>
            <li>Gained valuable insights about the internal workings of a startup and team collaboration.</li>
          </ul>
        </div>
        <div className="mb-[6pt]">
          <strong>4thventure IoTspace</strong> <span className="float-right">Jun 2020– May 2021</span><br />
          <span className="italic">Intern</span>
          <ul className="pl-[10pt] mt-[1pt] mb-[3pt] list-disc">
            <li>Worked on a project to develop a user-facing React application.</li>
            <li>Collaborated on various frontend and backend systems.</li>
          </ul>
        </div>

        <h2 className="border-b border-black text-[12pt] mt-[6pt] mb-[2pt]">Notable Projects</h2>
        {resumeProjects[resumeType]}

        <h2 className="border-b border-black text-[12pt] mt-[6pt] mb-[2pt]">Achievements</h2>
        <ul className="pl-[10pt] mt-[1pt] mb-[3pt] list-disc">
          <li><strong>AIR 1627</strong> in GATE CSE 2025 certifying strong fundamentals.</li>
          <li>Co-hosted the 1st <a href="https://itch.io/jam/godot-india-community-game-jam/" target="_blank" className="no-underline text-black border-b border-black">Godot India Community Game Jam (GICGJ)</a>, 2025.</li>
          <li>Co-authored and published paper "<strong>KisanSevak: Enhancing Crop Management and Market Forecasting through Machine Learning</strong>" in JET-M: <a href="https://jet-m.com/wp-content/uploads/129-JETM8261.pdf" className="no-underline text-black border-b border-black">https://jet-m.com/wp-content/uploads/129-JETM8261.pdf</a></li>
          <li>Submitted a solution in <a href="https://medium.com/@the.smv/from-heroes-to-zeroes-my-amazon-ml-challenge-2024-experience-c31e29dd7245" target="_blank" className="no-underline text-black border-b border-black">Amazon ML Challenge, 2024</a>.</li>
          <li>Submitted a solution in GDSC Solution Challenge, 2024.</li>
          <li>2 time Google Code-In Participant (2017-18).</li>
        </ul>
      </main>
    </div>
  );
}
