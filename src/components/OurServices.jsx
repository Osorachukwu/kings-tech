import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import webDevIcon from "@/assets/globe-icon.png";
import graphicsDesignIcon from "@/assets/graphices-design-icon.png";
import digitalMarketingIcon from "@/assets/megaPhone-iconpng.png";
import mobileAppDevIcon from "@/assets/mobile-app-icon.png";

export default function OurServices() {
  let ourServicesItem = [
    {
      servceIcon: webDevIcon,
      serviceTitle: "Custom Website Development",
      serviceDesc:
        "Get a fully interactive, user-friendly website application that meets your needs with our custom web development services.",
    },
    {
      servceIcon: graphicsDesignIcon,
      serviceTitle: "Graphics Design",
      serviceDesc:
        "Transform your ideas into reality with our professional graphic design services that capture your brand's essence.",
    },
    {
      servceIcon: digitalMarketingIcon,
      serviceTitle: "Digital Marketing",
      serviceDesc:
        "Boost your online presence and connect with your target audience through our tailored digital marketing services.",
    },
    {
      servceIcon: mobileAppDevIcon,
      serviceTitle: "Mobile App Development",
      serviceDesc:
        "Get innovative mobile solutions that empower businesses to connect with customers via iOS and Android platforms.",
    },
  ];

  return (
    <div className="py-16 bg-gray-200">
      <h2 className="text-center text-2xl font-bold mb-12 text-gray-900 md:text-3xl lg:text-4xl">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {ourServicesItem.map((item, i) => (
          <div
            key={i}
            className="p-2 md:p-6 lg:px-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-6">
              <Image
                src={item.servceIcon}
                alt={item.serviceTitle}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {item.serviceTitle}
            </h3>
            <p className="text-gray-600 text-center mb-6">{item.serviceDesc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-20">
        <Link href="">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
              Learn More
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
