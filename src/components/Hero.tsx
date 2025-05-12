"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: <FaGithub size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: <FaTwitter size={24} />,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yourusername",
      icon: <FaFacebook size={24} />,
    },
  ];

  return (
    <section
      id="home"
      className="px-4 md:px-32 py-14 flex min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full">
        {/* Text Content */}
        <div className="flex flex-col items-start justify-center gap-8 lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Abdulaziz
          </h2>
          <p className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white">
            I am a Full-Stack Developer
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Welcome to my portfolio!
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I specialize in building modern, scalable web applications from end
            to end using tools like
            <strong> Next.js</strong>, <strong> Express.js</strong>, and{" "}
            <strong> MongoDB</strong>. Whether it’s crafting intuitive UIs or
            building RESTful APIs, I’m passionate about delivering clean,
            performant, and user-focused digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link
              href="https://drive.google.com/file/d/1tS8Hau-1S9HE_OOYVur21t2jh8r9RMk8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="rounded-xl bg-[#017BFB] hover:bg-[#0168d6] text-white px-8 py-3 text-lg"
                style={{ backgroundColor: "#017BFB" }}
              >
                Download CV
              </Button>
            </Link>
            <ul className="flex gap-6 items-center">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#017BFB] hover:opacity-75 transition-opacity duration-200 text-2xl"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/abc.jpg"
            alt="Abdulaziz - Full-Stack Developer"
            width={500}
            height={500}
            className="rounded-full object-cover w-3/4 h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
