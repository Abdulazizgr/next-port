"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "YouTube Clone",
    description:
      "A responsive YouTube clone featuring real-time video search, playback, and category-based filtering built with React and RapidAPI.",
    image: "/images/youtube-clone.png", // Replace with actual image
    technologies: ["React", "Tailwind CSS", "RapidAPI"],
    githubUrl: "https://github.com/Abdulazizgr/y-clone-",
    liveUrl: "https://youtube-dev-c.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Project",
    description:
      "A modern developer portfolio built with responsive design to showcase my projects, skills, and contact information.",
    image: "/images/portfolio.png", // Replace with actual image
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Abdulazizgr/Portfolio-Project",
  },
  {
    id: 3,
    title: "Property Pulse",
    description:
      "A full-stack real estate platform where users can explore property listings with filters and responsive design.",
    image: "/images/property-pulse.png", // Replace with actual image
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/Abdulazizgr/property-pulse",
  },
  {
    id: 4,
    title: "SmartRecruit",
    description:
      "A recruitment system designed to simplify job posting and application tracking with a modern UI.",
    image: "/images/smartrecruit.png", // Replace with actual image
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Abdulazizgr/SmartRecruit",
  },
  {
    id: 5,
    title: "StreamScene",
    description:
      "A modern movie streaming platform UI with dynamic content browsing and stylish design.",
    image: "/images/streamscene.png", // Replace with actual image
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/Abdulazizgr/Movie-Stream",
    liveUrl: "https://streamscene.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8 md:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
            My Projects
            <div className="h-1 w-24 bg-[#017BFB] mx-auto mt-2" />
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of frontend development projects showcasing modern web
            technologies and user-centric design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-[#017BFB] hover:shadow-lg hover:shadow-[#017BFB]/10"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={project.id === 1} // Optimize loading for first project
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#017BFB]/10 text-[#017BFB] text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#017BFB] hover:text-[#0168d6] transition-colors"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      <span>Code</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#017BFB] hover:text-[#0168d6] transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
