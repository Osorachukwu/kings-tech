import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import webDevIcon from "@/assets/globe-icon.png";
import graphicsDesignIcon from "@/assets/graphices-design-icon.png";
import digitalMarketingIcon from "@/assets/megaPhone-iconpng.png";
import mobileAppDevIcon from "@/assets/mobile-app-icon.png";
import tutorialIcon from '@/assets/tutorial.png'
import uiuxIcon from '@/assets/uiux.png'

export default function OurServices() {
  const ourServicesItem = [
    {
      serviceIcon: webDevIcon,
      serviceTitle: "Custom Website Development",
      serviceDesc:
        "Get a fully interactive, user-friendly website application that meets your needs with our custom web development services.",
    },
    {
      serviceIcon: graphicsDesignIcon,
      serviceTitle: "Graphics Design",
      serviceDesc:
        "Transform your ideas into reality with our professional graphic design services that capture your brand's essence.",
    },
    {
      serviceIcon: digitalMarketingIcon,
      serviceTitle: "Digital Marketing",
      serviceDesc:
        "Boost your online presence and connect with your target audience through our tailored digital marketing services.",
    },
    {
      serviceIcon: mobileAppDevIcon,
      serviceTitle: "Mobile App Development",
      serviceDesc:
        "Get innovative mobile solutions that empower businesses to connect with customers via iOS and Android platforms.",
    },
    {
      serviceIcon: tutorialIcon,
      serviceTitle: "Website Development Tutorial",
      serviceDesc:
        "Whether you're diving into WordPress, exploring frontend or backend we've got you covered. Learn from experts, work at your own pace, and start doing what you love.",
    },
    {
      serviceIcon: uiuxIcon,
      serviceTitle: "UI/UX Design",
      serviceDesc:
        "Craft visually stunning and user-friendly interfaces with our web design service. We focus on creating designs that not only reflect your brand identity but also enhance the overall user experience.",
    },
  ];

  return (
    <div className="py-16 bg-gray-200 dark:bg-gray-800">
      <div data-aos="fade-up">
        <h2
          className="text-center text-2xl font-bold mb-12 text-gray-900 dark:text-gray-100 md:text-3xl lg:text-4xl">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {ourServicesItem.map((item, i) => (
            <div
              key={i}
              className="p-2 md:p-6 lg:px-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:scale-[1.05]"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={item.serviceIcon}
                  alt={item.serviceTitle}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {item.serviceTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                {item.serviceDesc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-20">
          <Link
            href="/services"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-180" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
