import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // Import eye icons

// The main authentication component
const UserAuthentication = () => {
  const [isRegistered, setIsRegistered] = useState(false); // To check if user is registered
  const [email, setEmail] = useState(""); // For the email field
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // To show if the login is successful
  const [passwordVisible, setPasswordVisible] = useState(false); // To toggle password visibility
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    specialChar: false,
    capital: false,
  });
  const [showRequirements, setShowRequirements] = useState(false); // To show/hide password requirements

  // State to simulate registered users
  const [registeredUser, setRegisteredUser] = useState({
    email: "",
    password: "",
  });

  // Handle password validation
  const handlePasswordChange = (value) => {
    setPassword(value);

    // Check if password has at least 8 characters
    const lengthValid = value.length >= 8;

    // Check if password has at least one special character
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    // Check if password has at least one uppercase letter
    const capitalValid = /[A-Z]/.test(value);

    setPasswordValid({
      length: lengthValid,
      specialChar: specialCharValid,
      capital: capitalValid,
    });
  };

  // Handle user registration
  const handleRegister = () => {
    if (
      email &&
      passwordValid.length &&
      passwordValid.specialChar &&
      passwordValid.capital
    ) {
      setRegisteredUser({ email, password });
      setIsRegistered(true); // Move to login after registration
      setEmail(""); // Clear the email field after registration
      setPassword(""); // Clear the password field after registration
    }
  };

  // Handle user login
  const handleLogin = () => {
    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      setLoginSuccess(true); // Successful login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Simulation Information */}
      <div className="mb-6 bg-yellow-100 p-4 rounded-md w-full">
        <p className="text-yellow-700">
          <strong>Note:</strong> This is a simulation of how a typical
          register/login process works. No actual data is stored, and the
          information will be reset once you close the window.
        </p>
      </div>
      {!loginSuccess ? (
        !isRegistered ? (
          // Registration form
          <div className="w-full bg-white shadow-md p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Register</h1>
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 border rounded-md w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="p-3 border rounded-md w-full mb-4"
                value={password}
                onFocus={() => setShowRequirements(true)} // Show requirements on focus
                onBlur={() => setShowRequirements(false)} // Hide requirements on blur
                onChange={(e) => handlePasswordChange(e.target.value)}
              />
              {/* Eye Icon to Toggle Password Visibility */}
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
            {showRequirements && (
              <div className="mb-4">
                <p className="text-sm">
                  {passwordValid.length ? "✔" : "✘"} At least 8 characters
                </p>
                <p className="text-sm">
                  {passwordValid.specialChar ? "✔" : "✘"} At least 1 special
                  character
                </p>
                <p className="text-sm">
                  {passwordValid.capital ? "✔" : "✘"} At least 1 capital letter
                </p>
              </div>
            )}
            <button
              onClick={handleRegister}
              className={`${
                passwordValid.length &&
                passwordValid.specialChar &&
                passwordValid.capital
                  ? "bg-blue-500"
                  : "bg-gray-400"
              } text-white px-6 py-2 rounded-md w-36`}
              disabled={
                !passwordValid.length ||
                !passwordValid.specialChar ||
                !passwordValid.capital
              }
            >
              Register
            </button>
            <p className="mt-4">
              Already have an account?{" "}
              <button
                onClick={() => setIsRegistered(true)}
                className="text-blue-500 underline"
              >
                Login here
              </button>
            </p>
          </div>
        ) : (
          // Login form
          <div className="w-full bg-white shadow-md p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 border rounded-md w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="p-3 border rounded-md w-full mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Eye Icon to Toggle Password Visibility */}
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-6 py-2 rounded-md w-36"
            >
              Login
            </button>
            <p className="mt-4">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsRegistered(false)}
                className="text-blue-500 underline"
              >
                Register here
              </button>
            </p>
          </div>
        )
      ) : (
        // Success message after login
        <div className="w-full bg-white shadow-md p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">
            Successfully Logged In!
          </h1>
          <p>Welcome, {registeredUser.email}!</p>

          {/* Add margin to the button for spacing */}
          <Link
            to="/live-demo"
            className="mt-6 bg-blue-500 w-40 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition block"
          >
            Other Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAuthentication;
