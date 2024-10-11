import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("fullstack");

  // Define the projects for each category
  const projects = {
    fullstack: [
      {
        name: "Chat-AI",
        description:
          "A chat application using MERN stack, TypeScript, Material UI, and OpenAI's GPT-3.5 Turbo API. Features include user authentication, chat history with delete option, and a modern UI. Frontend deployed on Netlify and backend on Render.",
        github: "https://github.com/zeeshansohani/chat-ai",
        demo: "https://chat-ai-now.netlify.app",
        image: "./src/assets/Chat-AI..png", // Add image URL
      },
      {
        name: "JobHunt",
        description:
          "A full-stack job portal built with the MERN stack. Students can create profiles, apply for jobs, upload resumes via Cloudinary, and track applications. Recruiters can register companies, post jobs, and manage applications. Tailwind CSS and Shadcn ensure a responsive and dynamic UI.",
        github: "https://github.com/zeeshansohani/job-hunt",
        demo: "https://job-hunt-now.netlify.app",
        image: "./src/assets/JobHunt.png", // Add image URL
      },
    ],
    reactprojects: [], // Currently no React projects
    javascriptprojects: [], // Currently no JavaScript projects
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Project Content */}
      <main className="flex-1 p-10 ml-32">
        <div className="flex flex-col space-y-6">
          {/* Conditionally render projects based on the selected category */}
          {projects[selectedCategory].length > 0 ? (
            projects[selectedCategory].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex gap-6"
              >
                {/* Image on the left */}
                <div className="w-40 h-40 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>

                {/* Project details on the right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      {project.name}
                    </h2>
                    <p className="text-gray-600">{project.description}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-row gap-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank" // This makes the link open in a new tab
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                      Github
                    </a>
                    <a
                      href={project.demo}
                      target="_blank" // This makes the link open in a new tab
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No projects to display in this category.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
