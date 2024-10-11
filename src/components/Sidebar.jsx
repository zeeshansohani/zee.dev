import React from "react";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-38 bg-white h-screen sticky top-16 left-0 my-10">
      {/* Make sure the sidebar is sticky and scrolls within the screen */}
      <div className="p-4">
        <h2 className="text-black text-2xl font-bold">My Projects</h2>
      </div>
      <nav className="px-4 space-y-4">
        {/* MERN Stack Section */}
        <div>
          <button
            onClick={() => setSelectedCategory("fullstack")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "fullstack"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            Full Stack Projects
          </button>
        </div>

        {/* React Section */}
        <div>
          <button
            onClick={() => setSelectedCategory("reactprojects")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "reactprojects"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            React Projects
          </button>
        </div>

        {/* Javascript Section */}
        <div>
          <button
            onClick={() => setSelectedCategory("javascriptprojects")}
            className={`w-full text-left text-black hover:text-gray-600 ${
              selectedCategory === "javascriptprojects"
                ? "font-bold underline underline-offset-8"
                : ""
            }`}
          >
            Javascript Projects
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
