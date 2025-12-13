"use client";

import Head from "next/head";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  link?: string;
  github?: string;
  images?: string[];
}

interface ProjectCategory {
  title: string;
  description?: string;
  projects: Project[];
}

const categories: ProjectCategory[] = [
  {
    title: "Electrical Engineering",
    description: "Hardware design, PCB layout, and power electronics",
    projects: [
      {
        title: "Custom PCB Motor Controller",
        description:
          "Designed and fabricated a dual-motor controller board with current sensing and thermal protection.",
        highlights: [
          "STM32 microcontroller",
          "KiCAD PCB design",
          "Buck-boost topology",
          "Current sensing circuit",
          "Thermal management",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Motor+Controller+PCB",
        ],
      },
      {
        title: "High-Voltage Power Supply",
        description:
          "Developed a 400V isolated power supply for high-power robotics applications.",
        highlights: [
          "Isolated DC-DC converter",
          "Safety certification",
          "EMC design",
          "Real-time monitoring",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Power+Supply",
        ],
      },
      {
        title: "Embedded Sensor Module",
        description:
          "Multi-sensor module with IMU, pressure, and temperature sensing for autonomous systems.",
        highlights: [
          "MPU-9250 IMU",
          "I2C communication",
          "Sensor fusion algorithms",
          "Low power design",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Sensor+Module",
        ],
      },
    ],
  },
  {
    title: "Embedded Systems",
    description: "Firmware development and hardware abstraction layers",
    projects: [
      {
        title: "Real-Time Motor Control Firmware",
        description:
          "Developed RTOS-based firmware for synchronized multi-motor control with PID tuning.",
        highlights: [
          "FreeRTOS",
          "PID control loops",
          "PWM generation",
          "Serial communication",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Motor+Firmware",
        ],
      },
      {
        title: "BLE Wireless Module",
        description:
          "Created wireless communication layer for robot telemetry and real-time parameter tuning.",
        highlights: [
          "Nordic nRF52",
          "Bluetooth Low Energy",
          "Event-driven architecture",
          "Battery optimization",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=BLE+Module",
        ],
      },
      {
        title: "FPGA-based Sensor Processor",
        description:
          "Designed parallel sensor data processing pipeline in Verilog for real-time vision.",
        highlights: [
          "Verilog HDL",
          "FPGA synthesis",
          "Parallel processing",
          "Video pipeline",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=FPGA+Processor",
        ],
      },
    ],
  },
  {
    title: "Robotics & Integration",
    description: "Complete autonomous systems and robotic platforms",
    projects: [
      {
        title: "Autonomous Line Follower Robot",
        description:
          "Fast-response autonomous platform using computer vision and PID controllers.",
        highlights: [
          "OpenCV vision processing",
          "PID control tuning",
          "High-speed motor response",
          "Real-time sensor fusion",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Line+Follower",
        ],
      },
      {
        title: "Underwater Robotics Platform",
        description:
          "6-DOF underwater manipulation system with dynamic pressure compensation.",
        highlights: [
          "Waterproof enclosures",
          "Thruster control",
          "Pressure compensation",
          "Tether management",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Underwater+Robot",
        ],
      },
      {
        title: "Autonomous Drone Platform",
        description:
          "Quadrotor with custom control algorithms and autonomous navigation.",
        highlights: [
          "Flight controller firmware",
          "Sensor fusion (IMU + GPS)",
          "Autonomous navigation",
          "LiDAR integration",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Drone+Platform",
        ],
      },
    ],
  },
  {
    title: "Front-End Development",
    description: "Web applications and interactive tools",
    projects: [
      {
        title: "Portfolio Website",
        description:
          "Modern responsive portfolio built with Next.js and Tailwind CSS.",
        highlights: [
          "Next.js 15",
          "Tailwind CSS",
          "Responsive design",
          "SEO optimized",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Portfolio+Site",
        ],
      },
      {
        title: "Engineering Calculator Tool",
        description:
          "Web-based tool for electrical engineering calculations and simulations.",
        highlights: [
          "React components",
          "Canvas rendering",
          "Real-time updates",
          "Data visualization",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=Calculator+Tool",
        ],
      },
      {
        title: "3D PCB Viewer",
        description:
          "Interactive 3D visualization tool for PCB designs and component placement.",
        highlights: [
          "Three.js",
          "3D rendering",
          "Gerber file parsing",
          "Component library",
        ],
        github: "https://github.com/arhaamhossain",
        images: [
          "https://via.placeholder.com/600x400?text=3D+PCB+Viewer",
        ],
      },
    ],
  },
];

const technologies = [
  { category: "Microcontrollers", items: ["STM32", "Arduino", "ESP32", "nRF52"] },
  { category: "Design Tools", items: ["KiCAD", "Altium Designer", "MATLAB", "Fusion 360"] },
  {
    category: "Programming",
    items: ["C/C++", "Python", "Verilog", "TypeScript", "React"],
  },
  { category: "Protocols", items: ["CAN", "I2C", "SPI", "Bluetooth", "WiFi"] },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState<{ [key: string]: number }>({});

  const getActiveImageIndex = (categoryTitle: string, projectTitle: string) => {
    const key = `${categoryTitle}-${projectTitle}`;
    return activeImage[key] || 0;
  };

  const setActiveImageIndex = (
    categoryTitle: string,
    projectTitle: string,
    index: number
  ) => {
    const key = `${categoryTitle}-${projectTitle}`;
    setActiveImage({ ...activeImage, [key]: index });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Arhaam Hossain - Electrical Engineer</title>
        <meta
          name="description"
          content="Electrical Engineer portfolio showcasing hardware design, embedded systems, and robotics projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-700/50 backdrop-blur-md bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400">
            AH
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm <span className="text-blue-400">Arhaam</span> _
          </h1>
          <div className="flex flex-wrap gap-3 text-lg md:text-2xl text-gray-300 mb-8">
            <span>Electrical Engineering</span>
            <span>•</span>
            <span>Embedded Systems</span>
            <span>•</span>
            <span>Robotics</span>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Engineering with modern tools and open-source principles. Designing
            high-performance hardware and software systems.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-300 mb-8">
            Engineering with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="border border-slate-700 rounded-lg p-4 bg-slate-900/50 backdrop-blur"
              >
                <h3 className="font-semibold text-blue-400 mb-3">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-slate-800 rounded-full text-gray-300 hover:bg-blue-500/20 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        {categories.map((category) => (
          <div key={category.title} className="mb-24">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              {category.title}
            </h2>
            {category.description && (
              <p className="text-gray-400 mb-12 text-lg">
                {category.description}
              </p>
            )}

            <div className="space-y-12">
              {category.projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur hover:border-blue-500/50 transition group"
                >
                  {/* Project Image Carousel */}
                  {project.images && project.images.length > 0 && (
                    <div className="relative bg-slate-950 overflow-hidden aspect-video">
                      <img
                        src={
                          project.images[
                            getActiveImageIndex(category.title, project.title)
                          ]
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />

                      {project.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition">
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
                            className="bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
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
                            className="bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
                          >
                            →
                          </button>
                        </div>
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
                                  ? "bg-blue-400"
                                  : "bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-lg">
                      {project.description}
                    </p>

                    {project.highlights && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
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
                          className="text-blue-400 hover:text-blue-300 underline transition"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline transition"
                        >
                          Project →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm an Electrical Engineer passionate about building innovative
              hardware and software systems. My work spans from PCB design and
              microcontroller firmware to robotics platforms and web
              applications.
            </p>
            <p>
              I believe in open-source principles and transparent design. Most
              of my projects emphasize practical engineering solutions with
              attention to reliability, scalability, and maintainability.
            </p>
            <p>
              When I'm not engineering, I enjoy contributing to open-source
              projects and staying updated with emerging technologies in
              embedded systems and robotics.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50 backdrop-blur">
              <h3 className="text-blue-400 font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="text-blue-400 font-semibold">20+</span>
                </div>
                <div className="flex justify-between">
                  <span>Technologies</span>
                  <span className="text-blue-400 font-semibold">15+</span>
                </div>
                <div className="flex justify-between">
                  <span>Open Source Contributions</span>
                  <span className="text-blue-400 font-semibold">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Get in Touch</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          I'm always interested in discussing new projects, engineering challenges,
          and opportunities to collaborate.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/arhaamhossain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/arhaam-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arhaamhossain2004@gmail.com"
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition"
          >
            Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950/50 backdrop-blur py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2024 Arhaam Hossain. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
