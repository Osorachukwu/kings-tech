import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/kings-tech-logo.jpeg";
import { Phone, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base-300 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-6 lg:py-12">
        <div className="sm:flex sm:items-center sm:justify-between space-y-6 sm:space-y-0">
          {/* Logo and Motto */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Kings Tech Logo"
              width={64}
              height={64}
              className="rounded-full rotate-animation"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">Kings Tech</p>
              <p className="text-sm text-gray-600">
                ...your vision, our code
              </p>
            </div>
          </Link>

          {/* Contact Details */}
          <div className="flex flex-col lg:flex-row m-5 gap-4 text-sm whitespace-nowrap">
            <div className="flex flex-col gap-3 lg:gap-6">
              <a href="tel:+2348125208257" className="flex items-center gap-2">
                <Phone size={20} />
                <span>+234 812 520 8257</span>
              </a>
              <a href="tel:+2347037803410" className="flex items-center gap-2">
                <Phone size={20} />
                <span>+234 703 780 3410</span>
              </a>
            </div>
            <div className="flex flex-col gap-3 lg:gap-6">
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

          {/* Navigation Links */}
          <ul className="text-sm flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-500 hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-500 hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-purple-500 hover:underline"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-base-100" />

        <div className="text-center text-sm text-gray-500">
          © 2023{" "}
          <a href="/" className="font-semibold hover:underline">
            Kings Tech™
          </a>{" "}
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
