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
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between gap-10 md:justify-center items-center max-w-7xl mx-auto p-3 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={companyLogo}
              alt="logo"
              height={40}
              className="rounded-full"
            />
          </Link>

          {/* <span className="text-xl font-bold">Road Project</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-3 items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/gallery"
            className="hover:text-blue-600"
            onClick={handleToggle}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="hover:text-blue-600"
            onClick={handleToggle}
          >
            Portfolio
          </Link>
          <Link
            href="/gallery"
            className="hover:text-blue-600"
            onClick={handleToggle}
          >
            Services
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleToggle}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li>
              <Link
                href=""
                className="hover:text-blue-600"
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-blue-600"
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-blue-600"
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
