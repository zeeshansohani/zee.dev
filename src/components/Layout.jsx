// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import Footer component

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
