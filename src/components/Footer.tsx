"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername", // Replace with your GitHub URL
      icon: <FaGithub size={16} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn URL
      icon: <FaLinkedin size={16} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername", // Replace with your Twitter URL
      icon: <FaTwitter size={16} />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Abdulaziz</h3>
            <div className="h-1 w-12 bg-[#017BFB] mb-4" />
            <p className="text-gray-400 mb-4">
              A passionate frontend developer specializing in building modern,
              responsive web applications.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-[#017BFB] flex items-center justify-center transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">
              Quick Links
            </h3>
            <div className="h-1 w-12 bg-[#017BFB] mb-4" />
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Services</h3>
            <div className="h-1 w-12 bg-[#017BFB] mb-4" />
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  Responsive Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Contact</h3>
            <div className="h-1 w-12 bg-[#017BFB] mb-4" />
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#017BFB] mr-3 mt-0.5" />
                <a
                  href="mailto:your.email@example.com" // Replace with your actual email
                  className="text-gray-400 hover:text-[#017BFB] transition-colors"
                >
                  abdulazizisa579@gmail.com
                </a>
              </div>
              <p className="text-gray-400">
                Addis Ababa, Ethiopia {/* Replace with your actual location */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Abdulaziz. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-[#017BFB] transition-colors"
              aria-label="Scroll to top"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
