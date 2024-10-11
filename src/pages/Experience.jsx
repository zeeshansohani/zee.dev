import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder and CTO",
      company: "SnapStore LLC",
      website: "https://snapstore.us",
      date: "April 2024 - Present",
      description: [
        "Co-founded SnapStore to provide affordable, student-friendly storage solutions.",
        "Successfully launched and serviced 30 students in the first summer.",
        "Led development of the company website and initiated university partnership discussions.",
      ],
      imageUrl: "./src/assets/snapstorelogo.jpg", // Placeholder image for SnapStore
      showTechnologies: false, // Do not show technologies for SnapStore
      showVisitButton: true, // Show 'Visit Now' button for SnapStore
    },
    {
      title: "Software Engineer Intern",
      company: "uPlus Accessories",
      website: "#",
      date: "May 2024 - Aug 2024",
      description: [
        "Developed a Python-based system to automate supply chain processes using Django and MySQL.",
        "Reduced manual intervention by 30% and improved shipping times.",
        "Streamlined data exchange between ERP system and shipping partners.",
      ],
      technologies: ["Python", "Django", "MySQL"],
      imageUrl: "./src/assets/upluslogo.jpg", // Placeholder image for uPlus Accessories
      showTechnologies: true, // Show technologies for uPlus Accessories
      showVisitButton: false, // No 'Visit Now' button for uPlus
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center">
            {/* Vertical line behind the small date box */}
            {/* Small Date Box */}
            <div className="w-1/4 bg-white shadow-lg rounded-lg flex justify-center items-center p-4 relative z-20">
              <p className="text-lg font-semibold">{exp.date}</p>
            </div>
            {/* Main Experience Card */}
            <div className="w-3/4 bg-white shadow-lg rounded-lg p-6 ml-6 flex">
              {/* Image on the left */}
              <div className="w-1/3">
                <img
                  src={exp.imageUrl}
                  alt={exp.title}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* Content on the right */}
              <div className="w-2/3 pl-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                </div>
                <ul className="list-disc ml-6 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Conditionally render technologies if showTechnologies is true */}
                {exp.showTechnologies && (
                  <div className="flex space-x-2 mb-4">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {/* Conditionally render 'Visit Now' button for SnapStore */}
                {exp.showVisitButton && (
                  <a
                    href={exp.website}
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Now
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
