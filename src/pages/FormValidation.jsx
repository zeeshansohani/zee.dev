import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation: must not be empty and contain only letters
    if (!name) {
      isValid = false;
      formErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      isValid = false;
      formErrors.name = "Name should contain only alphabetic characters.";
    }

    // Email validation: must follow standard email format
    if (!email) {
      isValid = false;
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      formErrors.email = "Email is invalid.";
    }

    // Password validation: at least 8 characters, 1 number, 1 special character
    if (!password) {
      isValid = false;
      formErrors.password = "Password is required.";
    } else if (password.length < 8) {
      isValid = false;
      formErrors.password = "Password must be at least 8 characters long.";
    } else if (!/\d/.test(password)) {
      isValid = false;
      formErrors.password = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*]/.test(password)) {
      isValid = false;
      formErrors.password =
        "Password must contain at least one special character.";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(false);
    if (validateForm()) {
      setFormSuccess(true);
    }
  };

  return (
    <div className="container mx-auto my-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Form Validation Simulation</h2>
      <p className="mb-4 text-gray-600">
        This is a simulation of form validation. Fill in the form fields and see
        real-time validation errors. If all fields are valid, you can
        successfully submit the form.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border p-2 w-full ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border p-2 w-full ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border p-2 w-full ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {formSuccess && (
          <p className="text-green-500 mt-4">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default FormValidation;
