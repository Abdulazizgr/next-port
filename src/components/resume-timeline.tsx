"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: "education" | "work";
  link?: {
    url: string;
    label: string;
  };
};

const EducationItems: TimelineItemProps[] = [
  {
    date: "2020 - 2023",
    title: "Bachelor's of Computer Science and Engineering",
    subtitle: "ASTU",
    description:
      "Completed courses in computer science algorithms, design techniques, computational thinking, and software engineering.",
    icon: "education",
    link: {
      url: "https://example.com/astu", // Replace with actual URL
      label: "University Website",
    },
  },
  {
    date: "2023 - 2024",
    title: "Software Engineering Program Graduate",
    subtitle: "ALX Africa",
    description:
      "Completed an intensive, year-long full-stack software engineering program focused on hands-on learning, peer collaboration, and real-world project development.",
    icon: "education",
  },
];

const ExperienceItems: TimelineItemProps[] = [
  {
    date: "2023 - Present",
    title: "Junior Website Developer",
    subtitle: "Self-employed",
    description:
      "Developing state-of-the-art dynamic websites using React and Next.js.",
    icon: "work",
  },
  {
    date: "Jan 2024 - Mar 2024",
    title: "Full-Stack Developer Intern",
    subtitle: "IE Networks",
    description:
      "Worked on both frontend and backend technologies to develop and deploy web applications. Utilized modern frameworks and tools to create seamless user experiences and robust server-side solutions.",
    icon: "work",
    link: {
      url: "https://example.com/ie-networks", // Replace with actual URL
      label: "Company Profile",
    },
  },

  {
    date: "2024 - 2025",
    title: "Capacity Building Head",
    subtitle: "CSEC ASTU",
    description:
      "Leading and managing capacity-building initiatives, including tutorials, seminars, mentorship programs, and podcasts, to empower and support fellow students in the Computer Science and Engineering field.",
    icon: "work",
  },
];

function TimelineItem({
  item,
  index,
  isVisible,
}: {
  item: TimelineItemProps;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-12 transition-all duration-700 opacity-0 translate-y-8",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Icon Column */}
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "h-14 w-14 rounded-full flex items-center justify-center border-4 border-gray-200 dark:border-gray-700 shadow-lg bg-[#017BFB]/20"
            )}
          >
            {item.icon === "education" ? (
              <GraduationCap className="h-6 w-6 text-[#017BFB]" />
            ) : (
              <Briefcase className="h-6 w-6 text-[#017BFB]" />
            )}
          </div>
          <div className="w-0.5 h-full bg-gradient-to-b from-[#017BFB] to-transparent flex-grow mt-2"></div>
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div
            className={cn(
              "rounded-lg p-6 transition-all duration-300 hover:shadow-lg relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#017BFB]/50 hover:shadow-[#017BFB]/10"
            )}
          >
            {/* Date Badge */}
            <div
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-3 bg-[#017BFB]/20 text-[#017BFB]"
              )}
            >
              <Calendar className="mr-1 h-3.5 w-3.5" />
              {item.date}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center">
              {item.title}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center text-sm text-[#017BFB] hover:text-[#0168d6]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </h3>

            {item.subtitle && (
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                {item.subtitle}
              </h4>
            )}

            <p className="text-gray-600 dark:text-gray-400">
              {item.description}
            </p>

            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-sm font-medium text-[#017BFB] hover:text-[#0168d6]"
              >
                {item.link.label}
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineSection({
  title,
  items,
  icon,
}: {
  title: string;
  items: TimelineItemProps[];
  icon: "education" | "work";
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="mb-10">
      <div
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 transition-all duration-500 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0",
          "bg-[#017BFB]/20"
        )}
      >
        {icon === "education" ? (
          <GraduationCap className="h-5 w-5 text-[#017BFB]" />
        ) : (
          <Briefcase className="h-5 w-5 text-[#017BFB]" />
        )}
        <h2 className="text-xl font-bold text-[#017BFB]">{title}</h2>
      </div>

      <div className="relative">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

export default function ResumeTimeline() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <TimelineSection
            title="Education"
            items={EducationItems}
            icon="education"
          />
          <TimelineSection
            title="Experience"
            items={ExperienceItems}
            icon="work"
          />
        </div>
      </div>
    </div>
  );
}
