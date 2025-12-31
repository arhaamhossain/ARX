"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

interface SubProject {
  title: string;
  description: string;
  images: string[];
}

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  link?: string;
  github?: string;
  images?: string[];
  subProjects?: SubProject[];
}

interface ProjectCategory {
  title: string;
  description?: string;
  projects: Project[];
}

const categories: ProjectCategory[] = [
  {
    title: "Electrical Engineering",
    projects: [
      {
        title: "Low Power IC for Neuromorphic Computing",
        description: "Project 1 Description",
        highlights: [],
        github: "https://github.com/arhaamhossain",
        images: [
          "/ARX/Senior Design Proposal.pdf",
          "https://via.placeholder.com/600x400?text=Motor+Controller+PCB+2",
          "https://via.placeholder.com/600x400?text=Motor+Controller+PCB+3",
        ],
      },
      {
        title: "8-bit Pipelined Carry Select Adder",
        description: "Project 2 Description",
        highlights: [],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Power+Supply+1",
          "https://via.placeholder.com/600x400?text=Power+Supply+2",
          "https://via.placeholder.com/600x400?text=Power+Supply+3",
        ],
      },
      {
        title: "Project 3",
        description: "Project 3 Description",
        highlights: [],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Sensor+Module+1",
          "https://via.placeholder.com/600x400?text=Sensor+Module+2",
          "https://via.placeholder.com/600x400?text=Sensor+Module+3",
        ],
      },
    ],
  },
  {
    title: "Robotics",
    projects: [
      {
        title: "Cyclone Autonomous Robot Control System",
        description: "Project 1 Description",
        highlights: [],
        github: "https://github.com/arhaamhossain",
        images: [
          "/ARX/Robot Control.png",
          "/ARX/Robot Control back.png",
          "/ARX/autonomous_robot_control_schematic.pdf",
        ],
      },
      {
        title: "Stony Brook Robotics Team",
        description: "Project 2 Description",
        highlights: [],
        github: "https://github.com/sbroboticsteam",
        subProjects: [
          {
            title: "MATE ROV",
            description: "Sub-Project 1 Description",
            images: [
              "/ARX/MROV_CAD_RENDER_1.png",
              "https://via.placeholder.com/600x400?text=Stony+Brook+1+Image+2",
              "https://via.placeholder.com/600x400?text=Stony+Brook+1+Image+3",
            ],
          },
          {
            title: "Internal Competition 2024",
            description: "Sub-Project 2 Description",
            images: [
              "https://via.placeholder.com/600x400?text=Stony+Brook+2+Image+1",
              "https://via.placeholder.com/600x400?text=Stony+Brook+2+Image+2",
              "/ARX/IC Rule Book 2024 v2.pdf",
            ],
          },
          {
            title: "RCR Search & Rescue Bot",
            description: "Sub-Project 3 Description",
            images: [
              "https://via.placeholder.com/600x400?text=Stony+Brook+3+Image+1",
              "/ARX/Dexter Power.png",
              "/ARX/bms_circuit.svg",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Research",
    projects: [
      {
        title: "FPGA-Accelerated Reactive Collision UAV",
        description: "Project 1 Description",
        highlights: [],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Research+1+1",
          "https://via.placeholder.com/600x400?text=Research+1+2",
          "https://via.placeholder.com/600x400?text=Research+1+3",
        ],
      },
    ],
  },
];

const softwareTools = [
  {
    name: "KiCAD",
    url: "https://kicad.org/",
    logoPath: "/ARX/KiCad_logo_square.svg"
  },
  {
    name: "Altium Designer",
    url: "https://www.altium.com/",
    logoPath: "/ARX/Altium_Logo.svg"
  },
  {
    name: "Cadence Virtuoso",
    url: "https://www.cadence.com/",
    logoPath: "/ARX/Cadence-Logo.svg"
  },
  {
    name: "MATLAB",
    url: "https://www.mathworks.com/products/matlab.html",
    logoPath: "/ARX/matlablogo.png"
  }
];

export default function Home() {
  const [activeImage, setActiveImage] = useState<{ [key: string]: number }>({});
  const [selectedSubProject, setSelectedSubProject] = useState<{ [key: string]: number }>({});

  // Reset scroll position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getActiveImageIndex = (categoryTitle: string, projectTitle: string, subProjectIndex?: number) => {
    let key = `${categoryTitle}-${projectTitle}`;
    if (subProjectIndex !== undefined) {
      key = `${categoryTitle}-${projectTitle}-${subProjectIndex}`;
    }
    return activeImage[key] || 0;
  };

  const setActiveImageIndex = (
    categoryTitle: string,
    projectTitle: string,
    index: number,
    subProjectIndex?: number
  ) => {
    let key = `${categoryTitle}-${projectTitle}`;
    if (subProjectIndex !== undefined) {
      key = `${categoryTitle}-${projectTitle}-${subProjectIndex}`;
    }
    setActiveImage({ ...activeImage, [key]: index });
  };

  const getSelectedSubProject = (projectTitle: string) => {
    return selectedSubProject[projectTitle] || 0;
  };

  const setSelectedSubProjectIndex = (projectTitle: string, index: number) => {
    setSelectedSubProject({ ...selectedSubProject, [projectTitle]: index });
  };

  return (
    <div className="min-h-screen text-white relative">
      {/* Animated Blob Background */}
      <svg className="fixed inset-0 -z-10 w-full h-full">
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>
        
        {/* Decorative stars */}
        <circle cx="10%" cy="10%" r="1" fill="#ffffff" opacity="0.8" style={{ animation: 'twinkle 3s ease-in-out infinite' }} />
        <circle cx="85%" cy="15%" r="0.8" fill="#ffffff" opacity="0.6" style={{ animation: 'twinkle 2.5s ease-in-out infinite 0.5s' }} />
        <circle cx="20%" cy="50%" r="1.2" fill="#ffffff" opacity="0.7" style={{ animation: 'twinkle 3.5s ease-in-out infinite 1s' }} />
        <circle cx="92%" cy="45%" r="0.9" fill="#ffffff" opacity="0.5" style={{ animation: 'twinkle 2.8s ease-in-out infinite 0.3s' }} />
        <circle cx="15%" cy="80%" r="1" fill="#ffffff" opacity="0.6" style={{ animation: 'twinkle 3.2s ease-in-out infinite 0.7s' }} />
        <circle cx="88%" cy="70%" r="0.7" fill="#ffffff" opacity="0.8" style={{ animation: 'twinkle 2.9s ease-in-out infinite 0.2s' }} />
        <circle cx="50%" cy="20%" r="0.8" fill="#ffffff" opacity="0.5" style={{ animation: 'twinkle 3.3s ease-in-out infinite 0.9s' }} />
        <circle cx="25%" cy="70%" r="1.1" fill="#ffffff" opacity="0.7" style={{ animation: 'twinkle 2.7s ease-in-out infinite 0.4s' }} />
        {/* Additional stars */}
        <circle cx="75%" cy="5%" r="0.9" fill="#ffffff" opacity="0.65" style={{ animation: 'twinkle 3.1s ease-in-out infinite 0.6s' }} />
        <circle cx="35%" cy="15%" r="0.7" fill="#ffffff" opacity="0.55" style={{ animation: 'twinkle 2.6s ease-in-out infinite 0.25s' }} />
        <circle cx="5%" cy="35%" r="1" fill="#ffffff" opacity="0.7" style={{ animation: 'twinkle 3.4s ease-in-out infinite 0.8s' }} />
        <circle cx="70%" cy="65%" r="0.8" fill="#ffffff" opacity="0.6" style={{ animation: 'twinkle 2.9s ease-in-out infinite 1.1s' }} />
        <circle cx="45%" cy="90%" r="1.1" fill="#ffffff" opacity="0.75" style={{ animation: 'twinkle 3.2s ease-in-out infinite 0.35s' }} />
        <circle cx="60%" cy="40%" r="0.7" fill="#ffffff" opacity="0.5" style={{ animation: 'twinkle 2.8s ease-in-out infinite 0.55s' }} />
        <circle cx="80%" cy="85%" r="0.9" fill="#ffffff" opacity="0.65" style={{ animation: 'twinkle 3s ease-in-out infinite 0.7s' }} />
        <circle cx="85%" cy="15%" r="0.8" fill="#ffffff" opacity="0.6" style={{ animation: 'twinkle 2.5s ease-in-out infinite 0.5s' }} />
        <circle cx="20%" cy="50%" r="1.2" fill="#ffffff" opacity="0.7" style={{ animation: 'twinkle 3.5s ease-in-out infinite 1s' }} />
        <circle cx="92%" cy="45%" r="0.9" fill="#ffffff" opacity="0.5" style={{ animation: 'twinkle 2.8s ease-in-out infinite 0.3s' }} />
        <circle cx="15%" cy="80%" r="1" fill="#ffffff" opacity="0.6" style={{ animation: 'twinkle 3.2s ease-in-out infinite 0.7s' }} />
        <circle cx="88%" cy="70%" r="0.7" fill="#ffffff" opacity="0.8" style={{ animation: 'twinkle 2.9s ease-in-out infinite 0.2s' }} />
        <circle cx="50%" cy="20%" r="0.8" fill="#ffffff" opacity="0.5" style={{ animation: 'twinkle 3.3s ease-in-out infinite 0.9s' }} />
        <circle cx="25%" cy="70%" r="1.1" fill="#ffffff" opacity="0.7" style={{ animation: 'twinkle 2.7s ease-in-out infinite 0.4s' }} />
      </svg>

      <Head>
        <title>Arhaam Hossain - Electrical Engineer</title>
        <meta
          name="description"
          content="Electrical Engineer portfolio showcasing hardware design, embedded systems, and robotics projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-800 backdrop-blur-md bg-black/95">
        <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white">
            <img src="/ARX/arx.png" alt="ARX Logo" className="h-6" />
          </a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition">
              About
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition">
              Projects
            </a>
            <a href="https://github.com/arhaamhossain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 md:py-48 mt-16">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text fade-in-up">
            <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">Arhaam Hossain</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-xl md:text-3xl text-gray-300 mb-10 font-medium fade-in-up stagger-1">
            <span>Electrical Engineering</span>
            <span>•</span>
            <span>Stony Brook University</span>
            <span>•</span>
            <span>Research</span>
          </div>
          
          {/* Links Section with Icons */}
          <div className="flex flex-wrap gap-6 items-center mt-8 fade-in-up stagger-2">
            <a
              href="/ARX/Arhaam_Hossain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition"
              title="Download Resume"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M8,15.5H16V17H8V15.5M8,11H16V12.5H8V11Z" />
              </svg>
              Resume
            </a>
            <a
              href="mailto:arhaamhossain2004@gmail.com"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition"
              title="Send Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z" />
              </svg>
              Email
            </a>
            <a
              href="https://linkedin.com/in/arhaam-hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition"
              title="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.23,9.94 13.13,10.56 12.51,11.6V10.13H10.13V18.5H12.51V13.57C12.51,12.8 13.1,12.17 13.87,12.17A1.73,1.73 0 0,1 15.6,13.87V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.54V18.5H8.27Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Software Tools */}
        <div className="mt-12 fade-in-up stagger-3">
          <h2 className="text-lg font-semibold text-gray-400 mb-6">
            Engineering with
          </h2>
          <div className="flex flex-wrap gap-2">
            {softwareTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1 border border-gray-700 rounded hover:border-gray-500 hover:bg-gray-900/30 transition"
                title={`Visit ${tool.name}`}
              >
                <img 
                  src={tool.logoPath} 
                  alt={`${tool.name} logo`}
                  className="h-4 object-contain"
                />
                <span className="text-xs text-gray-400 hover:text-gray-300 transition">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <section id="portfolio" className="py-20">
        {categories.map((category) => (
          <div key={category.title} className={`mb-24 py-20 px-6`}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-white italic">
                {category.title}
              </h2>
              {category.description && (
                <p className="text-gray-400 mb-12 text-lg">
                {category.description}
              </p>
            )}
            <div className="space-y-28">
              {category.projects.map((project) => {
                // Handle sub-projects for Stony Brook Robotics Team
                if (project.subProjects && project.subProjects.length > 0) {
                  const selectedIndex = getSelectedSubProject(project.title);
                  const selectedSubProj = project.subProjects[selectedIndex];

                  return (
                    <div
                      key={project.title}
                      className="group fade-in-up"
                    >
                      <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Project Content - Left Column */}
                        <div className="order-2 md:order-1 space-y-6 md:col-span-1">
                          <div className="border border-gray-700 rounded-lg p-6 bg-gray-950">
                            <h3 className="text-xl font-semibold mb-4 text-white">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              {project.description}
                            </p>
                            
                            {/* Sub-Projects Stacked Vertically */}
                            <div className="space-y-3">
                              {project.subProjects.map((subProj, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedSubProjectIndex(project.title, idx)}
                                  className={`w-full text-left border rounded-lg p-4 transition cursor-pointer ${
                                    idx === selectedIndex
                                      ? "border-white bg-gray-900 shadow-lg shadow-white/10"
                                      : "border-gray-700 bg-gray-900/50 hover:border-gray-600"
                                  }`}
                                >
                                  <h4 className="font-semibold text-white mb-1 text-sm">
                                    {subProj.title}
                                  </h4>
                                  <p className="text-gray-300 text-xs leading-relaxed">
                                    {subProj.description}
                                  </p>
                                </button>
                              ))}
                            </div>

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 underline transition text-base inline-block mt-6"
                              >
                                GitHub →
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project Image Carousel - Right Column */}
                        <div className="order-1 md:order-2 flex flex-col gap-6 md:col-span-2">
                          <div className="relative overflow-hidden aspect-square rounded-lg shadow-lg flex items-center justify-center" style={{
                            backgroundColor: project.title === "Stony Brook Robotics Team" && selectedSubProj.title === "MATE ROV" && getActiveImageIndex(category.title, project.title, selectedIndex) === 0
                              ? "#2d3341"
                              : "white"
                          }}>
                            {selectedSubProj.images[
                              getActiveImageIndex(category.title, project.title, selectedIndex)
                            ].endsWith(".pdf") ? (
                              <embed
                                src={
                                  selectedSubProj.images[
                                    getActiveImageIndex(
                                      category.title,
                                      project.title,
                                      selectedIndex
                                    )
                                  ]
                                }
                                type="application/pdf"
                                className="w-full h-full"
                              />
                            ) : (
                              <img
                                key={`${category.title}-${project.title}-${selectedIndex}-${getActiveImageIndex(category.title, project.title, selectedIndex)}`}
                                src={
                                  selectedSubProj.images[
                                    getActiveImageIndex(
                                      category.title,
                                      project.title,
                                      selectedIndex
                                    )
                                  ]
                                }
                                alt={selectedSubProj.title}
                                className="max-w-full max-h-full object-contain"
                                style={{ animation: 'carouselSlideIn 0.5s ease-out' }}
                              />
                            )}

                            {/* Image indicators */}
                            {selectedSubProj.images.length > 1 && (
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {selectedSubProj.images.map((_, imgIdx) => (
                                  <button
                                    key={imgIdx}
                                    onClick={() =>
                                      setActiveImageIndex(
                                        category.title,
                                        project.title,
                                        imgIdx,
                                        selectedIndex
                                      )
                                    }
                                    className={`w-2 h-2 rounded-full transition ${
                                      imgIdx ===
                                      getActiveImageIndex(
                                        category.title,
                                        project.title,
                                        selectedIndex
                                      )
                                        ? "bg-white"
                                        : "bg-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Navigation Arrows */}
                          {selectedSubProj.images.length > 1 && (
                            <div className="flex justify-center gap-6">
                              <button
                                onClick={() => {
                                  const current = getActiveImageIndex(
                                    category.title,
                                    project.title,
                                    selectedIndex
                                  );
                                  const newIndex =
                                    (current -
                                      1 +
                                      selectedSubProj.images.length) %
                                    selectedSubProj.images.length;
                                  setActiveImageIndex(
                                    category.title,
                                    project.title,
                                    newIndex,
                                    selectedIndex
                                  );
                                }}
                                className="bg-gray-800 hover:bg-white hover:text-black text-white rounded-full p-3 transition text-lg font-semibold w-12 h-12 flex items-center justify-center"
                              >
                                ←
                              </button>
                              <button
                                onClick={() => {
                                  const current = getActiveImageIndex(
                                    category.title,
                                    project.title,
                                    selectedIndex
                                  );
                                  const newIndex =
                                    (current + 1) %
                                    selectedSubProj.images.length;
                                  setActiveImageIndex(
                                    category.title,
                                    project.title,
                                    newIndex,
                                    selectedIndex
                                  );
                                }}
                                className="bg-gray-800 hover:bg-white hover:text-black text-white rounded-full p-3 transition text-lg font-semibold w-12 h-12 flex items-center justify-center"
                              >
                                →
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular project rendering for non-sub-projects
                return (
                <div
                  key={project.title}
                  className="group fade-in-up"
                >
                  <div className="grid md:grid-cols-3 gap-12 items-start">
                    {/* Project Content - Left Column */}
                    <div className="order-2 md:order-1 space-y-6 md:col-span-1">
                      <div className="border border-gray-700 rounded-lg p-6 bg-gray-950">
                        <h3 className="text-xl font-semibold mb-4 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                        {project.highlights && project.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-6">
                            {project.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}

                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 underline transition text-base"
                          >
                            GitHub →
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 underline transition text-base"
                          >
                            Project →
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Image Carousel - Right Column */}
                    {project.images && project.images.length > 0 && (
                      <div className="order-1 md:order-2 flex flex-col gap-6 md:col-span-2">
                        <div className="relative bg-white overflow-hidden aspect-square rounded-lg shadow-lg flex items-center justify-center">
                        {project.images[getActiveImageIndex(category.title, project.title)].endsWith('.pdf') ? (
                          <embed
                            src={project.images[getActiveImageIndex(category.title, project.title)]}
                            type="application/pdf"
                            className="w-full h-full"
                          />
                        ) : (
                          <img
                            key={`${category.title}-${project.title}-${getActiveImageIndex(category.title, project.title)}`}
                            src={
                              project.images[
                                getActiveImageIndex(category.title, project.title)
                              ]
                            }
                            alt={project.title}
                            className="max-w-full max-h-full object-contain"
                            style={{ animation: 'carouselSlideIn 0.5s ease-out' }}
                          />
                        )}

                        {/* Image indicators */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() =>
                                  setActiveImageIndex(
                                    category.title,
                                    project.title,
                                    idx
                                  )
                                }
                                className={`w-2 h-2 rounded-full transition ${
                                  idx ===
                                  getActiveImageIndex(category.title, project.title)
                                    ? "bg-white"
                                    : "bg-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        </div>

                        {/* Navigation Arrows - Below Image */}
                        {project.images.length > 1 && (
                          <div className="flex justify-center gap-6">
                            <button
                              onClick={() => {
                                const current = getActiveImageIndex(
                                  category.title,
                                  project.title
                                );
                                const newIndex =
                                  (current - 1 + project.images!.length) %
                                  project.images!.length;
                                setActiveImageIndex(
                                  category.title,
                                  project.title,
                                  newIndex
                                );
                              }}
                              className="bg-gray-800 hover:bg-white hover:text-black text-white rounded-full p-3 transition text-lg font-semibold w-12 h-12 flex items-center justify-center"
                            >
                              ←
                            </button>
                            <button
                              onClick={() => {
                                const current = getActiveImageIndex(
                                  category.title,
                                  project.title
                                );
                                const newIndex =
                                  (current + 1) % project.images!.length;
                                setActiveImageIndex(
                                  category.title,
                                  project.title,
                                  newIndex
                                );
                              }}
                              className="bg-gray-800 hover:bg-white hover:text-black text-white rounded-full p-3 transition text-lg font-semibold w-12 h-12 flex items-center justify-center"
                            >
                              →
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gray-950/50 py-20 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I&apos;m an Electrical Engineering student passionate about building innovative analog and digital hardware systems. I&apos;ve been fortunate to develop an intuition for hardware across multiple abstraction levels, from system architecture down to transistor-level design. My work spans across embedded systems, electronics, PCB development, and IC design.
            </p>
            <p>
              Outside of coursework, I&apos;ve dedicated much of my time to robotics development. I previously served as Power Lead and Vice President of the Stony Brook Robotics Team, contributing to the development of an autonomous search-and-rescue robot and an underwater ROV for international competition. I&apos;m also a member of the Soft Flyers Group, where my current research focuses on developing a reactive collision UAV.
            </p>
            <p>
              I&apos;m driven by the goal of creating technology that is efficient, intelligent, and impactful, and by a commitment to continuous learning. I enjoy tackling complex challenges and pushing my understanding of engineering further with every project and task.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-800 rounded-lg p-6 bg-gray-950/50 backdrop-blur">
              <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Hobbies</span>
                  <span className="text-white font-semibold">Going to the gym and gaming</span>
                </div>
                <div className="flex justify-between">
                  <span>Favorite Restaurant</span>
                  <span className="text-white font-semibold">Di Fara Pizza in Brooklyn</span>
                </div>
                <div className="flex justify-between">
                  <span>Countries Traveled</span>
                  <span className="text-white font-semibold">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-white">Contact</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/arhaamhossain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/arhaam-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arhaamhossain2004@gmail.com"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            Email
          </a>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/95 backdrop-blur py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2024 Arhaam Hossain. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}


