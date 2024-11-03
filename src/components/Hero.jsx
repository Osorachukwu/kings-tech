"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { EmblaCarousel } from "./emblaCarousel/EmblaCarousel";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-sky-500 to-purple-700 dark:from-purple-800 dark:to-pink-700">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Responsive Text Block */}
      <div className="absolute top-1/2 transform -translate-y-1/2 z-20 text-center text-white px-4 md:px-10 lg:px-20 xl:px-44 space-y-4 md:space-y-6 text-base md:text-2xl lg:text-3xl font-bold">
        <h1
          data-aos="zoom-in-up"
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          Innovative Solutions for a Digital World
        </h1>
        <p
          data-aos="zoom-in-up"
          className="mb-8 text-lg font-normal text-gray-200 dark:text-gray-400 lg:text-xl sm:px-16 lg:px-48"
        >
          Where passion meets precision. Expert web development for
          forward-thinking businesses. We craft innovative, user-centric web
          solutions tailored to meet your business needs. From sleek designs to
          robust functionality, our expertise brings your vision to life online.
        </p>
      </div>

      {/* Carousel Component */}
      <EmblaCarousel />
    </div>
  );
}
