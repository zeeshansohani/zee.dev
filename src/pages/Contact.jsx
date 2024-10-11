import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(); // Reference to the form

  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS with the form data
    emailjs
      .sendForm(
        "service_2u4b64s", // Your Service ID
        "template_i93lzab", // Your Template ID
        form.current, // Form reference
        { publicKey: "Iydb_fmUS4tODqM_n" } // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
    // Clear the form fields after submission
    setFormData({
      from_name: "",
      reply_to: "",
      message: "",
    });
  };

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-x-10">
        {/* Contact Form on the Left */}
        <div className="w-full md:w-1/2">
          <form ref={form} onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="from_name" // Make sure the input name matches the template field in EmailJS
                onChange={handleChange} // Update state on change
                value={formData.from_name} // Bind the value to the state
                className="w-full px-3 py-2 border rounded"
                required // Mark as required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="reply_to" // Make sure the input name matches the template field in EmailJS
                onChange={handleChange} // Update state on change
                value={formData.reply_to} // Bind the value to the state
                className="w-full px-3 py-2 border rounded"
                required // Mark as required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                type="text"
                name="message" // Make sure the input name matches the template field in EmailJS
                value={formData.message} // Bind the value to the state
                onChange={handleChange} // Update state on change
                className="w-full px-3 py-2 border rounded"
                required // Mark as required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block border-l-2 border-gray-300 h-96"></div>

        {/* Social Information on the Right */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-2xl text-gray-600" />
            <a
              href="mailto:zsohani12@gmail.com"
              className="text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              zsohani12@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-2xl text-gray-600" />
            <a
              href="https://www.linkedin.com/in/zeeshan-sohani-058884200/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-2xl text-gray-600" />
            <a
              href="https://github.com/zeeshansohani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
