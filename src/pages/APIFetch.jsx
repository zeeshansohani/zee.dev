import React, { useEffect, useState } from "react";

const APIFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [showIntro, setShowIntro] = useState(true); // Intro message state

  // Fetch data from the JSONPlaceholder API after intro message disappears
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false); // Hide intro after 5 seconds
      fetchData(); // Fetch data once intro is hidden
    }, 8000); // 5-second delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store data in state
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Capture error
        setLoading(false); // Stop loading even if there is an error
      });
  };

  // Intro message display
  if (showIntro) {
    return (
      <div className="p-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          API Fetch and Display Simulation
        </h1>
        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-yellow-700">
            <strong>Note:</strong> The data is being fetched from the following
            API:
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              JSONPlaceholder
            </a>
            . You will see test data fetched and displayed in an organized
            manner. Please wait a moment...
          </p>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="p-10 text-center text-blue-500">Loading data...</div>
    );
  }

  // Error state
  if (error) {
    return <div className="p-10 text-center text-red-500">Error: {error}</div>;
  }

  // Success state (displaying user data)
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Data Fetch Simulation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default APIFetch;
