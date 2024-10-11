// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LiveDemo from "./pages/LiveDemo";
import AuthenticationDemo from "./pages/AuthenticationDemo";
import CrudOperations from "./pages/CrudOperations";
import APIFetch from "./pages/APIFetch";
import FileUpload from "./pages/FileUpload";
import PaymentGateway from "./pages/PaymentGateway";
import WebSocketDemo from "./pages/WebSocketDemo";
import FormValidation from "./pages/FormValidation";
import SearchWithFilter from "./pages/SearchWithFilter";
import RoleBasedAccessControl from "./pages/RoleBasedAccessControl";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live-demo" element={<LiveDemo />} />
          <Route path="/live-demo/crud" element={<CrudOperations />} />
          <Route path="/live-demo/api" element={<APIFetch />} />
          <Route path="/live-demo/file-upload" element={<FileUpload />} />
          <Route path="/live-demo/payment" element={<PaymentGateway />} />
          <Route path="/live-demo/websockets" element={<WebSocketDemo />} />
          <Route path="/live-demo/search" element={<SearchWithFilter />} />
          <Route path="/live-demo/rbac" element={<RoleBasedAccessControl />} />
          <Route
            path="/live-demo/form-validation"
            element={<FormValidation />}
          />

          <Route
            path="/live-demo/authentication"
            element={<AuthenticationDemo />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
