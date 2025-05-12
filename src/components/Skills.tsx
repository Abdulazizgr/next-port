"use client";

import { useState, useEffect } from "react";
import { Code, Palette, Layout, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: number; // 0-100
  experience: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: <Code className="h-5 w-5 text-[#017BFB]" />,
    skills: [
      { name: "React", level: 95, experience: "4+ years" },
      { name: "Next.js", level: 90, experience: "3+ years" },
      { name: "TypeScript", level: 85, experience: "3+ years" },
      { name: "JavaScript", level: 92, experience: "5+ years" },
    ],
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-5 w-5 text-[#017BFB]" />,
    skills: [
      { name: "Tailwind CSS", level: 90, experience: "3+ years" },
      { name: "Figma", level: 85, experience: "2+ years" },
      { name: "CSS/SCSS", level: 95, experience: "5+ years" },
      { name: "Accessibility", level: 80, experience: "2+ years" },
    ],
  },
  {
    name: "Web Development Tools",
    icon: <Layout className="h-5 w-5 text-[#017BFB]" />,
    skills: [
      { name: "Git", level: 90, experience: "4+ years" },
      { name: "Webpack/Vite", level: 85, experience: "3+ years" },
      { name: "Jest", level: 80, experience: "2+ years" },
      { name: "ESLint", level: 85, experience: "3+ years" },
    ],
  },
  {
    name: "Responsive Design",
    icon: <Smartphone className="h-5 w-5 text-[#017BFB]" />,
    skills: [
      { name: "Responsive Layouts", level: 95, experience: "5+ years" },
      { name: "Mobile-First Design", level: 90, experience: "4+ years" },
      { name: "Cross-Browser Testing", level: 85, experience: "3+ years" },
      { name: "Performance Optimization", level: 80, experience: "2+ years" },
    ],
  },
];

function SkillBar({
  skill,
  animate,
  delay,
}: {
  skill: Skill;
  animate: boolean;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mb-6 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${delay * 50}ms` }}
    >
      <div className="flex justify-between mb-1">
        <div className="flex items-center">
          <span className="text-gray-900 dark:text-white font-medium">
            {skill.name}
          </span>
          {isHovered && (
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 transition-opacity duration-300">
              {skill.experience}
            </span>
          )}
        </div>
        <span
          className={cn(
            "text-gray-900 dark:text-white font-bold transition-all duration-300",
            isHovered ? "scale-110 text-[#017BFB]" : ""
          )}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : "0%",
            backgroundColor: isHovered ? "#0168d6" : "#017BFB",
            transitionDelay: `${delay * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({
  category,
  index,
  animate,
}: {
  category: SkillCategory;
  index: number;
  animate: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-500",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="flex items-center justify-between mb-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div
            className="h-10 w-10 rounded-full bg-[#017BFB /

20] flex items-center justify-center mr-3"
          >
            {category.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {category.name}
          </h3>
        </div>
        <div
          className={cn(
            "h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-transform duration-300",
            isExpanded ? "rotate-180" : ""
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-500 overflow-hidden",
          isExpanded ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        )}
      >
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            animate={animate && isExpanded}
            delay={skillIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
            My Skills
            <div className="h-1 w-24 bg-[#017BFB] mx-auto mt-2" />
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my expertise in frontend development, UI/UX design,
            and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
              animate={animate}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white dark:bg-gray-800 rounded-lg px-6 py-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-[#017BFB]" />
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white">
                  Always learning:
                </span>{" "}
                Currently exploring{" "}
                <span className="text-[#017BFB]">Web Performance</span> and{" "}
                <span className="text-[#017BFB]">Headless CMS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
