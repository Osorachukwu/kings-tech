"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import companyLogo from "@/assets/kings-tech-logo.jpeg";
import { Instagram, Mail, Menu, Phone, X } from "lucide-react";
import ContactCarousel from "../emblaCarousel/ContactCarousel";

export default function NavBarAlt() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="left-0 w-full bg-white dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 shadow-md z-50 transition-colors duration-300">
      {/* Static contact for desktop */}
      <div className="hidden md:block">
        <div className="flex justify-around items-center lg:flex-row gap-4 text-xs font-bold whitespace-nowrap border-b-2 py-1 ">
          <a href="tel:+2348125208257" className="flex items-center gap-2">
            <Phone size={20} />
            <span>+234 812 520 8257</span>
          </a>
          <a href="tel:+2347037803410" className="flex items-center gap-2">
            <Phone size={20} />
            <span>+234 703 780 3410</span>
          </a>
          <a
            href="mailto:olisahdaniel75@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail size={20} />
            <span>olisahdaniel75@gmail.com</span>
          </a>
          <a
            href="https://www.instagram.com/kingtech820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Instagram size={20} />
            <span>Conect with us on Instagram</span>
          </a>
        </div>
      </div>
      {/* bg-gradient-to-r from-sky-400 to-purple-500 */}

      {/* Dynamic contact for mobiler */}
      <ContactCarousel />
      <div className="flex justify-between gap-10  items-center max-w-7xl mx-auto p-3 ">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={companyLogo}
              alt="logo"
              height={70}
              className="rounded-full rotate-animation"
            />
          </Link>

          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              Kings Tech
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-400">
              ...your vision, our code
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-3 items-center">
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
          <a
            href="/#portfolio"
            className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            Porfolio
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-900 dark:text-gray-200"
          onClick={handleToggle}
        >
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
                href="/services"
                className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
                onClick={handleToggle}
              >
                Services
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
            <li>
              <a
                href="/#portfolio"
                className="text-gray-900 dark:text-gray-200 hover:text-sky-400 dark:hover:text-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                Porfolio
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
