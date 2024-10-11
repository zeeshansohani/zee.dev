import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SidebarHome from "../components/SidebarHome";
import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGoogle,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJenkins,
  FaDatabase,
} from "react-icons/fa"; // Added necessary icons
import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiDjango,
  SiTailwindcss,
  SiShadcnui,
  SiMicrosoftazure,
  SiMongodb,
} from "react-icons/si"; // Additional icons from react-icons
import { GrMysql } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import "../App.css";

const Home = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(
    "ProgrammingLanguages"
  );

  const [output, setOutput] = useState(""); // This will hold the terminal output

  const runCode = () => {
    const name = "Zeeshan Sohani";
    const role = "Software Engineer";
    const codeOutput = `Hello, I'm ${name}, a ${role}`;
    setOutput(codeOutput); // Update the output when the button is clicked
  };

  const skills = {
    ProgrammingLanguages: [
      { name: "Python", icon: <FaPython size={50} /> },
      { name: "JavaScript", icon: <FaJsSquare size={50} /> },
      { name: "Java", icon: <FaJava size={50} /> },
      { name: "TypeScript", icon: <SiTypescript size={50} /> },
      { name: "C", icon: <FaDatabase size={50} /> },
      { name: "HTML5", icon: <FaHtml5 size={50} /> },
      { name: "CSS", icon: <FaCss3Alt size={50} /> },
    ],
    CloudDevOps: [
      { name: "AWS", icon: <FaAws size={50} /> },
      { name: "Google Cloud", icon: <FaGoogle size={50} /> },
      { name: "Azure", icon: <SiMicrosoftazure size={50} /> },
      { name: "Jenkins", icon: <FaJenkins size={50} /> },
      { name: "Git", icon: <FaGitAlt size={50} /> },
    ],
    Databases: [
      { name: "MongoDB", icon: <SiMongodb size={50} /> },
      { name: "Apache Derby", icon: <FaDatabase size={50} /> },
      { name: "MySQL", icon: <GrMysql size={50} /> },
    ],
    libraryandframeworks: [
      { name: "React", icon: <FaReact size={50} /> },
      { name: "Node.js", icon: <FaNodeJs size={50} /> },
      { name: "Angular", icon: <FaAngular size={50} /> },
      { name: "Redux", icon: <SiRedux size={50} /> },
      { name: "Express.js", icon: <SiExpress size={50} /> },
      { name: "Firebase", icon: <SiFirebase size={50} /> },
      { name: "Django", icon: <SiDjango size={50} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
      { name: "Shadcn UI", icon: <SiShadcnui size={50} /> },
    ],
  };
  const position = "{position}";
  const fullname = "{fullname}";

  return (
    <div className="flex flex-col gap-32 ">
      <section className="flex flex-col justify-center items-start min-h-screen bg-white text-gray-800">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-64">
          {" "}
          {/* Increased spacing here */}
          {/* Left side content */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-light text-gray-600 animate-fadeIn">
              Hello, I'm
            </p>
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4 animate-fadeIn delay-100 whitespace-nowrap">
              Zeeshan Sohani
            </h1>
            <p className="text-3xl text-gray-500 mb-8 animate-fadeIn delay-200">
              Software Engineer
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mb-6 animate-fadeIn delay-300">
              <a
                href="./src/assets/Final Resume.docx.pdf"
                download
                className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg  transition-transform transform hover:scale-105"
              >
                Download CV
              </a>
              <a
                href="/contact"
                className="bg-gray-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-8 animate-fadeIn delay-400">
              <a
                href="https://www.linkedin.com/in/zeeshan-sohani-058884200/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/zeeshansohani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-800 hover:text-gray-600 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          {/* Right side - Terminal window */}
          <div className="w-full md:w-3/4  h-96 bg-black text-white rounded-lg p-4 relative overflow-hidden shadow-lg">
            <div className="bg-gray-800 p-2 rounded-t-md flex justify-between items-center">
              <div className="flex space-x-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <button
                className="bg-green-600 text-black p-1 rounded-md w-20 text-sm"
                onClick={runCode}
              >
                Run
              </button>
              <p className="text-xs text-gray-400">Terminal</p>
            </div>
            <div className="p-3 font-mono text-sm animate-type">
              <p>const fullname = "Zeeshan Sohani";</p>
              <p>const position = "Software Engineer";</p>
              <p>
                console.log(`Hello, I'm ${fullname}, a ${position}`);
              </p>
              <br />
              <br />
              <p>{output}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white p-8 gap-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-96">
        <div className="flex flex-row h-full">
          {/* Left Side - Image */}
          <div className="w-1/2 h-full">
            <img
              src="./src/assets/About Me.jpg"
              alt="About Me picture"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-1/2 pl-8 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-bold">
              Shaping tomorrow's tech with today's learning.
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed">
              I’m a dedicated software engineer with expertise in{" "}
              <strong>full-stack development</strong>, skilled in modern
              technologies like <strong>React, Node.js, and Express.js.</strong>{" "}
              I excel in building user-focused, scalable applications and{" "}
              <strong>
                managing data with databases like MySQL and MongoDB.
              </strong>{" "}
              My passion lies in creating innovative, impactful solutions that
              enhance user experience and drive business success.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-20">
        {/* New Div for Two Cards in Row */}
        <div className="flex flex-row justify-between mt-8 gap-4">
          {/* First card */}
          <div className="w-1/2 bg-white p-8 gap-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-56 flex flex-col justify-start items-start">
            <div className="text-4xl mb-2 text-blue-500">
              <FaGraduationCap />
            </div>
            <h2 className="font-bold text-xl">Education</h2>
            <p className="text-gray-600">
              B.S in <strong>Computer Science</strong>, Minor in Economics
              <br />
              Pennsylvania State University - University Park, PA
              <br />
              <strong>Class of May 2026</strong>
            </p>
          </div>

          {/* Second card */}
          <div className="w-1/2 bg-white p-8 gap-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-56 flex flex-col justify-start items-start">
            <div className="text-4xl mb-2 text-green-500">
              <LiaAwardSolid />
            </div>
            <h2 className="font-bold text-xl">Honors & Extracurriculars</h2>
            <p className="text-gray-600">
              <strong>Dean’s List:</strong> Fall 2022, Fall 2023, Spring 2024
              <br />
              <strong>Vice President</strong>, Pakistani Students Association
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-black bg-cover bg-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-60 flex flex-col justify-center items-center mt-4 mb-20"
        style={{ backgroundImage: `url('/src/assets/spacepic.jpg')` }} // Change the URL to your actual image path
      >
        <div className="text-white text-center">
          <h1 className="font-bold text-3xl mb-4">
            Discover live service simulations in action.
          </h1>
          <p className="text-md text-gray-300 mb-6">
            {" "}
            {/* Adjusted the text and margin */}
            Explore real-world implementations of services such as user
            authentication, CRUD operations, <br />
            and much more, built to showcase advanced applications.
          </p>
          {/* Button with more space below the text */}
          <a
            href="/live-demo"
            className="bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition w-40" // Increased width for better appearance
          >
            Explore Live Services
          </a>
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-between gap-6">
          {/* Left card - Image 1 */}
          <div className="w-1/3">
            <img
              src="./src/assets/jobhuntpic.png" // Add the correct path to your image
              alt="Job Hunt Website"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          {/* Middle card - Text & Button */}
          <div className="w-1/3 flex flex-col justify-center items-center bg-white p-8 gap-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Explore My Projects</h2>
            <p className="text-gray-600 text-center">
              Check out my projects including Job Hunt, Chat-AI, and more! Dive
              into real-world examples of my work and see the impact they have.
            </p>
            <a
              href="/projects"
              className="bg-black text-white py-2 px-4 font-bold rounded-lg hover:bg-gray-800 transition w-48 text-center "
            >
              View Projects
            </a>
          </div>

          {/* Right card - Image 2 */}
          <div className="w-1/3">
            <img
              src="./src/assets/chatai.png" // Add the correct path to your image
              alt="Chat AI Website"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-row gap-10 my-28 mb-64">
        {/* Sidebar with Technical Skills */}
        <div className="flex">
          <SidebarHome
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Skills grid aligned to start from the top */}
        <div className="flex-1 p-6 h-72">
          <div className="grid grid-cols-3 gap-6 items-start">
            {skills[selectedCategory].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-8 gap-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              >
                {skill.icon}
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
