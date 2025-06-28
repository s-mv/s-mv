export default function ResumeSection() {
  return (
    <div className="mb-16">
      <p className="text-gray-300 mb-4">
        I specialize in different areas of computer science. Select a resume tailored to your interest:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Systems Resume Card */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-600 transition-colors flex flex-col h-full">
          <h3 className="text-xl text-green-400 mb-2">Systems</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Focused on low-level programming, compiler design, and systems architecture. Highlights my projects in C, Rust, and VM development.
          </p>
          <a
            href="/resume?type=systems"
            target="_blank"
            className="inline-block px-4 py-2 bg-purple-700 hover:bg-purple-600 transition-colors rounded text-center w-full"
          >
            View Systems Resume
          </a>
        </div>

        {/* SDE Resume Card */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-600 transition-colors flex flex-col h-full">
          <h3 className="text-xl text-green-400 mb-2">SDE</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Emphasizes software development skills, web technologies, and project management. Highlights my experience with modern frameworks and tools.
          </p>
          <a
            href="/resume?type=sde"
            target="_blank"
            className="inline-block px-4 py-2 bg-purple-700 hover:bg-purple-600 transition-colors rounded text-center w-full"
          >
            View SDE Resume
          </a>
        </div>

        {/* ML Resume Card */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-600 transition-colors flex flex-col h-full">
          <h3 className="text-xl text-green-400 mb-2">ML</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">
            Focuses on machine learning, data science, and AI projects. Highlights my research experience and publications in this field.
          </p>
          <a
            href="/resume?type=ml"
            target="_blank"
            className="inline-block px-4 py-2 bg-purple-700 hover:bg-purple-600 transition-colors rounded text-center w-full"
          >
            View ML Resume
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="/resume"
          target="_blank"
          className="text-sm text-gray-400 hover:text-white transition-colors underline"
        >
          View Default Resume
        </a>
      </div>
    </div>
  );
}
