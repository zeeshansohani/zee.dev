// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8  flex justify-center items-center flex-col">
      <div className="flex space-x-4 mb-4">
        <a
          href="https://github.com/zeeshansohani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-gray-600 hover:text-gray-800" />
        </a>
        <a
          href="https://www.linkedin.com/in/zeeshan-sohani-058884200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-800" />
        </a>
      </div>
      <p className="text-gray-600 text-center">
        © 2024 Zeeshan Sohani. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
