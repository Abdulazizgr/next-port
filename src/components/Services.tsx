"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode size={32} className="text-[#017BFB]" />,
      title: "Web Development",
      description:
        "Build fast, scalable, and interactive web applications using modern frameworks like React, Next.js, and TypeScript.",
    },
    {
      icon: <FaPaintBrush size={32} className="text-[#017BFB]" />,
      title: "UI/UX Design",
      description:
        "Create intuitive and visually appealing user interfaces with a focus on user experience and accessibility.",
    },
    {
      icon: <FaMobileAlt size={32} className="text-[#017BFB]" />,
      title: "Responsive Design",
      description:
        "Develop pixel-perfect, mobile-friendly websites that adapt seamlessly across all devices and screen sizes.",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center gap-10 py-20 sm:px-10 xs:px-16 px-6 md:px-15  bg-white dark:bg-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        My Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {service.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="rounded-xl bg-[#017BFB] hover:bg-[#0168d6] text-white px-6 py-2"
                style={{ backgroundColor: "#017BFB" }}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
