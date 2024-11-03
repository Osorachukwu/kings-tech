"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import companyLogo from "@/assets/kings-tech-logo.jpeg";
import { Menu, X } from "lucide-react";

export default function NavBarAlt() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-sky-400 to-purple-500 dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 shadow-md z-50 mb-16 transition-colors duration-300">
      <div className="flex justify-between gap-10 md:justify-center items-center max-w-7xl mx-auto p-3 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={companyLogo}
              alt="logo"
              height={70}
              className="rounded-full"
            />
          </Link>

          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">Kings Tech</p>
            <p className="text-xs text-gray-700 dark:text-gray-400">...your vision, our code</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-3 items-center">
          <Link href="/" className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105">
            Home
          </Link>
          <Link href="/services" className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105">
            Services
          </Link>
          <Link href="/contact" className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-900 dark:text-gray-200" onClick={handleToggle}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li>
              <Link
                href="/"
                className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
