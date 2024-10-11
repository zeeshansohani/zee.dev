import React from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "User Authentication", path: "/live-demo/authentication" },
  { name: "CRUD Operations", path: "/live-demo/crud" },
  { name: "API Fetch and Display", path: "/live-demo/api" },
  { name: "File Upload", path: "/live-demo/file-upload" },
  { name: "Payment Gateway", path: "/live-demo/payment" },
  { name: "WebSockets", path: "/live-demo/websockets" },
  { name: "Form Validation", path: "/live-demo/form-validation" },
  { name: "Search with Filters", path: "/live-demo/search" },
  { name: "Role-based Access Control", path: "/live-demo/rbac" },
];

const LiveDemo = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10">Live Demo Services</h1>
      <p className="text-md text-gray-600 mb-10">
        Explore a range of interactive simulations demonstrating various
        services that can be implemented in applications. Each demo provides a
        preview of key functionalities like authentication, file uploads, and
        more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link to={service.path} key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-3">{service.name}</h2>
              <p className="text-gray-600">
                Click to run the {service.name} simulation.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LiveDemo;
