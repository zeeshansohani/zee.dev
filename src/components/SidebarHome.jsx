import React from "react";

const SidebarHome = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-38 bg-white sticky top-16 left-0 h-96">
      {/* Make sure the sidebar is sticky and scrolls within the screen */}
      <div className="p-4">
        <h2 className="text-black text-4xl font-bold">Technical Skills</h2>
      </div>
      <nav className="px-4 space-y-4">
        <div>
          <button
            onClick={() => setSelectedCategory("ProgrammingLanguages")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "ProgrammingLanguages"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            Programming Languages
          </button>
        </div>

        <div>
          <button
            onClick={() => setSelectedCategory("CloudDevOps")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "CloudDevOps"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            Cloud & DevOps
          </button>
        </div>

        <div>
          <button
            onClick={() => setSelectedCategory("Databases")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "Databases"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            Databases
          </button>
        </div>
        <div>
          <button
            onClick={() => setSelectedCategory("libraryandframeworks")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "libraryandframeworks"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            Library/Frameworks
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarHome;
