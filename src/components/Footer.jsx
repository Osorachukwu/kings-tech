import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/kings-tech-logo.jpeg'

export default function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <div className="h-full pl-5 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 whitespace-nowrap"
          >
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-8 lg:h-16 lg:w-16 rounded-full"
            />
            <div>
              <p className="text-lg font-medium">Kings Tech</p>
              <p className="text-xs">..your vision, our code</p>
            </div>
          </Link>
        </div>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Kings Tech™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
