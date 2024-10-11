import React, { useState } from "react";
import { Link } from "react-router-dom";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State to track selected file
  const [uploading, setUploading] = useState(false); // State to track upload status
  const [uploadSuccess, setUploadSuccess] = useState(false); // To track success message

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Simulate file upload
  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true); // Show "Uploading" status
      setTimeout(() => {
        setUploading(false); // After delay, show success message
        setUploadSuccess(true);
      }, 3000); // Simulate a 3-second delay
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">File Upload Simulation</h1>

      {/* Simulation Information */}
      <div className="mb-6 bg-yellow-100 p-4 rounded-md w-full">
        <p className="text-yellow-700">
          <strong>Note:</strong> This is a simulation of how file uploads work.
          No actual files are stored, and the information will be reset once you
          close the window.
        </p>
      </div>

      {!uploadSuccess ? (
        <>
          <input
            type="file"
            onChange={handleFileChange}
            className="border p-3 mb-4 rounded"
          />
          <br />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-6 py-2 rounded-md w-36"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </>
      ) : (
        <div className="text-black text-lg mt-6">
          File '{selectedFile && selectedFile.name}' successfully uploaded!
          <br />
          <a
            href={URL.createObjectURL(selectedFile)}
            download={selectedFile.name}
            className="text-blue-500 underline mt-2 block"
          >
            View or Download File
          </a>
          {/* Button to go to other services */}
          <Link
            to="/live-demo"
            className="mt-6 bg-blue-500 w-44 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition block"
          >
            Other Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
