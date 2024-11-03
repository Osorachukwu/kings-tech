"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import aboutImage from "@/assets/ariking-about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Section */}
        <div data-aos="fade-right" className="space-y-6 lg:space-y-8">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-400 text-2xl font-semibold hover:from-sky-500 hover:to-purple-600 transition-all duration-300">
            About Us
          </p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Custom Website Design &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 hover:from-purple-500 hover:to-sky-400 transition-all duration-300">
              Development
            </span>{" "}
            Services.
          </h1>

          <p className="text-lg font-normal text-gray-600 dark:text-gray-400 lg:text-xl">
            Transform your online presence with our cutting-edge web solutions.
            Let’s build something amazing together! Our development team helps
            you harness cutting-edge web technologies to create intuitive,
            responsive websites that captivate your audience and grow your
            business.
          </p>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full" data-aos="fade-left">
          <Image
            src={aboutImage}
            alt="About Us"
            className="rounded-lg object-cover w-full h-auto shadow-lg transition-shadow duration-300 hover:shadow-xl dark:shadow-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
