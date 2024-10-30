'use client'
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
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Section */}
        <div data-aos="fade-right" className="space-y-6 lg:space-y-8">
          <p className="text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-purple-500 text-2xl font-semibold">
            About Us
          </p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Custom Website Design & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-sky-400">
              Development
            </span>
            Services.
          </h1>

          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Transform your online presence with our cutting-edge web solutions.
            Lets build something amazing together! Our development team helps
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
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
