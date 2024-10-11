// components/CodeEditor.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ setCode }) => {
  const initialCode = `
  function introduceYourself() {
    const name = "Zeeshan Sohani";
    const role = "Software Engineer";
    console.log(\`Hi, I'm \${name}, a \${role}\`);
  }

  introduceYourself();`;

  return (
    <div className="w-full md:w-1/2 h-96 bg-black text-white rounded-lg p-4 relative overflow-hidden shadow-lg">
      <Editor
        height="200px"
        defaultLanguage="javascript"
        defaultValue={initialCode}
        onChange={(value) => setCode(value)}
      />
      <button
        onClick={() => setCode(initialCode)}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;
