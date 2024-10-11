import React, { useState } from "react";

const RoleBasedAccessControl = () => {
  const [role, setRole] = useState("Viewer"); // Default role is Viewer
  const [docContent, setDocContent] = useState(
    "This is a test document. You can edit or view it based on your role."
  );
  const [documents, setDocuments] = useState([{ id: 1, content: docContent }]);

  const actions = {
    Admin: ["Create", "Edit", "Delete", "View"],
    Editor: ["Edit", "View"],
    Viewer: ["View"],
  };

  const userActions = actions[role];

  // Add a new document
  const handleAddDocument = () => {
    const newDoc = {
      id: documents.length + 1,
      content: `This is a new document created by Admin. Document ${
        documents.length + 1
      }.`,
    };
    setDocuments([...documents, newDoc]);
  };

  // Delete a document
  const handleDeleteDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Role-Based Access Control Simulation
      </h2>
      <p className="mb-6 text-gray-600 text-lg">
        This is a simulation of role-based access control. Choose a role below,
        and you will see which actions are available based on the selected role.
      </p>

      {/* Role Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 text-gray-800">
          Select Role:
        </label>
        <select
          className="border p-3 w-full rounded-lg focus:outline-none focus:border-blue-400 shadow-sm"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      {/* Display Actions */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Available Actions:</h3>
        <div className="flex flex-wrap gap-4">
          <button
            className={`py-2 px-4 rounded-lg ${
              userActions.includes("Create")
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!userActions.includes("Create")}
            onClick={handleAddDocument}
          >
            Create
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${
              userActions.includes("Edit")
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!userActions.includes("Edit")}
          >
            Edit
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${
              userActions.includes("Delete")
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!userActions.includes("Delete")}
            onClick={() =>
              handleDeleteDocument(documents[documents.length - 1]?.id)
            }
          >
            Delete
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${
              userActions.includes("View")
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!userActions.includes("View")}
          >
            View
          </button>
        </div>
      </div>

      {/* Document Card */}
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Test Document {doc.id}:
          </h3>
          {userActions.includes("Edit") ? (
            <textarea
              className="border p-3 w-full h-40 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm"
              value={doc.content}
              onChange={(e) =>
                setDocuments(
                  documents.map((d) =>
                    d.id === doc.id ? { ...d, content: e.target.value } : d
                  )
                )
              }
            />
          ) : (
            <p className="p-3 bg-gray-100 rounded-lg">{doc.content}</p>
          )}
          {!userActions.includes("Edit") && (
            <p className="mt-2 text-gray-500 italic">
              You do not have permission to edit this document.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoleBasedAccessControl;
