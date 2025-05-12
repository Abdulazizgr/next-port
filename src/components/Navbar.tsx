"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update currentHash on client side only
  useEffect(() => {
    setCurrentHash(window.location.hash);
    // Update hash on hash change
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-5 px-4 md:px-32 bg-white dark:bg-gray-900">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-gray-900 dark:text-white"
      >
        Abdulaziz
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10">
        {navLinks.map((link) => {
          const isActive = pathname + link.href === pathname + currentHash;
          return (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 
                  ${
                    isActive
                      ? "text-[#017BFB]"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {/* Active Link Underline */}
                {isActive && (
                  <span
                    className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#017BFB]"
                    style={{ backgroundColor: "#017BFB" }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Theme Toggle (Desktop) */}
      <div className="hidden md:block">
        <ModeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-900 dark:text-white focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 md:hidden shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname + link.href === pathname + currentHash;
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`text-base font-medium transition-colors duration-200 
                      ${
                        isActive
                          ? "text-[#017BFB]"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    {/* Active Link Underline */}
                    {isActive && (
                      <span
                        className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#017BFB]"
                        style={{ backgroundColor: "#017BFB" }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
